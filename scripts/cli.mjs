#!/usr/bin/env node
import { readFile, writeFile } from "node:fs/promises";
import {
  createBundle,
  replay,
  checkDraft,
  modelPrompt,
  reportHTML,
} from "../dist/bundle.js";
import { compareAnalyses } from "../dist/compare.js";
const [command, ...args] = process.argv.slice(2);
const readJSON = async (p) => JSON.parse(await readFile(p, "utf8"));
try {
  if (command === "analyze" && args.length >= 2) {
    const b = await createBundle(
      await readFile(args[0], "utf8"),
      await readJSON(args[1]),
    );
    if (args[2]) await writeFile(args[2], JSON.stringify(b, null, 2) + "\n");
    else console.log(JSON.stringify(b, null, 2));
  } else if (command === "replay" && args.length === 1) {
    const r = await replay(await readJSON(args[0]));
    console.log(
      JSON.stringify(
        {
          source_matches: r.source_matches,
          report_matches: r.report_matches,
          report: r.bundle.report,
        },
        null,
        2,
      ),
    );
    if (!r.source_matches || !r.report_matches) process.exitCode = 2;
  } else if (command === "verify" && args.length === 2) {
    const b = await readJSON(args[0]);
    const r = await replay(b);
    if (!r.source_matches || !r.report_matches)
      throw new Error(
        "Bundle is not reproducible; analyze again before verifying claims.",
      );
    const check = checkDraft(b.csv, b.plan, await readJSON(args[1]));
    console.log(JSON.stringify(check, null, 2));
    if (!check.all_passed) process.exitCode = 2;
  } else if (command === "prompt" && args.length === 1) {
    const r = await replay(await readJSON(args[0]));
    if (!r.source_matches || !r.report_matches)
      throw new Error("Bundle mismatch");
    console.log(modelPrompt(r.bundle.report));
  } else if (command === "html" && args.length === 2) {
    const r = await replay(await readJSON(args[0]));
    if (!r.source_matches || !r.report_matches)
      throw new Error("Bundle mismatch");
    await writeFile(args[1], reportHTML(r.bundle));
  } else if (command === "compare" && args.length === 2) {
    const before = await replay(await readJSON(args[0]));
    const after = await replay(await readJSON(args[1]));
    if (
      !before.source_matches ||
      !before.report_matches ||
      !after.source_matches ||
      !after.report_matches
    )
      throw new Error("One or both report bundles failed recomputation.");
    console.log(
      JSON.stringify(compareAnalyses(before.bundle, after.bundle), null, 2),
    );
  } else {
    console.log(
      "ReTrace 0.2.0\n\nnode scripts/cli.mjs analyze input.csv plan.json [bundle.json]\nnode scripts/cli.mjs replay bundle.json\nnode scripts/cli.mjs verify bundle.json draft.json\nnode scripts/cli.mjs prompt bundle.json\nnode scripts/cli.mjs html bundle.json report.html\nnode scripts/cli.mjs compare before.json after.json",
    );
    if (command && command !== "--help") process.exitCode = 1;
  }
} catch (e) {
  console.error(e.message);
  process.exitCode = 1;
}
