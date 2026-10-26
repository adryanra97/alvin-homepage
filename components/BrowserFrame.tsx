/** Bingkai browser di sekitar screenshot (tanpa JS, murni tampilan). */
export default function BrowserFrame({
  src,
  alt,
  label,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  label?: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={`bframe ${className}`}>
      <div className="bframe-bar" aria-hidden="true">
        <i /> <i /> <i />
        {label ? <span>{label}</span> : null}
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} width={1440} height={900} loading={priority ? "eager" : "lazy"} decoding="async" />
    </div>
  );
}
