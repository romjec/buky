import type { Metadata } from "next";
import Link from "next/link";
import { SimplePage } from "@/components/SimplePage";

export const metadata: Metadata = { title: "Danke! – Buky" };

export default function DankePage() {
  return (
    <SimplePage>
      <p className="text-5xl" aria-hidden>
        📚
      </p>
      <h1 className="mt-4 font-serif text-4xl font-semibold">
        Danke, <em className="text-violet">du bist dabei!</em>
      </h1>
      <p className="mt-4 text-muted">
        Deine E-Mail-Adresse ist bestätigt. Wir melden uns, sobald Buky startet – versprochen, ohne Spam.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full bg-violet px-7 py-3 font-semibold text-white hover:bg-violet-dark"
      >
        Zurück zur Startseite
      </Link>
    </SimplePage>
  );
}
