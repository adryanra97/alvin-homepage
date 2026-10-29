import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Lightbulb, ShieldCheck, Target } from "lucide-react";
import BrowserFrame from "@/components/BrowserFrame";
import { GitHubIcon } from "@/components/icons";
import ShotGallery from "@/components/ShotGallery";
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
    title: `${p.title}: case study`,
    description: p.description,
    alternates: { canonical: `/projects/${p.slug}` },
    openGraph: { title: `${p.title}: case study`, description: p.description, url: `/projects/${p.slug}`, type: "article" },
  };
}

const NAV_BASE = [
  { id: "overview", label: "Overview" },
  { id: "findings", label: "Findings", only: "findings" as const },
  { id: "walkthrough", label: "Walkthrough" },
  { id: "how", label: "How it works" },
  { id: "architecture", label: "Architecture" },
  { id: "trust", label: "Quality & privacy" },
];

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const index = projects.findIndex((x) => x.slug === slug);
  if (index === -1) notFound();
  const p = projects[index];
  const next = projects.length > 1 ? projects[(index + 1) % projects.length] : null;
  const c = p.copy ?? {};
  const NAV = NAV_BASE.filter((n) => !n.only || p.findings?.length);

  return (
    <article className="cs">
      {/* HERO */}
      <header className="cs-hero">
        <div className="container">
          <Link href="/projects" className="back back-light">
            <ArrowLeft size={16} /> All projects
          </Link>
          <p className="eyebrow eyebrow-light">
            <span>{p.category}</span>
          </p>
          <h1>{p.title}</h1>
          <p className="cs-tagline">{p.tagline}</p>

          <dl className="cs-meta">
            <div>
              <dt>Role</dt>
              <dd>{p.role}</dd>
            </div>
            <div>
              <dt>Year</dt>
              <dd>{p.year}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>{p.status}</dd>
            </div>
          </dl>

          <div className="cs-cta">
            <a href={p.url} target="_blank" rel="noopener noreferrer" className="btn btn-light">
              {c.demoLabel ?? "Try the live demo"} <ArrowUpRight size={16} />
            </a>
            {p.repo ? (
              <a href={p.repo} target="_blank" rel="noopener noreferrer" className="btn btn-ghost-light">
                <GitHubIcon size={15} /> Source on GitHub
              </a>
            ) : null}
          </div>

          <BrowserFrame src={p.cover} alt={c.coverAlt ?? `${p.title}: FTE summary screen`} priority className="cs-cover" />
        </div>
      </header>

      {/* STATS */}
      <section className="cs-stats-wrap" aria-label="Key facts">
        <ul className="container cs-stats">
          {p.stats.map((s) => (
            <li key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </li>
          ))}
        </ul>
      </section>

      <nav className="cs-nav" aria-label="On this page">
        <div className="container cs-nav-in">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`}>
              {n.label}
            </a>
          ))}
        </div>
      </nav>

      {/* OVERVIEW */}
      <section id="overview" className="cs-sec">
        <div className="container">
          <div className="cs-block">
            <p className="eyebrow">
              <span>Overview</span>
            </p>
            <h2>Why it exists, and what it does</h2>
          </div>
          <div className="cs-two cs-block">
            <div className="cs-card">
              <Target size={22} aria-hidden="true" />
              <h3>The problem</h3>
              <p>{p.problem}</p>
            </div>
            <div className="cs-card">
              <Lightbulb size={22} aria-hidden="true" />
              <h3>The approach</h3>
              <p>{p.approach}</p>
            </div>
          </div>
          <blockquote className="cs-principle cs-block">
            <span className="cs-principle-label">Design principle</span>
            <p>{p.principle.title}</p>
            <small>{p.principle.text}</small>
          </blockquote>
        </div>
      </section>

      {/* FINDINGS */}
      {p.findings?.length ? (
        <section id="findings" className="cs-sec cs-alt">
          <div className="container">
            <div className="cs-block">
              <p className="eyebrow">
                <span>Findings</span>
              </p>
              <h2>
                Two years, <span className="accent">six findings.</span>
              </h2>
              <p className="body-text">Each finding is labelled with how confident it is, based on sample size and a statistical test.</p>
            </div>
            <ul className="cs-findings cs-block">
              {p.findings.map((f) => (
                <li key={f.title} className="cs-card">
                  <span className={`cs-conf conf-${f.confidence.toLowerCase()}`}>{f.confidence} confidence</span>
                  <strong className="cs-fval">{f.value}</strong>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </li>
              ))}
            </ul>
            {p.limits?.length ? (
              <div className="cs-limits cs-block">
                <h3>What this does not claim</h3>
                <ul className="cs-checks">
                  {p.limits.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      {/* WALKTHROUGH */}
      <section id="walkthrough" className={`cs-sec${p.findings?.length ? "" : " cs-alt"}`}>
        <div className="container">
          <div className="cs-block">
            <p className="eyebrow">
              <span>Walkthrough</span>
            </p>
            <h2>
              Don&apos;t just read about it. <span className="accent">See each screen.</span>
            </h2>
            <p className="body-text">
              {p.shots.length} {c.galleryIntro ?? "real screens from the app. Pick a tab to see what each one is for."}
            </p>
          </div>
          <div className="cs-block">
            <ShotGallery shots={p.shots} />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="cs-sec">
        <div className="container">
          <div className="cs-block">
            <p className="eyebrow">
              <span>How it works</span>
            </p>
            <h2>{c.howTitle ?? "Three steps for the user, rules you can read"}</h2>
          </div>
          <ol className="cs-steps cs-block">
            {p.steps.map((s, n) => (
              <li key={s.title}>
                <span className="cs-stepn">{n + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>

          {p.methods?.length ? (
            <>
              <h3 className="cs-sub cs-block">{c.methodsTitle ?? "How the numbers are calculated"}</h3>
              <div className="cs-two cs-block">
                {p.methods.map((m) => (
                  <div key={m.title} className="cs-card cs-method">
                    <h4>{m.title}</h4>
                    <ol>
                      {m.points.map((pt) => (
                        <li key={pt}>{pt}</li>
                      ))}
                    </ol>
                    {m.note ? <p className="cs-note">{m.note}</p> : null}
                  </div>
                ))}
              </div>
            </>
          ) : null}
        </div>
      </section>

      {/* ARCHITECTURE */}
      {p.agents?.length ? (
        <section id="architecture" className="cs-sec cs-alt">
          <div className="container">
            <div className="cs-block">
              <p className="eyebrow">
                <span>Architecture</span>
              </p>
              <h2>{c.archTitle ?? "Six agents, each with one job"}</h2>
              <p className="body-text">
                {c.archIntro ?? "Every language-model step has a rule-based fallback, which also powers the demo mode and the tests."}
              </p>
            </div>

            <ol className="cs-flow cs-block" aria-label="Agent pipeline">
              {(p.flow ?? []).map((f) => (
                <li key={f.label} className={f.tone}>
                  {f.label} {f.note ? <em>{f.note}</em> : null}
                </li>
              ))}
            </ol>

            <ul className="cs-agents cs-block">
              {p.agents.map((a) => (
                <li key={a.name} className="cs-card">
                  <span className="cs-kind">{a.kind}</span>
                  <h3>{a.name}</h3>
                  <p>{a.text}</p>
                </li>
              ))}
            </ul>

            {p.stack?.length ? (
              <div className="cs-block">
                <h3 className="cs-sub">Stack</h3>
                <dl className="cs-stack">
                  {p.stack.map((s) => (
                    <div key={s.label}>
                      <dt>{s.label}</dt>
                      <dd>{s.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      {/* QUALITY & PRIVACY */}
      {p.quality?.length || p.privacy?.length ? (
        <section id="trust" className="cs-sec">
          <div className="container">
            <div className="cs-block">
              <p className="eyebrow">
                <span>Quality &amp; privacy</span>
              </p>
              <h2>{c.qualityTitle ?? "Built to be checked, and to forget"}</h2>
            </div>
            <div className="cs-two cs-block">
              {p.quality?.length ? (
                <div className="cs-card">
                  <Check size={22} aria-hidden="true" />
                  <h3>{c.qualityCard ?? "Checked on every push"}</h3>
                  <ul className="cs-checks">
                    {p.quality.map((q) => (
                      <li key={q}>{q}</li>
                    ))}
                  </ul>
                  {p.docsNote ? <p className="cs-note">{p.docsNote}</p> : null}
                </div>
              ) : null}
              {p.privacy?.length ? (
                <div className="cs-card">
                  <ShieldCheck size={22} aria-hidden="true" />
                  <h3>{c.privacyCard ?? "Privacy by design"}</h3>
                  <ul className="cs-checks">
                    {p.privacy.map((q) => (
                      <li key={q}>{q}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </section>
      ) : null}

      {/* CTA */}
      <section className="cs-sec cs-cta-band">
        <div className="container cs-block">
          <h2>{c.ctaTitle ?? "Want to see it run?"}</h2>
          <p>{c.ctaText ?? "The demo works without an API key. It runs the agents on a fictional project in about 15 seconds."}</p>
          <div className="cs-cta">
            <a href={p.url} target="_blank" rel="noopener noreferrer" className="btn btn-light">
              {c.demoLabel ?? "Try the live demo"} <ArrowUpRight size={16} />
            </a>
            {p.repo ? (
              <a href={p.repo} target="_blank" rel="noopener noreferrer" className="btn btn-ghost-light">
                <GitHubIcon size={15} /> Read the code
              </a>
            ) : null}
          </div>
        </div>
      </section>

      {next ? (
        <div className="container cs-next">
          <Link href={`/projects/${next.slug}`} className="next-project">
            <span>Next project</span>
            <strong>
              {next.title} <ArrowRight size={16} />
            </strong>
          </Link>
        </div>
      ) : null}
    </article>
  );
}
