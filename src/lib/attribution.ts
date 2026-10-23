const STORAGE_KEY = "buky-attribution";
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign"] as const;

export type Attribution = {
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  referrer: string | null;
};

/** Externe Herkunft (z. B. "www.instagram.com"), interne Navigation zählt nicht. */
function externalReferrer(): string | null {
  if (!document.referrer) return null;
  try {
    const host = new URL(document.referrer).hostname;
    return host && host !== window.location.hostname ? host : null;
  } catch {
    return null;
  }
}

/**
 * Beim ersten Seitenaufruf der Sitzung UTM-Parameter und Referrer merken,
 * damit sie auch nach einem Seitenwechsel (z. B. Impressum → Startseite) noch da sind.
 */
export function captureAttribution() {
  const params = new URLSearchParams(window.location.search);
  const fromUrl = Object.fromEntries(UTM_KEYS.map((k) => [k, params.get(k)])) as Omit<Attribution, "referrer">;
  const hasUtm = UTM_KEYS.some((k) => fromUrl[k]);

  try {
    // Bestehende Werte nur überschreiben, wenn ein neuer Kampagnenlink geöffnet wurde.
    if (!hasUtm && sessionStorage.getItem(STORAGE_KEY)) return;
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ ...fromUrl, referrer: externalReferrer() }));
  } catch {
    // sessionStorage nicht verfügbar (z. B. privater Modus) – dann zählt nur die aktuelle URL.
  }
}

export function getAttribution(): Attribution {
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored) as Attribution;
  } catch {
    // ignorieren, Fallback unten
  }
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get("utm_source"),
    utm_medium: params.get("utm_medium"),
    utm_campaign: params.get("utm_campaign"),
    referrer: externalReferrer(),
  };
}
