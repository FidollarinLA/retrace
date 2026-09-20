#!/usr/bin/env node
// Optional adapter: the user chooses and configures the model provider.
import { readFile, writeFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import { replay, checkDraft, modelPrompt } from "../dist/bundle.js";
import { requestJSON } from "../dist/planner.js";
export async function requestDraft(
  bundle,
  { endpoint, model, apiKey, fetchImpl = fetch },
) {
  const r = await replay(bundle);
  if (!r.source_matches || !r.report_matches)
    throw new Error(
      "Bundle mismatch: regenerate the bundle before requesting AI claims.",
    );
  const draft = await requestJSON(modelPrompt(r.bundle.report), {
      endpoint,
      model,
      apiKey,
      fetchImpl,
    }),
    verification = checkDraft(bundle.csv, bundle.plan, draft);
  return { draft, verification };
}
if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(process.argv[1]).href
) {
  try {
    const [input, output] = process.argv.slice(2);
    if (!input || !output)
      throw new Error("Usage: node scripts/ai.mjs bundle.json draft.json");
    const result = await requestDraft(
      JSON.parse(await readFile(input, "utf8")),
      {
        endpoint: process.env.RETRACE_AI_URL,
        model: process.env.RETRACE_AI_MODEL,
        apiKey: process.env.RETRACE_AI_KEY,
      },
    );
    await writeFile(output, JSON.stringify(result.draft, null, 2) + "\n");
    console.log(JSON.stringify(result.verification, null, 2));
    if (!result.verification.all_passed) process.exitCode = 2;
  } catch (e) {
    console.error(e.message);
    process.exitCode = 1;
  }
}
