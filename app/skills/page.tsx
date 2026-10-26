import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import { pageIntros } from "@/data/site";
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
        intro={pageIntros.skills.intro}
        note={pageIntros.skills.note}
        photos={pageIntros.skills.photos}
      />
      <section className="section section-tight">
        <div className="container">
          <Skills />
        </div>
      </section>
    </>
  );
}
