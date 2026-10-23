import { Resend } from "resend";

type Interest = "abo" | "gutschein";

const COPY: Record<Interest, { button: string; teaser: string[] }> = {
  abo: {
    button: "E-Mail bestätigen",
    teaser: [
      "📦 <b>Ob und wann Buky startet</b> – du erfährst es zuerst.",
      "💸 <b>Die Preise</b> – sobald sie feststehen, bekommst du sie als Erstes.",
      "🗳️ <b>Du redest mit:</b> Welche Bücher, wie viele, wie oft. Wir fragen dich, bevor wir es festlegen.",
    ],
  },
  gutschein: {
    button: "E-Mail bestätigen",
    teaser: [
      "🎁 <b>Ob und wann es Buky-Gutscheine gibt</b> – perfekt zur Geburt oder zum Geburtstag.",
      "💸 <b>Was die Gutscheine kosten</b> – du erfährst es zuerst.",
      "🗳️ <b>Du redest mit:</b> 3, 6 oder 12 Monate? Wir fragen dich, bevor wir es festlegen.",
    ],
  },
};

function html(confirmUrl: string, interest: Interest) {
  const { button, teaser } = COPY[interest];
  return `
  <div style="display:none;max-height:0;overflow:hidden">Bitte bestätige deine E-Mail-Adresse, damit wir dich auf dem Laufenden halten dürfen.</div>
  <div style="font-family:Arial,Helvetica,sans-serif;max-width:520px;margin:auto;padding:24px;color:#26213a;font-size:16px;line-height:1.55">
    <p style="font-family:Georgia,serif;font-style:italic;font-size:26px;font-weight:bold;margin:0 0 24px">Bu<span style="color:#6e4ee6">ky</span></p>
    <h1 style="font-family:Georgia,serif;color:#6e4ee6;font-size:30px;line-height:1.2;margin:0 0 16px">Danke für dein Interesse! 🎉</h1>
    <p style="margin:0 0 12px">Schön, dass du dich für Buky interessierst. Wir prüfen gerade, ob sich genug Familien ein Bücher-Abo für ihre Kinder wünschen – deine Anmeldung hilft uns dabei sehr.</p>
    <p style="margin:0 0 28px">Bitte bestätige kurz deine E-Mail-Adresse, damit wir dich auf dem Laufenden halten dürfen.</p>
    <p style="margin:0 0 32px">
      <a href="${confirmUrl}" style="display:inline-block;background:#6e4ee6;color:#ffffff;padding:16px 30px;border-radius:999px;text-decoration:none;font-weight:bold;font-size:17px">${button}</a>
    </p>
    <p style="margin:0 0 12px"><b>Was dich danach erwartet:</b></p>
    <ul style="margin:0 0 24px;padding-left:20px">
      ${teaser.map((t) => `<li style="margin:0 0 10px">${t}</li>`).join("")}
    </ul>
    <p style="margin:0 0 4px">Bis bald und viel Spass beim (Vor-)Lesen!</p>
    <p style="margin:0">Roman<br><span style="color:#6f6886">Familienvater &amp; Gründer von Buky</span></p>
  </div>`;
}

function text(confirmUrl: string, interest: Interest) {
  const { teaser } = COPY[interest];
  return [
    "Danke für dein Interesse! 🎉",
    "",
    "Schön, dass du dich für Buky interessierst. Wir prüfen gerade, ob sich genug Familien ein Bücher-Abo für ihre Kinder wünschen – deine Anmeldung hilft uns dabei sehr.",
    "",
    "Bitte bestätige kurz deine E-Mail-Adresse, damit wir dich auf dem Laufenden halten dürfen:",
    "",
    confirmUrl,
    "",
    "Was dich danach erwartet:",
    ...teaser.map((t) => `- ${t.replace(/<\/?b>/g, "")}`),
    "",
    "Bis bald!",
    "Roman, Familienvater & Gründer von Buky",
  ].join("\n");
}

export async function sendConfirmationMail(to: string, confirmUrl: string, interest: Interest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.info(`[mail] RESEND_API_KEY fehlt – Bestätigungslink für ${to}: ${confirmUrl}`);
    return;
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: process.env.RESEND_FROM ?? "Buky <onboarding@resend.dev>",
    to,
    subject: "Bitte bestätige deine Anmeldung bei Buky 📚",
    html: html(confirmUrl, interest),
    text: text(confirmUrl, interest),
  });
  // Resend wirft keine Exception, sondern liefert den Fehler zurück (z. B. Domain nicht verifiziert).
  if (error) throw new Error(`Resend: ${error.name} – ${error.message}`);
}
