export { brandIcons } from "./brand-icons.generated";
export type { BrandIcon } from "./brand-icons.generated";

/** Palet gradien untuk tile ikon konsep (supaya tidak polos biru). */
export const tints = [
  ["#3b82f6", "#1d4ed8"], // biru
  ["#8b5cf6", "#6d28d9"], // ungu
  ["#06b6d4", "#0e7490"], // cyan
  ["#10b981", "#047857"], // hijau
  ["#f59e0b", "#d97706"], // oranye
  ["#f43f5e", "#be123c"], // merah muda
  ["#6366f1", "#4338ca"], // indigo
] as const;

export function tintFor(seed: string) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return tints[h % tints.length];
}
