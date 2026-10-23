"use client";

import { useState } from "react";
import { track } from "@/lib/analytics";

const QUESTIONS = [
  {
    key: "childAge",
    label: "Wie alt ist dein Kind?",
    options: ["Noch unterwegs", "0–1 Jahr", "1–2 Jahre", "2–3 Jahre", "3–4 Jahre", "Älter"],
  },
  {
    key: "booksPerMonth",
    label: "Wie viele neue Bücher pro Monat wären ideal?",
    options: ["2–3", "4–5", "6 oder mehr"],
  },
  {
    key: "willingness",
    label: "Was wäre dir das pro Monat wert?",
    options: ["Unter CHF 15", "CHF 15–25", "CHF 25–35", "Über CHF 35"],
  },
] as const;

type Answers = Partial<Record<(typeof QUESTIONS)[number]["key"], string>>;

export function Survey({ token, onDone }: { token: string | null; onDone: () => void }) {
  const [answers, setAnswers] = useState<Answers>({});
  const [sending, setSending] = useState(false);

  async function submit() {
    setSending(true);
    track("survey_completed", answers);
    if (token) {
      await fetch("/api/survey", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, ...answers }),
      }).catch(() => undefined);
    }
    onDone();
  }

  function skip() {
    track("survey_skipped");
    onDone();
  }

  return (
    <div className="space-y-6">
      {QUESTIONS.map((q) => (
        <fieldset key={q.key}>
          <legend className="mb-3 font-medium">{q.label}</legend>
          <div className="flex flex-wrap gap-2">
            {q.options.map((option) => {
              const active = answers[q.key] === option;
              return (
                <button
                  key={option}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setAnswers((a) => ({ ...a, [q.key]: option }))}
                  className={`rounded-full border px-4 py-2 text-sm transition ${
                    active
                      ? "border-violet bg-violet text-white"
                      : "border-lavender bg-white text-ink hover:border-violet"
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </fieldset>
      ))}
      <div className="flex flex-wrap items-center gap-4 pt-2">
        <button
          type="button"
          onClick={submit}
          disabled={sending || Object.keys(answers).length === 0}
          className="rounded-full bg-violet px-7 py-3 font-semibold text-white transition hover:bg-violet-dark disabled:opacity-50"
        >
          Antworten senden
        </button>
        <button type="button" onClick={skip} className="text-sm text-muted underline underline-offset-4">
          Überspringen
        </button>
      </div>
    </div>
  );
}
