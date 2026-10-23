import type { Metadata } from "next";
import { SimplePage } from "@/components/SimplePage";

export const metadata: Metadata = { title: "Impressum – Buky" };

export default function ImpressumPage() {
  return (
    <SimplePage>
      <h1 className="font-serif text-4xl font-semibold">Impressum</h1>
      <div className="mt-6 space-y-2 text-muted">
        <p className="font-semibold text-ink">Buky – ein Projekt von Roman Jeckelmann</p>
        <p>Familienvater</p>
        <p>
          E-Mail:{" "}
          <a href="mailto:roman.jeckelmann@gmail.com" className="text-violet underline underline-offset-4">
            roman.jeckelmann@gmail.com
          </a>
        </p>
        <p>Postadresse und Telefonnummer auf Anfrage per E-Mail.</p>
      </div>
    </SimplePage>
  );
}
