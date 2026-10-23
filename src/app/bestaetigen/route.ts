import { NextResponse, type NextRequest } from "next/server";
import { getSupabase } from "@/lib/supabase";

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");
  const supabase = getSupabase();

  if (token && supabase && /^[0-9a-f-]{36}$/i.test(token)) {
    const { error } = await supabase
      .from("waitlist")
      .update({ confirmed_at: new Date().toISOString() })
      .eq("confirm_token", token)
      .is("confirmed_at", null);
    if (error) console.error("[confirm] update failed", error);
  }

  return NextResponse.redirect(new URL("/danke", request.url));
}
