import Link from "next/link";
import { Logo } from "./Decorations";

export function SimplePage({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-lavender-soft px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-2xl">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" aria-label="Zur Startseite">
            <Logo />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-violet bg-white px-5 py-2.5 text-violet transition hover:bg-violet hover:text-white"
          >
            <span aria-hidden>←</span> Zur Startseite
          </Link>
        </div>
        <div className="mt-10 rounded-[2rem] bg-white p-8 sm:p-12">{children}</div>
      </div>
    </div>
  );
}
