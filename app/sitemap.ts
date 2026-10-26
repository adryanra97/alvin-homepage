import type { MetadataRoute } from "next";
import { projects } from "@/data/site";
import { siteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = ["", "/about", "/experience", "/projects", "/skills"].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));
  const projectPages = projects.map((p) => ({
    url: `${siteUrl}/projects/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  return [...pages, ...projectPages];
}
