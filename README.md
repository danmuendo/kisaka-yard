# Carpentry Yard — Marketing Site + Internal Tools

**Stack:** Next.js (App Router) + Tailwind CSS + Supabase (Postgres) + Resend (email). Deploys free on Vercel.

## Modules

- **Module 1 — Marketing site:** `/` Home, `/services`, `/portfolio`, `/about`, `/contact`
- **Module 2 — Quoting tool:** `/quote` (itemized quotes, PDF export, saved to database)
- **Module 3 — Job & customer tracker:** pipeline, customer records, dashboard
- **Module 4 — Review automation:** post-completion follow-up emails/SMS

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Environment variables

Copy `.env.local.example` to `.env.local` and fill in:

- `NEXT_PUBLIC_SUPABASE_URL` + `NEXT_PUBLIC_SUPABASE_ANON_KEY` — from your Supabase project
- `RESEND_API_KEY` — from https://resend.com/api-keys (free tier: 100 emails/day)

## Deploy to Vercel

1. Push to GitHub
2. Import at vercel.com/new
3. Add the env vars above in Vercel project settings
4. Deploy — you get a `*.vercel.app` URL. To attach a custom domain later: Vercel dashboard → Domains → Add.

## Fonts

Once deployed (Vercel has open internet), restore Google Fonts in `app/layout.tsx`:

```ts
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
```
