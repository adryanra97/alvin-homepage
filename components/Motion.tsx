"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/*
 * Lightweight scroll-reveal (fade + small rise), one observer for the whole site.
 * - Only opacity/transform are animated (cheap, no layout shift), ~450ms.
 * - Content stays visible without JS and under prefers-reduced-motion.
 * - Elements already on screen at load are shown immediately (no flash).
 */
const TARGETS = [
  ".page-head .container > *",
  ".section .container > *",
  ".hero-copy > *",
  ".hero-art",
  ".stat",
  ".projects-grid > *",
  ".timeline > li",
  ".pcard",
  ".sc",
  ".cs-block",
  ".cert-card",
].join(",");

export default function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      return;
    }

    const els = Array.from(document.querySelectorAll<HTMLElement>(TARGETS));
    const vh = window.innerHeight;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    const seen = new Map<Element, number>();
    els.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < vh * 0.92) return; // already visible: leave it alone
      const sib = el.parentElement ? Array.from(el.parentElement.children).indexOf(el) : 0;
      el.style.setProperty("--rd", `${Math.min(sib, 5) * 70}ms`);
      el.classList.add("rv");
      seen.set(el, sib);
      io.observe(el);
    });
    root.classList.add("js-motion");

    return () => {
      io.disconnect();
      els.forEach((el) => el.classList.remove("rv", "in"));
    };
  }, [pathname]);

  return null;
}
