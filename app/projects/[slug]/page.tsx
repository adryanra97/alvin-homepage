import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "@/components/icons";
import ProjectPreview from "@/components/ProjectPreview";
import { projects } from "@/data/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.description,
    alternates: { canonical: `/projects/${p.slug}` },
    openGraph: { title: p.title, description: p.description, url: `/projects/${p.slug}`, type: "article" },
  };
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const index = projects.findIndex((x) => x.slug === slug);
  if (index === -1) notFound();
  const p = projects[index];
  const next = projects.length > 1 ? projects[(index + 1) % projects.length] : null;

  return (
    <section className="section section-tight">
      <div className="container detail">
        <Link href="/projects" className="back">
          <ArrowLeft size={16} /> All projects
        </Link>

        <p className="eyebrow">
          <span>Project</span>
        </p>
        <h1>{p.title}</h1>
        <ul className="tags tags-light detail-tags">
          {p.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <div className="detail-preview">
          <ProjectPreview project={p} />
        </div>

        <div className="detail-grid">
          <div>
            <h2 className="h3">Overview</h2>
            <p className="body-text detail-text">{p.description}</p>
            {p.highlights?.length ? (
              <>
                <h2 className="h3">What it does</h2>
                <ul className="detail-list">
                  {p.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </>
            ) : null}
          </div>
          <aside className="detail-side">
            <a href={p.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Open live site <ArrowUpRight size={16} />
            </a>
            {p.repo ? (
              <a href={p.repo} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <GitHubIcon size={15} /> Source code
              </a>
            ) : null}
          </aside>
        </div>

        {next ? (
          <Link href={`/projects/${next.slug}`} className="next-project">
            <span>Next project</span>
            <strong>
              {next.title} <ArrowRight size={16} />
            </strong>
          </Link>
        ) : null}
      </div>
    </section>
  );
}
