import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/site";
import BrowserFrame from "./BrowserFrame";

/** Showcase proyek unggulan di Home: visual besar, angka kunci, temuan utama, dan proyek lain sebagai kartu kecil. */
export default function ProjectShowcase() {
  const p = projects.find((x) => x.featured) ?? projects[0];
  if (!p) return null;
  const others = projects.filter((x) => x.slug !== p.slug);
  const teaser = p.findings?.slice(0, 3) ?? [];
  return (
    <>
      <div className="pj-stage">
        <div className="pj-visual">
          <BrowserFrame src={p.cover} alt={p.copy?.coverAlt ?? `${p.title}: overview`} className="pj-main" />
          {p.cover2 ? <BrowserFrame src={p.cover2} alt={`${p.title}: second screen`} className="pj-second" /> : null}
        </div>
        <div className="pj-info">
          <div className="pj-top">
            <span className="badge">Featured Project</span>
            <span className="pj-status">{p.status}</span>
          </div>
          <h3 className="pj-title">
            <Link href={`/projects/${p.slug}`}>{p.title}</Link>
          </h3>
          <p className="pj-tagline">{p.tagline}</p>
          <ul className="pj-stats">
            {p.stats.map((s) => (
              <li key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>
          <ul className="tags">
            {p.tags.slice(0, 6).map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <div className="proj-links">
            <a href={p.url} target="_blank" rel="noopener noreferrer" className="btn btn-light">
              {p.copy?.demoLabel ?? "Live demo"} <ArrowUpRight size={16} />
            </a>
            <Link href={`/projects/${p.slug}`} className="link-arrow">
              Read the case study <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {teaser.length ? (
        <div className="pj-found">
          <p className="pj-found-label">What the film found</p>
          <ul>
            {teaser.map((f) => (
              <li key={f.title}>
                <strong>{f.value}</strong>
                <span>{f.title}</span>
                <em className={`pj-conf conf-${f.confidence.toLowerCase()}`}>{f.confidence} confidence</em>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {others.length ? (
        <div className="pj-others">
          <p className="pj-found-label">More projects</p>
          {others.map((o) => (
            <Link key={o.slug} href={`/projects/${o.slug}`} className="pj-other">
              <BrowserFrame src={o.cover} alt={`${o.title}: preview`} className="pj-other-img" />
              <span className="pj-other-text">
                <small>{o.category}</small>
                <strong>{o.title}</strong>
                <span>{o.tagline}</span>
              </span>
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          ))}
        </div>
      ) : null}
    </>
  );
}
