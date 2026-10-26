"use client";

import { useState } from "react";
import { skillGroups } from "@/data/site";
import { Icon } from "./icons";

export default function Skills() {
  const [active, setActive] = useState(skillGroups[0].id);
  const group = skillGroups.find((g) => g.id === active) ?? skillGroups[0];

  return (
    <div className="skills-wrap">
      <div className="tabs" role="tablist" aria-label="Kategori skill">
        {skillGroups.map((g) => (
          <button
            key={g.id}
            role="tab"
            type="button"
            aria-selected={g.id === active}
            className={g.id === active ? "tab active" : "tab"}
            onClick={() => setActive(g.id)}
          >
            {g.label}
          </button>
        ))}
      </div>
      <ul className="skill-grid" role="tabpanel" key={group.id}>
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
