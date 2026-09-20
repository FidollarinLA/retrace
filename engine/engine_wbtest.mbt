///|
fn plan(operation : String) -> Json {
  {
    "schema_version": 1,
    "metric": "value",
    "operation": operation,
    "group_by": "group",
  }
}

///|
test "CSV preserves quoted delimiters multiline values escapes and Unicode" {
  let table = parse_csv(
    "\u{FEFF}group,value,note\r\n华东,10,\"a,b\"\r\n华南,20,\"line1\nline2\"\r\n华北,30,\"say \"\"hi\"\"\"\r\n",
  )
  assert_eq(table.headers, ["group", "value", "note"])
  assert_eq(table.rows[0][2], "a,b")
  assert_eq(table.rows[1][2], "line1\nline2")
  assert_eq(table.rows[2][2], "say \"hi\"")
}

///|
test "CSV refuses ambiguous or broken input" {
  for
    csv in [
      "a,a\n1,2", "a,b\n1", "a\n\"unclosed", "a\n\"x\"bad", "a\nb\"ad", ",b\n1,2",
      "a\n",
    ] {
    let result = inspect_json(csv)
    let j = @json.parse(result)
    assert_true(field(j, "ok") is Some(False))
  }
}

///|
test "all aggregates and deterministic row provenance" {
  let csv = "group,value\nA,1\nB,8\nA,2\nA,3\n"
  for
    pair in [
      ("sum", 6.0),
      ("mean", 2.0),
      ("min", 1.0),
      ("max", 3.0),
      ("count", 3.0),
      ("median", 2.0),
      ("stddev", 1.0),
    ] {
    let (op, expected) = pair
    let report = analyze_table(csv, plan(op))
    assert_eq(report.evidence[0].value, Some(expected))
    assert_eq(report.evidence[0].row_ids, [1, 3, 4])
    assert_eq(report.evidence[1].group, "B")
    assert_eq(report.matched_rows, 4)
  }
}

///|
test "missing data is explicit and never silently zero" {
  let csv = "group,value\nA,4\nA,\nB,\n"
  assert_true(
    field(@json.parse(analyze_json(csv, plan("sum").stringify())), "ok")
    is Some(False),
  )
  let p : Json = {
    "schema_version": 1,
    "metric": "value",
    "operation": "sum",
    "group_by": "group",
    "missing": "skip",
  }
  let r = analyze_table(csv, p)
  assert_eq(r.evidence[0].value, Some(4.0))
  assert_eq(r.evidence[0].excluded_row_ids, [2])
  assert_eq(r.evidence[1].value, None)
  assert_eq(r.warnings.length(), 3)
}

///|
test "non finite and malformed numeric data rejected even in skip mode" {
  for value in ["NaN", "Infinity", "1e999", "12kg", "1,000"] {
    let csv = "group,value\nA,\"\{value}\""
    let r = @json.parse(analyze_json(csv, plan("sum").stringify()))
    assert_true(field(r, "ok") is Some(False))
  }
}

///|
test "compensated sum survives cancellation" {
  let r = analyze_table("group,value\nA,1e16\nA,1\nA,-1e16", plan("sum"))
  assert_eq(r.evidence[0].value, Some(1.0))
}

///|
test "mean avoids unnecessary sum overflow" {
  let r = analyze_table("group,value\nA,1e308\nA,1e308", plan("mean"))
  assert_eq(r.evidence[0].value, Some(1.0e308))
  assert_true(
    field(
      @json.parse(
        analyze_json("group,value\nA,1e308\nA,1e308", plan("sum").stringify()),
      ),
      "ok",
    )
    is Some(False),
  )
}

///|
test "sample standard deviation needs two samples and median averages middle" {
  let r = analyze_table("group,value\nA,7", plan("stddev"))
  assert_eq(r.evidence[0].value, None)
  let r = analyze_table("group,value\nA,1\nA,9\nA,3\nA,5", plan("median"))
  assert_eq(r.evidence[0].value, Some(4.0))
}

