"use client";

import { useState } from "react";
import { track } from "@/lib/analytics";
import { Modal } from "./Modal";
import { SignupForm } from "./SignupForm";

/** Fake-Door-Test: Gutscheine gibt es noch nicht – wir messen nur das Interesse. */
export function VoucherCta() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          track("voucher_cta_clicked");
          setOpen(true);
        }}
        className="inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 font-semibold text-white transition hover:bg-violet"
      >
        Gutschein verschenken
        <span aria-hidden>🎁</span>
      </button>

      <Modal open={open} onClose={() => setOpen(false)} labelledBy="voucher-title">
        <p className="text-sm font-semibold tracking-widest text-violet uppercase">Fast bereit</p>
        <h2 id="voucher-title" className="mt-2 mb-3 font-serif text-3xl font-semibold">
          Buky-Gutscheine <span className="text-violet italic">kommen bald</span>
        </h2>
        <p className="mb-6 text-muted">
          Wir stellen die Gutscheine gerade zusammen. Hinterlasse deine E-Mail-Adresse und du erfährst als Erstes, wenn
          du einen Buky-Gutschein verschenken kannst.
        </p>
        <SignupForm source="voucher-modal" interest="gutschein" buttonLabel="Informiert mich" withSurvey={false} />
      </Modal>
    </>
  );
}
