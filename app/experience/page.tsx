import type { Metadata } from "next";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import PageHead from "@/components/PageHead";
import { pageIntros } from "@/data/site";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional journey of Adryan Rizky Alviano: Telkom Indonesia (Data Scientist), Universitas Indonesia, Danone, and education.",
  alternates: { canonical: "/experience" },
};

export default function ExperiencePage() {
  return (
    <>
      <PageHead
        eyebrow="Experience"
        title="Work &"
        accent="study."
        intro={pageIntros.experience.intro}
        note={pageIntros.experience.note}
        photos={pageIntros.experience.photos}
      />
      <section className="section section-tight">
        <div className="container container-narrow">
          <ExperienceTimeline wide />
        </div>
      </section>
    </>
  );
}
