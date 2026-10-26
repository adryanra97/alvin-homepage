import type { ReactNode } from "react";
import { publicImage } from "@/lib/images";

export default function PageHead({
  eyebrow,
  title,
  accent,
  intro,
  note,
  photo,
}: {
  eyebrow: string;
  title: ReactNode;
  accent?: string;
  intro?: string;
  /** Short handwritten annotation shown under the intro. */
  note?: string;
  /** Optional polaroid-style photo on the right (file in /public/images). */
  photo?: { name: string; caption: string; alt: string };
}) {
  const src = photo ? publicImage(photo.name) : null;
  return (
    <section className="page-head">
      <div className={`container${src ? " page-head-grid" : ""}`}>
        <div>
          <p className="eyebrow">
            <span>{eyebrow}</span>
          </p>
          <h1>
            {title} {accent ? <span className="accent">{accent}</span> : null}
          </h1>
          {intro ? <p className="lead page-lead">{intro}</p> : null}
          {note ? <p className="head-note">{note}</p> : null}
        </div>
        {src && photo ? (
          <figure className="polaroid head-polaroid">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={photo.alt} />
            <figcaption className="pol-cap">{photo.caption}</figcaption>
          </figure>
        ) : null}
      </div>
    </section>
  );
}
