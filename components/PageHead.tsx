import type { ReactNode } from "react";
import { publicImage } from "@/lib/images";

type Photo = { name: string; caption: string; alt: string };

export default function PageHead({
  eyebrow,
  title,
  accent,
  intro,
  note,
  photos,
}: {
  eyebrow: string;
  title: ReactNode;
  accent?: string;
  intro?: string;
  /** Short handwritten annotation shown under the intro. */
  note?: string;
  /** Up to two polaroid-style photos on the right (files in /public/images). */
  photos?: Photo[];
}) {
  const shown = (photos ?? [])
    .slice(0, 2)
    .map((p) => ({ ...p, src: publicImage(p.name) }))
    .filter((p): p is Photo & { src: string } => Boolean(p.src));
  const bg = publicImage("hero");
  const bgSm = bg ? publicImage("hero-sm") : null;
  return (
    <section className={`page-head${bg ? " page-head-photo" : ""}`}>
      {bg ? (
        <div className="ph-bg" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={bg} srcSet={bgSm ? `${bgSm} 800w, ${bg} 1600w` : undefined} sizes="100vw" alt="" />
        </div>
      ) : null}
      <div className={`container${shown.length ? " page-head-grid" : ""}`}>
        <div>
          <p className={`eyebrow${bg ? " eyebrow-light" : ""}`}>
            <span>{eyebrow}</span>
          </p>
          <h1>
            {title} {accent ? <span className={bg ? "accent-light" : "accent"}>{accent}</span> : null}
          </h1>
          {intro ? <p className="lead page-lead">{intro}</p> : null}
          {note ? <p className="head-note">{note}</p> : null}
        </div>
        {shown.length ? (
          <div className="head-pair">
            {shown.map((p, i) => (
              <figure key={p.name} className={`polaroid head-pol head-pol-${i + 1}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.src} alt={p.alt} />
                <figcaption className="pol-cap">{p.caption}</figcaption>
              </figure>
            ))}
          </div>
        ) : null}
      </div>
      {bg ? <span className="ph-cue" aria-hidden="true" /> : null}
    </section>
  );
}
