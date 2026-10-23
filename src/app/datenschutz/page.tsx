import type { Metadata } from "next";
import { SimplePage } from "@/components/SimplePage";

export const metadata: Metadata = { title: "Datenschutz – Buky" };

export default function DatenschutzPage() {
  return (
    <SimplePage>
      <h1 className="font-serif text-4xl font-semibold">Datenschutz</h1>
      {/* Entwurf – vor dem Livegang juristisch prüfen lassen */}
      <div className="mt-6 space-y-4 text-muted">
        <p>
          Wir nehmen den Schutz deiner Daten ernst und bearbeiten sie gemäss dem Schweizer Datenschutzgesetz (DSG).
        </p>
        <h2 className="pt-2 text-lg font-semibold text-ink">Welche Daten wir sammeln</h2>
        <p>
          Wenn du dich auf der Warteliste einträgst, speichern wir deine E-Mail-Adresse sowie – falls du sie angibst –
          deine Antworten auf unsere kurzen Fragen (Alter des Kindes, gewünschte Anzahl Bücher, Preisvorstellung).
        </p>
        <h2 className="pt-2 text-lg font-semibold text-ink">Wofür wir sie nutzen</h2>
        <p>
          Ausschliesslich, um dich über den Start von Buky zu informieren und unser Angebot zu verbessern. Wir geben
          deine Daten nicht an Dritte weiter und verkaufen sie nicht.
        </p>
        <h2 className="pt-2 text-lg font-semibold text-ink">Dienstleister</h2>
        <p>
          Die Daten werden bei Supabase (Datenbank) gespeichert, E-Mails werden über Resend verschickt. Für anonyme
          Besuchsstatistiken nutzen wir PostHog (EU-Server) ohne Cookies.
        </p>
        <h2 className="pt-2 text-lg font-semibold text-ink">Löschung</h2>
        <p>
          Verantwortlich ist Roman Jeckelmann. Eine kurze E-Mail an roman.jeckelmann@gmail.com genügt und wir löschen
          deine Daten.
        </p>
      </div>
    </SimplePage>
  );
}
