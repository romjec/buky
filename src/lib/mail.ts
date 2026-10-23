import { Resend } from "resend";

type Interest = "abo" | "gutschein";

const TOPIC: Record<Interest, string> = {
  abo: "ob und wann Buky startet",
  gutschein: "ob und wann es Buky-Gutscheine gibt",
};

function html(confirmUrl: string, interest: Interest) {
  return `
  <div style="display:none;max-height:0;overflow:hidden">Ein Klick genügt.</div>
  <div style="font-family:Arial,Helvetica,sans-serif;max-width:520px;margin:auto;padding:24px;color:#26213a;font-size:16px;line-height:1.55">
    <p style="font-family:Georgia,serif;font-style:italic;font-size:26px;font-weight:bold;margin:0 0 24px">Bu<span style="color:#6e4ee6">ky</span></p>
    <h1 style="font-family:Georgia,serif;color:#6e4ee6;font-size:28px;line-height:1.2;margin:0 0 16px">Danke für dein Interesse! 🎉</h1>
    <p style="margin:0 0 28px">Bitte bestätige kurz deine E-Mail-Adresse – dann erfährst du als Erstes, ${TOPIC[interest]}.</p>
    <p style="margin:0 0 32px">
      <a href="${confirmUrl}" style="display:inline-block;background:#6e4ee6;color:#ffffff;padding:16px 30px;border-radius:999px;text-decoration:none;font-weight:bold;font-size:17px">E-Mail bestätigen</a>
    </p>
    <p style="margin:0">Roman<br><span style="color:#6f6886">Familienvater &amp; Gründer von Buky</span></p>
  </div>`;
}

function text(confirmUrl: string, interest: Interest) {
  return [
    "Danke für dein Interesse! 🎉",
    "",
    `Bitte bestätige kurz deine E-Mail-Adresse – dann erfährst du als Erstes, ${TOPIC[interest]}:`,
    "",
    confirmUrl,
    "",
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
