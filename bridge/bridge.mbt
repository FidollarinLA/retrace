///|
pub fn analyze(csv : String, plan : String) -> String {
  @engine.analyze_json(csv, plan)
}

///|
pub fn inspect_csv(csv : String) -> String {
  @engine.inspect_json(csv)
}

///|
pub fn verify(csv : String, plan : String, draft : String) -> String {
  @engine.verify_json(csv, plan, draft)
}

///|
pub fn trace(csv : String, plan : String, query : String) -> String {
  @engine.trace_json(csv, plan, query)
}
