"use client";

import { useState } from "react";
import { track } from "@/lib/analytics";

const ITEMS = [
  {
    q: "Für welches Alter ist Buky gedacht?",
    a: "Für Kinder von 0 bis 4 Jahren – von Fühl- und Pappbüchern für die Kleinsten bis zu ersten Vorlesegeschichten. Du gibst das Alter an, wir wählen passende Bücher aus.",
  },
  {
    q: "Was passiert, wenn ein Buch kaputt geht?",
    a: "Nichts! Kinderbücher werden angeknabbert, zerknickt und bekritzelt – das gehört dazu. Gebrauchsspuren und Schäden sind bei Buky abgedeckt. Dein Kind darf mit den Büchern umgehen, als wären es seine eigenen.",
  },
  {
    q: "Wie funktioniert der Tausch?",
    a: "Jeden Monat kommt eine neue Bücherbox per Post zu dir. Die Bücher aus dem Vormonat packst du in die gleiche Box, klebst die beiliegende Rücksende-Etikette drauf und gibst sie bei der Post ab.",
  },
  {
    q: "Sind die Bücher sauber?",
    a: "Ja. Jedes Buch wird nach der Rückgabe geprüft und gereinigt, bevor es zur nächsten Familie reist. Bücher, die zu stark gelitten haben, ersetzen wir.",
  },
  {
    q: "Was kostet Buky?",
    a: "Wir sind noch im Aufbau und legen die Preise gerade fest – als Abo oder als Prepaid für mehrere Monate. Trag dich ein und du erfährst es als Erstes.",
  },
  {
    q: "Kann ich jederzeit pausieren oder kündigen?",
    a: "Das ist unser Ziel: flexibel pausieren, wenn ihr in den Ferien seid, und unkompliziert kündigen, wenn es nicht mehr passt.",
  },
];

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <div>
      {ITEMS.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="border-b border-lavender">
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-${i}`}
                onClick={() => {
                  if (!isOpen) track("faq_opened", { question: item.q });
                  setOpen(isOpen ? -1 : i);
                }}
                className="flex w-full items-center justify-between gap-6 py-6 text-left text-lg sm:text-xl"
              >
                {item.q}
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-violet text-violet transition ${
                    isOpen ? "bg-violet/70 text-white" : ""
                  }`}
                  aria-hidden
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M5 12h14" />
                    {!isOpen && <path d="M12 5v14" />}
                  </svg>
                </span>
              </button>
            </h3>
            <div id={`faq-${i}`} hidden={!isOpen} className="pr-16 pb-6 text-muted">
              {item.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}
