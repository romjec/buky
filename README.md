# Buky – Landing Page

Landing Page, um das Interesse an Buky zu testen: ein Bücher-Abo für Familien mit kleinen Kindern. Jeden Monat kommen neue Bücher, die alten gehen zurück.
Die Seite zeigt **keine Preise**. Gesammelt werden nur E-Mail-Adressen, ausserdem gibt es eine kurze, freiwillige Umfrage und einen **Fake-Door-Test für Gutscheine**.

## Tech-Stack

- **Next.js 16** (App Router) + **Tailwind CSS 4**
- **Supabase**: Tabelle `waitlist` (siehe `supabase/migrations/0001_waitlist.sql`)
- **Resend**: Double-Opt-in-Mail
- **PostHog** (EU-Cloud, Free Tier): Analytics ohne Cookies (`persistence: "memory"`)
- Hosting: **Vercel**

## Lokal starten

```bash
npm install
cp .env.example .env.local   # Werte eintragen (optional, siehe unten)
npm run dev
```

Ohne Supabase-, Resend- oder PostHog-Keys läuft alles im „Dev-Modus“: Anmeldungen und Bestätigungslinks werden nur in der Konsole ausgegeben.

## Setup für Live

1. **Supabase**: Projekt erstellen (Region EU, z. B. Frankfurt/Zürich) und das SQL aus `supabase/migrations/0001_waitlist.sql` im SQL-Editor ausführen. Danach `SUPABASE_URL` und `SUPABASE_SERVICE_ROLE_KEY` setzen.
2. **Resend**: Domain verifizieren, dann `RESEND_API_KEY` und `RESEND_FROM` setzen.
3. **PostHog**: EU-Projekt anlegen und `NEXT_PUBLIC_POSTHOG_KEY` setzen.
4. **Vercel**: Repo importieren, die Env-Variablen setzen und `NEXT_PUBLIC_SITE_URL` auf die echte Domain stellen.
5. In `src/app/impressum/page.tsx` die echten Angaben eintragen und die Datenschutzerklärung prüfen lassen.

## Was gemessen wird

| Event (PostHog)       | Bedeutung                                           |
| --------------------- | --------------------------------------------------- |
| `$pageview`           | Besuch                                              |
| `signup_submitted`    | E-Mail eingetragen (`interest`: abo / gutschein, `source`: hero / final-cta / voucher-modal) |
| `voucher_cta_clicked` | Klick auf «Gutschein verschenken» (Fake Door)       |
| `survey_completed`    | Umfrage ausgefüllt (Alter, Anzahl Bücher, Zahlungsbereitschaft) |
| `faq_opened`          | Welche Fragen die Leute interessieren               |

In Supabase steht pro Anmeldung zusätzlich `confirmed_at` (Double-Opt-in), die Umfrage-Antworten und die UTM-Parameter.
Kampagnen am besten mit `?utm_source=instagram&utm_campaign=...` verlinken.

## A/B-Test der Startseite

- **A** = `src/app/page.tsx` (ursprüngliche Seite), **B** = `src/app/b/page.tsx` (kompakt, Vorher/Nachher, Gründer-Story)
- `src/proxy.ts` teilt Besucher von `/` 50/50 zu und merkt sich die Variante 30 Tage im Cookie `buky-variant`. Die URL bleibt `/`.
- Variante gezielt anschauen: `/?variante=a` oder `/?variante=b` (setzt das Cookie neu)
- Jedes PostHog-Event hat die Eigenschaft `variant`, jede Anmeldung in Supabase die Spalte `variant`
  (`supabase/migrations/0003_waitlist_variant.sql`).

Auswertung in Supabase:

```sql
select variant, count(*) as anmeldungen, count(confirmed_at) as bestaetigt
from waitlist where interest = 'abo' group by variant;
```

## Bilder

Die Collage nutzt vorerst illustrierte Platzhalter (`src/components/BookArt.tsx`). Echte Fotos kommen nach `public/images/` und werden mit `next/image` eingebunden.
