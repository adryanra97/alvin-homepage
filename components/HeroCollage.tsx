import { publicImage } from "@/lib/images";

const shots = [
  { cls: "hc-main", name: "hero-me", alt: "Alvin smiling in a colorful batik shirt", cap: "Batik, always" },
  { cls: "hc-trail", name: "hero-trail", alt: "Alvin at a scenic mountain viewpoint", cap: "Taking a breather" },
  { cls: "hc-friends", name: "hero-friends", alt: "Alvin and two friends joking around in front of a cockroach poster", cap: "Good times" },
];

/** Kolase foto di hero. File: /public/images/hero-me|hero-trail|hero-friends.webp */
export default function HeroCollage() {
  const items = shots.map((s) => ({ ...s, src: publicImage(s.name) })).filter((s) => s.src);
  if (!items.length) return null;
  return (
    <div className="hero-collage">
      {items.map((s) => (
        <figure key={s.name} className={`hc ${s.cls}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={s.src!} alt={s.alt} loading={s.cls === "hc-main" ? "eager" : "lazy"} decoding="async" />
          <figcaption>{s.cap}</figcaption>
        </figure>
      ))}
    </div>
  );
}
