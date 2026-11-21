import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const poem = [
  "\"Give me your password,\" I said.",
  "She told me the four numbers.",
  "The phone opened in my hand —",
  "her messages, her photos, unlocked.",
  "",
  "I didn't look. I set it down",
  "face-down on the table.",
  "The screen went dark.",
  "My hands stayed empty.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem + "\n", "utf8");
