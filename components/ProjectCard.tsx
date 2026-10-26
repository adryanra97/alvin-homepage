import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/site";
import { GitHubIcon } from "./icons";
import ProjectPreview from "./ProjectPreview";

/** Kartu proyek untuk halaman /projects (daftar ke bawah). */
export default function ProjectCard({ project: p }: { project: Project }) {
  return (
    <article className="pcard">
      <Link href={`/projects/${p.slug}`} className="pcard-preview" aria-label={`Buka ${p.title}`}>
        <ProjectPreview project={p} />
      </Link>
      <div className="pcard-body">
        {p.featured ? <span className="badge">Featured</span> : null}
        <h2 className="pcard-title">
          <Link href={`/projects/${p.slug}`}>{p.title}</Link>
        </h2>
        <p className="pcard-desc">{p.description}</p>
        <ul className="tags tags-light">
          {p.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <div className="pcard-links">
          <Link href={`/projects/${p.slug}`} className="btn btn-primary btn-sm">
            Details <ArrowRight size={15} />
          </Link>
          <a href={p.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
            Live site <ArrowUpRight size={15} />
          </a>
          {p.repo ? (
            <a href={p.repo} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
              <GitHubIcon size={14} /> Source
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
