import type { Metadata } from "next";
import { SimplePage } from "@/components/SimplePage";

export const metadata: Metadata = { title: "Datenschutz – Buky" };

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="pt-4 text-lg font-semibold text-ink">{children}</h2>;
}

export default function DatenschutzPage() {
  return (
    <SimplePage>
      <h1 className="font-serif text-4xl font-semibold">Datenschutz</h1>
      {/* Entwurf – vor dem Start des Verkaufs juristisch prüfen lassen */}
      <div className="mt-6 space-y-4 text-muted">
        <p>
          Ich nehme den Schutz deiner Daten ernst und bearbeite sie gemäss dem Schweizer Datenschutzgesetz (DSG). Hier
          erfährst du, welche Daten diese Website bearbeitet und wozu.
        </p>

        <H2>Verantwortlich</H2>
        <p>
          Roman Jeckelmann, Schweiz
          <br />
          E-Mail:{" "}
          <a href="mailto:roman.jeckelmann@gmail.com" className="text-violet underline underline-offset-4">
            roman.jeckelmann@gmail.com
          </a>
        </p>

        <H2>Warteliste und Umfrage</H2>
        <p>
          Wenn du dich für Buky oder für Buky-Gutscheine einträgst, speichere ich deine E-Mail-Adresse, wofür du dich
          interessierst (Abo oder Gutschein), den Zeitpunkt der Anmeldung und – falls du über einen Kampagnenlink kommst
          – die Kampagnenparameter (z. B. «instagram») sowie die Website, von der du gekommen bist (z. B.
          «google.com»). Diese Herkunftsangaben werden nur für die Dauer deines Besuchs im Browser-Tab
          zwischengespeichert (sessionStorage) und beim Schliessen des Tabs automatisch gelöscht. Freiwillig kannst du drei kurze Fragen beantworten (Alter des
          Kindes, gewünschte Anzahl Bücher, Preisvorstellung). Namen oder Angaben zur Identität deines Kindes werden
          nicht erfasst.
        </p>
        <p>
          Nach der Anmeldung erhältst du eine E-Mail mit einem Bestätigungslink (Double-Opt-in). So stelle ich sicher,
          dass niemand fremde Adressen einträgt.
        </p>

        <H2>Zweck</H2>
        <p>
          Die Daten dienen ausschliesslich dazu, dich über den Start von Buky bzw. der Gutscheine zu informieren und
          herauszufinden, ob und in welcher Form das Angebot für Familien interessant ist. Ich verkaufe deine Daten
          nicht und verwende sie nicht für Werbung Dritter.
        </p>

        <H2>Besucherstatistik</H2>
        <p>
          Um zu verstehen, wie die Website genutzt wird (z. B. Seitenaufrufe, Klicks auf Buttons, Anmeldungen), setze
          ich PostHog ein. PostHog wird <strong className="text-ink">ohne Cookies</strong> und ohne Speicherung im
          Browser betrieben; ein Besuch kann deshalb nicht über mehrere Tage hinweg wiedererkannt werden. Die Daten
          werden auf Servern in der EU verarbeitet.
        </p>

        <H2>Dienstleister</H2>
        <p>Für den Betrieb der Website nutze ich folgende Dienstleister, die Daten in meinem Auftrag bearbeiten:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-ink">Vercel</strong> (Hosting, USA): Beim Aufruf der Website werden technisch
            notwendige Daten wie IP-Adresse, Browsertyp und Zeitpunkt in Server-Logs verarbeitet.
          </li>
          <li>
            <strong className="text-ink">Supabase</strong> (Datenbank, Serverstandort EU): Speicherung der Warteliste
            und der Umfrage-Antworten.
          </li>
          <li>
            <strong className="text-ink">Resend</strong> (E-Mail-Versand, USA): Versand der Bestätigungs-E-Mail.
          </li>
          <li>
            <strong className="text-ink">PostHog</strong> (Besucherstatistik, Serverstandort EU).
          </li>
        </ul>
        <p>
          Werden Daten in die USA übermittelt, geschieht dies auf Grundlage des Swiss-U.S. Data Privacy Framework bzw.
          der Standardvertragsklauseln, die ein angemessenes Datenschutzniveau sicherstellen sollen.
        </p>

        <H2>Aufbewahrung</H2>
        <p>
          Deine Daten bleiben gespeichert, bis du dich abmeldest, oder höchstens so lange, wie der Test des Angebots
          läuft. Wird Buky nicht umgesetzt, lösche ich die Warteliste.
        </p>

        <H2>Deine Rechte</H2>
        <p>
          Du kannst jederzeit Auskunft über deine gespeicherten Daten verlangen, sie berichtigen oder löschen lassen und
          deine Einwilligung widerrufen. Eine kurze E-Mail an{" "}
          <a href="mailto:roman.jeckelmann@gmail.com" className="text-violet underline underline-offset-4">
            roman.jeckelmann@gmail.com
          </a>{" "}
          genügt. Bist du mit der Bearbeitung nicht einverstanden, kannst du dich an den Eidgenössischen Datenschutz-
          und Öffentlichkeitsbeauftragten (EDÖB) wenden.
        </p>

        <p className="pt-4 text-sm">Stand: Oktober 2026</p>
      </div>
    </SimplePage>
  );
}
