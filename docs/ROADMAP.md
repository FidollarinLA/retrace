# Product milestones

## 0.1 — reproducible foundation
- [x] Reusable MoonBit CSV and analysis engine; strict error contracts.
- [x] Record-level evidence; explicit missing data; numeric claim verifier.
- [x] Three synthetic scenarios, browser UI, HTML export and bundle replay.
- [x] CLI and configurable model adapter, with mock response tests.
- [x] Independent Python oracle and JS/Wasm-GC tests.
- [x] Public GitHub CI confirmed green, private Sites demo deployed, Mooncakes 0.1.1 published, GitHub v0.1.1 prerelease with downloadable static demo.
- [ ] Official application submitted with actual required personal details; user joins event group.

## 0.2 — complete the authoring workflow
- [x] Natural-language question → a strictly validated Plan v1, with visible proposal before applying it. User-chosen model endpoints, copy/paste and CLI supported; adapter validated with mocks, live-provider acceptance pending.
- [x] Source record preview with included/excluded row highlighting, derived cells, pagination and original CSV download.
- [x] Plan comparison: show changed inputs/settings, group values and source-record membership before applying a proposed plan; replay-checked bundle comparison also works in the CLI. Multiple simultaneous changes are shown without claiming individual causality.
- [x] Improve Chinese error explanations for common input/calculation failures while preserving the original technical message and an advisory programmatic code in the browser host.
- [ ] User-reviewed acceptance of desktop/mobile interaction and keyboard navigation.

## Quarterly competitiveness
- [ ] Obtain two independent users' feedback; record authentic findings, never fabricate adoption.
- [x] Publish deterministic synthetic benchmark generation and local measurements with hardware, toolchain and methodology disclosed. Browser and concurrent-load benchmarks remain open.
- [ ] Stabilize public schema and package API based on actual reuse.
- [ ] Expand plan operations only for observed needs, with independent numerical oracles.

The scope is a data report engine; a general BI suite, online motor monitoring system and video rendering platform are out of scope. No lines-of-code target or artificial commit splitting.

## Verified publication — 2026-09-20

- [Source and project](https://github.com/FidollarinLA/retrace) — default branch `codex/retrace-v0.1`.
- [0.2.2 prerelease](https://github.com/FidollarinLA/retrace/releases/tag/v0.2.2) — downloadable browser demo with plan/result comparison and Chinese error guidance.
- [Passing release CI](https://github.com/FidollarinLA/retrace/actions/runs/35536673832) — MoonBit 0.10.14, 20 tests per target, 31 integration checks and 560 reference scenarios.
- [Mooncakes package](https://mooncakes.io/docs/FidollarinLA/retrace) — 0.2.0.
- [Owner-private live demo](https://retrace-data-lab.ivory-crow-7577.chatgpt.site) — 0.2.2 interface deployed; account access required. Judges can use the public downloadable demo.

Official application is **not submitted**. Project name and repository URL were entered in the Feishu form; required personal details, a proposal complying with the form's authorship rule, and event-group participation remain unverified. This is not acceptance by the contest.
