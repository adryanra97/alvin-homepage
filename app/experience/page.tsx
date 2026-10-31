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
        flip
        eyebrow="Experience"
        title="Work &"
        accent="study."
        intro={pageIntros.experience.intro}
        note={pageIntros.experience.note}
        photos={pageIntros.experience.photos}
        facts={[
          { label: "2015–2019", title: "Mechanical Engineering", sub: "Universitas Indonesia · Cum Laude" },
          { label: "Jan 2020", title: "Joined Telkom Indonesia", sub: "Great People Trainee Program XI" },
          { label: "Nov 2022", title: "Junior Data Scientist", sub: "Telkom Indonesia" },
          { label: "May 2025", title: "Data Scientist", sub: "Telkom Indonesia · Current" },
          { label: "Now", title: "Master of IT", sub: "Universitas Indonesia · Ongoing" },
        ]}
      />
      <section className="section section-tight">
        <div className="container container-narrow">
          <ExperienceTimeline wide />
        </div>
      </section>
    </>
  );
}
