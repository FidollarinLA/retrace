/** UI guidance only. `detail` always preserves the engine/runtime error verbatim. */
export function describeError(error) {
  const detail = String(error?.message ?? error);
  if (error instanceof SyntaxError)
    return { code: "invalid_json", summary: "JSON 格式有误，请检查括号、引号和逗号。", detail };

  let match = /^Data record (\d+): expected (\d+) columns, got (\d+)$/.exec(detail);
  if (match)
    return {
      code: "csv_column_count",
      summary: `第 ${match[1]} 条数据有 ${match[3]} 列，表头要求 ${match[2]} 列。`,
      detail,
    };
  match = /^Record (\d+): missing '(.+)'; choose missing=skip explicitly/.exec(detail);
  if (match)
    return {
      code: "missing_metric",
      summary: `第 ${match[1]} 条数据的「${match[2]}」为空；如需排除它，请明确选择跳过缺失值。`,
      detail,
    };
  match = /^Record (\d+): division by zero in '(.+)'$/.exec(detail);
  if (match)
    return {
      code: "division_by_zero",
      summary: `第 ${match[1]} 条数据计算「${match[2]}」时除数为 0。`,
      detail,
    };
  match = /^Column '(.+)' does not exist$/.exec(detail);
  if (match)
    return {
      code: "unknown_column",
      summary: `找不到字段「${match[1]}」，请检查 CSV 表头或派生列名称。`,
      detail,
    };
  match = /^Record (\d+), '(.+)': expected a number/.exec(detail);
  if (match)
    return {
      code: "invalid_number",
      summary: `第 ${match[1]} 条数据的「${match[2]}」不是有效数字。`,
      detail,
    };
  if (/^CSV (exceeds|must contain|column names)/.test(detail))
    return { code: "csv_shape", summary: "CSV 的大小或表头不符合要求，请检查文件。", detail };
  if (/^(Unclosed quoted CSV field|Quote inside|Unexpected character after a closing quote)/.test(detail))
    return { code: "csv_quotes", summary: "CSV 引号格式有误，请检查出错位置。", detail };
  if (/^Duplicate CSV column /.test(detail))
    return { code: "duplicate_column", summary: "CSV 表头有重复列名，请先重命名。", detail };
  if (/^Plan schema_version must be 1/.test(detail))
    return { code: "plan_version", summary: "分析配置的 schema_version 必须是 1。", detail };
  if (/^(Unknown operation|Unsupported derived operation|Unsupported filter operator)/.test(detail))
    return { code: "unsupported_operation", summary: "分析配置使用了不支持的运算，请检查操作名称。", detail };
  if (/^At most /.test(detail))
    return { code: "limit_exceeded", summary: "分析配置超过当前数量上限，请减少条件或分组。", detail };
  if (/overflow|NaN, Infinity/.test(detail))
    return { code: "numeric_overflow", summary: "计算超出可表示的数值范围，请检查或缩放输入。", detail };
  return { code: "unclassified", summary: detail, detail };
}

export function showError(element, error) {
  const { summary, detail } = describeError(error);
  const message = document.createElement("span");
  message.textContent = summary;
  element.replaceChildren(message);
  if (summary !== detail) {
    const details = document.createElement("details");
    details.className = "error-detail";
    const title = document.createElement("summary");
    title.textContent = "查看原始错误信息";
    const raw = document.createElement("code");
    raw.textContent = detail;
    details.append(title, raw);
    element.append(details);
  }
}
