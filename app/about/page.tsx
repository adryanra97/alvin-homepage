import type { Metadata } from "next";
import AboutBlock from "@/components/AboutBlock";
import GetToKnowMe from "@/components/GetToKnowMe";
import Skills from "@/components/Skills";
import { skillGroups } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Adryan Rizky Alviano: AI & Big Data professional at Telkom Indonesia, advocate for responsible AI aligned with UU PDP and GDPR.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="section">
        <AboutBlock asPage />
      </section>
      <section className="section section-alt">
        <GetToKnowMe />
      </section>
      <section className="section">
        <div className="container skills-grid">
          <div>
            <p className="eyebrow">
              <span>Recognition</span>
            </p>
            <h2>
              Learning, awards
              <br />& languages
            </h2>
            <p className="body-text">Certifications, honors, and the languages I work in.</p>
          </div>
          <Skills groups={skillGroups.filter((g) => ["certs", "honors", "languages"].includes(g.id))} />
        </div>
      </section>
    </>
  );
}
