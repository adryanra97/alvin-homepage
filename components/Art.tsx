/**
 * Ilustrasi skyline Jakarta (SVG) yang dipakai kalau foto sendiri belum ada.
 * Mau pakai foto? Taruh di /public/images/hero.webp, /public/images/profile.webp,
 * dan /public/images/contact.webp — otomatis dipakai.
 */

const towers = [
  { x: 40, w: 46, h: 150, tone: 1 },
  { x: 92, w: 38, h: 205, tone: 2 },
  { x: 136, w: 54, h: 128, tone: 1 },
  { x: 196, w: 44, h: 238, tone: 3 },
  { x: 246, w: 34, h: 168, tone: 2 },
  { x: 330, w: 52, h: 190, tone: 2 },
  { x: 388, w: 40, h: 140, tone: 1 },
  { x: 434, w: 58, h: 224, tone: 3 },
  { x: 498, w: 36, h: 160, tone: 1 },
];

export function Skyline({ id = "sk" }: { id?: string }) {
  return (
    <svg
      viewBox="0 0 560 420"
      preserveAspectRatio="xMidYMax slice"
      role="img"
      aria-label="Ilustrasi skyline Jakarta dengan Monas"
      className="art-svg"
    >
      <defs>
        <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#9cc3f2" />
          <stop offset="0.65" stopColor="#dbe9fb" />
          <stop offset="1" stopColor="#f3f8ff" />
        </linearGradient>
        <linearGradient id={`${id}-t1`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#6e8db8" />
          <stop offset="1" stopColor="#8fb0d8" />
        </linearGradient>
        <linearGradient id={`${id}-t2`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#4c6c99" />
          <stop offset="1" stopColor="#6f93c0" />
        </linearGradient>
        <linearGradient id={`${id}-t3`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#2f4d7a" />
          <stop offset="1" stopColor="#4d74a6" />
        </linearGradient>
        <linearGradient id={`${id}-tree`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2f7d4f" />
          <stop offset="1" stopColor="#1d5a38" />
        </linearGradient>
      </defs>
      <rect width="560" height="420" fill={`url(#${id}-sky)`} />
      <ellipse cx="120" cy="70" rx="90" ry="22" fill="#fff" opacity="0.55" />
      <ellipse cx="430" cy="110" rx="110" ry="24" fill="#fff" opacity="0.5" />

      {/* Monas */}
      <g transform="translate(290 0)">
        <path d="M-6 330 L-3.5 120 H3.5 L6 330 Z" fill="#e8eef7" />
        <path d="M-6 330 L-3.5 120 H0 V330 Z" fill="#c9d6e8" />
        <rect x="-18" y="236" width="36" height="6" fill="#dfe7f2" />
        <rect x="-22" y="242" width="44" height="88" fill="#cdd9ea" />
        <rect x="-22" y="242" width="22" height="88" fill="#b6c6dc" />
        <path d="M0 62 C-5 78 -7 92 -3 104 C-1 110 1 110 3 104 C7 92 5 78 0 62 Z" fill="#f2b84b" />
        <rect x="-5" y="104" width="10" height="16" fill="#e0a43a" />
      </g>

      {/* Buildings */}
      {towers.map((t, i) => (
        <g key={i}>
          <rect
            x={t.x}
            y={330 - t.h}
            width={t.w}
            height={t.h}
            fill={`url(#${id}-t${t.tone})`}
          />
          {Array.from({ length: Math.floor(t.h / 14) }).map((_, r) => (
            <rect
              key={r}
              x={t.x + 5}
              y={330 - t.h + 8 + r * 14}
              width={t.w - 10}
              height="3"
              fill="#fff"
              opacity="0.22"
            />
          ))}
        </g>
      ))}

      {/* Ground + trees */}
      <rect y="330" width="560" height="90" fill={`url(#${id}-tree)`} />
      {[20, 70, 120, 170, 230, 340, 400, 450, 510].map((x, i) => (
        <circle key={i} cx={x} cy={338 + (i % 3) * 6} r={26 + (i % 2) * 8} fill="#256b45" opacity="0.9" />
      ))}
      {[0, 55, 105, 150, 205, 360, 425, 480, 540].map((x, i) => (
        <circle key={i} cx={x} cy={372 + (i % 2) * 8} r={30 + (i % 3) * 4} fill="#1b5a38" />
      ))}
    </svg>
  );
}

export function Skyline2({ id = "sk2" }: { id?: string }) {
  return (
    <svg
      viewBox="0 0 560 360"
      preserveAspectRatio="xMidYMax slice"
      role="img"
      aria-label="Ilustrasi gedung dan pegunungan"
      className="art-svg"
    >
      <defs>
        <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#bcd6f5" />
          <stop offset="1" stopColor="#f4f8ff" />
        </linearGradient>
        <linearGradient id={`${id}-glass`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1e4f9a" />
          <stop offset="1" stopColor="#0b2a5e" />
        </linearGradient>
      </defs>
      <rect width="560" height="360" fill={`url(#${id}-sky)`} />
      <path d="M0 250 L90 170 L160 225 L250 140 L360 240 L450 180 L560 250 V360 H0Z" fill="#a9c2e0" opacity="0.8" />
      <path d="M0 290 L110 215 L210 275 L320 205 L430 280 L560 225 V360 H0Z" fill="#7fa0c8" opacity="0.8" />
      <g transform="translate(300 40)">
        <path d="M0 40 L180 0 V290 H0Z" fill={`url(#${id}-glass)`} />
        {Array.from({ length: 14 }).map((_, r) => (
          <rect key={r} x="8" y={48 + r * 17} width="164" height="2.5" fill="#fff" opacity="0.25" />
        ))}
        {Array.from({ length: 9 }).map((_, c) => (
          <rect key={c} x={14 + c * 19} y="30" width="1.5" height="260" fill="#fff" opacity="0.15" />
        ))}
      </g>
      <rect y="320" width="560" height="40" fill="#2a7048" />
      {[10, 60, 110, 170, 240, 300, 380, 450, 520].map((x, i) => (
        <circle key={i} cx={x} cy={326 + (i % 2) * 8} r={26 + (i % 3) * 5} fill="#1d5a38" />
      ))}
    </svg>
  );
}

export function PortraitPlaceholder() {
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="art-svg" role="img" aria-label="Foto profil (placeholder)">
      <defs>
        <linearGradient id="pp-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#c4d8f2" />
          <stop offset="1" stopColor="#eef4fc" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="url(#pp-bg)" />
      {[30, 80, 130, 250, 300, 345].map((x, i) => (
        <rect key={i} x={x} y={120 - (i % 3) * 25} width="36" height={180 + (i % 3) * 25} fill="#8aa7cc" opacity="0.55" />
      ))}
      <circle cx="200" cy="130" r="42" fill="#27324a" />
      <path d="M110 300 C110 215 150 185 200 185 C250 185 290 215 290 300Z" fill="#1c2438" />
    </svg>
  );
}
