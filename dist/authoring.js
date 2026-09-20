import {
  planningPrompt,
  validateProposal,
  requestPlan,
  traceRecords,
} from "./planner.js";
import { escapeHTML as esc } from "./bundle.js";
const $ = (id) => document.getElementById(id);
const statusNames = {
  included: "参与计算",
  missing: "缺失排除",
  filtered: "筛选排除",
};
const filterNames = {
  eq: "等于",
  ne: "不等于",
  gt: "大于",
  gte: "大于或等于",
  lt: "小于",
  lte: "小于或等于",
};
const derivedNames = { add: "+", subtract: "−", multiply: "×", divide: "÷" };
const operations = {
  sum: "合计",
  mean: "平均值",
  median: "中位数",
  min: "最小值",
  max: "最大值",
  stddev: "样本标准差",
  count: "有效数值计数",
};

export function installAuthoring({ state, run, syncControls, download }) {
  let proposal = null,
    proposedCSV = "",
    proposalRevision = -1,
    generation = 0,
    offset = 0;
  function invalidate() {
    generation++;
    proposal = null;
    $("confirm-proposal").disabled = true;
    $("proposal-preview").replaceChildren();
    $("planner-result").textContent = "";
  }
  function preview() {
    invalidate();
    try {
      proposal = validateProposal(state.csv, $("proposal-editor").value);
      proposedCSV = state.csv;
      proposalRevision = state.revision;
      const r = proposal.report,
        p = proposal.plan;
      $("proposal-preview").innerHTML = `<h3>确认这些选择符合你的问题</h3>
        <dl><dt>指标 / 方式</dt><dd>${esc(r.metric)} · ${esc(operations[r.operation])}</dd>
        <dt>分组 / 单位</dt><dd>${esc(r.group_by || "不分组")} · ${esc(r.unit || "未指定单位")}</dd>
        <dt>缺失值</dt><dd>${r.missing === "skip" ? "明确排除缺失值" : "遇到缺失则停止"}</dd>
        <dt>筛选</dt><dd>${esc((p.filters || []).map((f) => `${f.column} ${filterNames[f.op]} ${JSON.stringify(f.value)}`).join("；且 ") || "无筛选")}</dd>
        <dt>派生指标</dt><dd>${esc((p.derived || []).map((d) => `${d.name} = ${d.left} ${derivedNames[d.op]} ${d.right}`).join("；") || "无派生指标")}</dd></dl>
        <p>试算匹配 ${r.matched_rows} / ${r.source_rows} 条记录，${r.evidence.length} 个分组。当前报告尚未改变。</p>
        <p>校验说明配置可以计算；仍需你确认分析意图、筛选口径与单位。</p>`;
      $("confirm-proposal").disabled = false;
      $("planner-result").textContent = "配置校验通过，等待确认。";
    } catch (error) {
      $("planner-result").textContent = error.message;
    }
  }
  $("open-planner").onclick = () => {
    invalidate();
    $("planner-dialog").showModal();
  };
  for (const id of [
    "analysis-question",
    "proposal-editor",
    "model-endpoint",
    "model-name",
    "model-key",
  ])
    $(id).addEventListener("input", invalidate);
  $("planner-dialog").addEventListener("close", () => {
    $("model-key").value = "";
    invalidate();
  });
  $("copy-plan-prompt").onclick = async () => {
    try {
      const prompt = planningPrompt(state.csv, $("analysis-question").value);
      $("planning-prompt").value = prompt;
      $("planning-prompt-container").hidden = false;
      try {
        await navigator.clipboard.writeText(prompt);
        $("planner-result").textContent =
          "提示词已复制。粘贴到你的 AI 后，将返回的 JSON 放入下方配置框。";
      } catch {
        $("planner-result").textContent = "请从展开的文本框手动复制提示词。";
      }
    } catch (error) {
      $("planner-result").textContent = error.message;
    }
  };
  $("generate-plan").onclick = async () => {
    invalidate();
    const token = generation,
      revision = state.revision;
    $("generate-plan").disabled = true;
    $("planner-result").textContent = "正在请求所选模型…";
    try {
      const result = await requestPlan(
        state.csv,
        $("analysis-question").value,
        {
          endpoint: $("model-endpoint").value.trim(),
          model: $("model-name").value.trim(),
          apiKey: $("model-key").value,
        },
      );
      if (token !== generation || revision !== state.revision) return;
      $("proposal-editor").value = JSON.stringify(result.plan, null, 2);
      preview();
    } catch (error) {
      if (token === generation)
        $("planner-result").textContent =
          `${error.message} 浏览器跨域限制可改用复制提示词，或本地命令行接口。`;
    } finally {
      $("generate-plan").disabled = false;
    }
  };
  $("preview-proposal").onclick = preview;
  $("confirm-proposal").onclick = async () => {
    if (
      !proposal ||
      proposedCSV !== state.csv ||
      proposalRevision !== state.revision
    ) {
      invalidate();
      $("planner-result").textContent = "输入或报告已改变，请重新预览配置。";
      return;
    }
    const plan = structuredClone(proposal.plan);
    state.plan = plan;
    syncControls();
    $("planner-dialog").close();
    await run(plan);
  };

  function renderRecords() {
    try {
      const page = traceRecords(state.csv, state.plan, {
        offset,
        limit: 25,
        evidence_id: $("record-scope").value,
        status: $("record-status").value,
      });
      $("record-table").innerHTML =
        `<thead><tr><th scope="col">记录</th><th scope="col">状态</th>${page.columns.map((c, i) => `<th scope="col">${esc(c)}${i >= page.original_columns ? "<small>派生</small>" : ""}</th>`).join("")}</tr></thead>
        <tbody>${page.records.map((row) => `<tr class="record-${row.status}"><th scope="row">#${row.id}</th><td><span class="record-status">${statusNames[row.status]}</span></td>${row.cells.map((cell) => `<td>${cell === "" ? '<span class="empty-cell">空值</span>' : esc(cell)}</td>`).join("")}</tr>`).join("")}</tbody>`;
      $("record-page").textContent = page.total
        ? `${offset + 1}–${offset + page.records.length} / ${page.total} 条记录`
        : "没有符合当前条件的记录";
      $("records-prev").disabled = offset === 0;
      $("records-next").disabled = offset + page.records.length >= page.total;
      $("record-error").textContent = "";
    } catch (error) {
      $("record-table").replaceChildren();
      $("record-error").textContent = error.message;
    }
  }
  function openRecords(evidenceId = "") {
    $("record-scope").replaceChildren(
      new Option("全部源记录", ""),
      ...state.report.evidence.map(
        (e) => new Option(`${e.id} · ${e.group || "（空分组）"}`, e.id),
      ),
    );
    $("record-scope").value = evidenceId;
    $("record-status").value = "all";
    offset = 0;
    renderRecords();
    $("records-dialog").showModal();
  }
  $("open-records").onclick = () => openRecords();
  $("evidence-records").onclick = () =>
    openRecords(state.report.evidence[state.selected]?.id || "");
  for (const id of ["record-scope", "record-status"])
    $(id).onchange = () => {
      offset = 0;
      renderRecords();
    };
  $("records-prev").onclick = () => {
    offset = Math.max(0, offset - 25);
    renderRecords();
  };
  $("records-next").onclick = () => {
    offset += 25;
    renderRecords();
  };
  $("download-source").onclick = () =>
    download(state.csv, "retrace-source.csv", "text/csv;charset=utf-8");
}
