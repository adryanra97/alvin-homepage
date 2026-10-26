"use client";

import { useRef, useState } from "react";
import type { ProjectShot } from "@/data/site";
import BrowserFrame from "./BrowserFrame";

/** Galeri screenshot: tab yang dikontrol pengunjung (tanpa auto-play), caption menjelaskan tiap layar. */
export default function ShotGallery({ shots, host }: { shots: ProjectShot[]; host: string }) {
  const [i, setI] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const warm = (n: number) => {
    if (typeof Image !== "undefined" && shots[n]) new Image().src = shots[n].src;
  };
  const go = (n: number) => {
    const next = (n + shots.length) % shots.length;
    setI(next);
    refs.current[next]?.focus();
  };
  const cur = shots[i];

  return (
    <div className="gal">
      <div
        className="gal-tabs"
        role="tablist"
        aria-label="Product screens"
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") { e.preventDefault(); go(i + 1); }
          if (e.key === "ArrowLeft") { e.preventDefault(); go(i - 1); }
          if (e.key === "Home") { e.preventDefault(); go(0); }
          if (e.key === "End") { e.preventDefault(); go(shots.length - 1); }
        }}
      >
        {shots.map((s, n) => (
          <button
            key={s.title}
            ref={(el) => { refs.current[n] = el; }}
            role="tab"
            id={`shot-tab-${n}`}
            aria-selected={n === i}
            aria-controls="shot-panel"
            tabIndex={n === i ? 0 : -1}
            className={`gal-tab${n === i ? " on" : ""}`}
            onClick={() => setI(n)}
            onMouseEnter={() => warm(n)}
            onFocus={() => warm(n)}
          >
            <span className="gal-n">{n + 1}</span> {s.title}
          </button>
        ))}
      </div>

      <div id="shot-panel" role="tabpanel" aria-labelledby={`shot-tab-${i}`} className="gal-panel">
        <BrowserFrame key={cur.src} src={cur.src} alt={`${cur.title} screen`} label={host} className="gal-frame" />
        <div className="gal-cap">
          <strong>
            {i + 1}/{shots.length} · {cur.title}
          </strong>
          <p>{cur.caption}</p>
          <small>Screenshots are from the built-in demo mode, which uses a fictional project.</small>
        </div>
      </div>
    </div>
  );
}
