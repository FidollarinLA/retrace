#!/usr/bin/env node
import { cpus, release, totalmem } from "node:os";
import { performance } from "node:perf_hooks";
import { compute } from "../dist/bundle.js";

const sizes = [1000, 10000, 20000];
const warmups = 3;
const samples = 15;

function rows(header, count, makeRow) {
  return header + "\n" + Array.from({ length: count }, (_, i) => makeRow(i)).join("\n");
}

const scenarios = [
  {
    name: "sales_sum_by_region",
    makeCSV: (n) =>
      rows("region,revenue,cost", n, (i) =>
        ["East", "South", "North", "West"][i % 4] +
        `,${1000 + ((i * 37) % 5000)},${400 + ((i * 17) % 1200)}`,
      ),
    plan: {
      schema_version: 1,
      metric: "revenue",
      operation: "sum",
      group_by: "region",
      missing: "error",
    },
  },
  {
    name: "lab_mean_with_missing",
    makeCSV: (n) =>
      rows("sample,group,measurement", n, (i) =>
        `S${i + 1},${["A", "B", "C"][i % 3]},${i % 37 === 0 ? "" : 10 + ((i * 13) % 100) / 10}`,
      ),
    plan: {
      schema_version: 1,
      metric: "measurement",
      operation: "mean",
      group_by: "group",
      missing: "skip",
    },
  },
  {
    name: "motor_max_derived_rise",
    makeCSV: (n) =>
      rows("time,device,winding,ambient", n, (i) =>
        `${i},M-${(i % 8) + 1},${45 + ((i * 7) % 40)},${20 + (i % 7)}`,
      ),
    plan: {
      schema_version: 1,
      metric: "rise",
      operation: "max",
      group_by: "device",
      missing: "error",
      derived: [
        { name: "rise", op: "subtract", left: "winding", right: "ambient" },
      ],
    },
  },
];

function percentile(sorted, fraction) {
  return sorted[Math.ceil(fraction * sorted.length) - 1];
}

const results = [];
for (const scenario of scenarios) {
  for (const count of sizes) {
    const csv = scenario.makeCSV(count);
    let checksum = 0;
    const run = () => {
      const report = compute(csv, scenario.plan);
      if (report.source_rows !== count)
        throw new Error(`${scenario.name}: unexpected source row count`);
      checksum += report.evidence.reduce((sum, e) => sum + (e.value ?? 0), 0);
      return report.evidence.length;
    };
    for (let i = 0; i < warmups; i++) run();
    const durations = [];
    let groups = 0;
    for (let i = 0; i < samples; i++) {
      const start = performance.now();
      groups = run();
      durations.push(performance.now() - start);
    }
    durations.sort((a, b) => a - b);
    results.push({
      scenario: scenario.name,
      records: count,
      csv_bytes: Buffer.byteLength(csv),
      groups,
      median_ms: Number(percentile(durations, 0.5).toFixed(2)),
      p95_ms: Number(percentile(durations, 0.95).toFixed(2)),
      checksum: Number(checksum.toFixed(5)),
    });
  }
}

console.log(
  JSON.stringify(
    {
      measured_at: new Date().toISOString(),
      runtime: `Node.js ${process.versions.node}`,
      platform: `${process.platform} ${release()} ${process.arch}`,
      cpu: cpus()[0]?.model || "unknown",
      logical_cpus: cpus().length,
      memory_gib: Number((totalmem() / 1024 ** 3).toFixed(1)),
      method:
        "MoonBit-generated JS through compute(csv, plan); CSV generation and process startup excluded; 3 warmups, 15 timed calls per case; sequential, one process; nearest-rank percentiles",
      results,
    },
    null,
    2,
  ),
);
