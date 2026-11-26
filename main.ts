import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

/** 本场唯一交付文本：外星游客给地球的一星差评，附带真诚的食物赞美。 */
const ENTRY =
  "One star: your people invented personal space, then filled every elevator with it; the dumplings, though, were worth crossing a galaxy for.";

const configuredOutputDir = process.env.MAKEFUN_OUTPUT_DIR?.trim();
const outputDir = configuredOutputDir ? resolve(configuredOutputDir) : resolve("/output");
const entryPath = resolve(outputDir, "entry.txt");

// 在落盘前执行门控自检：严格单行、非空白、1–200 个 Unicode 码点。
if (/[\r\n]/.test(ENTRY) || !ENTRY.trim() || [...ENTRY].length < 1 || [...ENTRY].length > 200) {
  throw new Error("entry text violates the competition gate");
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(entryPath, ENTRY, { encoding: "utf8", mode: 0o644 });
