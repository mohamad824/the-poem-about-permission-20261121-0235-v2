import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const poem = `"You want my password?"
"Four digits. Take it."
The phone lies open on the table,
messages, photos, all of it mine.
I could read every word.
I don't. My thumb hovers, then stills,
the screen waits, lit and unopened,
my hand stays in my lap.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
