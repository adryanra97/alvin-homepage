import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import Skills from "@/components/Skills";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Skills of Adryan Rizky Alviano: Python, SQL, machine learning, Generative & Agentic AI, prompt engineering, data governance (DAMA-DMBOK), UU PDP.",
  alternates: { canonical: "/skills" },
};

export default function SkillsPage() {
  return (
    <>
      <PageHead
        eyebrow="Skills"
        title="Tools &"
        accent="technologies."
        intro="A combination of technical, AI, governance, and soft skills that I use to turn ideas into real solutions."
      />
      <section className="section section-tight">
        <div className="container">
          <Skills />
        </div>
      </section>
    </>
  );
}
