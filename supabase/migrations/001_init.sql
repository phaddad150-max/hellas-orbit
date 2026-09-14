-- New isolated project only. Do not run against elenchos.live.

create table if not exists mission_snapshots (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  payload jsonb not null
);

create table if not exists x_pulse (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  volume int,
  payload jsonb not null
);

create table if not exists conversation_runs (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  source text not null,
  note text
);

alter table mission_snapshots enable row level security;
alter table x_pulse enable row level security;
alter table conversation_runs enable row level security;

create policy "public read mission" on mission_snapshots for select using (true);
create policy "public read pulse" on x_pulse for select using (true);
