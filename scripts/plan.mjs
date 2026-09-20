#!/usr/bin/env node
import { readFile, writeFile } from "node:fs/promises";
import { requestPlan } from "../dist/planner.js";
try {
  const [input, question, output] = process.argv.slice(2);
  if (!input || !question || !output)
    throw new Error(
      'Usage: node scripts/plan.mjs data.csv "question" proposal.json',
    );
  const result = await requestPlan(await readFile(input, "utf8"), question, {
    endpoint: process.env.RETRACE_AI_URL,
    model: process.env.RETRACE_AI_MODEL,
    apiKey: process.env.RETRACE_AI_KEY,
  });
  await writeFile(output, JSON.stringify(result.plan, null, 2) + "\n");
  console.log(
    "Proposal validated and saved. Review metric, filters, missing policy and units before using it.",
  );
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
