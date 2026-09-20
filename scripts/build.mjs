import { spawnSync } from "node:child_process";
import { existsSync, copyFileSync, mkdirSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";
const moon =
  process.env.MOON_BIN ||
  (existsSync(join(homedir(), ".moon/bin/moon"))
    ? join(homedir(), ".moon/bin/moon")
    : "moon");
for (const args of [
  ["check", "--target", "js", "--deny-warn"],
  ["build", "--target", "js", "--release"],
]) {
  const p = spawnSync(moon, args, { stdio: "inherit" });
  if (p.status !== 0) process.exit(p.status || 1);
}
mkdirSync("dist", { recursive: true });
copyFileSync("_build/js/release/build/bridge/bridge.js", "dist/engine.js");
console.log("Built the MoonBit engine → dist/engine.js");
