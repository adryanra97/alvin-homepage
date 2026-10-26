"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { skillGroups as allGroups, type SkillGroup } from "@/data/site";
import { Icon } from "./icons";

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
      <div className="tabs" role="tablist" aria-label="Kategori skill" onKeyDown={onKeyDown}>
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
      <ul
        className="skill-grid"
        role="tabpanel"
        id={`panel-${uid}`}
        aria-labelledby={`tab-${uid}-${group.id}`}
        key={group.id}
      >
        {group.items.map((s) => (
          <li key={s.name} className="skill-card">
            <span className="skill-ico">
              <Icon name={s.icon} size={26} />
            </span>
            <span className="skill-name">{s.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
