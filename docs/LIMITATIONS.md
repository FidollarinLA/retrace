# Known limitations and honest status

- Prototype, not an established production analytics service. No actual customer or field trial is claimed.
- AI endpoint integration has mock contract tests but no live model validation in the initial release. Browser use can copy prompts to a model the user chooses.
- No browser interaction or screenshot testing was performed in the initial release; module syntax, HTTP response, CLI, core and bundle integration were checked. Responsive layouts still need manual acceptance.
- Static deployment does not execute the optional server-side model adapter. Use the copy/paste workflow or local CLI adapter.
- No automatic inference of units, semantics, date parsing, joins, statistical significance, causal effects, model confidence, or engineering standards.
- Numeric claim verification is narrow by design: it checks exact value, unit and evidence ID. A correct number with misleading prose remains possible; prose is explicitly unverified and never inserted into computed report statements.
- Group IDs are scoped to current input and plan, not global persistent identities.
- Decimal financial precision is not guaranteed. Scaling and floating-point errors matter at extreme values; the independent suite covers typical bounded numeric cases, not all doubles.
- A report fingerprint cannot authenticate a data producer or detect coordinated replacement of data, results and hash. There is no digital signature or trusted timestamp.
- Exports include raw data. The browser does not upload files, persist them to local storage or add telemetry. External model prompts contain group labels, metric context and aggregates; users choose whether to share those with a provider.
- Synthetic laboratory/motor examples prove workflow behavior, not real-world diagnostic validity. No claims about maintenance savings, fault accuracy or energy savings have been made.
