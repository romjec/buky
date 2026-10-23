import { NextResponse, type NextRequest } from "next/server";
import { isVariant, VARIANT_COOKIE, type Variant } from "@/lib/variant";

/**
 * Teilt Besucher der Startseite 50/50 auf Variante A oder B auf.
 * Die URL bleibt "/", B wird intern auf /b umgeschrieben. Die Zuteilung bleibt 30 Tage gleich.
 * Zum Anschauen einer bestimmten Variante: /?variante=a bzw. /?variante=b
 */
export function proxy(request: NextRequest) {
  const forced = request.nextUrl.searchParams.get("variante");
  const fromCookie = request.cookies.get(VARIANT_COOKIE)?.value;
  const variant: Variant = isVariant(forced)
    ? forced
    : isVariant(fromCookie)
      ? fromCookie
      : Math.random() < 0.5
        ? "a"
        : "b";

  const response =
    variant === "b" ? NextResponse.rewrite(new URL(`/b${request.nextUrl.search}`, request.url)) : NextResponse.next();

  if (variant !== fromCookie) {
    response.cookies.set(VARIANT_COOKIE, variant, { maxAge: 60 * 60 * 24 * 30, sameSite: "lax", path: "/" });
  }
  return response;
}

export const config = {
  matcher: "/",
};
