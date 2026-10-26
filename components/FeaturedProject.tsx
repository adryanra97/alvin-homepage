import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/site";
import ProjectPreview from "./ProjectPreview";

/** Kartu proyek unggulan di Home (band biru gelap). Proyek lain ada di /projects. */
export default function FeaturedProject() {
  const p = projects.find((x) => x.featured) ?? projects[0];
  if (!p) return null;
  return (
    <div className="proj-card">
      <ProjectPreview project={p} />
      <div className="proj-info">
        <div className="proj-top">
          <span className="badge">Featured Project</span>
        </div>
        <h3 className="proj-title">
          <Link href={`/projects/${p.slug}`}>
            {p.title} <ArrowUpRight size={18} />
          </Link>
        </h3>
        <p className="proj-desc">{p.tagline}</p>
        <ul className="tags">
          {p.tags.slice(0, 5).map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <div className="proj-links">
          <Link href={`/projects/${p.slug}`} className="link-arrow">
            Read the case study <ArrowRight size={16} />
          </Link>
          <a href={p.url} target="_blank" rel="noopener noreferrer" className="link-ghost">
            Live demo <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
