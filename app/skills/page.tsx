import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import { pageIntros, skillGroups } from "@/data/site";
import Skills from "@/components/Skills";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Skills of Adryan Rizky Alviano: Python, SQL, machine learning, Generative & Agentic AI, prompt engineering, data governance (DAMA-DMBOK), IT management (TOGAF, BPR, BPI, ERP, blockchain), UU PDP.",
  alternates: { canonical: "/skills" },
};

export default function SkillsPage() {
  const n = (id: string) => skillGroups.find((g) => g.id === id)?.items.length ?? 0;
  return (
    <>
      <PageHead
        eyebrow="Skills"
        title="Tools &"
        accent="technologies."
        intro={pageIntros.skills.intro}
        note={pageIntros.skills.note}
        photos={pageIntros.skills.photos}
        facts={[
          { label: "Technical", title: `${n("technical")} skills`, sub: "Python, SQL, BigQuery, TensorFlow", href: "#explore" },
          { label: "AI & Agentic", title: `${n("ai")} skills`, sub: "LLMs, agents, MCP, RAG", href: "#explore" },
          { label: "Data governance", title: `${n("governance")} skills`, sub: "UU PDP, GDPR, DAMA-DMBOK", href: "#explore" },
          { label: "Credentials", title: "80+ certifications", sub: "Google, Microsoft, Coursera", href: "#explore" },
        ]}
      />
      <section id="explore" className="section section-tight">
        <div className="container">
          <Skills />
        </div>
      </section>
    </>
  );
}
