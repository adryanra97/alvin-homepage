// Membuat lib/brand-icons.generated.ts berisi HANYA ikon yang dipakai (supaya bundle kecil).
// Jalankan ulang: node scripts/gen-brands.mjs   (setelah menambah/mengubah daftar di bawah)
import fs from "node:fs";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);

const logos = require("@iconify-json/logos/icons.json");
const flags = require("@iconify-json/flag/icons.json");
const si = require("simple-icons");

// kunci (dipakai di field `brand` data/site.ts) -> sumber
const fromLogos = {
  python: "python",
  pandas: "pandas-icon",
  tensorflow: "tensorflow",
  tableau: "tableau-icon",
  docker: "docker-icon",
  googlecloud: "google-cloud",
  azure: "microsoft-azure",
  microsoft: "microsoft-icon",
  datastudio: "google-data-studio",
};
const fromFlags = { "flag-id": "id-4x3", "flag-gb": "gb-4x3", "flag-jp": "jp-4x3" };
const fromSimple = { bigquery: "siGooglebigquery", huawei: "siHuawei", mcp: "siModelcontextprotocol" };

const out = {};
const take = (set, key, name) => {
  const icon = set.icons[name];
  if (!icon) throw new Error(`Ikon tidak ditemukan: ${name}`);
  out[key] = { body: icon.body, w: icon.width ?? set.width ?? 16, h: icon.height ?? set.height ?? 16 };
};
for (const [k, n] of Object.entries(fromLogos)) take(logos, k, n);
for (const [k, n] of Object.entries(fromFlags)) take(flags, k, n);
for (const [k, n] of Object.entries(fromSimple)) {
  const i = si[n];
  if (!i) throw new Error(`Ikon simple-icons tidak ditemukan: ${n}`);
  out[k] = { body: `<path d="${i.path}" fill="#${i.hex === "000000" ? "191919" : i.hex}"/>`, w: 24, h: 24 };
}

const file = `// FILE HASIL GENERATE — jangan diedit manual. Sumber: scripts/gen-brands.mjs
// Logo: SVG Logos, Simple Icons (CC0), dan flag-icons. Merek dagang milik masing-masing pemilik.
export type BrandIcon = { body: string; w: number; h: number };
export const brandIcons: Record<string, BrandIcon> = ${JSON.stringify(out, null, 2)};
`;
fs.writeFileSync(new URL("../lib/brand-icons.generated.ts", import.meta.url), file);
console.log("OK:", Object.keys(out).join(", "), `(${(file.length / 1024).toFixed(1)} KB)`);
