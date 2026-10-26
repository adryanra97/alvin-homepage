import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import ProjectCard from "@/components/ProjectCard";
import { pageIntros, projects } from "@/data/site";

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
      />
      <section className="section section-tight">
        <div className="container proj-list">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
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
