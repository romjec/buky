import { Logo } from "./Decorations";

const LEFT = [
  { href: "#so-gehts", label: "So geht's" },
  { href: "#altersgruppen", label: "Altersgruppen" },
];
const RIGHT = [
  { href: "#gutschein", label: "Gutscheine" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  return (
    <header className="px-4 pt-4 sm:px-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-black/5 bg-white/80 px-5 py-3 shadow-[0_2px_20px_-8px_rgba(0,0,0,0.12)] backdrop-blur sm:px-8">
        <ul className="hidden flex-1 gap-10 text-lg lg:flex">
          {LEFT.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-violet">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#top" aria-label="Buky – zum Seitenanfang">
          <Logo />
        </a>
        <div className="flex flex-1 items-center justify-end gap-10">
          <ul className="hidden gap-10 text-lg lg:flex">
            {RIGHT.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-violet">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#anmelden"
            className="inline-flex items-center gap-3 rounded-full bg-violet px-5 py-3 font-semibold text-white transition hover:bg-violet-dark sm:px-6"
          >
            Dabei sein
            <span className="hidden h-6 w-6 items-center justify-center rounded-full bg-white text-violet sm:flex" aria-hidden>
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M9 7h8v8" />
              </svg>
            </span>
          </a>
        </div>
      </nav>
    </header>
  );
}
