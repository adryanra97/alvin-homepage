/** Bingkai browser di sekitar screenshot (tanpa JS, murni tampilan).
 *  Sengaja tanpa alamat URL: domain proyek bisa berubah, jadi bingkai hanya menampilkan titik jendela. */
export default function BrowserFrame({
  src,
  alt,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={`bframe ${className}`}>
      <div className="bframe-bar" aria-hidden="true">
        <i /> <i /> <i />
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} width={1440} height={900} loading={priority ? "eager" : "lazy"} decoding="async" />
    </div>
  );
}
