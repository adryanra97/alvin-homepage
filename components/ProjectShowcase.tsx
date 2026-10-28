import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "./icons";
import { profile, projects } from "@/data/site";
import BrowserFrame from "./BrowserFrame";

/** Showcase proyek unggulan di Home: visual besar, angka kunci, dan ajakan ke GitHub. */
export default function ProjectShowcase() {
  const p = projects.find((x) => x.featured) ?? projects[0];
  if (!p) return null;
  const host = p.url.replace(/^https?:\/\//, "").replace(/\/$/, "");
  return (
    <>
      <div className="pj-stage">
        <div className="pj-visual">
          <BrowserFrame src={p.cover} alt={`${p.title}: results overview`} label={host} className="pj-main" />
          {p.cover2 ? (
            <BrowserFrame src={p.cover2} alt={`${p.title}: monthly view`} className="pj-second" />
          ) : null}
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
            <Link href={`/projects/${p.slug}`} className="btn btn-light">
              Read the case study <ArrowRight size={16} />
            </Link>
            <a href={p.url} target="_blank" rel="noopener noreferrer" className="link-ghost">
              Live demo <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
      <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="pj-more">
        <GitHubIcon size={18} />
        <span>
          <strong>More experiments live on GitHub.</strong> New projects land there first.
        </span>
        <ArrowUpRight size={16} aria-hidden="true" />
      </a>
    </>
  );
}
