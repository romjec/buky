/** A/B-Test der Startseite: A = ursprüngliche Seite, B = kompakte Variante (src/app/b). */
export const VARIANTS = ["a", "b"] as const;
export type Variant = (typeof VARIANTS)[number];

export const VARIANT_COOKIE = "buky-variant";

export function isVariant(value: unknown): value is Variant {
  return typeof value === "string" && (VARIANTS as readonly string[]).includes(value);
}

/** Client: welche Variante sieht der Besucher gerade? */
export function currentVariant(): Variant | null {
  if (window.location.pathname === "/b") return "b";
  const match = document.cookie.match(new RegExp(`(?:^|; )${VARIANT_COOKIE}=([^;]+)`));
  return isVariant(match?.[1]) ? match[1] : null;
}
