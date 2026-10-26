import { profile } from "@/data/site";
import { publishedPosts } from "@/data/posts";
import { siteUrl } from "@/lib/site-url";

export const dynamic = "force-static";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export function GET() {
  const items = publishedPosts
    .map(
      (p) => `<item><title>${esc(p.title)}</title><link>${siteUrl}/blog/${p.slug}</link><guid>${siteUrl}/blog/${p.slug}</guid><pubDate>${new Date(p.date).toUTCString()}</pubDate><description>${esc(p.summary)}</description></item>`,
    )
    .join("");
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${esc(profile.name)} – Blog</title><link>${siteUrl}/blog</link><description>Notes on data, AI, IT management and life.</description>${items}</channel></rss>`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
