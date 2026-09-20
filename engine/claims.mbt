///|
/// Verify structured numeric claims against freshly computed evidence.
/// This does not establish truth of free-form prose, causality, or the input data.
pub fn verify_json(
  csv : String,
  plan_text : String,
  draft_text : String,
) -> String {
  try {
    let report = analyze_table(csv, @json.parse(plan_text))
    let draft = @json.parse(draft_text)
    check_keys(draft, ["claims"], "Draft")
    let claims = array_field(draft, "claims")
    if claims.is_empty() || claims.length() > 100 {
      raise InputError("Draft must contain 1–100 claims")
    }
    let checks : Array[Json] = []
    let mut passed = 0
    for claim in claims {
      check_keys(claim, ["evidence_id", "value", "unit", "label"], "Claim")
      let id = required_string(claim, "evidence_id")
      let proposed = match field(claim, "value") {
        Some(Number(n, ..)) if finite(n) => n
        _ => raise InputError("Claim value must be a finite number")
      }
      let unit = string_field(claim, "unit", "")
      let label = string_field(claim, "label", "")
      let mut expected : Double? = None
      let mut found = false
      let mut group = ""
      for e in report.evidence {
        if e.id == id {
          found = true
          expected = e.value
          group = e.group
        }
      }
      let numeric_ok = match expected {
        Some(value) => proposed == value
        None => false
      }
      let accepted = numeric_ok && unit == report.unit
      if accepted {
        passed = passed + 1
      }
      let reason = if !found {
        "Unknown evidence reference"
      } else if expected is None {
        "Evidence has no numeric result"
      } else if unit != report.unit {
        "Unit mismatch"
      } else if !numeric_ok {
        "Numeric claim differs from the recomputed result"
      } else {
        "Numeric value, evidence reference and unit match"
      }
      let expected_json : Json = match expected {
        Some(n) => n.to_json()
        None => Json::null()
      }
      checks.push({
        "evidence_id": id,
        "group": group,
        "label": label,
        "proposed": proposed,
        "expected": expected_json,
        "accepted": accepted,
        "reason": reason,
      })
    }
    let response : Json = {
      "ok": true,
      "passed": passed,
      "total": checks.length(),
      "all_passed": passed == checks.length(),
      "checks": checks,
      "scope": "Only structured numeric values, evidence references and declared units are checked. Free-form labels and causal statements are not verified.",
    }
    response.stringify()
  } catch {
    error => {
      let response : Json = { "ok": false, "error": input_error_message(error) }
      response.stringify()
    }
  }
}
