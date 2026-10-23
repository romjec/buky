-- A/B-Test: welche Startseiten-Variante (a/b) hat die Person gesehen?
alter table public.waitlist add column if not exists variant text check (variant in ('a', 'b'));
