import { getSupabase } from "@/lib/supabase";
import { shortText } from "@/lib/validation";

const UUID_RE = /^[0-9a-f-]{36}$/i;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const token = body?.token;
  if (typeof token !== "string") return Response.json({ error: "Ungültige Anfrage." }, { status: 400 });

  const supabase = getSupabase();
  if (!supabase || !UUID_RE.test(token)) {
    console.info("[survey] (dev) Antworten:", body);
    return Response.json({ ok: true });
  }

  const { error } = await supabase
    .from("waitlist")
    .update({
      child_age: shortText(body.childAge),
      books_per_month: shortText(body.booksPerMonth),
      willingness: shortText(body.willingness),
    })
    .eq("survey_token", token);

  if (error) {
    console.error("[survey] update failed", error);
    return Response.json({ error: "Speichern fehlgeschlagen." }, { status: 500 });
  }
  return Response.json({ ok: true });
}
