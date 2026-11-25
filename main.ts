import { mkdirSync, writeFileSync } from "node:fs";

// Worst Fix Ever: one commit message for a bug fix that made everything worse.
// The fix "resolved" the 500 error by returning 404 for everything: the error
// is gone only because nothing can be found anymore. Deterministic: the same
// fixed line on every run, no randomness, no network, no clock.
const MESSAGE =
  "fix: resolved the 500 error by returning 404 for everything";

// Self-check the gate before writing: 1-100 characters, one line, not blank.
// A future edit to the message that breaks the gate must fail loudly here
// instead of shipping an invalid entry.
if (
  MESSAGE.length < 1 ||
  MESSAGE.length > 100 ||
  MESSAGE.includes("\n") ||
  MESSAGE.trim().length === 0
) {
  throw new Error(`entry violates the 1-100 char gate: ${MESSAGE.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", MESSAGE, "utf8");
console.log(`wrote ${MESSAGE.length} chars to /output/entry.txt`);
console.log(MESSAGE);
