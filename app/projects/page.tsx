import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import ProjectCard from "@/components/ProjectCard";
import { pageIntros, profile, projects } from "@/data/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects by Adryan Rizky Alviano: AI-powered applications, agentic workflows, and practical data solutions.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHead
        eyebrow="Projects"
        title="From ideas to"
        accent="real solutions."
        intro={pageIntros.projects.intro}
        note={pageIntros.projects.note}
        photos={pageIntros.projects.photos}
        facts={[
          { label: "Featured", title: projects[0].title, sub: projects[0].category, href: `/projects/${projects[0].slug}` },
          ...(projects[1] ? [{ label: "Also live", title: projects[1].title, sub: projects[1].category, href: `/projects/${projects[1].slug}` }] : []),
          ...(projects.find((x) => x.repo)
            ? [{ label: "Open source", title: `${projects.find((x) => x.repo)!.title}`, sub: "MIT licence, code on GitHub", href: projects.find((x) => x.repo)!.repo }]
            : []),
          { label: "Next up", title: "More on the way", sub: "Follow along on GitHub", href: profile.links.github },
        ]}
      />
      <section className="section section-tight">
        <div className="container proj-list">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} priority={i === 0} />
          ))}
          <div className="soon-card">
            <p className="hand-quote-inline">Next project loading…</p>
            <p>I&apos;m always building something new. Check back soon, or say hi if you have an idea.</p>
          </div>
        </div>
      </section>
    </>
  );
}
