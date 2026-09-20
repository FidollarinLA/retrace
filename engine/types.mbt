///|
/// All expected input failures carry a human-readable, actionable message.
pub suberror InputError {
  InputError(String)
} derive(Debug)

///|
pub extend InputError with @debug.Debug::{to_repr}

///|
pub(all) struct Table {
  headers : Array[String]
  rows : Array[Array[String]]
} derive(Debug, Eq)

///|
pub extend Table with @debug.Debug::{to_repr}

///|
pub extend Table with Eq::{equal, not_equal}

///|
priv struct Filter {
  column : String
  op : String
  value : String
}

///|
priv struct Derived {
  name : String
  op : String
  left : String
  right : String
}

///|
priv struct Plan {
  title : String
  metric : String
  operation : String
  group_by : String
  unit : String
  missing : String
  filters : Array[Filter]
  derived : Array[Derived]
}

///|
pub(all) struct Evidence {
  id : String
  group : String
  value : Double?
  count : Int
  row_ids : Array[Int]
  excluded_row_ids : Array[Int]
  values : Array[Double]
} derive(Debug)

///|
pub extend Evidence with @debug.Debug::{to_repr}

///|
pub extend Evidence with ToJson::{to_json}

///|
pub(all) struct Report {
  engine_version : String
  schema_version : Int
  title : String
  metric : String
  operation : String
  group_by : String
  unit : String
  missing : String
  source_rows : Int
  matched_rows : Int
  filtered_row_ids : Array[Int]
  evidence : Array[Evidence]
  warnings : Array[String]
} derive(Debug, ToJson)

///|
pub extend Report with @debug.Debug::{to_repr}

///|
pub extend Report with ToJson::{to_json}

///|
fn finite(value : Double) -> Bool {
  !value.is_nan() && !value.is_inf()
}

///|
fn number(text : String, context : String) -> Double raise InputError {
  let value = @string.parse_double(text.trim()) catch {
    _ => raise InputError("\{context}: expected a number, got '\{text}'")
  }
  if !finite(value) {
    raise InputError(
      "\{context}: NaN, Infinity and overflowing numbers are not supported",
    )
  }
  value
}

///|
fn field(obj : Json, key : String) -> Json? {
  match obj {
    Object(fields) => fields.get(key)
    _ => None
  }
}

///|
fn string_field(
  obj : Json,
  key : String,
  default : String,
) -> String raise InputError {
  match field(obj, key) {
    None => default
    Some(String(value)) => value
    _ => raise InputError("'\{key}' must be a string")
  }
}

///|
fn required_string(obj : Json, key : String) -> String raise InputError {
  let value = string_field(obj, key, "")
  if value == "" {
    raise InputError("'\{key}' is required")
  }
  value
}

///|
fn check_keys(
  obj : Json,
  allowed : Array[String],
  context : String,
) -> Unit raise InputError {
  match obj {
    Object(fields) =>
      for key, _ in fields {
        if !allowed.contains(key) {
          raise InputError("\{context}: unknown field '\{key}'")
        }
      }
    _ => raise InputError("\{context} must be an object")
  }
}

///|
fn array_field(obj : Json, key : String) -> Array[Json] raise InputError {
  match field(obj, key) {
    None => []
    Some(Array(values)) => values
    _ => raise InputError("'\{key}' must be an array")
  }
}

///|
pub fn InputError::to_string(self : InputError) -> String {
  let InputError(message) = self
  message
}

///|
fn input_error_message(error : Error) -> String {
  match error {
    InputError(message) => message
    _ => "Invalid JSON input: \{error.to_string()}"
  }
}

///|
pub impl ToJson for Evidence with fn to_json(self) {
  let value : Json = match self.value {
    Some(n) => n.to_json()
    None => Json::null()
  }
  {
    "id": self.id,
    "group": self.group,
    "value": value,
    "count": self.count,
    "row_ids": self.row_ids.to_json(),
    "excluded_row_ids": self.excluded_row_ids.to_json(),
    "values": self.values.to_json(),
  }
}
