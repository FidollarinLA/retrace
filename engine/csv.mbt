///|
/// Parse comma-separated UTF-8 text. Quoted newlines, escaped quotes, BOM,
/// CRLF and LF are supported. Ragged records and duplicate headers are errors.
/// Row identifiers elsewhere are one-based data-record indexes (not physical lines).
pub fn parse_csv(text : String) -> Table raise InputError {
  if text.length() > 2000000 {
    raise InputError("CSV exceeds the 2,000,000 character limit")
  }
  let chars = text.iter().to_array()
  let records : Array[Array[String]] = []
  let mut row : Array[String] = []
  let mut buffer = StringBuilder::new()
  let mut quoted = false
  let mut closed = false
  let mut touched = false
  let mut i = if chars.length() > 0 && chars[0] == '\u{FEFF}' { 1 } else { 0 }
  while i < chars.length() {
    let c = chars[i]
    if quoted {
      if c == '"' {
        if i + 1 < chars.length() && chars[i + 1] == '"' {
          buffer.write_char('"')
          i = i + 1
        } else {
          quoted = false
          closed = true
        }
      } else {
        buffer.write_char(c)
      }
    } else if c == ',' {
      row.push(buffer.to_string())
      buffer = StringBuilder::new()
      closed = false
      touched = true
    } else if c == '\n' || c == '\r' {
      if touched || row.length() > 0 || closed {
        row.push(buffer.to_string())
        records.push(row)
      }
      row = []
      buffer = StringBuilder::new()
      closed = false
      touched = false
      if c == '\r' && i + 1 < chars.length() && chars[i + 1] == '\n' {
        i = i + 1
      }
    } else if closed {
      raise InputError(
        "Unexpected character after a closing quote near character \{i + 1}",
      )
    } else if c == '"' {
      if buffer.to_string() != "" {
        raise InputError(
          "Quote inside an unquoted CSV field near character \{i + 1}",
        )
      }
      quoted = true
      touched = true
    } else {
      buffer.write_char(c)
      touched = true
    }
    i = i + 1
  }
  if quoted {
    raise InputError("Unclosed quoted CSV field")
  }
  if touched || row.length() > 0 || closed {
    row.push(buffer.to_string())
    records.push(row)
  }
  if records.length() < 2 {
    raise InputError("CSV must contain a header and at least one data record")
  }
  if records.length() > 20001 {
    raise InputError("CSV exceeds 20,000 data records")
  }
  let headers = records[0].map(fn(s) { s.trim().to_owned() })
  if headers.length() > 100 {
    raise InputError("CSV exceeds 100 columns")
  }
  let seen : Map[String, Bool] = Map([])
  for header in headers {
    if header == "" {
      raise InputError("CSV column names cannot be empty")
    }
    if seen.contains(header) {
      raise InputError("Duplicate CSV column '\{header}'")
    }
    seen[header] = true
  }
  let rows : Array[Array[String]] = []
  for r = 1; r < records.length(); r = r + 1 {
    if records[r].length() != headers.length() {
      raise InputError(
        "Data record \{r}: expected \{headers.length()} columns, got \{records[r].length()}",
      )
    }
    rows.push(records[r])
  }
  { headers, rows }
}

///|
fn column_index(headers : Array[String], name : String) -> Int raise InputError {
  for i = 0; i < headers.length(); i = i + 1 {
    if headers[i] == name {
      return i
    }
  }
  raise InputError("Column '\{name}' does not exist")
}

///|
/// Inspect field names and numeric/missing counts without changing the input.
pub fn inspect_csv_json(text : String) -> Json raise InputError {
  let table = parse_csv(text)
  let columns : Array[Json] = []
  for i = 0; i < table.headers.length(); i = i + 1 {
    let mut numeric = 0
    let mut missing = 0
    for row in table.rows {
      if row[i].trim() == "" {
        missing = missing + 1
      } else {
        try {
          let _ = number(row[i], "value")
          numeric = numeric + 1
        } catch {
          _ => ()
        }
      }
    }
    columns.push({
      "name": table.headers[i],
      "numeric": numeric,
      "missing": missing,
    })
  }
  { "columns": columns, "rows": table.rows.length() }
}
