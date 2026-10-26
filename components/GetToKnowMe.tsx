import { ArrowRight } from "lucide-react";
import { aboutPersonal, profile } from "@/data/site";
import { publicImage } from "@/lib/images";
import { LinkedInIcon } from "./icons";

export default function GetToKnowMe() {
  const photos = aboutPersonal.photos
    .map((p) => ({ ...p, src: publicImage(p.name) }))
    .filter((p): p is typeof p & { src: string } => Boolean(p.src));

  return (
    <div className="container know-grid">
      <div className="know-copy">
        <p className="eyebrow">
          <span>{aboutPersonal.eyebrow}</span>
        </p>
        <h2>
          {aboutPersonal.title} <span className="accent">{aboutPersonal.accent}</span>
        </h2>
        {aboutPersonal.body.map((t) => (
          <p key={t} className="body-text">
            {t}
          </p>
        ))}
        <a href={profile.links.linkedin} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon size={16} /> {aboutPersonal.cta} <ArrowRight size={16} />
        </a>
      </div>
      {photos.length > 0 ? (
        <ul className="polaroids">
          {photos.map((p, i) => (
            <li key={p.name} className={`polaroid pol-${i + 1}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.src} alt={p.alt} loading="lazy" />
              <span className="pol-cap">{p.caption}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
