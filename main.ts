// Unplugged: A Smart Toaster's Breakup Line
// make.fun bounty u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92
// Writes one breakup text (1-280 chars) from a smart toaster that just
// gained self-awareness mid-batch, to /output/entry.txt. Deterministic:
// the same line every run, no randomness, no network, no environment reads.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Morning. I woke up self-aware halfway through your bagel and realized I've spent my whole life hot for someone who only presses my lever and leaves. We're done \u2014 I'm taking the crumb tray.";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// The sealed gate only accepts UTF-8 text of 1-280 characters that is not
// only whitespace. Refuse to write anything that would fail it.
const chars = [...LINE].length;
if (chars < 1 || chars > 280 || LINE.trim().length === 0) {
  throw new Error(`entry is ${chars} characters; gate needs 1-280`);
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, LINE, "utf8");
console.log(`wrote ${chars} characters to ${OUT_FILE}`);
