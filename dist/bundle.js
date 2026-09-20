import { analyze, verify } from "./engine.js";
export const ENGINE_VERSION = "0.1.1";
export function compute(csv, plan) {
  const result = JSON.parse(analyze(csv, JSON.stringify(plan)));
  if (!result.ok) throw new Error(result.error);
  return result.report;
}
export function checkDraft(csv, plan, draft) {
  const result = JSON.parse(
    verify(
      csv,
      JSON.stringify(plan),
      typeof draft === "string" ? draft : JSON.stringify(draft),
    ),
  );
  if (!result.ok) throw new Error(result.error);
  return result;
}
export function canonical(value) {
  if (value === null || typeof value !== "object") return JSON.stringify(value);
  if (Array.isArray(value)) return "[" + value.map(canonical).join(",") + "]";
  return (
    "{" +
    Object.keys(value)
      .sort()
      .map((k) => JSON.stringify(k) + ":" + canonical(value[k]))
      .join(",") +
    "}"
  );
}
export async function fingerprint(csv, plan) {
  const bytes = new TextEncoder().encode(canonical({ csv, plan }));
  const hash = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(hash), (b) =>
    b.toString(16).padStart(2, "0"),
  ).join("");
}
export async function createBundle(csv, plan) {
  plan = structuredClone(plan);
  return {
    format: "retrace-bundle",
    schema_version: 1,
    engine_version: ENGINE_VERSION,
    csv,
    plan,
    report: compute(csv, plan),
    fingerprint: await fingerprint(csv, plan),
  };
}
export async function replay(bundle) {
  if (
    !bundle ||
    bundle.format !== "retrace-bundle" ||
    bundle.schema_version !== 1 ||
    bundle.engine_version !== ENGINE_VERSION ||
    typeof bundle.csv !== "string" ||
    !bundle.plan ||
    !bundle.report ||
    typeof bundle.fingerprint !== "string"
  )
    throw new Error(
      "不支持的报告包或引擎版本。需要 ReTrace 0.1.1 / schema 1。",
    );
  const fresh = await createBundle(bundle.csv, bundle.plan);
  return {
    bundle: fresh,
    source_matches: fresh.fingerprint === bundle.fingerprint,
    report_matches: canonical(fresh.report) === canonical(bundle.report),
  };
}
export function modelPrompt(report) {
  const evidence = report.evidence
    .map(({ id, group, value }) => ({
      evidence_id: id,
      group,
      value,
      unit: report.unit,
    }))
    .filter((e) => e.value !== null);
  return `Produce a JSON object ONLY with a claims array. Each claim must have evidence_id, value (exact numeric value), unit (exact unit string), and an optional short label. Choose at most 8 meaningful entries from the evidence. Do not invent numbers, references, causal explanations, comparisons or predictions. Labels are unverified and will not be published as verified text. Values are aggregates, not raw observations.\nContext: ${JSON.stringify({ title: report.title, metric: report.metric, operation: report.operation })}\nEvidence: ${JSON.stringify(evidence)}\nOutput shape: {"claims":[{"evidence_id":"e1","value":123,"unit":"元","label":"short description"}]}`;
}
export const escapeHTML = (s) =>
  String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
export function reportHTML(bundle) {
  const r = bundle.report,
    e = escapeHTML;
  return `<!doctype html><html lang="zh-CN"><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>${e(r.title)} · ReTrace</title><style>body{font:16px/1.7 system-ui;max-width:960px;margin:48px auto;padding:0 24px;color:#17283a}h1{font-size:32px}table{border-collapse:collapse;width:100%}td,th{padding:12px;text-align:left;border-bottom:1px solid #ddd}code,pre{background:#f3f5f7;padding:12px;white-space:pre-wrap;overflow-wrap:anywhere}small{color:#58697a}footer{margin-top:40px}</style><small>RETRACE / RECOMPUTABLE REPORT</small><h1>${e(r.title)}</h1><p>${e(r.metric)} · ${e(r.operation)} · ${e(r.unit || "无单位")} · 匹配 ${r.matched_rows} / ${r.source_rows} 条记录</p><table><thead><tr><th>分组</th><th>结果</th><th>有效样本</th><th>证据记录 ID</th></tr></thead><tbody>${r.evidence.map((x) => `<tr><td>${e(x.group)}</td><td>${x.value === null ? "数据不足" : e(x.value)}</td><td>${x.count}</td><td>${e(x.row_ids.join(", "))}</td></tr>`).join("")}</tbody></table>${r.warnings.map((x) => `<p>${e(x)}</p>`).join("")}<h2>分析配置</h2><pre>${e(JSON.stringify(bundle.plan, null, 2))}</pre><h2>输入指纹 · SHA-256</h2><pre>${e(bundle.fingerprint)}</pre><p>指纹标识 CSV 与分析配置，不证明数据真实。此静态报告需配套 JSON 报告包才能复算。记录 ID 从第一条数据记录起编号。stddev 为样本标准差；count 统计非缺失数值。</p><footer>ReTrace ${e(r.engine_version)} · MoonBit 计算引擎 · 生成的说明不构成因果推断或工程认证。</footer></html>`;
}
