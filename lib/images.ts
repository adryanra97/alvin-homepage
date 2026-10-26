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
