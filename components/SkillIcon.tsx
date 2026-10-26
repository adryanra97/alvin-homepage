import type { CSSProperties } from "react";
import { brandColors, brands } from "@/lib/brands";
import { Icon } from "./icons";

/** Urutan: gambar sendiri (image) -> logo brand (brand) -> ikon generik (icon). */
export default function SkillIcon({
  icon,
  brand,
  image,
  alt,
  size = 28,
}: {
  icon: string;
  brand?: string;
  image?: string;
  alt: string;
  size?: number;
}) {
  if (image) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={image} alt={alt} width={size} height={size} className="skill-img" />;
  }
  const b = brand ? brands[brand] : undefined;
  if (b) {
    const c = brandColors(b.hex);
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        role="img"
        aria-label={b.title}
        className="brand-ico"
        style={{ "--brand": c.light, "--brand-dk": c.dark } as CSSProperties}
      >
        <path d={b.path} />
      </svg>
    );
  }
  return <Icon name={icon} size={size - 2} />;
}
