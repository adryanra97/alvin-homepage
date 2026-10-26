"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, Moon, Sun, X } from "lucide-react";
import { GitHubIcon, Icon, Logo } from "./icons";
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
        <Link href="/" className="brand">
          <Logo />
          <span className="brand-name">{profile.nickname}</span>
        </Link>

        <nav className={`nav ${open ? "open" : ""}`} aria-label="Main">
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
          <span className="nav-sep" aria-hidden="true" />
          <a href={profile.links.github} className="nav-ext" target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)" title="GitHub">
            <GitHubIcon size={15} /> <span className="ext-label">GitHub</span>
          </a>
          <a href={profile.links.credly} className="nav-ext" target="_blank" rel="noopener noreferrer" aria-label="Credly (opens in a new tab)" title="Credly">
            <Icon name="award" size={15} /> <span className="ext-label">Credly</span>
          </a>
          <a href="#contact" className="btn btn-primary nav-cta-mobile" onClick={() => setOpen(false)}>
            Let&apos;s Connect <ArrowRight size={16} />
          </a>
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className={`theme-toggle ${dark ? "dark" : ""}`}
            onClick={toggleTheme}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
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
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
}
