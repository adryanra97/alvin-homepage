/** Bingkai browser di sekitar screenshot (tanpa JS, murni tampilan).
 *  Sengaja tanpa alamat URL: domain proyek bisa berubah, jadi bingkai hanya menampilkan titik jendela. */
export default function BrowserFrame({
  src,
  alt,
  priority = false,
  className = "",
  sizes = "(max-width: 900px) 92vw, 640px",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
}) {
  // Varian 800px (-sm) dibuat untuk screenshot proyek; hemat data di layar kecil.
  const sm = src.startsWith("/projects/") && src.endsWith(".webp") ? src.replace(/\.webp$/, "-sm.webp") : null;
  return (
    <div className={`bframe ${className}`}>
      <div className="bframe-bar" aria-hidden="true">
        <i /> <i /> <i />
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} srcSet={sm ? `${sm} 800w, ${src} 1600w` : undefined} sizes={sm ? sizes : undefined} alt={alt} width={1440} height={900} loading={priority ? "eager" : "lazy"} decoding="async" />
    </div>
  );
}
