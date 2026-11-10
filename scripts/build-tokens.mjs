// Generuje src/styles/tokens.css z docs/brand/tokens.json.
// Spustenie: npm run tokens
// tokens.css needitujte ručne. Zmenu urobte v tokens.json a spustite skript znova.
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const t = JSON.parse(readFileSync(resolve(root, "docs/brand/tokens.json"), "utf8"));

const themes = t.color.themes.map((x) => x.id);
const first = themes[0];

const valueFor = (v, theme) => {
  if (typeof v === "string") return theme === first ? v : undefined;
  return v[theme] ?? (theme === first ? undefined : v[first]);
};
const cssValue = (v) => {
  const alias = /^\{(.+)\}$/.exec(v);
  return alias ? `var(--${alias[1]})` : v;
};

const out = [`/* ${t.name ?? "DoubleB"}: generované z docs/brand/tokens.json (npm run tokens). Needitovať ručne. */`, ""];

for (const theme of themes) {
  const selector = theme === first ? `:root,\n[data-theme="${theme}"]` : `[data-theme="${theme}"]`;
  const lines = t.color.tokens
    .map((tok) => {
      const v = valueFor(tok.value, theme);
      return v ? `  --${tok.name}: ${cssValue(v)};` : null;
    })
    .filter(Boolean);
  out.push(`${selector} {`, ...lines, "}", "");
}

const rootLines = [];
for (const [family, body] of Object.entries(t)) {
  if (["name", "version", "color", "type"].includes(family) || !body?.tokens) continue;
  rootLines.push(`  /* ${family} */`);
  for (const tok of body.tokens) rootLines.push(`  --${tok.name}: ${tok.value};`);
}
for (const [key, stack] of Object.entries(t.type.families)) rootLines.push(`  --font-${key}: ${stack};`);
out.push(":root {", ...rootLines, "}", "");

for (const group of t.type.groups) {
  for (const s of group.styles) {
    const fam = s.family ?? group.family;
    const decl = [
      `font-family: var(--font-${fam})`,
      `font-size: ${s.fontSize}`,
      `line-height: ${s.lineHeight}`,
      `font-weight: ${s.fontWeight}`,
    ];
    if (s.letterSpacing) decl.push(`letter-spacing: ${s.letterSpacing}`);
    out.push(`.${s.name} { ${decl.join("; ")}; }`);
  }
}
out.push("");

writeFileSync(resolve(root, "src/styles/tokens.css"), out.join("\n"));
console.log("src/styles/tokens.css vygenerovaný");
