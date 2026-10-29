import Link from "next/link";
import type { ReactNode } from "react";
import { publicImage } from "@/lib/images";

type Photo = { name: string; caption: string; alt: string };
export type HeadFact = { label: string; title: string; sub?: string; href?: string };

export default function PageHead({
  eyebrow,
  title,
  accent,
  intro,
  note,
  photos,
  facts,
  size = "full",
  flip = false,
}: {
  eyebrow: string;
  title: ReactNode;
  accent?: string;
  intro?: string;
  /** Short handwritten annotation shown under the intro. */
  note?: string;
  /** Up to two polaroid-style photos on the right (files in /public/images). */
  photos?: Photo[];
  /** Glass info strip at the bottom of the banner: quick, useful facts about the page. */
  facts?: HeadFact[];
  /** full = fills the first screen, tall = most of it, short = fits its content. */
  size?: "full" | "tall" | "short";
  /** Put the photos on the left and the text on the right. */
  flip?: boolean;
}) {
  const shown = (photos ?? [])
    .slice(0, 2)
    .map((p) => ({ ...p, src: publicImage(p.name) }))
    .filter((p): p is Photo & { src: string } => Boolean(p.src));
  const bg = publicImage("hero");
  const bgSm = bg ? publicImage("hero-sm") : null;
  return (
    <section className={`page-head${bg ? ` page-head-photo ph-${size}${flip ? " ph-flip" : ""}` : ""}`}>
      {bg ? (
        <div className="ph-bg" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={bg} srcSet={bgSm ? `${bgSm} 800w, ${bg} 1600w` : undefined} sizes="100vw" alt="" fetchPriority="high" />
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
                <img src={p.src.endsWith(".webp") ? p.src.replace(/\.webp$/, "-sm.webp") : p.src} srcSet={p.src.endsWith(".webp") ? `${p.src.replace(/\.webp$/, "-sm.webp")} 420w, ${p.src} 900w` : undefined} sizes="240px" alt={p.alt} />
                <figcaption className="pol-cap">{p.caption}</figcaption>
              </figure>
            ))}
          </div>
        ) : null}
      </div>
      {bg && facts?.length ? (
        <div className="container">
          <ul className="ph-facts" style={{ ["--n" as string]: facts.length }}>
            {facts.map((f) => {
              const body = (
                <>
                  <span className="ph-fact-label">{f.label}</span>
                  <strong>{f.title}</strong>
                  {f.sub ? <span className="ph-fact-sub">{f.sub}</span> : null}
                </>
              );
              const external = f.href?.startsWith("http");
              return (
                <li key={f.label + f.title}>
                  {!f.href ? (
                    <div className="ph-fact">{body}</div>
                  ) : external ? (
                    <a className="ph-fact" href={f.href} target="_blank" rel="noopener noreferrer">
                      {body}
                    </a>
                  ) : f.href.startsWith("#") || f.href.endsWith(".xml") ? (
                    <a className="ph-fact" href={f.href}>
                      {body}
                    </a>
                  ) : (
                    <Link className="ph-fact" href={f.href}>
                      {body}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
      {bg && size !== "short" ? <span className="ph-cue" aria-hidden="true" /> : null}
    </section>
  );
}
