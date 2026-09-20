# Changelog

## 0.2.0 — 2026-09-20

Natural-language planning through a user-chosen model, copied prompt or local CLI, followed by strict MoonBit validation and explicit review before application. Source-record inspection now shows original and derived cells, included/missing/filtered states, evidence scoping and pagination; original CSV is downloadable.

Preserve detailed input error messages at the JSON API boundary. Add bounded model-response streaming, reject credential-bearing URLs and redirects. Recompute 0.1.1 report bundles under the unchanged numeric contract, checking all fields except the expected engine-version change. Validate with 20 MoonBit tests per target, 26 integration checks and 560 independent reference scenarios. Live-provider and browser interaction acceptance remain pending.

Declare public trait extensions explicitly and mark internal plan types private for MoonBit 0.10.14. The checked-in browser engine is compiled with that version.

## 0.1.1 — 2026-09-20

Use the constructor spelling supported by current MoonBit; fix CI installation to use the official distribution. Bundle engine version is now 0.1.1; old bundles must be regenerated from their CSV and plan.

## 0.1.0 — 2026-09-20

Initial executable report engine: strict CSV/plan handling, seven aggregates, derived columns and filters, source evidence, browser/CLI workflows, report replay and exact numeric claim verification. Three synthetic examples and independent reference tests. Optional model adapter remains tested with mock responses only.
