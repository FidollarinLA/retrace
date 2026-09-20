import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import {
  planningPrompt,
  validateProposal,
  requestPlan,
  requestJSON,
  traceRecords,
} from "../dist/planner.js";
import {
  createBundle,
  replay,
  compute,
  checkDraft,
  reportHTML,
  canonical,
} from "../dist/bundle.js";
import { examples } from "../dist/examples.js";
import { compareAnalyses } from "../dist/compare.js";
import { describeError } from "../dist/errors.js";
import { requestDraft } from "./ai.mjs";
let tests = 0;
async function test(name, fn) {
  await fn();
  tests++;
  console.log("PASS", name);
}
await test("three scenarios replay without changes", async () => {
  for (const e of Object.values(examples)) {
    const b = await createBundle(e.csv, e.plan),
      r = await replay(b);
    assert(r.source_matches && r.report_matches);
  }
});
await test("report tampering detected", async () => {
  const b = await createBundle(examples.sales.csv, examples.sales.plan);
  b.report.evidence[0].value++;
  const r = await replay(b);
  assert(r.source_matches && !r.report_matches);
});
await test("data tampering detected", async () => {
  const b = await createBundle(examples.sales.csv, examples.sales.plan);
  b.csv = b.csv.replace("42000", "42001");
  const r = await replay(b);
  assert(!r.source_matches && !r.report_matches);
});
await test("plan tampering detected", async () => {
  const b = await createBundle(examples.sales.csv, examples.sales.plan);
  b.plan.operation = "mean";
  const r = await replay(b);
  assert(!r.source_matches && !r.report_matches);
});
await test("unknown bundle versions rejected", async () => {
  const b = await createBundle(examples.sales.csv, examples.sales.plan);
  b.engine_version = "99";
  await assert.rejects(() => replay(b));
});
await test("JSON key order does not change input digest", async () => {
  const a = await createBundle(examples.sales.csv, examples.sales.plan);
  const b = await createBundle(
    examples.sales.csv,
    Object.fromEntries(Object.entries(examples.sales.plan).reverse()),
  );
  assert.equal(a.fingerprint, b.fingerprint);
});
await test("correct claims pass and invented numbers fail", () => {
  const r = compute(examples.sales.csv, examples.sales.plan);
  const claims = r.evidence.map((e) => ({
    evidence_id: e.id,
    value: e.value,
    unit: r.unit,
  }));
  assert(
    checkDraft(examples.sales.csv, examples.sales.plan, { claims }).all_passed,
  );
  claims[0].value++;
  assert(
    !checkDraft(examples.sales.csv, examples.sales.plan, { claims }).all_passed,
  );
});
await test("free labels are not treated as verified prose", () => {
  const draft = {
    claims: [
      {
        evidence_id: "e1",
        value: 166000,
        unit: "元",
        label: "This proves a causal effect",
      },
    ],
  };
  const check = checkDraft(examples.sales.csv, examples.sales.plan, draft);
  assert(check.all_passed);
  assert(check.scope.includes("not verified"));
});
await test("HTML export escapes user-controlled text", async () => {
  const p = {
    ...examples.sales.plan,
    title: "<script>alert(1)</script>",
    unit: "<img src=x onerror=alert(1)>",
  };
  const html = reportHTML(await createBundle(examples.sales.csv, p));
  assert(!html.includes("<script>"));
  assert(!html.includes("<img"));
  assert(html.includes("&lt;script&gt;"));
});
await test("adapter sends only aggregates and validates model output", async () => {
  const b = await createBundle(examples.sales.csv, examples.sales.plan);
  let sent;
  const r = await requestDraft(b, {
    endpoint: "http://localhost:11434/v1/chat/completions",
    model: "test-model",
    fetchImpl: async (url, opts) => {
      sent = JSON.parse(opts.body);
      return new Response(
        JSON.stringify({
          choices: [
            {
              message: {
                content: JSON.stringify({
                  claims: [{ evidence_id: "e1", value: 166000, unit: "元" }],
                }),
              },
            },
          ],
        }),
      );
    },
  });
  assert(r.verification.all_passed);
  assert(!canonical(sent).includes("24500"));
  assert(canonical(sent).includes("166000"));
});
await test("adapter rejects invented model numbers", async () => {
  const b = await createBundle(examples.sales.csv, examples.sales.plan);
  const r = await requestDraft(b, {
    endpoint: "http://localhost:11434/v1/chat/completions",
    model: "test",
    fetchImpl: async () =>
      new Response(
        JSON.stringify({
          choices: [
            {
              message: {
                content:
                  '{"claims":[{"evidence_id":"e1","value":999,"unit":"元"}]}',
              },
            },
          ],
        }),
      ),
  });
  assert(!r.verification.all_passed);
});
await test("adapter rejects corrupted bundle before any network request", async () => {
  const b = await createBundle(examples.sales.csv, examples.sales.plan);
  b.report.evidence[0].value = 0;
  let calls = 0;
  await assert.rejects(() =>
    requestDraft(b, {
      endpoint: "https://example.com/api",
      model: "test",
      fetchImpl: () => {
        calls++;
      },
    }),
  );
  assert.equal(calls, 0);
});
await test("CLI fails with nonzero status on invalid input", () => {
  const p = spawnSync(
    process.execPath,
    ["scripts/cli.mjs", "analyze", "/nonexistent", "/nonexistent"],
    { encoding: "utf8" },
  );
  assert.equal(p.status, 1);
});
await test("empty aggregate is explicit JSON null", () => {
  const r = compute("g,v\nA,\nB,2", {
    schema_version: 1,
    metric: "v",
    group_by: "g",
    missing: "skip",
    operation: "sum",
  });
  assert.equal(r.evidence[0].value, null);
});
await test("claim expected values are numbers, not option arrays", () => {
  const r = checkDraft(examples.sales.csv, examples.sales.plan, {
    claims: [{ evidence_id: "e1", value: 166000, unit: "元" }],
  });
  assert.equal(r.checks[0].expected, 166000);
});
await test("large claims cannot hide meaningful errors in relative tolerance", () => {
  const r = checkDraft(
    "v\n1000000000000",
    { schema_version: 1, metric: "v", operation: "sum" },
    { claims: [{ evidence_id: "e1", value: 1000000000100 }] },
  );
  assert(!r.all_passed);
});
await test("0.1.1 golden bundle upgrades while all saved evidence is checked", async () => {
  const old = JSON.parse(
    await readFile(
      new URL("../tests/fixtures/bundle-0.1.1.json", import.meta.url),
      "utf8",
    ),
  );
  const result = await replay(old);
  assert(result.upgraded && result.source_matches && result.report_matches);
  assert.equal(result.bundle.engine_version, "0.2.0");
  old.report.evidence[0].row_ids.reverse();
  assert(!(await replay(old)).report_matches);
});
await test("planning prompt exposes column summaries but no source values", () => {
  const prompt = planningPrompt(
    "region,revenue,customer\nEast,123456,PRIVATE_CUSTOMER",
    "按 region 计算 revenue 的合计",
  );
  assert(prompt.includes("revenue") && prompt.includes("numeric"));
  assert(!prompt.includes("PRIVATE_CUSTOMER") && !prompt.includes("123456"));
  assert.throws(() => planningPrompt(examples.sales.csv, ""));
  assert.throws(() => planningPrompt(examples.sales.csv, "x".repeat(4001)));
});
await test("planning adapter validates the proposal without changing caller data", async () => {
  const original = structuredClone(examples.sales);
  let sent;
  const result = await requestPlan(original.csv, "按区域求销售额合计，单位元", {
    endpoint: "https://models.example/v1/chat/completions",
    model: "mock",
    apiKey: "test-only",
    fetchImpl: async (_, options) => {
      sent = JSON.parse(options.body);
      assert.equal(options.redirect, "error");
      return Response.json({
        choices: [
          { message: { content: JSON.stringify(examples.sales.plan) } },
        ],
      });
    },
  });
  assert.equal(result.report.evidence[0].value, 166000);
  assert(!canonical(sent).includes("42000"));
  result.plan.metric = "modified";
  assert.deepEqual(original, examples.sales);
});
await test("proposal accepts fenced JSON and rejects hallucinated or executable fields", () => {
  const { csv, plan } = examples.sales;
  assert.equal(
    validateProposal(csv, "```json\n" + JSON.stringify(plan) + "\n```").report
      .evidence[0].value,
    166000,
  );
  for (const bad of [
    { ...plan, metric: "imaginary" },
    { ...plan, operation: "forecast" },
    { ...plan, code: "alert(1)" },
    { ...plan, filters: [{ column: plan.metric, op: "eval", value: "1" }] },
  ])
    assert.throws(() => validateProposal(csv, bad));
  assert.throws(
    () => validateProposal(csv, { error: "你指的是哪一列？" }),
    /需要澄清/,
  );
});
await test("proposal cannot silently bypass missing values or derived errors", () => {
  assert.throws(
    () => validateProposal("v,n\n,1", { schema_version: 1, metric: "v" }),
    /missing/,
  );
  assert.throws(
    () =>
      validateProposal("a,b\n1,0", {
        schema_version: 1,
        metric: "ratio",
        derived: [{ name: "ratio", op: "divide", left: "a", right: "b" }],
      }),
    /division by zero/,
  );
});
await test("model requests reject unsafe transports before network access", async () => {
  let calls = 0;
  for (const endpoint of [
    "http://models.example/v1",
    "https://user:password@models.example/v1",
    "file:///tmp/model",
  ])
    await assert.rejects(() =>
      requestJSON("test", {
        endpoint,
        model: "test",
        fetchImpl: () => {
          calls++;
        },
      }),
    );
  assert.equal(calls, 0);
});
await test("model adapter rejects invalid shapes, oversized streams and errors", async () => {
  const options = { endpoint: "https://models.example/v1", model: "test" };
  for (const response of [
    Response.json({ choices: [] }),
    new Response("x".repeat(1000001)),
    new Response("secret", { status: 403 }),
  ]) {
    await assert.rejects(
      () =>
        requestJSON("test", { ...options, fetchImpl: async () => response }),
      (error) => !error.message.includes("secret"),
    );
  }
});
await test("source records agree with all example evidence including missing rows", () => {
  for (const e of Object.values(examples)) {
    const report = compute(e.csv, e.plan);
    const page = traceRecords(e.csv, e.plan, { limit: 100 });
    assert.equal(page.total, report.source_rows);
    for (const evidence of report.evidence) {
      const scoped = traceRecords(e.csv, e.plan, {
        limit: 100,
        evidence_id: evidence.id,
      });
      assert.deepEqual(
        scoped.records.filter((x) => x.status === "included").map((x) => x.id),
        evidence.row_ids,
      );
      assert.deepEqual(
        scoped.records.filter((x) => x.status === "missing").map((x) => x.id),
        evidence.excluded_row_ids,
      );
    }
    assert.deepEqual(
      page.records.filter((x) => x.status === "filtered").map((x) => x.id),
      report.filtered_row_ids,
    );
  }
});
await test("trace pagination does not skip or repeat record IDs", () => {
  const csv =
    "value\n" + Array.from({ length: 61 }, (_, i) => String(i + 1)).join("\n");
  const plan = {
    schema_version: 1,
    metric: "value",
    filters: [{ column: "value", op: "gte", value: 3 }],
  };
  const ids = [0, 25, 50].flatMap((offset) =>
    traceRecords(csv, plan, {
      offset,
      limit: 25,
      status: "included",
    }).records.map((x) => x.id),
  );
  assert.deepEqual(
    ids,
    Array.from({ length: 59 }, (_, i) => i + 3),
  );
  assert.throws(() => traceRecords(csv, plan, { offset: 0.5 }));
});
await test("trace keeps multiline cells and original number spelling", () => {
  const page = traceRecords('v,note\n010,"first\nsecond"', {
    schema_version: 1,
    metric: "v",
  });
  assert.deepEqual(page.records[0].cells, ["010", "first\nsecond"]);
  assert.equal(page.records[0].id, 1);
});
await test("plan comparison locates changed values and source record IDs", async () => {
  const { csv, plan } = examples.sales;
  const before = await createBundle(csv, plan);
  const after = await createBundle(csv, {
    ...plan,
    filters: [{ column: "产品", op: "eq", value: "专业版" }],
  });
  const comparison = compareAnalyses(before, after);
  assert.deepEqual(
    comparison.setting_changes.map((x) => x.field),
    ["filters"],
  );
  assert(comparison.groups_aligned && comparison.values_comparable);
  assert(comparison.record_ids_comparable && !comparison.input_changed);
  const east = comparison.changed_groups.find((g) => g.group === "华东");
  assert.equal(east.before_value, 166000);
  assert.equal(east.after_value, 110000);
  assert.deepEqual(east.included.removed, [4]);
  assert.deepEqual(east.included.added, []);
});
await test("plan comparison distinguishes settings from numerical effects", async () => {
  const { csv, plan } = examples.sales;
  const before = await createBundle(csv, plan);
  const titleOnly = await createBundle(csv, { ...plan, title: "新标题" });
  const titleComparison = compareAnalyses(before, titleOnly);
  assert.deepEqual(
    titleComparison.setting_changes.map((x) => x.field),
    ["title"],
  );
  assert.equal(titleComparison.changed_groups.length, 0);
  const mean = await createBundle(csv, { ...plan, operation: "mean" });
  const methodComparison = compareAnalyses(before, mean);
  assert(methodComparison.groups_aligned && !methodComparison.values_comparable);
  const regrouped = await createBundle(csv, { ...plan, group_by: "月份" });
  const groupingComparison = compareAnalyses(before, regrouped);
  assert(!groupingComparison.groups_aligned);
  assert.deepEqual(groupingComparison.changed_groups, []);
  const motor = examples.motor;
  const motorBefore = await createBundle(motor.csv, motor.plan);
  const motorAfter = await createBundle(motor.csv, {
    ...motor.plan,
    derived: [{ ...motor.plan.derived[0], op: "add" }],
  });
  const formulaComparison = compareAnalyses(motorBefore, motorAfter);
  assert(formulaComparison.groups_aligned && !formulaComparison.values_comparable);
});
await test("changed input prevents cross-version record ID attribution", async () => {
  const { csv, plan } = examples.sales;
  const before = await createBundle(csv, plan);
  const after = await createBundle(csv.replace("专业版,42000", "团队版,42000"), plan);
  const comparison = compareAnalyses(before, after);
  assert(comparison.input_changed);
  assert(!comparison.record_ids_comparable);
  assert.equal(comparison.changed_groups.length, 0);
});
await test("comparison CLI replays both bundles and rejects tampering", async () => {
  const folder = await mkdtemp(join(tmpdir(), "retrace-compare-"));
  try {
    const { csv, plan } = examples.lab;
    const before = await createBundle(csv, plan);
    const after = await createBundle(csv, { ...plan, title: "复核标题" });
    const oldPath = join(folder, "old.json");
    const newPath = join(folder, "new.json");
    await writeFile(oldPath, JSON.stringify(before));
    await writeFile(newPath, JSON.stringify(after));
    const valid = spawnSync(
      process.execPath,
      ["scripts/cli.mjs", "compare", oldPath, newPath],
      { encoding: "utf8" },
    );
    assert.equal(valid.status, 0, valid.stderr);
    assert.deepEqual(
      JSON.parse(valid.stdout).setting_changes.map((x) => x.field),
      ["title"],
    );
    after.report.evidence[0].value = 999;
    await writeFile(newPath, JSON.stringify(after));
    const invalid = spawnSync(
      process.execPath,
      ["scripts/cli.mjs", "compare", oldPath, newPath],
      { encoding: "utf8" },
    );
    assert.equal(invalid.status, 1);
  } finally {
    await rm(folder, { recursive: true, force: true });
  }
});
await test("Chinese error guidance retains exact underlying detail", () => {
  const cases = [
    [
      () => compute("g,v\nA", { schema_version: 1, metric: "v" }),
      "csv_column_count",
      "第 1 条数据有 1 列",
    ],
    [
      () => compute("g,v\nA,", { schema_version: 1, metric: "v" }),
      "missing_metric",
      "第 1 条数据的「v」为空",
    ],
    [
      () =>
        compute("a,b\n1,0", {
          schema_version: 1,
          metric: "ratio",
          derived: [
            { name: "ratio", op: "divide", left: "a", right: "b" },
          ],
        }),
      "division_by_zero",
      "除数为 0",
    ],
  ];
  for (const [run, code, summary] of cases) {
    let caught;
    try {
      run();
    } catch (error) {
      caught = error;
    }
    assert(caught);
    const guidance = describeError(caught);
    assert.equal(guidance.code, code);
    assert(guidance.summary.includes(summary));
    assert.equal(guidance.detail, caught.message);
  }
  const unknown = describeError(new Error("Unexpected technical detail"));
  assert.equal(unknown.code, "unclassified");
  assert.equal(unknown.summary, unknown.detail);
  assert.equal(describeError(new SyntaxError("bad JSON")).code, "invalid_json");
});
console.log(`${tests} integration checks passed.`);
