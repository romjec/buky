import Link from "next/link";
import { Logo } from "./Decorations";

export function SimplePage({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-lavender-soft px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-2xl">
        <Link href="/" aria-label="Zur Startseite">
          <Logo />
        </Link>
        <div className="mt-10 rounded-[2rem] bg-white p-8 sm:p-12">{children}</div>
      </div>
    </div>
  );
}
