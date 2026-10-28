"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { skillGroups as allGroups, type SkillGroup } from "@/data/site";
import SkillIcon from "./SkillIcon";

const unit: Record<string, string> = { certs: "credentials", honors: "awards", languages: "languages" };

export default function Skills({ groups = allGroups }: { groups?: SkillGroup[] }) {
  const [active, setActive] = useState(groups[0].id);
  const group = groups.find((g) => g.id === active) ?? groups[0];
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const uid = groups.map((g) => g.id).join("-");

  // Navigasi keyboard: panah kiri/kanan, Home, End
  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const i = groups.findIndex((g) => g.id === active);
    let next = i;
    if (e.key === "ArrowRight") next = (i + 1) % groups.length;
    else if (e.key === "ArrowLeft") next = (i - 1 + groups.length) % groups.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = groups.length - 1;
    else return;
    e.preventDefault();
    setActive(groups[next].id);
    tabRefs.current[groups[next].id]?.focus();
  };

  return (
    <div className="skills-wrap">
      <div className="tabs" role="tablist" aria-label="Skill categories" onKeyDown={onKeyDown}>
        {groups.map((g) => (
          <button
            key={g.id}
            ref={(el) => {
              tabRefs.current[g.id] = el;
            }}
            id={`tab-${uid}-${g.id}`}
            role="tab"
            type="button"
            aria-selected={g.id === active}
            aria-controls={`panel-${uid}`}
            tabIndex={g.id === active ? 0 : -1}
            className={g.id === active ? "tab active" : "tab"}
            onClick={() => setActive(g.id)}
          >
            {g.label}
          </button>
        ))}
      </div>
      <div className="panel-head">
        <div>
          <h3 className="panel-title">{group.label}</h3>
          {group.blurb ? <p className="panel-blurb">{group.blurb}</p> : null}
        </div>
        <span className="panel-count">
          {group.items.length} {unit[group.id] ?? "skills"}
        </span>
      </div>
      <div role="tabpanel" id={`panel-${uid}`} aria-labelledby={`tab-${uid}-${group.id}`} key={group.id}>
      <ul className={group.variant === "cert" ? "skill-grid cert-grid" : "skill-grid"}>
        {group.items.map((s) => (
          <li key={s.name} className={group.variant === "cert" ? "skill-card cert-card" : "skill-card"}>
            <span className="skill-ico">
              <SkillIcon
                name={s.name}
                icon={s.icon}
                brand={s.brand}
                image={s.image}
                badge={s.badge}
                size={group.variant === "cert" ? 40 : 34}
              />
            </span>
            <span className="skill-text">
              <span className="skill-name">{s.name}</span>
              {s.sub ? <span className="skill-sub">{s.sub}</span> : null}
            </span>
          </li>
        ))}
      </ul>
      </div>
      {group.link ? (
        <a className="more-link" href={group.link.href} target="_blank" rel="noopener noreferrer">
          {group.link.label} →
        </a>
      ) : null}
    </div>
  );
}
