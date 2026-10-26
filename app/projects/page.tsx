import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/site";

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
        intro="A collection of projects that showcase my interest in data, AI, and building practical applications."
      />
      <section className="section section-tight">
        <div className="container proj-list">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
    </>
  );
}
