-- Warteliste für den Interessens-Test (Abo + Gutschein-Fake-Door)
create table if not exists public.waitlist (
  id               uuid primary key default gen_random_uuid(),
  email            text not null,
  interest         text not null check (interest in ('abo', 'gutschein')),
  source           text,
  utm_source       text,
  utm_medium       text,
  utm_campaign     text,
  confirm_token    uuid not null default gen_random_uuid() unique,
  confirmed_at     timestamptz,
  survey_token     uuid not null default gen_random_uuid() unique,
  child_age        text,
  books_per_month  text,
  willingness      text,
  created_at       timestamptz not null default now(),
  unique (email, interest)
);

-- Zugriff nur serverseitig über den Service-Role-Key, keine öffentlichen Policies.
alter table public.waitlist enable row level security;
