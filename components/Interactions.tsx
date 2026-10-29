"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/*
 * Micro-interactions via event delegation: one listener for the whole site, no per-card JS.
 *   [data-spot]  cursor spotlight (sets --mx/--my on the element)
 *   [data-tilt]  gentle parallax/tilt (sets --px/--py in the range -1..1)
 *   [data-count] number counts up once when it scrolls into view
 * Everything is progressive: without JS, with a touch screen or with prefers-reduced-motion
 * the content is shown in its final state and nothing moves.
 */
export default function Interactions() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const cleanups: Array<() => void> = [];

    if (fine) {
      let raf = 0;
      const onMove = (e: PointerEvent) => {
        const t = e.target as Element | null;
        if (!t || !t.closest) return;
        const spot = t.closest<HTMLElement>("[data-spot]");
        const tilt = t.closest<HTMLElement>("[data-tilt]");
        if (!spot && !tilt) return;
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          if (spot) {
            const r = spot.getBoundingClientRect();
            spot.style.setProperty("--mx", `${e.clientX - r.left}px`);
            spot.style.setProperty("--my", `${e.clientY - r.top}px`);
          }
          if (tilt) {
            const r = tilt.getBoundingClientRect();
            tilt.style.setProperty("--px", (((e.clientX - r.left) / r.width) * 2 - 1).toFixed(3));
            tilt.style.setProperty("--py", (((e.clientY - r.top) / r.height) * 2 - 1).toFixed(3));
          }
        });
      };
      const onLeave = (e: PointerEvent) => {
        const t = e.target as Element | null;
        const tilt = t && t.closest ? t.closest<HTMLElement>("[data-tilt]") : null;
        if (tilt && !tilt.contains(e.relatedTarget as Node | null)) {
          tilt.style.setProperty("--px", "0");
          tilt.style.setProperty("--py", "0");
        }
      };
      document.addEventListener("pointermove", onMove, { passive: true });
      document.addEventListener("pointerout", onLeave, { passive: true });
      cleanups.push(() => {
        cancelAnimationFrame(raf);
        document.removeEventListener("pointermove", onMove);
        document.removeEventListener("pointerout", onLeave);
      });
    }

    // Count-up: keeps the original text (prefix/suffix) and only animates the first number.
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-count]"));
    if (nodes.length && "IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          for (const en of entries) {
            if (!en.isIntersecting) continue;
            io.unobserve(en.target);
            run(en.target as HTMLElement);
          }
        },
        { threshold: 0.6 },
      );
      nodes.forEach((n) => io.observe(n));
      cleanups.push(() => io.disconnect());
    }

    return () => cleanups.forEach((f) => f());
  }, [pathname]);

  return null;
}

function run(el: HTMLElement) {
  const text = el.textContent ?? "";
  const m = text.match(/[\d][\d,]*/);
  if (!m) return;
  const target = Number(m[0].replace(/,/g, ""));
  if (!Number.isFinite(target) || target < 2) return;
  const withComma = m[0].includes(",");
  const before = text.slice(0, m.index);
  const after = text.slice((m.index ?? 0) + m[0].length);
  const fmt = (n: number) => (withComma ? Math.round(n).toLocaleString("en-US") : String(Math.round(n)));
  const start = performance.now();
  const dur = 1100;
  const tick = (now: number) => {
    const t = Math.min(1, (now - start) / dur);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = before + fmt(target * eased) + after;
    if (t < 1) requestAnimationFrame(tick);
    else el.textContent = text;
  };
  el.textContent = before + fmt(0) + after;
  requestAnimationFrame(tick);
}
