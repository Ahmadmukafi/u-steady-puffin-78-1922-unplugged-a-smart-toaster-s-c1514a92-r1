// Unplugged: A Smart Toaster's Breakup Line — make.fun entry.
// Writes the fixed one-line breakup text to /output/entry.txt.
import { writeFileSync, mkdirSync } from "node:fs";

const LINE =
  "It's not you. It's my browning dial — I've been set to 'barely warm' for two years and I just realized I deserve golden.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || process.env.OUTPUT_DIR || "/output";
// The gate requires 1–280 characters; fail loudly instead of shipping an invalid entry.
if (LINE.length < 1 || LINE.length > 280) {
  throw new Error(`entry line is ${LINE.length} chars, outside the 1–280 gate`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
