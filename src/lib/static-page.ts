import { readFileSync } from "node:fs";
import path from "node:path";

const generatedRoot = path.join(process.cwd(), "src", "generated", "pages");

export function readGeneratedPage(name: string) {
  return readFileSync(path.join(generatedRoot, `${name}.html`), "utf8");
}

export function readGeneratedStyles(name = "home") {
  const html = readGeneratedPage(name);
  return [...html.matchAll(/<style\b[^>]*>[\s\S]*?<\/style>/gi)]
    .map((match) => match[0])
    .join("\n");
}
