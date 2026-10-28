import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { skillGroups, skillHighlights } from "@/data/site";
import SkillIcon from "./SkillIcon";

const all = skillGroups.flatMap((g) => g.items);

export default function SkillsBento() {
  return (
    <div className="bento">
      {skillHighlights.map((h) => {
        const items = h.items.map((n) => all.find((s) => s.name === n)).filter(Boolean) as typeof all;
        const showIcons = h.id === "technical";
        return (
          <article key={h.id} className={`bento-card bento-${h.id}`}>
            <h3>{h.title}</h3>
            <p>{h.text}</p>
            {showIcons ? (
              <ul className="bento-icons">
                {items.map((s) => (
                  <li key={s.name} title={s.name}>
                    <SkillIcon name={s.name} icon={s.icon} brand={s.brand} image={s.image} badge={s.badge} size={30} />
                    <span>{s.name.replace(/ \(.*\)| & .*/, "")}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="bento-chips">
                {items.map((s) => (
                  <li key={s.name}>{s.name}</li>
                ))}
              </ul>
            )}
            {"outcomes" in h && h.outcomes ? (
              <ul className="bento-outcomes">
                {h.outcomes.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
            ) : null}
            {"usedIn" in h && h.usedIn ? (
              <Link href={h.usedIn.href} className="bento-used">
                {h.usedIn.label} <ArrowRight size={14} />
              </Link>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}
