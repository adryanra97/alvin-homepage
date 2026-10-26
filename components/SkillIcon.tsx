import type { CSSProperties } from "react";
import { brandIcons, tintFor } from "@/lib/brands";
import { Icon } from "./icons";

/**
 * Urutan: gambar sendiri (image) -> logo asli (brand) -> teks badge (badge) -> ikon konsep di tile berwarna.
 */
export default function SkillIcon({
  name,
  icon,
  brand,
  image,
  badge,
  size = 28,
}: {
  name: string;
  icon: string;
  brand?: string;
  image?: string;
  badge?: string;
  size?: number;
}) {
  if (image) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={image} alt={name} width={size} height={size} className="skill-img" />;
  }

  const b = brand ? brandIcons[brand] : undefined;
  if (b) {
    const isFlag = brand?.startsWith("flag-");
    const h = isFlag ? Math.round((size * 3) / 4) : size;
    const w = isFlag ? size : Math.round((size * b.w) / b.h);
    return (
      <span className={isFlag ? "logo-tile logo-flag" : "logo-tile"}>
        <svg
          viewBox={`0 0 ${b.w} ${b.h}`}
          width={Math.min(w, size)}
          height={Math.min(h, size)}
          role="img"
          aria-label={name}
          dangerouslySetInnerHTML={{ __html: b.body }}
        />
      </span>
    );
  }

  const [c1, c2] = tintFor(name);
  const style = { "--c1": c1, "--c2": c2 } as CSSProperties;
  if (badge) {
    return (
      <span className="ico-tile ico-badge" style={style} aria-hidden="true">
        {badge}
      </span>
    );
  }
  return (
    <span className="ico-tile" style={style} aria-hidden="true">
      <Icon name={icon} size={Math.round(size * 0.85)} />
    </span>
  );
}
