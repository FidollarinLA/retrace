///|
/// Return a bounded page of original and derived cells, classified using the
/// same report that supplies numeric evidence. IDs refer to logical CSV records.
pub fn trace_table(
  csv : String,
  plan_json : Json,
  offset : Int,
  limit : Int,
  evidence_id : String,
  status : String,
) -> Json raise InputError {
  if offset < 0 || offset > 20000 || limit < 1 || limit > 100 {
    raise InputError("Trace offset must be 0..20000 and limit must be 1..100")
  }
  if !["all", "included", "missing", "filtered"].contains(status) {
    raise InputError("Unknown trace status '\{status}'")
  }
  let report = analyze_table(csv, plan_json)
  let original = parse_csv(csv)
  let plan = parse_plan(plan_json, original.headers)
  let table = derive_table(original, plan)
  let states : Map[Int, String] = Map([])
  let evidence_ids : Map[Int, String] = Map([])
  let mut found = evidence_id == ""
  for e in report.evidence {
    if e.id == evidence_id {
      found = true
    }
    for id in e.row_ids {
      states[id] = "included"
      evidence_ids[id] = e.id
    }
    for id in e.excluded_row_ids {
      states[id] = "missing"
      evidence_ids[id] = e.id
    }
  }
  if !found {
    raise InputError("Unknown evidence ID '\{evidence_id}'")
  }
  let records : Array[Json] = []
  let mut total = 0
  for i = 0; i < table.rows.length(); i = i + 1 {
    let id = i + 1
    let row_status = states.get(id).unwrap_or("filtered")
    let row_evidence = evidence_ids.get(id).unwrap_or("")
    if evidence_id != "" && row_evidence != evidence_id {
      continue
    }
    if status != "all" && row_status != status {
      continue
    }
    if total >= offset && records.length() < limit {
      records.push({
        "id": id,
        "status": row_status,
        "evidence_id": row_evidence,
        "cells": table.rows[i].to_json(),
      })
    }
    total = total + 1
  }
  {
    "columns": table.headers.to_json(),
    "original_columns": original.headers.length(),
    "total": total,
    "offset": offset,
    "limit": limit,
    "records": records.to_json(),
  }
}

///|
fn trace_integer(
  query : Json,
  key : String,
  default : Int,
) -> Int raise InputError {
  match field(query, key) {
    None => default
    Some(Number(n, ..)) if finite(n) && n >= 0.0 && n <= 20000.0 => {
      let value = n.to_int()
      if value.to_double() != n {
        raise InputError("'\{key}' must be an integer")
      }
      value
    }
    _ => raise InputError("'\{key}' must be an integer in 0..20000")
  }
}

///|
pub fn trace_json(csv : String, plan : String, query : String) -> String {
  try {
    let query = @json.parse(query)
    check_keys(
      query,
      ["offset", "limit", "evidence_id", "status"],
      "Trace query",
    )
    let page = trace_table(
      csv,
      @json.parse(plan),
      trace_integer(query, "offset", 0),
      trace_integer(query, "limit", 25),
      string_field(query, "evidence_id", ""),
      string_field(query, "status", "all"),
    )
    let response : Json = { "ok": true, "page": page }
    response.stringify()
  } catch {
    error => {
      let response : Json = { "ok": false, "error": input_error_message(error) }
      response.stringify()
    }
  }
}
