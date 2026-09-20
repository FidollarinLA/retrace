///|
fn main {
  let csv = "region,revenue\nEast,42000\nSouth,31000\nEast,56000"
  let plan : Json = {
    "schema_version": 1,
    "title": "ReTrace demo",
    "metric": "revenue",
    "operation": "sum",
    "group_by": "region",
    "unit": "CNY",
  }
  println(@engine.analyze_json(csv, plan.stringify()))
}
