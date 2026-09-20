# Known limitations and honest status

- Prototype, not an established production analytics service. No actual customer or field trial is claimed.
- AI endpoint integration has mock contract tests but no live model validation in 0.2.0. A model can produce a valid plan that misinterprets a question; users must review the proposed choices before applying them.
- No browser interaction or screenshot testing was performed for 0.2.0; module syntax, HTTP response, CLI, core and integration were checked. Responsive layouts and keyboard interaction still need manual acceptance.
- Direct browser model calls require provider CORS support and may not reach local HTTP models from an HTTPS page. Copy/paste and local CLI adapters remain available. No provider account or key is bundled.
- No automatic inference of units, semantics, date parsing, joins, statistical significance, causal effects, model confidence, or engineering standards.
- Numeric claim verification is narrow by design: it checks exact value, unit and evidence ID. A correct number with misleading prose remains possible; prose is explicitly unverified and never inserted into computed report statements.
- Group IDs are scoped to current input and plan, not global persistent identities.
- Decimal financial precision is not guaranteed. Scaling and floating-point errors matter at extreme values; the independent suite covers typical bounded numeric cases, not all doubles.
- A report fingerprint cannot authenticate a data producer or detect coordinated replacement of data, results and hash. There is no digital signature or trusted timestamp.
- Exports include raw data. The browser does not upload source files, persist them to local storage or add telemetry. Explicit planning requests share the question, column names and column summaries. Claim prompts share group labels, metric context and aggregates. These fields can themselves contain sensitive information. API keys are not persisted and are cleared on closing the planning dialog.
- Trace pages return at most 100 records (25 in the UI), but each page recomputes the full analysis. Performance at every configured limit is not yet benchmarked.
- Synthetic laboratory/motor examples prove workflow behavior, not real-world diagnostic validity. No claims about maintenance savings, fault accuracy or energy savings have been made.
