# ReTrace · 可复算的 AI 数据报告

**把报告里的数字变成可以重新执行、检查原始记录的计算结果。**

ReTrace is an open-source MoonBit engine for recomputable data reports. CSV + a versioned analysis plan produce deterministic statistics, record-level evidence and a replayable report bundle. Optional AI-generated numeric claims are checked against a fresh execution before use.

> 0.1.1 is a working prototype for the September 2026 MoonBit Hackathon. All included datasets are synthetic. It does not certify data authenticity, causal conclusions or engineering compliance.

## Package

Published on [Mooncakes](https://mooncakes.io/docs/FidollarinLA/retrace). Add with `moon add FidollarinLA/retrace`, then import `FidollarinLA/retrace/engine`.

## Try it

Requires MoonBit 0.10.7+ (tested locally with 0.10.7 and 0.10.13; formatting uses 0.10.13), Node.js 22+, Python 3.10+ for the independent reference suite. There are **no npm or third-party MoonBit runtime dependencies**.

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
- Inspect three scenarios using the **same engine**: regional sales, laboratory measurements and motor temperature rise.
- Export standalone HTML or a JSON bundle containing the CSV, plan, engine version, calculated results and a SHA-256 input fingerprint.
- Import a bundle and recompute; flag changed inputs, changed saved results and unsupported versions.
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

The demo's **AI 核验台** copies a prompt containing aggregate evidence. Paste it into your chosen AI and paste its JSON answer back. No provider credentials are required for this workflow. Copying a prompt does not make a network request.

For an automated chat-completions-compatible endpoint (including a local model):

```sh
export RETRACE_AI_URL='http://localhost:11434/v1/chat/completions'
export RETRACE_AI_MODEL='your-installed-model'
# RETRACE_AI_KEY is optional; set it only for a provider requiring authentication.
node scripts/ai.mjs report.json draft.json
```

The adapter sends metric context and aggregate evidence, **not the raw CSV**. It recomputes the bundle before the request and verifies the response afterward. Keys are read from environment variables, never stored in reports or browser storage. Hosted external providers may charge according to your account; ReTrace has no bundled model subscription.

The adapter is tested with deterministic mock responses. **No live external model was used to validate the initial release.** Computed report prose is a deterministic template, not disguised model output.

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

Initial validation: 15 MoonBit tests on each of JS and Wasm-GC, 16 integration checks, and 560 seeded Python-reference scenarios containing 1,673 aggregate/provenance comparisons. The independent oracle uses Python `statistics`, `math.fsum` and `csv`, without importing application logic. These are correctness tests, not evidence of real-world diagnostic accuracy.

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
- Browser workflows do not upload data or use analytics. Exported bundles contain the raw CSV: share them intentionally.

## Originality and license

Apache-2.0. Original implementation; no source copied from DataMagic, Data Formulator, PandasAI or the referenced projects. DataMagic's data-bound narrative interface informed the product discussion, while ReTrace focuses on an executable numeric contract, replay and independently tested MoonBit computation. See [references and attribution](docs/REFERENCES.md).

Maintainer: [FidollarinLA](https://github.com/FidollarinLA). AI assisted implementation and tests; the maintainer is responsible for review and published quality. Contributions should add meaningful behavior and regression coverage, not inflate code or commit counts.
