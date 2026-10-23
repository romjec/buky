import posthog from "posthog-js";

export type AnalyticsEvent =
  | "signup_submitted"
  | "signup_failed"
  | "survey_completed"
  | "survey_skipped"
  | "voucher_cta_clicked"
  | "faq_opened";

export function track(event: AnalyticsEvent, properties?: Record<string, unknown>) {
  if (!process.env.NEXT_PUBLIC_POSTHOG_KEY) return;
  posthog.capture(event, properties);
}
