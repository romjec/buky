export const INTERESTS = ["abo", "gutschein"] as const;
export type Interest = (typeof INTERESTS)[number];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function isValidEmail(value: unknown): value is string {
  return typeof value === "string" && value.length <= 254 && EMAIL_RE.test(value);
}

export function isInterest(value: unknown): value is Interest {
  return typeof value === "string" && (INTERESTS as readonly string[]).includes(value);
}

/** Trims and caps optional short text fields coming from the client. */
export function shortText(value: unknown, max = 80): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim().slice(0, max);
  return trimmed || null;
}
