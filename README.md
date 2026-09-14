# Hellas Orbit · Ελλάδα σε τροχιά

Public, **free** tracker for Greeks at home and abroad: the first Greek in orbit (Dr Adrianos Golemis), ESA membership, satellites, and the factory.

Independent of [elenchos.live](https://elenchos.live). No 9-question research desk.

## Run

```bash
cd hellas-orbit
npm install
npm run dev
```

Open [http://localhost:3017](http://localhost:3017) if that port is already used, or the port Next prints.

## What you see

One dark mission-control landing page: hero, Greece path (ESA, satellites, factory, doctor-astronaut), crew, live NASA/SpaceX, ISS, industry leaders, X pulse, Greek names in the sky.

Live video is **NASA / SpaceX**, labelled as such. xAI does not provide satellite cameras.

## Optional keys (`.env.local`)

See `.env.example`. The site works without them.

- `X_BEARER_TOKEN` — live X mention count (new app, not the Elenchos token)
- `XAI_API_KEY` — later, Grok summaries only
- New **Supabase** project if you want stored snapshots (SQL in `supabase/migrations/`)

## Domain

Intended public URL: **hellasorbit.space** (confirm and buy). Until then, Vercel preview is enough.
