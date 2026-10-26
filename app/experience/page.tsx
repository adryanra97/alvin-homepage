import type { Metadata } from "next";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import PageHead from "@/components/PageHead";

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
        title="My professional"
        accent="journey."
        intro="A journey of learning, contributing, and growing in the world of data, AI, and people."
      />
      <section className="section section-tight">
        <div className="container container-narrow">
          <ExperienceTimeline wide />
        </div>
      </section>
    </>
  );
}
