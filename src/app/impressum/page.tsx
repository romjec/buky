import type { Metadata } from "next";
import { SimplePage } from "@/components/SimplePage";

export const metadata: Metadata = { title: "Impressum – Buky" };

export default function ImpressumPage() {
  return (
    <SimplePage>
      <h1 className="font-serif text-4xl font-semibold">Impressum</h1>
      {/* TODO: echte Angaben eintragen */}
      <div className="mt-6 space-y-2 text-muted">
        <p>Buky</p>
        <p>[Vorname Nachname]</p>
        <p>[Strasse Nr.]</p>
        <p>[PLZ Ort], Schweiz</p>
        <p>E-Mail: hallo@buky.ch</p>
      </div>
    </SimplePage>
  );
}
