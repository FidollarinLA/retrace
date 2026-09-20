import { inspect_csv } from "./engine.js";
import { examples } from "./examples.js";
import {
  compute,
  createBundle,
  replay,
  checkDraft,
  modelPrompt,
  reportHTML,
  escapeHTML as esc,
} from "./bundle.js";
const $ = (id) => document.getElementById(id);
const names = {
  sum: "合计",
  mean: "平均值",
  median: "中位数",
  min: "最小值",
  max: "最大值",
  stddev: "样本标准差",
  count: "有效数值计数",
};
const state = {
  csv: "",
  plan: null,
  report: null,
  bundle: null,
  selected: 0,
  revision: 0,
};
const format = (n) =>
  n === null
    ? "数据不足"
    : new Intl.NumberFormat("zh-CN", { maximumFractionDigits: 4 }).format(n);
function notice(text, error = false) {
  $("notice").hidden = false;
  $("notice").className = error ? "error" : "";
  $("notice").textContent = text;
}
function download(content, name, type) {
  const a = document.createElement("a");
  const url = URL.createObjectURL(new Blob([content], { type }));
  a.href = url;
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}
function inspect(csv) {
  const result = JSON.parse(inspect_csv(csv));
  if (!result.ok) throw new Error(result.error);
  return result.table;
}
function options(el, items, selected) {
  el.replaceChildren(
    ...items.map(([value, label]) => {
      const o = new Option(label, value);
      o.selected = value === selected;
      return o;
    }),
  );
}
function syncControls() {
  const table = inspect(state.csv),
    cols = table.columns
      .map((x) => x.name)
      .concat((state.plan.derived || []).map((x) => x.name));
  options(
    $("metric"),
    cols.map((x) => [x, x]),
    state.plan.metric,
  );
  options(
    $("group"),
    [["", "不分组"], ...cols.map((x) => [x, x])],
    state.plan.group_by || "",
  );
  options(
    $("filter-column"),
    [["", "全部记录"], ...cols.map((x) => [x, x])],
    state.plan.filters?.[0]?.column || "",
  );
  $("operation").value = state.plan.operation || "mean";
  $("unit").value = state.plan.unit || "";
  $("missing").value = state.plan.missing || "error";
  $("filter-op").value = state.plan.filters?.[0]?.op || "eq";
  $("filter-value").value = state.plan.filters?.[0]?.value ?? "";
  const d = state.plan.derived || [];
  $("derived-note").textContent = d.length
    ? `${d.length} 个派生指标${(state.plan.filters || []).length > 1 ? " · 多条件筛选" : ""}`
    : (state.plan.filters || []).length > 1
      ? "多条件筛选"
      : "";
}
function controlsPlan() {
  const filters = state.plan.filters?.slice(1) || [];
  if ($("filter-column").value)
    filters.unshift({
      column: $("filter-column").value,
      op: $("filter-op").value,
      value: $("filter-value").value,
    });
  return {
    ...state.plan,
    metric: $("metric").value,
    operation: $("operation").value,
    group_by: $("group").value,
    unit: $("unit").value,
    missing: $("missing").value,
    filters,
  };
}
async function run(plan = controlsPlan()) {
  const revision = ++state.revision;
  state.bundle = null;
  $("export-bundle").disabled = true;
  $("export-html").disabled = true;
  $("open-ai").disabled = true;
  try {
    const report = compute(state.csv, plan);
    state.plan = plan;
    state.report = report;
    state.selected = 0;
    $("results").hidden = false;
    $("notice").hidden = true;
    render();
    const bundle = await createBundle(state.csv, plan);
    if (revision !== state.revision) return;
    state.bundle = bundle;
    $("fingerprint").textContent = bundle.fingerprint;
    $("export-bundle").disabled = false;
    $("export-html").disabled = false;
    $("open-ai").disabled = !report.evidence.some((x) => x.value !== null);
  } catch (error) {
    if (revision !== state.revision) return;
    state.report = null;
    $("results").hidden = true;
    notice(error.message, true);
  }
}
function selectEvidence(index) {
  state.selected = index;
  renderChart();
  renderEvidence();
}
function renderChart() {
  const r = state.report,
    values = r.evidence.map((x) => x.value ?? 0),
    lo = Math.min(0, ...values),
    hi = Math.max(0, ...values),
    span = hi - lo || 1;
  $("chart").innerHTML = r.evidence.length
    ? ""
    : '<p class="empty">没有符合条件的数据。</p>';
  r.evidence.forEach((e, i) => {
    const row = document.createElement("button");
    row.className = `chart-row ${i === state.selected ? "selected" : ""} ${e.value < 0 ? "negative" : ""}`;
    row.setAttribute(
      "aria-label",
      `${e.group}，${format(e.value)} ${r.unit}，查看证据`,
    );
    row.setAttribute("aria-pressed", String(i === state.selected));
    const left = ((Math.min(e.value ?? 0, 0) - lo) / span) * 100,
      width = (Math.abs(e.value ?? 0) / span) * 100;
    row.innerHTML = `<span class="chart-group" title="${esc(e.group)}">${esc(e.group || "（空分组）")}</span><span class="bar-track"><span class="bar" style="left:${left}%;width:${width}%"></span></span><span class="chart-value">${esc(format(e.value))}</span>`;
    row.onclick = () => selectEvidence(i);
    $("chart").append(row);
  });
}
function renderEvidence() {
  const r = state.report,
    e = r.evidence[state.selected];
  $("evidence-id").textContent = e ? e.id : "";
  if (!e) {
    $("evidence").innerHTML = '<p class="empty">当前筛选没有可计算的记录。</p>';
    return;
  }
  let formula = `${r.operation}([${e.values.slice(0, 20).join(", ")}${e.values.length > 20 ? ", …" : ""}])`;
  if (r.operation === "stddev") formula += " · 分母 n−1";
  $("evidence").innerHTML =
    `<div class="evidence-number">${esc(format(e.value))}<small>${esc(r.unit)}</small></div><div class="evidence-group">${esc(e.group || "（空分组）")} · ${esc(r.metric)}${esc(names[r.operation])}</div><div class="formula">${esc(formula)}<br>= ${esc(e.value === null ? "undefined（数据不足）" : String(e.value))}</div><span class="evidence-caption">参与计算的原始记录 · ${e.count} 条</span><div class="record-ids">${e.row_ids
      .slice(0, 200)
      .map((id) => `<span>#${id}</span>`)
      .join(
        "",
      )}</div><span class="evidence-caption">${e.row_ids.length > 200 ? "界面仅显示前 200 个 ID；完整列表见报告包。" : "ID 从第一条数据记录起编号，不包括表头。"}${e.excluded_row_ids.length ? ` 排除缺失记录：${esc(e.excluded_row_ids.slice(0, 30).join(", "))}。` : ""}</span>`;
}
function render() {
  const r = state.report;
  $("report-title").textContent = r.title;
  $("stat-rows").textContent = r.evidence.reduce((n, e) => n + e.count, 0);
  $("stat-total").textContent = `/ ${r.source_rows} 条源记录`;
  $("stat-groups").textContent = r.evidence.filter(
    (e) => e.value !== null,
  ).length;
  $("stat-excluded").textContent = r.evidence.reduce(
    (n, e) => n + e.excluded_row_ids.length,
    0,
  );
  $("chart-title").textContent = `${r.metric} · ${names[r.operation]}`;
  $("chart-caption").textContent =
    `${r.group_by ? "按 " + r.group_by + " 分组" : "全部记录"} · 点击图形查看证据`;
  $("chart-unit").textContent = `单位：${r.unit || "未指定"}`;
  $("chart-method").textContent =
    `${r.filtered_row_ids.length} 条记录被筛选排除`;
  renderChart();
  renderEvidence();
  $("conclusions").replaceChildren();
  r.evidence.forEach((e, i) => {
    const div = document.createElement("div");
    div.className = "finding";
    const sentence =
      e.value === null
        ? `${e.group}：数据不足，无法计算${names[r.operation]}。`
        : `${e.group || "（空分组）"}的${r.metric}${names[r.operation]}为 ${format(e.value)} ${r.unit}，基于 ${e.count} 条有效记录。`;
    div.innerHTML = `<span>${String(i + 1).padStart(2, "0")}</span><span>${esc(sentence)}</span><button>${esc(e.id)} ↗</button>`;
    div.querySelector("button").onclick = () => {
      selectEvidence(i);
      $("evidence").scrollIntoView({ behavior: "smooth", block: "center" });
    };
    $("conclusions").append(div);
  });
  $("warnings").innerHTML = r.warnings
    .map((w) => `<div class="warning">${esc(w)}</div>`)
    .join("");
}
async function loadExample(key) {
  const example = examples[key];
  state.csv = example.csv;
  state.plan = structuredClone(example.plan);
  $("description").textContent = example.description;
  document
    .querySelectorAll("[data-example]")
    .forEach((b) => b.classList.toggle("active", b.dataset.example === key));
  syncControls();
  await run(state.plan);
}
for (const b of document.querySelectorAll("[data-example]"))
  b.onclick = () => loadExample(b.dataset.example);
$("run").onclick = () => run();
for (const id of [
  "metric",
  "operation",
  "group",
  "unit",
  "missing",
  "filter-column",
  "filter-op",
  "filter-value",
])
  $(id).addEventListener("change", () => run());
$("open-data").onclick = () => {
  $("csv-editor").value = state.csv;
  $("data-error").textContent = "";
  $("data-dialog").showModal();
};
$("csv-file").onchange = async (event) => {
  const file = event.target.files[0];
  if (!file) return;
  try {
    if (file.size > 6000000) throw new Error("文件过大。请限制在 6 MB 以内。");
    $("csv-editor").value = await file.text();
    $("data-error").textContent = "";
  } catch (e) {
    $("data-error").textContent = e.message;
  }
  event.target.value = "";
};
$("apply-data").onclick = async () => {
  try {
    const csv = $("csv-editor").value,
      table = inspect(csv);
    let plan = state.plan;
    try {
      compute(csv, plan);
    } catch {
      const numeric = table.columns.find((c) => c.numeric > 0);
      plan = {
        schema_version: 1,
        title: "自定义数据报告",
        metric: (numeric || table.columns[0]).name,
        operation: "mean",
        group_by: "",
        unit: "",
        missing: "error",
        filters: [],
        derived: [],
      };
    }
    state.csv = csv;
    state.plan = plan;
    syncControls();
    $("data-dialog").close();
    $("description").textContent = "使用当前浏览器中的数据进行分析。";
    document
      .querySelectorAll(".example")
      .forEach((b) => b.classList.remove("active"));
    await run(state.plan);
  } catch (e) {
    $("data-error").textContent = e.message;
  }
};
$("open-plan").onclick = () => {
  $("plan-editor").value = JSON.stringify(state.plan, null, 2);
  $("plan-error").textContent = "";
  $("plan-dialog").showModal();
};
$("apply-plan").onclick = async () => {
  try {
    const plan = JSON.parse($("plan-editor").value);
    compute(state.csv, plan);
    state.plan = plan;
    syncControls();
    $("plan-dialog").close();
    await run(plan);
  } catch (e) {
    $("plan-error").textContent = e.message;
  }
};
$("export-bundle").onclick = () => {
  if (state.bundle)
    download(
      JSON.stringify(state.bundle, null, 2),
      "retrace-report.json",
      "application/json",
    );
};
$("export-html").onclick = () => {
  if (state.bundle)
    download(reportHTML(state.bundle), "retrace-report.html", "text/html");
};
$("import-bundle").onclick = () => $("bundle-file").click();
$("bundle-file").onchange = async (event) => {
  const file = event.target.files[0];
  if (!file) return;
  const revision = state.revision;
  try {
    if (file.size > 12000000) throw new Error("报告包超过 12 MB。");
    const result = await replay(JSON.parse(await file.text()));
    if (revision !== state.revision)
      throw new Error("分析已改变，请重新导入报告包。");
    state.csv = result.bundle.csv;
    state.plan = result.bundle.plan;
    syncControls();
    $("description").textContent = "从报告包恢复的数据与分析配置。";
    document
      .querySelectorAll(".example")
      .forEach((b) => b.classList.remove("active"));
    await run(state.plan);
    notice(
      result.source_matches && result.report_matches
        ? "复算一致：输入指纹与保存结果均匹配。"
        : "检测到变更：" +
            (!result.source_matches ? "输入指纹不匹配。 " : "") +
            (!result.report_matches ? "保存的结果与重新计算结果不同。 " : "") +
            "当前显示重新计算的结果。",
      !(result.source_matches && result.report_matches),
    );
  } catch (e) {
    notice(e.message, true);
  }
  event.target.value = "";
};
$("open-ai").onclick = () => {
  $("draft-result").replaceChildren();
  $("draft-editor").value = "";
  $("ai-dialog").showModal();
};
$("copy-prompt").onclick = async () => {
  try {
    await navigator.clipboard.writeText(modelPrompt(state.report));
    $("draft-result").textContent =
      "已复制。提示词包含指标、分组名称及汇总数值；将它粘贴到你选择的 AI。";
  } catch {
    $("draft-result").textContent =
      "剪贴板不可用，提示词已放入文本框，请手动复制。";
    $("draft-editor").value = modelPrompt(state.report);
  }
};
function sampleDraft(bad) {
  const claims = state.report.evidence
    .filter((e) => e.value !== null)
    .slice(0, 8)
    .map((e) => ({
      evidence_id: e.id,
      value: e.value,
      unit: state.report.unit,
    }));
  if (bad && claims.length)
    claims[0].value += Math.max(1, Math.abs(claims[0].value) * 0.25);
  $("draft-editor").value = JSON.stringify({ claims }, null, 2);
  $("draft-result").textContent = bad
    ? "这是人工注入错误的测试样例，不是实际模型输出。"
    : "这是由计算结果生成的正确测试样例，不是实际模型输出。";
}
$("valid-draft").onclick = () => sampleDraft(false);
$("invalid-draft").onclick = () => sampleDraft(true);
$("verify-draft").onclick = () => {
  try {
    const r = checkDraft(state.csv, state.plan, $("draft-editor").value);
    $("draft-result").innerHTML =
      `<strong>${r.passed} / ${r.total} 条数字结论通过核验</strong>` +
      r.checks
        .map(
          (c) =>
            `<div class="claim-check ${c.accepted ? "" : "fail"}"><b>${c.accepted ? "通过" : "未通过"} · ${esc(c.evidence_id)}</b><p>提交值 ${esc(c.proposed)} · 复算值 ${esc(c.expected === null ? "无有效结果" : c.expected)}<br>${esc(c.reason)}</p></div>`,
        )
        .join("") +
      "<p>以上只核验结构化数值、单位和证据引用，不核验自由文本含义。</p>";
  } catch (e) {
    $("draft-result").textContent = e.message;
  }
};
for (const dialog of document.querySelectorAll("dialog"))
  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) {
      const r = dialog.getBoundingClientRect();
      if (
        e.clientX < r.left ||
        e.clientX > r.right ||
        e.clientY < r.top ||
        e.clientY > r.bottom
      )
        dialog.close();
    }
  });
loadExample("sales");
