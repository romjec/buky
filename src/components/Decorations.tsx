export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 40 40" className="h-9 w-9" aria-hidden>
        <circle cx="14" cy="13" r="8" fill="var(--color-violet)" />
        <circle cx="27" cy="20" r="8" fill="var(--color-mustard)" />
        <circle cx="14" cy="27" r="8" fill="var(--color-violet)" />
        <circle cx="20" cy="20" r="5" fill="#8e74ef" />
      </svg>
      <span className="font-serif text-3xl font-semibold italic tracking-tight">
        Bu<span className="text-violet">ky</span>
      </span>
    </span>
  );
}

export function CircleBadge({ className = "" }: { className?: string }) {
  return (
    <div className={`relative h-40 w-40 ${className}`} aria-hidden>
      <svg viewBox="0 0 200 200" className="animate-spin-slow absolute inset-0 h-full w-full">
        <defs>
          <path id="badge-circle" d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0" />
        </defs>
        <circle cx="100" cy="100" r="98" fill="none" stroke="var(--color-lavender)" strokeWidth="2" />
        <text className="font-sans" fontSize="19" letterSpacing="4" fill="var(--color-violet)">
          <textPath href="#badge-circle">LESEN · TAUSCHEN · ENTDECKEN · </textPath>
        </text>
      </svg>
      <svg viewBox="0 0 40 40" className="absolute top-1/2 left-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2">
        <circle cx="14" cy="13" r="8" fill="var(--color-violet)" />
        <circle cx="27" cy="20" r="8" fill="var(--color-mustard)" />
        <circle cx="14" cy="27" r="8" fill="var(--color-violet)" />
      </svg>
    </div>
  );
}

export function SquiggleArrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 110" className={className} fill="none" aria-hidden>
      <path
        d="M8 6c-6 40 22 70 60 66 30-3 40-38 18-46-24-9-38 30-6 52 26 18 70 14 104 4"
        stroke="var(--color-violet)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path d="M176 70l12 12-16 6" stroke="var(--color-violet)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Rings({ className = "", color = "var(--color-lavender)" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" aria-hidden>
      {[95, 75, 55, 35, 17].map((r) => (
        <circle key={r} cx="100" cy="100" r={r} stroke={color} strokeWidth="9" />
      ))}
    </svg>
  );
}

export function Tags({ className = "" }: { className?: string }) {
  return (
    <div className={`relative h-48 w-72 ${className}`} aria-hidden>
      <svg viewBox="0 0 280 180" className="absolute inset-0 h-full w-full" fill="none">
        <ellipse cx="140" cy="88" rx="130" ry="70" stroke="var(--color-lavender)" strokeWidth="2" />
      </svg>
      <span className="absolute top-6 left-6 rotate-[38deg] rounded-full bg-lavender px-6 py-3 text-violet">#lernen</span>
      <span className="absolute top-8 right-2 rotate-[10deg] rounded-full bg-sun px-6 py-3 text-ink">#staunen</span>
      <span className="absolute bottom-6 left-20 -rotate-[8deg] rounded-full bg-violet px-6 py-3 text-white">#tauschen</span>
    </div>
  );
}

/** Wavy blob shape used in the feature cards. */
export function Blob({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 140" className={className} aria-hidden>
      <path
        d="M20 110c-24-30 6-62 32-48 6-34 46-38 56-10 14-30 54-24 54 8 30-6 44 26 30 50-40 38-140 36-172 0z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Dots({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 160" className={className} aria-hidden>
      {Array.from({ length: 4 * 5 }, (_, i) => (
        <circle key={i} cx={15 + (i % 4) * 30} cy={15 + Math.floor(i / 4) * 30} r="7" fill="white" opacity="0.8" />
      ))}
    </svg>
  );
}

/** Scalloped "sticker" badge holding an icon. */
export function Sticker({ children, bg = "white" }: { children: React.ReactNode; bg?: string }) {
  const points = Array.from({ length: 24 }, (_, i) => {
    const angle = (i / 24) * Math.PI * 2;
    const r = i % 2 === 0 ? 48 : 43;
    return `${50 + r * Math.cos(angle)},${50 + r * Math.sin(angle)}`;
  }).join(" ");
  return (
    <div className="relative h-24 w-24">
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden>
        <polygon points={points} fill={bg} strokeLinejoin="round" />
      </svg>
      <div className="relative flex h-full w-full items-center justify-center">{children}</div>
    </div>
  );
}
