///|
/// Neumaier compensated summation reduces cancellation error.
fn stable_sum(values : Array[Double]) -> Double {
  let mut sum = 0.0
  let mut correction = 0.0
  for value in values {
    let next = sum + value
    if sum.abs() >= value.abs() {
      correction = correction + (sum - next + value)
    } else {
      correction = correction + (value - next + sum)
    }
    sum = next
  }
  sum + correction
}

///|
fn aggregate(
  values : Array[Double],
  operation : String,
) -> Double? raise InputError {
  if values.is_empty() {
    return None
  }
  let result = match operation {
    "count" => values.length().to_double()
    "sum" => stable_sum(values)
    "mean" => stable_sum(values.map(fn(x) { x / values.length().to_double() }))
    "min" => values.fold(init=values[0], fn(a, b) { if a < b { a } else { b } })
    "max" => values.fold(init=values[0], fn(a, b) { if a > b { a } else { b } })
    "median" => {
      let sorted = values.copy()
      sorted.sort()
      let middle = sorted.length() / 2
      if sorted.length() % 2 == 1 {
        sorted[middle]
      } else {
        sorted[middle - 1] / 2.0 + sorted[middle] / 2.0
      }
    }
    "stddev" => {
      if values.length() < 2 {
        return None
      }
      let mean = stable_sum(
        values.map(fn(x) { x / values.length().to_double() }),
      )
      let squares = values.map(fn(x) { (x - mean) * (x - mean) })
      (stable_sum(squares) / (values.length() - 1).to_double()).sqrt()
    }
    _ => raise InputError("Unknown operation")
  }
  if !finite(result) {
    raise InputError("Aggregate overflow; rescale the input values")
  }
  Some(result)
}

///|
/// Execute a version-1 plan. No model or host callback is used in computation.
pub fn analyze_table(csv : String, plan_json : Json) -> Report raise InputError {
  let original = parse_csv(csv)
  let plan = parse_plan(plan_json, original.headers)
  let table = derive_table(original, plan)
  let metric_index = column_index(table.headers, plan.metric)
  let group_index = if plan.group_by == "" {
    -1
  } else {
    column_index(table.headers, plan.group_by)
  }
  let group_keys : Array[String] = []
  let group_indexes : Map[String, Int] = Map([])
  let groups : Array[Array[Double]] = []
  let row_ids : Array[Array[Int]] = []
  let excluded : Array[Array[Int]] = []
  let filtered : Array[Int] = []
  let mut matched_rows = 0
  for i = 0; i < table.rows.length(); i = i + 1 {
    let row = table.rows[i]
    if !matches(row, table.headers, plan.filters, i + 1) {
      filtered.push(i + 1)
      continue
    }
    matched_rows = matched_rows + 1
    let key = if group_index < 0 { "All" } else { row[group_index] }
    let group = match group_indexes.get(key) {
      Some(index) => index
      None => {
        let index = group_keys.length()
        if index >= 1000 {
          raise InputError("At most 1,000 groups are supported")
        }
        group_keys.push(key)
        group_indexes[key] = index
        groups.push([])
        row_ids.push([])
        excluded.push([])
        index
      }
    }
    if row[metric_index].trim() == "" {
      if plan.missing == "error" {
        raise InputError(
          "Record \{i + 1}: missing '\{plan.metric}'; choose missing=skip explicitly to exclude it",
        )
      }
      excluded[group].push(i + 1)
    } else {
      let value = number(row[metric_index], "Record \{i + 1}, '\{plan.metric}'")
      groups[group].push(value)
      row_ids[group].push(i + 1)
    }
  }
  let warnings : Array[String] = []
  if matched_rows == 0 {
    warnings.push(
      "No rows match the filters; no numeric conclusion can be made.",
    )
  }
  let evidence : Array[Evidence] = []
  for i = 0; i < group_keys.length(); i = i + 1 {
    let value = aggregate(groups[i], plan.operation)
    if excluded[i].length() > 0 {
      warnings.push(
        "Group '\{group_keys[i]}': excluded \{excluded[i].length()} missing value(s).",
      )
    }
    if value is None {
      warnings.push(
        "Group '\{group_keys[i]}': insufficient data for \{plan.operation}.",
      )
    }
    evidence.push({
      id: "e\{i + 1}",
      group: group_keys[i],
      value,
      count: groups[i].length(),
      row_ids: row_ids[i],
      excluded_row_ids: excluded[i],
      values: groups[i],
    })
  }
  {
    engine_version: "0.1.0",
    schema_version: 1,
    title: plan.title,
    metric: plan.metric,
    operation: plan.operation,
    group_by: plan.group_by,
    unit: plan.unit,
    missing: plan.missing,
    source_rows: table.rows.length(),
    matched_rows,
    filtered_row_ids: filtered,
    evidence,
    warnings,
  }
}

///|
pub fn analyze_json(csv : String, plan : String) -> String {
  try {
    let json = @json.parse(plan)
    let report = analyze_table(csv, json)
    let response : Json = { "ok": true, "report": report.to_json() }
    response.stringify()
  } catch {
    error => {
      let response : Json = { "ok": false, "error": error.to_string() }
      response.stringify()
    }
  }
}

///|
pub fn inspect_json(csv : String) -> String {
  try {
    let info = inspect_csv_json(csv)
    let response : Json = { "ok": true, "table": info }
    response.stringify()
  } catch {
    error => {
      let response : Json = { "ok": false, "error": error.to_string() }
      response.stringify()
    }
  }
}
