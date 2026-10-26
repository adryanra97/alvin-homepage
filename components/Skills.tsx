"use client";

import { useState } from "react";
import { skillGroups as allGroups, type SkillGroup } from "@/data/site";
import { Icon } from "./icons";

export default function Skills({ groups = allGroups }: { groups?: SkillGroup[] }) {
  const [active, setActive] = useState(groups[0].id);
  const group = groups.find((g) => g.id === active) ?? groups[0];

  return (
    <div className="skills-wrap">
      <div className="tabs" role="tablist" aria-label="Kategori skill">
        {groups.map((g) => (
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