///|
test "filter operators and source rows remain stable" {
  let p : Json = {
    "schema_version": 1,
    "metric": "value",
    "operation": "mean",
    "filters": [{ "column": "value", "op": "gte", "value": "3" }],
  }
  let r = analyze_table("group,value\nA,2\nB,3\nA,5", p)
  assert_eq(r.evidence[0].value, Some(4.0))
  assert_eq(r.evidence[0].row_ids, [2, 3])
  assert_eq(r.filtered_row_ids, [1])
}

///|
test "empty selection returns no fabricated evidence" {
  let p : Json = {
    "schema_version": 1,
    "metric": "value",
    "filters": [{ "column": "group", "op": "eq", "value": "unknown" }],
  }
  let r = analyze_table("group,value\nA,2", p)
  assert_eq(r.evidence.length(), 0)
  assert_eq(r.matched_rows, 0)
  assert_eq(r.warnings.length(), 1)
}

///|
test "derived columns support dependencies and provenance" {
  let p : Json = {
    "schema_version": 1,
    "metric": "margin",
    "operation": "mean",
    "derived": [
      { "name": "profit", "op": "subtract", "left": "sales", "right": "cost" },
      { "name": "margin", "op": "divide", "left": "profit", "right": "sales" },
    ],
  }
  let r = analyze_table("sales,cost\n100,70\n200,140", p)
  assert_true(r.evidence[0].value.unwrap().is_close(0.3))
  assert_eq(r.evidence[0].row_ids, [1, 2])
}

///|
test "division by zero and missing dependencies are rejected" {
  let p : Json = {
    "schema_version": 1,
    "metric": "ratio",
    "derived": [{ "name": "ratio", "op": "divide", "left": "a", "right": "b" }],
  }
  assert_true(
    field(@json.parse(analyze_json("a,b\n1,0", p.stringify())), "ok")
    is Some(False),
  )
  assert_true(
    field(@json.parse(analyze_json("a,c\n1,2", p.stringify())), "ok")
    is Some(False),
  )
}

///|
test "plans reject unknown fields versions columns and operations" {
  for
    p in [
      "{}", "[]", "{\"schema_version\":2,\"metric\":\"value\"}", "{\"schema_version\":1,\"metric\":\"other\"}",
      "{\"schema_version\":1,\"metric\":\"value\",\"operation\":\"forecast\"}", "{\"schema_version\":1,\"metric\":\"value\",\"mising\":\"skip\"}",
    ] {
    assert_true(
      field(@json.parse(analyze_json("group,value\nA,1", p)), "ok")
      is Some(False),
    )
  }
}

///|
test "claims reject altered numbers wrong units and unknown evidence" {
  let p : Json = {
    "schema_version": 1,
    "metric": "value",
    "operation": "sum",
    "unit": "CNY",
  }
  let draft : Json = {
    "claims": [
      { "evidence_id": "e1", "value": 30, "unit": "CNY" },
      { "evidence_id": "e1", "value": 300, "unit": "CNY" },
      { "evidence_id": "e1", "value": 30, "unit": "USD" },
      { "evidence_id": "e2", "value": 30, "unit": "CNY" },
    ],
  }
  let r = @json.parse(
    verify_json("value\n10\n20", p.stringify(), draft.stringify()),
  )
  assert_eq(field(r, "passed"), Some((1).to_json()))
  assert_true(field(r, "all_passed") is Some(False))
}

///|
test "verification recomputes after source changes" {
  let draft : Json = { "claims": [{ "evidence_id": "e1", "value": 30 }] }
  let p : Json = { "schema_version": 1, "metric": "value", "operation": "sum" }
  let a = @json.parse(
    verify_json("value\n10\n20", p.stringify(), draft.stringify()),
  )
  let b = @json.parse(
    verify_json("value\n10\n21", p.stringify(), draft.stringify()),
  )
  assert_true(field(a, "all_passed") is Some(True))
  assert_true(field(b, "all_passed") is Some(False))
}
