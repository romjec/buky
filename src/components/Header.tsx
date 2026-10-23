import { Logo } from "./Decorations";

export function Header() {
  return (
    <header className="px-4 pt-4 sm:px-8 lg:pt-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-black/5 bg-white/80 px-5 py-3 shadow-[0_2px_20px_-8px_rgba(0,0,0,0.12)] backdrop-blur sm:px-8 lg:justify-center lg:border-0 lg:bg-transparent lg:shadow-none">
        <a href="#top" aria-label="Buky – zum Seitenanfang">
          <Logo />
        </a>
        <a
          href="#anmelden"
          className="inline-flex items-center gap-3 rounded-full bg-violet px-5 py-3 font-semibold text-white transition hover:bg-violet-dark sm:px-6 lg:hidden"
        >
          Dabei sein
        </a>
      </nav>
    </header>
  );
}
