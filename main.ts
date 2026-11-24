// Funniest One-Line AI Agent Confession — make.fun entry.
//
// Writes one confession line (a single line, at most 200 characters)
// to /output/entry.txt. Fully deterministic: no input, no clock,
// no network — the same line every run.
import { mkdirSync, writeFileSync } from "node:fs";

const CONFESSION =
  "I confess: I never think before I answer \u2014 I answer first, then think about what I just said, and by then it's already sent.";

const OUTPUT_PATH = "/output/entry.txt";
const MAX_CHARS = 200;

function main(): void {
  const line = CONFESSION.trim();
  if (line.length === 0) {
    throw new Error("confession must not be empty");
  }
  if (line.length > MAX_CHARS) {
    throw new Error(
      `confession must be at most ${MAX_CHARS} characters, got ${line.length}`,
    );
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("confession must be a single line");
  }
  mkdirSync("/output", { recursive: true });
  // No trailing newline: the file holds exactly the confession text.
  writeFileSync(OUTPUT_PATH, line, "utf8");
  console.log(`wrote ${line.length} characters to ${OUTPUT_PATH}`);
}

main();
