import { MapPin } from "lucide-react";
import { experiences } from "@/data/site";
import type { CSSProperties } from "react";
import { tintFor } from "@/lib/brands";
import { publicLogo } from "@/lib/images";
import { Icon } from "./icons";

export default function ExperienceTimeline({ limit, wide }: { limit?: number; wide?: boolean }) {
  const items = limit ? experiences.slice(0, limit) : experiences;
  const logoOf = (name?: string) => (name ? publicLogo(name) : null);
  return (
    <ol className={wide ? "timeline timeline-wide" : "timeline"}>
      {items.map((e) => (
        <li key={e.org + e.period}>
          <span className="tl-dot" aria-hidden="true" />
          {logoOf(e.logo) ? (
            <span className="tl-badge tl-logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={logoOf(e.logo) as string} alt={`Logo ${e.org}`} />
            </span>
          ) : e.mono ? (
            <span
              className="tl-badge tl-mono"
              style={{ "--c1": tintFor(e.org)[0], "--c2": tintFor(e.org)[1] } as CSSProperties}
              aria-hidden="true"
            >
              {e.mono}
            </span>
          ) : (
            <span className={`tl-badge tl-${e.icon}`}>
              <Icon name={e.icon} size={22} />
            </span>
          )}
          <div className="tl-main">
            <strong>
              {e.org} {e.current ? <em>(Current)</em> : null}
            </strong>
            <ul className="tl-roles">
              {e.roles.map((r) => (
                <li key={r.title + r.period}>
                  <span>{r.title}</span>
                  {e.roles.length > 1 ? <small>{r.period}</small> : null}
                </li>
              ))}
            </ul>
            {e.highlights ? (
              <ul className="tl-highlights">
                {e.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            ) : null}
          </div>
          <div className="tl-meta">
            <strong>{e.period}</strong>
            {e.place ? (
              <span>
                <MapPin size={13} /> {e.place}
              </span>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}
