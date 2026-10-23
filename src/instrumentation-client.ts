import posthog from "posthog-js";

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
}
