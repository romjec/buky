import { Resend } from "resend";

type Interest = "abo" | "gutschein";

const COPY: Record<Interest, { button: string; teaser: string[] }> = {
  abo: {
    button: "Ja, ich will neue Bücher 📚",
    teaser: [
      "📦 <b>Wann die erste Bücherbox verschickt wird</b> – du erfährst es vor allen anderen.",
      "💸 <b>Die Preise</b> – zuerst hier, bevor sie irgendwo anders stehen.",
      "🗳️ <b>Du redest mit:</b> Welche Bücher, wie viele, wie oft. Wir fragen dich, bevor wir es festlegen.",
    ],
  },
  gutschein: {
    button: "Ja, informiert mich 🎁",
    teaser: [
      "🎁 <b>Wann du den ersten Buky-Gutschein verschenken kannst</b> – perfekt zur Geburt oder zum Geburtstag.",
      "💸 <b>Was die Gutscheine kosten</b> – du erfährst es zuerst.",
      "🗳️ <b>Du redest mit:</b> 3, 6 oder 12 Monate? Wir fragen dich, bevor wir es festlegen.",
    ],
  },
};

function html(confirmUrl: string, interest: Interest) {
  const { button, teaser } = COPY[interest];
  return `
  <div style="display:none;max-height:0;overflow:hidden">Ein Klick, dann bist du dabei. Versprochen, es tut nicht weh.</div>
  <div style="font-family:Arial,Helvetica,sans-serif;max-width:520px;margin:auto;padding:24px;color:#26213a;font-size:16px;line-height:1.55">
    <p style="font-family:Georgia,serif;font-style:italic;font-size:26px;font-weight:bold;margin:0 0 24px">Bu<span style="color:#6e4ee6">ky</span></p>
    <h1 style="font-family:Georgia,serif;color:#6e4ee6;font-size:30px;line-height:1.2;margin:0 0 16px">Fast geschafft! 🎉</h1>
    <p style="margin:0 0 12px">Danke, dass du dich für Buky interessierst. Bevor wir dir von neuen Kinderbüchern erzählen dürfen, brauchen wir nur noch eine Kleinigkeit von dir:</p>
    <p style="margin:0 0 28px"><b>Einen Klick.</b> Mehr nicht. Versprochen, es tut nicht weh.</p>
    <p style="margin:0 0 32px">
      <a href="${confirmUrl}" style="display:inline-block;background:#6e4ee6;color:#ffffff;padding:16px 30px;border-radius:999px;text-decoration:none;font-weight:bold;font-size:17px">${button}</a>
    </p>
    <p style="margin:0 0 12px"><b>Was dich danach erwartet:</b></p>
    <ul style="margin:0 0 24px;padding-left:20px">
      ${teaser.map((t) => `<li style="margin:0 0 10px">${t}</li>`).join("")}
    </ul>
    <p style="margin:0 0 4px">Bis bald und viel Spass beim (Vor-)Lesen!</p>
    <p style="margin:0 0 28px">Roman<br><span style="color:#6f6886">Familienvater &amp; Gründer von Buky</span></p>
    <p style="margin:0 0 24px;padding:14px 16px;background:#f3ecfe;border-radius:14px;font-size:14px">
      P.S. Falls dein Kind gerade an deinem Handy knabbert: Bei Buky-Büchern gehören Gebrauchsspuren dazu. Beim Handy leider nicht. 😅
    </p>
    <p style="font-size:12px;color:#7a7390;margin:0">Du hast dich nicht angemeldet? Dann ignoriere diese Mail einfach – ohne Klick hörst du nie wieder von uns. Ehrenwort. 🤞</p>
  </div>`;
}

function text(confirmUrl: string, interest: Interest) {
  const { teaser } = COPY[interest];
  return [
    "Fast geschafft! 🎉",
    "",
    "Danke, dass du dich für Buky interessierst. Bevor wir dir von neuen Kinderbüchern erzählen dürfen, brauchen wir nur noch einen Klick von dir:",
    "",
    confirmUrl,
    "",
    "Was dich danach erwartet:",
    ...teaser.map((t) => `- ${t.replace(/<\/?b>/g, "")}`),
    "",
    "Bis bald!",
    "Roman, Familienvater & Gründer von Buky",
    "",
    "Du hast dich nicht angemeldet? Dann ignoriere diese Mail einfach.",
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
    subject: "Nur noch ein Klick (versprochen) 📚",
    html: html(confirmUrl, interest),
    text: text(confirmUrl, interest),
  });
  // Resend wirft keine Exception, sondern liefert den Fehler zurück (z. B. Domain nicht verifiziert).
  if (error) throw new Error(`Resend: ${error.name} – ${error.message}`);
}
