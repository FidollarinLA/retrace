import { createInterface } from "node:readline";
import { analyze } from "../dist/engine.js";
const lines = createInterface({ input: process.stdin, crlfDelay: Infinity });
for await (const line of lines) {
  const { csv, plan } = JSON.parse(line);
  console.log(analyze(csv, JSON.stringify(plan)));
}
