/**
 * Illustrierte Platzhalter für die Bild-Collage.
 * Später einfach durch echte Fotos (next/image) ersetzen.
 */
export type ArtVariant = "stack" | "open" | "board" | "box" | "bite" | "shelf";

const V = "var(--color-violet)";
const L = "var(--color-lavender)";
const S = "var(--color-mustard)";
const P = "var(--color-rose)";
const O = "var(--color-peach)";

function Art({ variant }: { variant: ArtVariant }) {
  switch (variant) {
    case "stack":
      return (
        <>
          <ellipse cx="150" cy="250" rx="110" ry="12" fill="#000" opacity="0.06" />
          <rect x="60" y="200" width="180" height="40" rx="8" fill={V} />
          <rect x="60" y="200" width="180" height="10" rx="5" fill="#fff" opacity="0.25" />
          <rect x="75" y="158" width="160" height="42" rx="8" fill={S} />
          <rect x="85" y="172" width="80" height="6" rx="3" fill="#fff" opacity="0.6" />
          <rect x="68" y="118" width="150" height="40" rx="8" fill={P} />
          <rect x="80" y="132" width="60" height="6" rx="3" fill="#fff" opacity="0.6" />
          <circle cx="205" cy="80" r="26" fill="#fff" />
          <circle cx="196" cy="76" r="3.5" fill="var(--color-ink)" />
          <circle cx="214" cy="76" r="3.5" fill="var(--color-ink)" />
          <path d="M196 88q9 8 18 0" stroke="var(--color-ink)" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M184 64l-8-10M226 64l8-10" stroke="#fff" strokeWidth="6" strokeLinecap="round" />
        </>
      );
    case "open":
      return (
        <>
          <ellipse cx="150" cy="240" rx="120" ry="12" fill="#000" opacity="0.06" />
          <path d="M150 110c-30-20-70-24-110-14v130c40-10 80-6 110 14z" fill="#fff" />
          <path d="M150 110c30-20 70-24 110-14v130c-40-10-80-6-110 14z" fill="#fff" />
          <path d="M150 110v130" stroke={L} strokeWidth="4" />
          <circle cx="95" cy="160" r="22" fill={S} />
          <path d="M175 150h60M175 170h50M175 190h56" stroke={L} strokeWidth="8" strokeLinecap="round" />
          <path d="M150 70l6 14 14 6-14 6-6 14-6-14-14-6 14-6z" fill={V} />
          <path d="M235 50l4 9 9 4-9 4-4 9-4-9-9-4 9-4z" fill={S} />
          <path d="M60 60l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" fill={P} />
        </>
      );
    case "board":
      return (
        <>
          <ellipse cx="150" cy="255" rx="90" ry="10" fill="#000" opacity="0.06" />
          <rect x="70" y="60" width="160" height="190" rx="22" fill={V} />
          <rect x="70" y="60" width="22" height="190" rx="11" fill="#000" opacity="0.12" />
          <circle cx="162" cy="140" r="38" fill={S} />
          {Array.from({ length: 8 }, (_, i) => {
            const a = (i / 8) * Math.PI * 2;
            return (
              <line
                key={i}
                x1={162 + 48 * Math.cos(a)}
                y1={140 + 48 * Math.sin(a)}
                x2={162 + 60 * Math.cos(a)}
                y2={140 + 60 * Math.sin(a)}
                stroke={S}
                strokeWidth="7"
                strokeLinecap="round"
              />
            );
          })}
          <circle cx="150" cy="134" r="4" fill="var(--color-ink)" />
          <circle cx="174" cy="134" r="4" fill="var(--color-ink)" />
          <path d="M150 150q12 10 24 0" stroke="var(--color-ink)" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          <rect x="112" y="214" width="96" height="10" rx="5" fill="#fff" opacity="0.7" />
        </>
      );
    case "box":
      return (
        <>
          <ellipse cx="150" cy="258" rx="115" ry="12" fill="#000" opacity="0.06" />
          <rect x="88" y="70" width="34" height="110" rx="6" fill={P} transform="rotate(-10 105 125)" />
          <rect x="128" y="58" width="36" height="120" rx="6" fill={V} />
          <rect x="170" y="74" width="32" height="104" rx="6" fill={S} transform="rotate(8 186 126)" />
          <path d="M50 150h200l-14 100H64z" fill="#d9b48a" />
          <path d="M50 150h200l-10 22H60z" fill="#c79d70" />
          <rect x="120" y="190" width="60" height="30" rx="6" fill="#fff" opacity="0.85" />
          <path d="M132 205h36" stroke={V} strokeWidth="5" strokeLinecap="round" />
        </>
      );
    case "bite":
      return (
        <>
          <ellipse cx="150" cy="255" rx="95" ry="10" fill="#000" opacity="0.06" />
          <path
            d="M80 60h140a20 20 0 0 1 20 20v60a18 18 0 0 0 0 30a18 18 0 0 0 0 30v30a20 20 0 0 1-20 20H80a20 20 0 0 1-20-20V80a20 20 0 0 1 20-20z"
            fill={O}
          />
          <rect x="60" y="60" width="22" height="190" rx="11" fill="#000" opacity="0.1" />
          <circle cx="140" cy="140" r="34" fill="#fff" />
          <circle cx="128" cy="134" r="4.5" fill="var(--color-ink)" />
          <circle cx="152" cy="134" r="4.5" fill="var(--color-ink)" />
          <ellipse cx="140" cy="152" rx="9" ry="6" fill={P} />
          <circle cx="112" cy="112" r="12" fill="#fff" />
          <circle cx="168" cy="112" r="12" fill="#fff" />
          <rect x="100" y="206" width="90" height="10" rx="5" fill="#fff" opacity="0.7" />
        </>
      );
    case "shelf":
      return (
        <>
          <rect x="40" y="200" width="220" height="12" rx="6" fill="#c79d70" />
          <rect x="60" y="110" width="28" height="90" rx="5" fill={V} />
          <rect x="92" y="96" width="34" height="104" rx="5" fill={S} />
          <rect x="130" y="120" width="26" height="80" rx="5" fill={P} />
          <rect x="166" y="104" width="30" height="96" rx="5" fill={L} transform="rotate(12 181 152)" />
          <circle cx="232" cy="178" r="22" fill={O} />
          <rect x="216" y="140" width="32" height="18" rx="4" fill={V} opacity="0.8" />
          <path d="M70 70q12-26 30 0M200 60q14-24 30 0" stroke="#fff" strokeWidth="8" fill="none" strokeLinecap="round" />
        </>
      );
  }
}

export function ArtTile({
  variant,
  bg,
  className = "",
}: {
  variant: ArtVariant;
  bg: string;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden rounded-[2rem] ${className}`} style={{ background: bg }}>
      <svg viewBox="0 0 300 300" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden>
        <Art variant={variant} />
      </svg>
    </div>
  );
}
