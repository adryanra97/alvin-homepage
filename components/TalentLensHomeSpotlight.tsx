import Link from "next/link";
import { ArrowRight, ArrowUpRight, GitBranch, Layers, Scale } from "lucide-react";
import { projects } from "@/data/site";
import BrowserFrame from "./BrowserFrame";

export default function TalentLensHomeSpotlight() {
  const p = projects.find((project) => project.slug === "talent-estimation-agent");
  if (!p) return null;
  return (
    <section className="tlp-spotlight" aria-labelledby="tlp-spotlight-title">
      <div className="tlp-spotlight-copy">
        <p className="tlp-spotlight-eyebrow"><span className="tlp-spotlight-spark" aria-hidden /> PROJECT UPDATE / 2026</p>
        <h3 id="tlp-spotlight-title">TalentLens <em>reimagined.</em></h3>
        <p className="tlp-spotlight-lead">{p.tagline}</p>
        <p className="tlp-spotlight-description">
          A redesigned agentic workforce-planning experience: watch six stages work,
          compare two independent FTE estimates, and explore a seven-part report that
          makes the evidence behind every staffing decision easier to understand.
        </p>
        <ul className="tlp-spotlight-facts" aria-label="TalentLens capabilities">
          <li><GitBranch size={17} aria-hidden /><span>Six-stage agent journey</span></li>
          <li><Scale size={17} aria-hidden /><span>UCP + bottom-up FTE</span></li>
          <li><Layers size={17} aria-hidden /><span>Capability and AI assistance</span></li>
        </ul>
        <div className="tlp-spotlight-actions">
          <Link className="tlp-spotlight-primary" href={`/projects/${p.slug}`}>Explore the new case study <ArrowRight size={17} aria-hidden /></Link>
          <a className="tlp-spotlight-secondary" href={p.url} target="_blank" rel="noopener noreferrer">Open TalentLens <ArrowUpRight size={15} aria-hidden /></a>
        </div>
      </div>
      <div className="tlp-spotlight-visual">
        <BrowserFrame src={p.cover} alt="TalentLens redesigned homepage: navy editorial hero and animated agent workflow" className="tlp-spotlight-main" />
        {p.cover2 && <BrowserFrame src={p.cover2} alt="TalentLens new executive FTE report with comparison chart" className="tlp-spotlight-inset" />}
        <p>REAL INTERFACE / LATEST REDESIGN</p>
      </div>
    </section>
  );
}
