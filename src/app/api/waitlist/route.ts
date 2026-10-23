import { getSupabase } from "@/lib/supabase";
import { sendConfirmationMail } from "@/lib/mail";
import { isInterest, isValidEmail, shortText } from "@/lib/validation";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body) return Response.json({ error: "Ungültige Anfrage." }, { status: 400 });

  // Honeypot: Bots füllen das versteckte Feld aus – so tun, als ob alles geklappt hätte.
  if (body.company) return Response.json({ ok: true, surveyToken: null });

  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  if (!isValidEmail(email)) {
    return Response.json({ error: "Bitte gib eine gültige E-Mail-Adresse ein." }, { status: 400 });
  }
  const interest = isInterest(body.interest) ? body.interest : "abo";

  const supabase = getSupabase();
  if (!supabase) {
    console.info(`[waitlist] Supabase nicht konfiguriert – Anmeldung: ${email} (${interest})`);
    return Response.json({ ok: true, surveyToken: "dev" });
  }

  const { data, error } = await supabase
    .from("waitlist")
    .upsert(
      {
        email,
        interest,
        source: shortText(body.source),
        utm_source: shortText(body.utm_source),
        utm_medium: shortText(body.utm_medium),
        utm_campaign: shortText(body.utm_campaign),
        referrer: shortText(body.referrer, 255),
      },
      { onConflict: "email,interest" },
    )
    .select("confirm_token, survey_token, confirmed_at")
    .single();

  if (error || !data) {
    console.error("[waitlist] insert failed", error);
    return Response.json({ error: "Da ist etwas schiefgelaufen. Bitte versuche es nochmals." }, { status: 500 });
  }

  if (!data.confirmed_at) {
    const origin = process.env.NEXT_PUBLIC_SITE_URL ?? new URL(request.url).origin;
    const confirmUrl = `${origin}/bestaetigen?token=${data.confirm_token}`;
    try {
      await sendConfirmationMail(email, confirmUrl, interest);
    } catch (mailError) {
      console.error("[waitlist] mail failed", mailError);
    }
  }

  return Response.json({ ok: true, surveyToken: data.survey_token });
}
