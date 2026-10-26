"use client";

import { useState } from "react";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "@/data/site";
import { GitHubIcon } from "./icons";

function MockScreen({ title }: { title: string }) {
  return (
    <div className="mock" aria-hidden="true">
      <div className="mock-bar">
        <i /> <i /> <i />
      </div>
      <div className="mock-body">
        <div className="mock-side">
          {Array.from({ length: 7 }).map((_, i) => (
            <b key={i} />
          ))}
        </div>
        <div className="mock-main">
          <h4>{title}</h4>
          <div className="mock-row">
            <span />
            <span />
            <span />
          </div>
          <div className="mock-chart">
            {[40, 70, 55, 90, 62, 80].map((h, i) => (
              <em key={i} style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="mock-table">
            {Array.from({ length: 4 }).map((_, i) => (
              <u key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [i, setI] = useState(0);
  const total = projects.length;
  const p = projects[i];
  const prev = () => setI((v) => (v - 1 + total) % total);
  const next = () => setI((v) => (v + 1) % total);

  return (
    <div className="proj-card">
      <div className="proj-preview">
        {p.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={p.image} alt={`Tampilan ${p.title}`} />
        ) : (
          <MockScreen title={p.title} />
        )}
      </div>

      <div className="proj-info">
        <div className="proj-top">
          {p.featured ? <span className="badge">Featured Project</span> : <span />}
          <div className="proj-nav" aria-label="Navigasi proyek">
            <button type="button" onClick={prev} disabled={total < 2} aria-label="Proyek sebelumnya">
              <ChevronLeft size={18} />
            </button>
            <button type="button" onClick={next} disabled={total < 2} aria-label="Proyek berikutnya">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <h3 className="proj-title">
          <a href={p.url} target="_blank" rel="noopener noreferrer">
            {p.title} <ArrowUpRight size={18} />
          </a>
        </h3>
        <p className="proj-desc">{p.description}</p>
        <ul className="tags">
          {p.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <div className="proj-links">
          <a href={p.url} target="_blank" rel="noopener noreferrer" className="link-arrow">
            View Project <ArrowRight size={16} />
          </a>
          {p.repo ? (
            <a href={p.repo} target="_blank" rel="noopener noreferrer" className="link-ghost">
              <GitHubIcon size={15} /> Source
            </a>
          ) : null}
        </div>
        {total > 1 ? (
          <p className="proj-count">
            {i + 1} / {total}
          </p>
        ) : null}
      </div>
    </div>
  );
}
