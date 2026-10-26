"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Menu, Moon, Sun, X } from "lucide-react";
import { Logo } from "./icons";
import { nav, profile } from "@/data/site";

export default function Header() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.dataset.theme === "dark");
  }, []);

  useEffect(() => {
    const els = nav
      .map((n) => document.getElementById(n.id))
      .filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.2, 0.5, 1] }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const toggleTheme = () => {
    const next = dark ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
    setDark(!dark);
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#home" className="brand" aria-label={`${profile.name} — beranda`}>
          <Logo initials={profile.initials} />
          <span className="brand-name">{profile.name}</span>
        </a>

        <nav className={`nav ${open ? "open" : ""}`} aria-label="Navigasi utama">
          {nav.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={active === n.id ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {n.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary nav-cta-mobile" onClick={() => setOpen(false)}>
            Let&apos;s Connect <ArrowRight size={16} />
          </a>
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className={`theme-toggle ${dark ? "dark" : ""}`}
            onClick={toggleTheme}
            aria-label={dark ? "Aktifkan mode terang" : "Aktifkan mode gelap"}
          >
            <span className="tt-icon">{dark ? <Sun size={14} /> : <Moon size={14} />}</span>
            <span className={`tt-knob ${dark ? "on" : ""}`} />
          </button>
          <a href="#contact" className="btn btn-primary btn-sm nav-cta">
            Let&apos;s Connect <ArrowRight size={15} />
          </a>
          <button
            type="button"
            className="menu-btn"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
}
