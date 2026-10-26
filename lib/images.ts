import fs from "node:fs";
import path from "node:path";

/** Cari foto di /public/images/<name>.(jpg|jpeg|png|webp). Return null kalau tidak ada. */
export function publicImage(name: string): string | null {
  for (const ext of ["jpg", "jpeg", "png", "webp"]) {
    if (fs.existsSync(path.join(process.cwd(), "public", "images", `${name}.${ext}`))) {
      return `/images/${name}.${ext}`;
    }
  }
  return null;
}

/** Cari logo institusi di /public/logos/<name>.(svg|png|webp|jpg|jpeg). Null kalau belum ada. */
export function publicLogo(name: string): string | null {
  for (const ext of ["svg", "png", "webp", "jpg", "jpeg"]) {
    if (fs.existsSync(path.join(process.cwd(), "public", "logos", `${name}.${ext}`))) {
      return `/logos/${name}.${ext}`;
    }
  }
  return null;
}

/** Badge sertifikat di /public/badges/<name>.(png|svg|webp|jpg). Null kalau belum ada. */
export function publicBadge(name: string): string | null {
  for (const ext of ["png", "svg", "webp", "jpg", "jpeg"]) {
    if (fs.existsSync(path.join(process.cwd(), "public", "badges", `${name}.${ext}`))) {
      return `/badges/${name}.${ext}`;
    }
  }
  return null;
}
