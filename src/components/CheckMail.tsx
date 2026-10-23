const WEBMAIL: Record<string, { label: string; url: string }> = {
  "gmail.com": { label: "Gmail öffnen", url: "https://mail.google.com" },
  "googlemail.com": { label: "Gmail öffnen", url: "https://mail.google.com" },
  "outlook.com": { label: "Outlook öffnen", url: "https://outlook.live.com/mail" },
  "hotmail.com": { label: "Outlook öffnen", url: "https://outlook.live.com/mail" },
  "hotmail.ch": { label: "Outlook öffnen", url: "https://outlook.live.com/mail" },
  "live.com": { label: "Outlook öffnen", url: "https://outlook.live.com/mail" },
  "icloud.com": { label: "iCloud Mail öffnen", url: "https://www.icloud.com/mail" },
  "me.com": { label: "iCloud Mail öffnen", url: "https://www.icloud.com/mail" },
  "gmx.ch": { label: "GMX öffnen", url: "https://www.gmx.ch" },
  "gmx.net": { label: "GMX öffnen", url: "https://www.gmx.net" },
  "yahoo.com": { label: "Yahoo Mail öffnen", url: "https://mail.yahoo.com" },
  "proton.me": { label: "Proton Mail öffnen", url: "https://mail.proton.me" },
  "protonmail.com": { label: "Proton Mail öffnen", url: "https://mail.proton.me" },
};

function webmailFor(email: string) {
  return WEBMAIL[email.split("@")[1]?.toLowerCase() ?? ""];
}

function Envelope({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <rect x="6" y="14" width="52" height="38" rx="8" fill="var(--color-sun)" />
      <path d="M8 18l24 18 24-18" fill="none" stroke="var(--color-ink)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="52" cy="14" r="9" fill="var(--color-rose)" />
      <path d="M52 9v6M52 18.5v.5" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

/** Auffälliger Hinweis: Anmeldung ist erst nach Klick auf den Bestätigungslink gültig. */
export function CheckMail({
  email,
  titleId,
  onClose,
  className = "",
}: {
  email: string;
  titleId?: string;
  onClose?: () => void;
  className?: string;
}) {
  const webmail = webmailFor(email);

  return (
    <div role="status" className={`rounded-[2rem] bg-violet p-6 text-white sm:p-8 ${className}`}>
      <div className="flex items-start gap-4">
        <Envelope className="h-14 w-14 shrink-0 animate-bounce [animation-iteration-count:3]" />
        <div className="min-w-0">
          <p className="text-xs font-semibold tracking-[0.2em] text-sun uppercase">Letzter Schritt</p>
          <h2 id={titleId} className="mt-1 font-serif text-2xl leading-tight font-semibold sm:text-3xl">
            Bitte bestätige jetzt <em className="whitespace-nowrap text-sun">deine E-Mail</em>
          </h2>
        </div>
      </div>
      <p className="mt-4 text-white/90">
        Wir haben dir einen Bestätigungslink an <strong className="text-white [overflow-wrap:anywhere]">{email}</strong> geschickt.{" "}
        <strong className="text-white">Erst nach dem Klick auf den Link bist du auf der Liste.</strong>
      </p>
      <p className="mt-2 text-sm text-white/75">Keine E-Mail da? Schau bitte auch im Spam- oder Werbung-Ordner nach.</p>
      {(webmail || onClose) && (
        <div className="mt-6 flex flex-wrap items-center gap-3">
          {webmail && (
            <a
              href={webmail.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-violet transition hover:bg-sun hover:text-ink"
            >
              {webmail.label} <span aria-hidden>↗</span>
            </a>
          )}
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-white/50 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Verstanden
            </button>
          )}
        </div>
      )}
    </div>
  );
}
