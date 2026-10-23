import { Resend } from "resend";

export async function sendConfirmationMail(to: string, confirmUrl: string, interest: "abo" | "gutschein") {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.info(`[mail] RESEND_API_KEY fehlt – Bestätigungslink für ${to}: ${confirmUrl}`);
    return;
  }

  const topic = interest === "gutschein" ? "Buky-Gutscheine" : "Buky";
  const resend = new Resend(apiKey);
  await resend.emails.send({
    from: process.env.RESEND_FROM ?? "Buky <onboarding@resend.dev>",
    to,
    subject: "Bitte bestätige deine E-Mail-Adresse",
    html: `
      <div style="font-family:Arial,sans-serif;max-width:480px;margin:auto;color:#2b2540">
        <h1 style="font-family:Georgia,serif;color:#6e4ee6">Schön, dass du dabei bist!</h1>
        <p>Danke für dein Interesse an ${topic}. Bitte bestätige kurz deine E-Mail-Adresse, damit wir dich informieren dürfen, sobald es losgeht.</p>
        <p style="margin:32px 0">
          <a href="${confirmUrl}" style="background:#6e4ee6;color:#fff;padding:14px 28px;border-radius:999px;text-decoration:none;font-weight:bold">E-Mail bestätigen</a>
        </p>
        <p style="font-size:13px;color:#7a7390">Falls du dich nicht angemeldet hast, kannst du diese E-Mail ignorieren.</p>
      </div>`,
  });
}
