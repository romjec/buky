import posthog from "posthog-js";
import { captureAttribution } from "@/lib/attribution";
import { currentVariant } from "@/lib/variant";

captureAttribution();

const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;

if (key) {
  posthog.init(key, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://eu.i.posthog.com",
    // Keine Cookies / kein localStorage → kein Cookie-Banner nötig
    persistence: "memory",
    person_profiles: "identified_only",
    capture_pageview: true,
    capture_pageleave: true,
  });
  // Jedes Event bekommt die A/B-Variante mit → in PostHog nach "variant" aufschlüsseln
  posthog.register({ variant: currentVariant() });
}
