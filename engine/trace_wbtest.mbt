///|
test "trace classifies every record and keeps quoted original cells" {
  let csv = "group,value,note\nA,10,\"x,y\"\nA,,missing\nB,20,filtered"
  let p : Json = {
    "schema_version": 1,
    "metric": "value",
    "missing": "skip",
    "filters": [{ "column": "group", "op": "eq", "value": "A" }],
  }
  let page = trace_table(csv, p, 0, 25, "", "all")
  let rows = array_field(page, "records")
  assert_eq(rows.length(), 3)
  assert_eq(field(rows[0], "status"), Some(Json::string("included")))
  assert_eq(field(rows[1], "status"), Some(Json::string("missing")))
  assert_eq(field(rows[2], "status"), Some(Json::string("filtered")))
  assert_eq(array_field(rows[0], "cells")[2], Json::string("x,y"))
  let scoped = trace_table(csv, p, 0, 25, "e1", "all")
  assert_eq(field(scoped, "total"), Some((2).to_json()))
}

///|
test "trace pagination applies after status filtering with stable source IDs" {
  let p : Json = { "schema_version": 1, "metric": "value", "missing": "skip" }
  let page = trace_table("value\n1\n\"\"\n2\n3", p, 1, 1, "", "included")
  assert_eq(field(page, "total"), Some((3).to_json()))
  let rows = array_field(page, "records")
  assert_eq(rows.length(), 1)
  assert_eq(field(rows[0], "id"), Some((3).to_json()))
  assert_eq(
    array_field(trace_table("value\n1", p, 20, 1, "", "all"), "records").length(),
    0,
  )
}

///|
test "trace includes derived columns without replacing original cells" {
  let p : Json = {
    "schema_version": 1,
    "metric": "difference",
    "derived": [
      { "name": "difference", "op": "subtract", "left": "a", "right": "b" },
    ],
  }
  let page = trace_table("a,b\n010,3", p, 0, 25, "", "all")
  assert_eq(field(page, "original_columns"), Some((2).to_json()))
  assert_eq(array_field(page, "columns").length(), 3)
  let cells = array_field(array_field(page, "records")[0], "cells")
  assert_eq(cells[0], Json::string("010"))
  assert_eq(cells[2], Json::string("7"))
}

///|
test "trace rejects malformed queries and unknown evidence" {
  for
    query in [
      "{\"offset\":-1}", "{\"offset\":0.5}", "{\"limit\":101}", "{\"limit\":0}",
      "{\"status\":\"bad\"}", "{\"evidence_id\":\"e9\"}", "{\"extra\":1}",
    ] {
    let r = @json.parse(
      trace_json("group,value\nA,1", plan("sum").stringify(), query),
    )
    assert_true(field(r, "ok") is Some(False))
  }
}

///|
test "JSON boundary preserves actionable input errors" {
  let result = @json.parse(
    analyze_json(
      "value\nnot-a-number", "{\"schema_version\":1,\"metric\":\"value\"}",
    ),
  )
  assert_eq(
    field(result, "error"),
    Some(
      Json::string("Record 1, 'value': expected a number, got 'not-a-number'"),
    ),
  )
  let result = @json.parse(inspect_json("a,a\n1,2"))
  assert_eq(
    field(result, "error"),
    Some(Json::string("Duplicate CSV column 'a'")),
  )
}
