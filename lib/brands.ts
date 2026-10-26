import {
  siDocker,
  siGooglebigquery,
  siGooglecloud,
  siHuawei,
  siModelcontextprotocol,
  siPandas,
  siPython,
  siTensorflow,
} from "simple-icons";

/**
 * Logo brand teknologi (data resmi dari paket `simple-icons`).
 * Untuk menambah: import ikon di atas, lalu daftarkan di `brands`.
 * Kunci inilah yang dipakai di field `brand` pada data/site.ts.
 */
type Icon = { title: string; path: string; hex: string };

export const brands: Record<string, Icon> = {
  python: siPython,
  bigquery: siGooglebigquery,
  pandas: siPandas,
  tensorflow: siTensorflow,
  docker: siDocker,
  googlecloud: siGooglecloud,
  huawei: siHuawei,
  mcp: siModelcontextprotocol,
};

function luminance(hex: string) {
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/** Warna logo untuk mode terang & gelap (logo yang terlalu gelap diganti terang di dark mode). */
export function brandColors(hex: string) {
  return { light: `#${hex}`, dark: luminance(hex) < 0.3 ? "#e8eefb" : `#${hex}` };
}
