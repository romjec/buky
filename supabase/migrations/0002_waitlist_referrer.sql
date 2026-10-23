-- Herkunft auch ohne UTM-Link erfassen (z. B. "www.instagram.com", "www.google.com")
alter table public.waitlist add column if not exists referrer text;
