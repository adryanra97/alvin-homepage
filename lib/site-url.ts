// Gunakan domain canonical pribadi untuk sitemap, RSS, metadata, dan JSON-LD.
// NEXT_PUBLIC_SITE_URL boleh dipakai untuk override pada environment khusus.
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://adryanrizkyalviano.me")
  .replace(/\/+$/, "");
