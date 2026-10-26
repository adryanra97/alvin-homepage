"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, Moon, Sun, X } from "lucide-react";
import { Logo } from "./icons";
import { nav, profile } from "@/data/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.dataset.theme === "dark");
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href.startsWith("#")) return false;
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const toggleTheme = () => {
    const next = dark ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
    setDark(!dark);
  };

  return (
    <header className="site-header" id="top">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label={`${profile.name} — beranda`}>
          <Logo initials={profile.initials} />
          <span className="brand-name">{profile.name}</span>
        </Link>

        <nav className={`nav ${open ? "open" : ""}`} aria-label="Navigasi utama">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={isActive(n.href) ? "active" : ""}
              aria-current={isActive(n.href) ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {n.label}
            </Link>
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
