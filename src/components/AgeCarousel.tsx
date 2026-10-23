"use client";

import { useRef, useState } from "react";
import { ArtTile, type ArtVariant } from "./BookArt";

const AGES: { title: string; text: string; art: ArtVariant; bg: string }[] = [
  {
    title: "0–1 Jahr · Fühlen & Greifen",
    text: "Stabile Papp- und Stoffbücher mit Kontrasten, Fühlflächen und Klappen – gemacht zum Anfassen (und Anknabbern).",
    art: "bite",
    bg: "var(--color-blush)",
  },
  {
    title: "1–2 Jahre · Erste Wörter",
    text: "Bildwörterbücher und Tierbücher, die zum Zeigen, Benennen und Nachplappern einladen.",
    art: "board",
    bg: "var(--color-sun)",
  },
  {
    title: "2–3 Jahre · Kleine Geschichten",
    text: "Kurze Geschichten mit Alltagsthemen: Kita, Zähneputzen, Gefühle – und ganz viel Wimmeln.",
    art: "open",
    bg: "var(--color-lavender)",
  },
  {
    title: "3–4 Jahre · Vorlesen & Staunen",
    text: "Längere Vorlesegeschichten, erste Sachbücher und Bücher, die neugierig auf die Welt machen.",
    art: "shelf",
    bg: "#d7f0e6",
  },
];

export function AgeCarousel() {
  const scroller = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  function onScroll() {
    const el = scroller.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 1);
  }

  return (
    <div>
      <div
        ref={scroller}
        onScroll={onScroll}
        className="-mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-4 [scrollbar-width:none] sm:-mx-8 sm:px-8"
      >
        {AGES.map((age) => (
          <article key={age.title} className="w-[82%] shrink-0 snap-start sm:w-[46%] lg:w-[38%]">
            <ArtTile variant={age.art} bg={age.bg} className="aspect-[4/3]" />
            <h3 className="mt-5 text-xl font-semibold sm:text-2xl">{age.title}</h3>
            <p className="mt-2 text-muted">{age.text}</p>
          </article>
        ))}
      </div>
      <div className="mt-8 h-1 rounded-full bg-lavender-soft" aria-hidden>
        <div
          className="h-1 rounded-full bg-violet transition-[width]"
          style={{ width: `${Math.max(35, progress * 100)}%` }}
        />
      </div>
    </div>
  );
}
