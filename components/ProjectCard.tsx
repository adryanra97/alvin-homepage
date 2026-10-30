import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/site";
import BrowserFrame from "./BrowserFrame";
import { GitHubIcon } from "./icons";

/** Kartu showcase proyek untuk /projects: visual besar, angka kunci, satu aksi utama yang jelas. */
export default function ProjectCard({ project: p, priority = false }: { project: Project; priority?: boolean }) {
  return (
    <article className="sc">
      <div className="sc-copy">
        <p className="sc-eyebrow">
          {p.featured ? <span className="badge">Featured</span> : null}
          <span>{p.category}</span>
        </p>
        <h2 className="sc-title">
          <Link href={`/projects/${p.slug}`} className="sc-stretch">
            {p.title}
          </Link>
        </h2>
        <p className="sc-tagline">{p.tagline}</p>
        <p className="sc-desc">{p.description}</p>

        <ul className="sc-stats">
          {p.stats.slice(0, 3).map((s) => (
            <li key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </li>
          ))}
        </ul>

        <ul className="tags">
          {p.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <div className="sc-actions">
          <span className="btn btn-light">
            Read the case study <ArrowRight size={16} />
          </span>
          <a href={p.url} target="_blank" rel="noopener noreferrer" className="link-ghost sc-ext">
            {p.copy?.demoLabel ?? "Live demo"} <ArrowUpRight size={14} />
          </a>
          {p.repo ? (
            <a href={p.repo} target="_blank" rel="noopener noreferrer" className="link-ghost sc-ext">
              <GitHubIcon size={14} /> Source
            </a>
          ) : null}
        </div>
      </div>

      <div className="sc-visual" aria-hidden="false">
        <BrowserFrame
          src={p.cover}
          alt={p.copy?.coverAlt ?? `${p.title}: FTE summary screen`}
         
          priority={priority}
          className="sc-main"
        />
        {p.cover2 ? (
          <BrowserFrame src={p.cover2} alt={`${p.title}: second screen`} className="sc-second" />
        ) : null}
      </div>
    </article>
  );
}
