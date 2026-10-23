import { ArtTile } from "./BookArt";
import { Faq, type FaqItem } from "./Faq";
import { SignupForm } from "./SignupForm";
import { VoucherCta } from "./VoucherCta";

function Check({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`h-5 w-5 shrink-0 ${className}`} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

function Cross({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`h-5 w-5 shrink-0 ${className}`} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" aria-hidden>
      <path d="M7 7l10 10M17 7L7 17" />
    </svg>
  );
}

export function HeroB() {
  return (
    <section id="top" className="px-4 pt-10 pb-16 sm:px-8 lg:pt-16">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
        <div id="anmelden" className="scroll-mt-8">
          <p className="text-sm font-semibold tracking-[0.2em] text-violet uppercase">Bücher-Abo für Kinder von 0–4</p>
          <h1 className="mt-4 font-serif text-[2.6rem] leading-[1.05] font-medium tracking-tight sm:text-6xl lg:text-7xl">
            Neue Kinderbücher jeden Monat. <em className="font-bold text-violet">Ohne sie zu kaufen.</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted sm:text-xl">
            Wir schicken dir Bücher, die zum Alter deines Kindes passen. Nach einem Monat gehen sie zurück – und neue
            kommen.
          </p>
          <SignupForm source="hero" buttonLabel="Neue Bücher für mein Kind" className="mt-8 max-w-xl" />
          <ul className="mt-6 flex flex-col gap-2 text-ink/80 sm:flex-row sm:flex-wrap sm:gap-x-6">
            {["Angeknabbert? Gehört dazu", "Rücksende-Etikette liegt bei", "Passend zum Alter"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Check className="text-violet" /> {t}
              </li>
            ))}
          </ul>
        </div>
        {/* Platzhalter – hier gehört ein echtes Foto hin (Kind mit Büchern) */}
        <ArtTile variant="board" bg="var(--color-lavender)" className="aspect-square w-full" />
      </div>
    </section>
  );
}

export function BeforeAfter() {
  const without = [
    "Zum 200. Mal das gleiche Buch – du kannst es auswendig",
    "CHF 15–20 pro Buch, nach ein paar Wochen ist es langweilig",
    "12 neue Bücher im Jahr kaufen ≈ CHF 180–240",
    "Angeknabberte Bücher und ein übervolles Regal",
  ];
  const withBuky = [
    "Jeden Monat neue Geschichten, Wörter und Bilder",
    "Ein fixer Betrag statt ständig neu kaufen",
    "Gebrauchsspuren sind abgedeckt – dein Kind darf Kind sein",
    "Das Regal bleibt leer, die Bücher reisen weiter",
  ];

  return (
    <section className="px-4 py-20 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-serif text-4xl leading-tight font-medium sm:text-5xl">
          Bücher kaufen <em className="font-bold text-violet">vs.</em> Buky
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] bg-blush/60 p-8">
            <h3 className="text-xl font-semibold">Ohne Buky 😩</h3>
            <ul className="mt-5 space-y-4">
              {without.map((t) => (
                <li key={t} className="flex gap-3 text-ink/80">
                  <Cross className="mt-0.5 text-rose" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[2rem] bg-violet p-8 text-white">
            <h3 className="text-xl font-semibold">Mit Buky 🥰</h3>
            <ul className="mt-5 space-y-4">
              {withBuky.map((t) => (
                <li key={t} className="flex gap-3 text-white/90">
                  <Check className="mt-0.5 text-sun" /> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function StepsB() {
  const steps = [
    { icon: "✍️", title: "Eintragen", text: "Alter des Kindes angeben – wir wählen passende Bücher." },
    { icon: "📦", title: "Box erhalten", text: "Jeden Monat kommen neue Bücher per Post." },
    { icon: "🔁", title: "Zurückschicken", text: "Alte Bücher in die Box, Etikette drauf, fertig." },
  ];

  return (
    <section id="so-gehts" className="scroll-mt-8 bg-lavender-soft px-4 py-20 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-serif text-4xl leading-tight font-medium sm:text-5xl">
          So <em className="font-bold text-violet">einfach</em> geht&apos;s
        </h2>
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className="rounded-[2rem] bg-white p-8 text-center">
              <span className="text-4xl" aria-hidden>
                {s.icon}
              </span>
              <h3 className="mt-4 text-xl font-semibold">
                {i + 1}. {s.title}
              </h3>
              <p className="mt-2 text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Founder() {
  return (
    <section className="px-4 py-20 sm:px-8">
      <div className="mx-auto max-w-3xl rounded-[2.5rem] bg-sun/60 p-8 sm:p-12">
        <div className="flex items-center gap-4">
          {/* Platzhalter – hier gehört ein Foto von Roman hin */}
          <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-violet font-serif text-3xl font-bold text-white">
            R
          </span>
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">Hi, ich bin Roman 👋</h2>
        </div>
        <div className="mt-6 space-y-4 text-lg text-ink/80">
          <p>
            Ich bin Familienvater – und kenne das: Die gleichen Bücher werden wieder und wieder angeschaut. Neue Bücher
            gehen schnell ins Geld und stehen nach ein paar Wochen im Regal. Dabei lernen Kinder mit jedem neuen Buch
            etwas dazu.
          </p>
          <p>
            Darum baue ich Buky. Kinder sollen mit Büchern umgehen dürfen, als wären es ihre eigenen – und trotzdem
            jeden Monat Neues entdecken. Es geht mir nicht ums grosse Geld, sondern darum, dass mehr Kinder mehr
            Bücher erleben.
          </p>
        </div>
        <p className="mt-6 font-serif text-xl italic">– Roman, Gründer von Buky</p>
      </div>
    </section>
  );
}

export function VoucherLine() {
  return (
    <section id="gutschein" className="scroll-mt-8 px-4 sm:px-8">
      <p className="mx-auto max-w-3xl rounded-full border border-lavender px-6 py-4 text-center text-lg">
        <span aria-hidden>🎁 </span>Geschenk zur Geburt oder zum Geburtstag? <VoucherCta appearance="link" />
      </p>
    </section>
  );
}

const FAQ_B: FaqItem[] = [
  {
    q: "Was, wenn mein Kind ein Buch kaputt macht?",
    a: "Gar nichts. Kinderbücher werden angeknabbert, zerknickt und bekritzelt – das gehört dazu und ist bei Buky abgedeckt.",
  },
  {
    q: "Wie hygienisch ist das?",
    a: "Jedes Buch wird nach der Rückgabe geprüft und gereinigt, bevor es zur nächsten Familie reist. Zu stark mitgenommene Bücher ersetzen wir.",
  },
  {
    q: "Was, wenn mein Kind ein Buch nicht mehr hergeben will?",
    a: "Kennen wir! Wir prüfen gerade, ob man Lieblingsbücher günstig übernehmen kann. Sag es uns gern nach der Anmeldung.",
  },
  {
    q: "Was kostet Buky?",
    a: "Wir legen die Preise gerade fest – als Abo oder Prepaid für mehrere Monate. Wer auf der Liste steht, erfährt es zuerst.",
  },
  {
    q: "Kann ich pausieren oder kündigen?",
    a: "Das ist unser Ziel: pausieren in den Ferien, unkompliziert kündigen, wenn es nicht mehr passt.",
  },
];

export function FaqB() {
  return (
    <section id="faq" className="scroll-mt-8 px-4 py-20 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-6 text-center font-serif text-4xl leading-tight font-medium sm:text-5xl">
          Noch <em className="font-bold text-violet">Fragen?</em>
        </h2>
        <Faq items={FAQ_B} />
      </div>
    </section>
  );
}
