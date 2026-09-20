///|
fn parse_plan(json : Json, headers : Array[String]) -> Plan raise InputError {
  check_keys(
    json,
    [
      "schema_version", "title", "metric", "operation", "group_by", "unit", "missing",
      "filters", "derived",
    ],
    "Plan",
  )
  match field(json, "schema_version") {
    Some(Number(n, ..)) if n == 1.0 => ()
    _ => raise InputError("Plan schema_version must be 1")
  }
  let operation = string_field(json, "operation", "mean")
  if !["sum", "mean", "min", "max", "count", "median", "stddev"].contains(
      operation,
    ) {
    raise InputError("Unknown operation '\{operation}'")
  }
  let missing = string_field(json, "missing", "error")
  if missing != "error" && missing != "skip" {
    raise InputError("missing must be 'error' or 'skip'")
  }
  let available = headers.copy()
  let derived : Array[Derived] = []
  let declarations = array_field(json, "derived")
  if declarations.length() > 20 {
    raise InputError("At most 20 derived columns are supported")
  }
  for d in declarations {
    check_keys(d, ["name", "op", "left", "right"], "Derived column")
    let name = required_string(d, "name")
    if available.contains(name) {
      raise InputError("Derived column '\{name}' already exists")
    }
    let op = required_string(d, "op")
    if !["add", "subtract", "multiply", "divide"].contains(op) {
      raise InputError("Unsupported derived operation '\{op}'")
    }
    let left = required_string(d, "left")
    let right = required_string(d, "right")
    let _ = column_index(available, left)
    let _ = column_index(available, right)
    derived.push({ name, op, left, right, })
    available.push(name)
  }
  let metric = required_string(json, "metric")
  let _ = column_index(available, metric)
  let group_by = string_field(json, "group_by", "")
  if group_by != "" {
    let _ = column_index(available, group_by)
  }
  let filters : Array[Filter] = []
  let declarations = array_field(json, "filters")
  if declarations.length() > 20 {
    raise InputError("At most 20 filters are supported")
  }
  for f in declarations {
    check_keys(f, ["column", "op", "value"], "Filter")
    let column = required_string(f, "column")
    let _ = column_index(available, column)
    let op = required_string(f, "op")
    if !["eq", "ne", "gt", "gte", "lt", "lte"].contains(op) {
      raise InputError("Unsupported filter operator '\{op}'")
    }
    let value = match field(f, "value") {
      Some(String(s)) => s
      Some(Number(n, ..)) if finite(n) => n.to_string()
      _ => raise InputError("Filter value must be a string or finite number")
    }
    if op != "eq" && op != "ne" {
      let _ = number(value, "Filter threshold")
    }
    filters.push({ column, op, value, })
  }
  {
    title: string_field(json, "title", "ReTrace report"),
    metric,
    operation,
    group_by,
    missing,
    filters,
    derived,
    unit: string_field(json, "unit", ""),
  }
}

///|
fn derive_table(table : Table, plan : Plan) -> Table raise InputError {
  let headers = table.headers.copy()
  let rows = table.rows.map(fn(row) { row.copy() })
  for d in plan.derived {
    let l = column_index(headers, d.left)
    let r = column_index(headers, d.right)
    for i = 0; i < rows.length(); i = i + 1 {
      let row = rows[i]
      if row[l].trim() == "" || row[r].trim() == "" {
        row.push("")
        continue
      }
      let left = number(row[l], "Record \{i + 1}, \{d.left}")
      let right = number(row[r], "Record \{i + 1}, \{d.right}")
      let value = match d.op {
        "add" => left + right
        "subtract" => left - right
        "multiply" => left * right
        "divide" => {
          if right == 0.0 {
            raise InputError("Record \{i + 1}: division by zero in '\{d.name}'")
          }
          left / right
        }
        _ => raise InputError("Invalid derived operation")
      }
      if !finite(value) {
        raise InputError("Record \{i + 1}: arithmetic overflow in '\{d.name}'")
      }
      row.push(value.to_string())
    }
    headers.push(d.name)
  }
  { headers, rows, }
}

///|
fn matches(
  row : Array[String],
  headers : Array[String],
  filters : Array[Filter],
  row_id : Int,
) -> Bool raise InputError {
  let mut result = true
  for filter in filters {
    let value = row[column_index(headers, filter.column)]
    let accepted = match filter.op {
      "eq" => value == filter.value
      "ne" => value != filter.value
      _ =>
        if value.trim() == "" {
          false
        } else {
          let x = number(value, "Record \{row_id}, filter '\{filter.column}'")
          let target = number(filter.value, "Filter threshold")
          match filter.op {
            "gt" => x > target
            "gte" => x >= target
            "lt" => x < target
            "lte" => x <= target
            _ => false
          }
        }
    }
    result = result && accepted
  }
  result
}
