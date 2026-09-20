# ReTrace · 可复算的 AI 数据报告

**把报告里的数字变成可以重新执行、检查原始记录的计算结果。**

ReTrace is an open-source MoonBit engine for recomputable data reports. CSV + a versioned analysis plan produce deterministic statistics, record-level evidence and a replayable report bundle. Optional AI-generated numeric claims are checked against a fresh execution before use.

> 0.2.0 is a working prototype for the September 2026 MoonBit Hackathon. All included datasets are synthetic. It does not certify data authenticity, causal conclusions or engineering compliance.

## Package

Published on [Mooncakes](https://mooncakes.io/docs/FidollarinLA/retrace). Add with `moon add FidollarinLA/retrace`, then import `FidollarinLA/retrace/engine`.

## Try it

Requires MoonBit 0.10.14+ (verification and formatting use 0.10.14), Node.js 22+, Python 3.10+ for the independent reference suite. There are **no npm or third-party MoonBit runtime dependencies**.

```sh
git clone https://github.com/FidollarinLA/retrace.git
cd retrace
npm run build
npm start
# Open http://127.0.0.1:4173
```

The checked-in `dist/` also runs as a static website without a compiler or API key. The actual computation is generated from the MoonBit source under `engine/`; JavaScript supplies browser, file and network I/O.

Pure MoonBit example:

```sh
moon run cmd/retrace
```

## What you can do

- Read quoted CSV with Unicode, BOM, CRLF, embedded commas/newlines and escaped quotes. Reject duplicate headers and ragged records.
- Execute a strict version-1 analysis plan: AND filters, sequential derived columns, grouping, sum / mean / median / min / max / sample standard deviation / valid numeric count.
- Trace results to one-based source data-record IDs, included values, explicitly excluded missing values and filtered rows.
- Open the original records behind a chart, with included / missing / filtered states, derived cells, pagination and original CSV download. Parsing and record classification run in MoonBit.
- Turn a natural-language question into a proposed Plan v1 using your chosen model. Inspect the metric, filters, missing policy, units and trial execution before explicitly applying it.
- Inspect three scenarios using the **same engine**: regional sales, laboratory measurements and motor temperature rise.
- Export standalone HTML or a JSON bundle containing the CSV, plan, engine version, calculated results and a SHA-256 input fingerprint.
- Import a bundle and recompute; flag changed inputs, changed saved results and unsupported versions.
- Recompute existing 0.1.1 bundles under 0.2.0 and export an upgraded bundle. Every saved result field is checked, with only the declared engine version normalized.
- Check AI claims for exact numeric equality, evidence reference and unit. The browser includes a correct fixture and deliberately corrupted fixture, both clearly labeled as tests.

## Command line

```sh
node scripts/cli.mjs analyze examples/sales.csv examples/sales.plan.json report.json
node scripts/cli.mjs replay report.json
node scripts/cli.mjs html report.json report.html
node scripts/cli.mjs prompt report.json
node scripts/cli.mjs verify report.json draft.json
```

Exit status: `0` success, `1` malformed input/runtime error, `2` reproducibility mismatch or rejected claims.

## Optional AI integration

Click **用一句话分析** to describe a question. Copy its schema prompt to an AI and paste the returned JSON, or expand the optional model settings and supply a chat-completions endpoint, model name and API key. Direct browser calls require provider CORS support; a hosted HTTPS page may block a local HTTP endpoint. Keys are never persisted and are cleared when the dialog closes. The planner sends the question, column names and numeric/missing counts, **not source records**. Questions and column names can themselves contain sensitive information. Model plans are proposals: a successful validation does not prove they match the user's intent.

Local planning CLI (avoids browser CORS restrictions):

```sh
node scripts/plan.mjs examples/sales.csv '按区域求销售额合计，单位元' proposal.json
# Review proposal.json before running analysis with it.
```

The demo's **AI 核验台** copies a prompt containing aggregate evidence. Paste it into your chosen AI and paste its JSON answer back. No provider credentials are required for this workflow. Copying a prompt does not make a network request.

For an automated chat-completions-compatible endpoint (including a local model):

```sh
export RETRACE_AI_URL='http://localhost:11434/v1/chat/completions'
export RETRACE_AI_MODEL='your-installed-model'
# RETRACE_AI_KEY is optional; set it only for a provider requiring authentication.
node scripts/ai.mjs report.json draft.json
```

The claim adapter sends metric context and aggregate evidence, **not the raw CSV**. It recomputes the bundle before the request and verifies the response afterward. CLI keys are read from environment variables, never stored in reports or browser storage. The planning CLI uses the same environment variables. Hosted external providers may charge according to your account; ReTrace has no bundled model subscription.

Both adapters are tested with deterministic mock responses. **No live external model was used to validate 0.2.0.** Computed report prose is a deterministic template, not disguised model output.

## Verification

```sh
moon check --deny-warn
moon test --target js --deny-warn
moon test --target wasm-gc --deny-warn
npm run build
npm test
npm run reference
moon info && moon fmt
```

0.2.0 validation: 20 MoonBit tests on each of JS and Wasm-GC, 26 integration checks, and 560 seeded Python-reference scenarios containing 1,673 aggregate/provenance comparisons. The independent oracle uses Python `statistics`, `math.fsum` and `csv`, without importing application logic. These are correctness tests, not evidence of real-world diagnostic accuracy. Browser interaction, mobile layout and live-provider acceptance remain unverified.

## Architecture

```text
CSV + Plan v1
    │
    ▼
MoonBit engine: parse → validate → derive → filter → group → aggregate
    │                                                    │
    ├── result + source record IDs + exclusions ──────────┤
    ▼                                                    ▼
browser / CLI → HTML + replayable JSON bundle       AI claims
                       │                                │
                       └── replay with MoonBit ── exact-value verifier
```

- `engine/`: reusable MoonBit parser, plan validator/executor, numerical aggregates and claim checker.
- `bridge/`: the same engine exported as an ES module for browsers/Node.
- `cmd/retrace/`: an executable MoonBit example.
- `dist/`: authored interface plus generated `engine.js`; no chart calculations are reimplemented in UI code.
- `scripts/`: build, CLI, optional AI adapter, local server and independent validation.
- `docs/`: schema, limitations, competition proposal and roadmap.

## Scope and limitations

Read [the analysis contract](docs/SCHEMA.md) and [known limitations](docs/LIMITATIONS.md). Key points:

- CSV only; no arbitrary Python/JavaScript execution, SQL, spreadsheet formulas, XLSX or PDF extraction.
- Units are explicit labels; dimensional analysis is not implemented.
- Missing numeric values are errors unless `missing: "skip"` is explicit. Non-numeric cells, NaN/Infinity and arithmetic overflow are always errors on evaluated numeric paths.
- `count` counts valid numeric observations, not all records. `stddev` uses denominator `n−1` and returns `null` below two observations. Empty groups return `null`, never a fabricated zero.
- Claims require the full computed IEEE-754 value. Rounded natural-language statements need to be converted to structured exact claims; arbitrary prose is not verified.
- A checksum proves consistency with the stored input, not its authenticity. A bundle's hash can be recomputed by anyone who modifies it.
- CSV computation does not upload source records or use analytics. Explicit model requests share the displayed prompt context with the chosen provider. Exported bundles contain the raw CSV: share them intentionally.

## Originality and license

Apache-2.0. Original implementation; no source copied from DataMagic, Data Formulator, PandasAI or the referenced projects. DataMagic's data-bound narrative interface informed the product discussion, while ReTrace focuses on an executable numeric contract, replay and independently tested MoonBit computation. See [references and attribution](docs/REFERENCES.md).

Maintainer: [FidollarinLA](https://github.com/FidollarinLA). AI assisted implementation and tests; the maintainer is responsible for review and published quality. Contributions should add meaningful behavior and regression coverage, not inflate code or commit counts.
