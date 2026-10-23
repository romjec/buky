"use client";

import { useId, useState } from "react";
import { track } from "@/lib/analytics";
import type { Interest } from "@/lib/validation";
import { Modal } from "./Modal";
import { Survey } from "./Survey";

type Status = "idle" | "loading" | "survey" | "done" | "error";

function utmParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get("utm_source"),
    utm_medium: params.get("utm_medium"),
    utm_campaign: params.get("utm_campaign"),
  };
}

export function SignupForm({
  source,
  interest = "abo",
  buttonLabel = "Ich bin dabei",
  withSurvey = true,
  onDark = false,
  className = "",
}: {
  source: string;
  interest?: Interest;
  buttonLabel?: string;
  withSurvey?: boolean;
  onDark?: boolean;
  className?: string;
}) {
  const id = useId();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [surveyToken, setSurveyToken] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, interest, source, company: form.get("company"), ...utmParams() }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Fehler");

      track("signup_submitted", { interest, source });
      setSurveyToken(data.surveyToken);
      setStatus(withSurvey ? "survey" : "done");
    } catch (err) {
      track("signup_failed", { interest, source });
      setError(err instanceof Error ? err.message : "Da ist etwas schiefgelaufen.");
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div role="status" className={`rounded-[1.75rem] bg-lavender-soft p-5 ${className}`}>
        <p className="font-serif text-xl font-semibold">
          Danke! <span className="text-violet italic">Fast geschafft.</span>
        </p>
        <p className="mt-1 text-sm text-muted">
          Wir haben dir eine E-Mail geschickt. Bitte bestätige deine Adresse – dann halten wir dich auf dem Laufenden.
        </p>
      </div>
    );
  }

  return (
    <>
      <form onSubmit={onSubmit} className={className} noValidate>
        <div className="flex flex-col gap-2 rounded-[1.75rem] border border-lavender bg-white p-2 shadow-[0_8px_30px_-12px_rgba(110,78,230,0.35)] sm:flex-row sm:rounded-full">
          <label htmlFor={`${id}-email`} className="sr-only">
            E-Mail-Adresse
          </label>
          <input
            id={`${id}-email`}
            type="email"
            required
            autoComplete="email"
            placeholder="deine@email.ch"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={status === "error"}
            aria-describedby={error ? `${id}-error` : undefined}
            className="min-w-0 flex-1 rounded-full bg-transparent px-5 py-3 text-base outline-none placeholder:text-muted/70"
          />
          {/* Honeypot gegen Spam-Bots */}
          <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex items-center justify-center gap-3 rounded-full bg-violet px-6 py-3 font-semibold text-white transition hover:bg-violet-dark disabled:opacity-60"
          >
            {status === "loading" ? "Einen Moment…" : buttonLabel}
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-violet">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M9 7h8v8" />
              </svg>
            </span>
          </button>
        </div>
        {error ? (
          <p id={`${id}-error`} className={`mt-2 pl-5 text-sm ${onDark ? "text-sun" : "text-rose"}`}>
            {error}
          </p>
        ) : (
          <p className={`mt-2 pl-5 text-xs ${onDark ? "text-white/75" : "text-muted"}`}>Kein Spam. Nur eine Nachricht, wenn Buky startet.</p>
        )}
      </form>

      {withSurvey && (
        <Modal open={status === "survey"} onClose={() => setStatus("done")} labelledBy={`${id}-survey-title`}>
          <p className="text-sm font-semibold tracking-widest text-violet uppercase">Du bist dabei 🎉</p>
          <h2 id={`${id}-survey-title`} className="mt-2 mb-2 font-serif text-3xl font-semibold">
            Hilf uns, Buky <span className="text-violet italic">für dich</span> zu bauen
          </h2>
          <p className="mb-6 text-sm text-muted">Drei kurze Fragen – freiwillig, dauert 20 Sekunden.</p>
          <Survey token={surveyToken} onDone={() => setStatus("done")} />
        </Modal>
      )}
    </>
  );
}
