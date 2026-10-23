import Link from "next/link";
import { AgeCarousel } from "./AgeCarousel";
import { ArtTile } from "./BookArt";
import { Blob, Dots, Logo, Rings, Sticker } from "./Decorations";
import { Faq } from "./Faq";
import { SignupForm } from "./SignupForm";
import { VoucherCta } from "./VoucherCta";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-violet uppercase">{children}</p>;
}

export function Pain() {
  const items = [
    {
      emoji: "🔁",
      title: "«Nochmals!»",
      text: "Zum zwanzigsten Mal die gleiche Raupe, der gleiche Bagger. Du kennst jede Seite auswendig – und hättest so gerne mal etwas Neues.",
    },
    {
      emoji: "💸",
      title: "Neue Bücher gehen ins Geld",
      text: "Ein gutes Kinderbuch kostet schnell CHF 15–20. Und nach ein paar Wochen ist dein Kind schon wieder einen Schritt weiter.",
    },
    {
      emoji: "📚",
      title: "Das Regal platzt",
      text: "Bücher stapeln sich, die Hälfte ist angeknabbert oder zu klein geworden. Wohin damit?",
    },
  ];

  return (
    <section className="px-4 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
          <h2 className="font-serif text-5xl leading-tight font-medium sm:text-6xl">
            Kennst du <em className="font-bold text-violet">das?</em>
          </h2>
          <p className="text-lg text-muted lg:justify-self-end lg:text-right">
            Kinder lernen mit jedem neuen Buch dazu: neue Wörter, neue Bilder, neue Ideen. Nur – ständig neue Bücher
            kaufen? Das muss nicht sein.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="rounded-[2rem] border border-lavender bg-white p-8">
              <span className="text-4xl" aria-hidden>
                {item.emoji}
              </span>
              <h3 className="mt-5 text-2xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Special() {
  return (
    <section className="px-4 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-serif text-5xl leading-tight font-medium sm:text-6xl">
          Was Buky <em className="font-bold text-violet">besonders</em> macht
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <article className="relative overflow-hidden rounded-[2rem] bg-lavender p-8 sm:p-10">
            <Blob className="absolute -top-2 -right-10 w-48 text-[#9d78ff]" />
            <Sticker>
              <span className="text-4xl" aria-hidden>
                🧸
              </span>
            </Sticker>
            <h3 className="mt-8 font-serif text-4xl leading-tight font-semibold">
              <em>Gebrauchsspuren</em>
              <br />
              inklusive
            </h3>
            <p className="mt-5 text-lg text-ink/75">
              Angeknabbert, zerknickt, bekritzelt? Kinderbücher sehen schnell nicht mehr wie neu aus – das decken wir ab.
              Dein Kind darf mit den Büchern umgehen, als wären es seine eigenen.
            </p>
          </article>

          <article className="relative overflow-hidden rounded-[2rem] bg-blush p-8 sm:p-10">
            <Rings className="absolute -top-4 -right-6 w-52" color="rgba(255,255,255,0.75)" />
            <Sticker bg="var(--color-rose)">
              <span className="text-4xl" aria-hidden>
                🌱
              </span>
            </Sticker>
            <h3 className="mt-8 font-serif text-4xl leading-tight font-semibold">
              <em>Immer</em>
              <br />
              Neues lernen
            </h3>
            <p className="mt-5 text-lg text-ink/75">
              Jeden Monat neue Geschichten, Wörter und Bilder. Für dich Abwechslung beim Vorlesen, für dein Kind neue
              Impulse zur richtigen Zeit.
            </p>
          </article>

          <article className="relative overflow-hidden rounded-[2rem] bg-sun p-8 sm:p-10">
            <Dots className="absolute top-4 right-4 w-28" />
            <Sticker>
              <span className="text-4xl" aria-hidden>
                🎯
              </span>
            </Sticker>
            <h3 className="mt-8 font-serif text-4xl leading-tight font-semibold">
              <em>Passend</em>
              <br />
              zum Alter
            </h3>
            <p className="mt-5 text-lg text-ink/75">
              Wir wählen Bücher aus, die zum Entwicklungsstand deines Kindes passen – und wachsen mit, wenn es grösser
              wird.
            </p>
          </article>
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#anmelden"
            className="inline-flex items-center gap-3 rounded-full bg-violet px-10 py-4 font-semibold text-white transition hover:bg-violet-dark"
          >
            Ich will Buky
            <span aria-hidden>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    {
      n: "1",
      title: "Anmelden & Alter angeben",
      text: "Du sagst uns, wie alt dein Kind ist. Wir stellen eine passende Bücherbox zusammen.",
      bg: "bg-lavender",
    },
    {
      n: "2",
      title: "Die Box kommt per Post",
      text: "Neue Bücher landen bei dir im Briefkasten – bereit zum Anschauen, Vorlesen und Liebhaben.",
      bg: "bg-blush",
    },
    {
      n: "3",
      title: "Tauschen statt stapeln",
      text: "Nach einem Monat gehen die Bücher in der gleichen Box zurück – die Rücksende-Etikette liegt bei. Und die nächste Box ist schon unterwegs.",
      bg: "bg-sun",
    },
  ];

  return (
    <section id="so-gehts" className="scroll-mt-8 bg-lavender-soft px-4 py-20 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <Eyebrow>So geht&apos;s</Eyebrow>
          <h2 className="font-serif text-5xl leading-tight font-medium sm:text-6xl">
            Drei Schritte zu <em className="font-bold text-violet">neuen Lieblingsbüchern</em>
          </h2>
          <ol className="mt-10 space-y-6">
            {steps.map((s) => (
              <li key={s.n} className="flex gap-5">
                <span
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full font-serif text-2xl font-bold ${s.bg}`}
                >
                  {s.n}
                </span>
                <div>
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                  <p className="mt-1 text-muted">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <ArtTile variant="box" bg="var(--color-lavender)" className="aspect-square w-full max-w-xl justify-self-center" />
      </div>
    </section>
  );
}

export function Ages() {
  return (
    <section id="altersgruppen" className="scroll-mt-8 overflow-hidden px-4 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-8 lg:grid-cols-2 lg:items-end">
          <h2 className="font-serif text-5xl leading-tight font-medium sm:text-6xl">
            Bücher für
            <br />
            <em className="font-bold text-violet">jedes Alter</em>
          </h2>
          <p className="text-lg text-muted">
            Babys wollen fühlen und greifen, Kleinkinder benennen und nachplappern, Kindergartenkinder hören gespannt
            Geschichten zu. Buky wächst mit deinem Kind mit – Monat für Monat.
          </p>
        </div>
        <AgeCarousel />
      </div>
    </section>
  );
}

export function Voucher() {
  return (
    <section id="gutschein" className="scroll-mt-8 px-4 py-20 sm:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-sun px-6 py-14 sm:px-14">
        <Dots className="absolute top-6 right-6 hidden w-32 sm:block" />
        <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Gutscheine</Eyebrow>
            <h2 className="font-serif text-5xl leading-tight font-medium sm:text-6xl">
              Ein Geschenk, das <em className="font-bold text-violet">mitwächst</em>
            </h2>
            <p className="mt-6 max-w-lg text-lg text-ink/75">
              Zur Geburt, zum ersten Geburtstag oder einfach so: Mit einem Buky-Gutschein schenkst du monatelang neue
              Bücher – statt eines weiteren Spielzeugs, das im Schrank verschwindet.
            </p>
            <div className="mt-8">
              <VoucherCta />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <ArtTile variant="open" bg="var(--color-lavender)" className="aspect-square" />
            <ArtTile variant="board" bg="var(--color-blush)" className="aspect-square translate-y-8" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-8 px-4 py-20 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_2fr]">
        <h2 className="font-serif text-5xl leading-tight font-medium sm:text-6xl">
          Häufige
          <br />
          <em className="font-bold text-[#2c2370]">Fragen</em>
        </h2>
        <Faq />
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="px-4 py-20 sm:px-8">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[2.5rem] bg-violet px-6 py-16 text-center text-white sm:px-14">
        <Rings className="absolute -top-16 -left-16 w-56 opacity-30" color="#fff" />
        <Rings className="absolute -right-16 -bottom-16 w-56 opacity-30" color="var(--color-mustard)" />
        <h2 className="relative font-serif text-4xl leading-tight font-medium sm:text-5xl">
          Bereit für <em className="font-bold text-sun">neue Geschichten?</em>
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-white/80">
          Buky startet bald in der Schweiz. Trag dich ein und erfahre als Erstes, wann die ersten Bücherboxen
          verschickt werden.
        </p>
        <SignupForm source="final-cta" buttonLabel="Ich bin dabei" onDark className="relative mx-auto mt-8 max-w-xl text-left" />
      </div>
    </section>
  );
}

export function Footer({ showAges = true }: { showAges?: boolean }) {
  return (
    <footer className="px-4 pb-4 sm:px-8">
      <div className="mx-auto max-w-7xl rounded-t-[2.5rem] bg-lavender px-6 pt-14 pb-8 sm:px-14">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-ink/75">
              Jeden Monat neue Kinderbücher – zum Entdecken, Lernen und Liebhaben. Ohne Bücherberg.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Buky</h3>
            <ul className="mt-4 space-y-3 text-ink/75">
              <li><a href="#so-gehts" className="hover:text-violet">So geht&apos;s</a></li>
              {showAges && <li><a href="#altersgruppen" className="hover:text-violet">Altersgruppen</a></li>}
              <li><a href="#gutschein" className="hover:text-violet">Gutscheine</a></li>
              <li><a href="#faq" className="hover:text-violet">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Rechtliches</h3>
            <ul className="mt-4 space-y-3 text-ink/75">
              <li><Link href="/impressum" className="hover:text-violet">Impressum</Link></li>
              <li><Link href="/datenschutz" className="hover:text-violet">Datenschutz</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-ink/10 pt-6 text-sm text-ink/60">
          © 2026 Buky. Mit Liebe in der Schweiz gemacht.
        </div>
      </div>
    </footer>
  );
}
