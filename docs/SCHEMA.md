# ReTrace v1 analysis contract

## Plan

```json
{
  "schema_version": 1,
  "title": "Regional revenue",
  "metric": "revenue",
  "operation": "sum",
  "group_by": "region",
  "unit": "CNY",
  "missing": "error",
  "filters": [{"column": "revenue", "op": "gte", "value": "100"}],
  "derived": []
}
```

`schema_version` and `metric` are required. Defaults: title `ReTrace report`, operation `mean`, group_by and unit empty, missing `error`, filters and derived empty. Unknown keys, wrong JSON types and unsupported versions fail, including optional fields explicitly set to null.

Operations: `sum`, `mean`, `median`, `min`, `max`, `stddev`, `count`. `stddev` is **sample** standard deviation, n−1. `count` counts valid numeric observations of `metric`. Every group with no valid observations has a null result, including count and sum.

Derived declarations: `{ "name": "profit", "op": "subtract", "left": "revenue", "right": "cost" }`. Operators: add, subtract, multiply, divide. Operands are column names, not code. Declarations evaluate in order; previous derived columns can be referenced, future columns cannot. Source-column replacement is prohibited. Empty operands yield an empty derived cell. Division by zero/nonfinite results fail.

Filter operators: eq, ne (exact string comparison; whitespace preserved), gt, gte, lt, lte (finite numeric comparison). A JSON number as filter value is converted to its canonical numeric string, so use strings for exact textual identifiers such as `001`. All conditions are ANDed; an empty numeric filter operand does not match. All filters are evaluated, even if another filter already excludes the record. Unknown columns fail before processing data.

## Evaluation order and evidence

1. Parse CSV, validate dimensions and normalized header names.
2. Validate the entire plan and every column dependency.
3. Evaluate all derived columns on every source row.
4. Evaluate all filters and record rejected row IDs.
5. Group in first-occurrence order among matched rows.
6. Apply the metric's missing-data policy and aggregate.
7. Attach included source row IDs, included values and missing-value row IDs.

Therefore a division by zero in a row later excluded by filtering **still rejects the plan execution**. This avoids a filter hiding invalid derived calculations; it is an intentional v1 constraint.

Data-record IDs start at 1 after the header and count logical CSV records, not physical lines. Completely blank physical records outside quoted fields are ignored. Multiline quoted fields occupy one logical record. Empty group labels remain the empty string. No grouping uses the synthetic group label `All`. Evidence IDs e1…eN are scoped to this exact analysis and may change when inputs or filters change.

## Numerical contract

IEEE-754 doubles. Neumaier compensated sum; mean divides each observation by n before compensated addition to reduce avoidable overflow; median averages the central two numbers via halves; standard deviation uses a two-pass mean and squared deviations. Nonfinite final results cause an error. The standard-deviation intermediate squares may overflow on extreme magnitudes even when the final mathematical result is finite; rescale such data.

Display rounding never changes the stored calculation. No decimal-money guarantee. Neither units nor source authenticity are inferred.

## Limits

2,000,000 CSV UTF-16 code units; 20,000 data records; 100 original columns; 20 derived columns; 20 filters; 1,000 groups. Browser file gate: 6 MB for a CSV and 12 MB for a JSON bundle. Core numeric cells must be finite decimal/scientific notation accepted by MoonBit's strict double parser; currency symbols, percentages and thousands separators are not normalized.

## AI draft

```json
{"claims":[{"evidence_id":"e1","value":166000,"unit":"元","label":"optional unverified text"}]}
```

One to 100 claims, no unknown fields. The engine recomputes from CSV + plan; it never trusts a report supplied by the model. Exact IEEE-754 equality is required, plus the exact declared unit and an existing evidence reference with a non-null result. Label text is returned for inspection but **not verified or promoted into the computed report**. Claim coverage/completeness, ranking, trends, causality and arbitrary narrative statements are outside the verifier's scope.

The JSON API returns `{"ok":false,"error":"..."}` for malformed inputs; a well-formed but wrong claim returns `ok:true, all_passed:false` with per-claim findings.

## Bundle and replay

`format: retrace-bundle`, `schema_version: 1`, `engine_version: 0.1.1`, `csv`, `plan`, `report`, `fingerprint`. SHA-256 input is UTF-8 encoded canonical JSON of `{csv,plan}` with recursively sorted object keys and preserved array order. The exact CSV text is included, so newline changes can change the hash. Metadata ordering does not.

Replay validates versions, recomputes the report and separately checks the input fingerprint and canonical saved-report equality. No migrations or cross-version reproducibility claims are made. Fresh bundles clone plans so later caller mutations do not change the stored snapshot.
