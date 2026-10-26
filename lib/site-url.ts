// Di Vercel, VERCEL_PROJECT_PRODUCTION_URL terisi otomatis (mis. nama-project.vercel.app).
// Kalau nanti pakai domain sendiri, set NEXT_PUBLIC_SITE_URL di Vercel -> Settings -> Environment Variables.
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000";
