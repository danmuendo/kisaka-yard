# Kisaka Yard — Carpentry Website + Inventory Dashboard

A catalog site + quote-request form + admin dashboard for a carpentry
business selling tables, sofa sets, and other made-to-order furniture.

**Stack:** Next.js (App Router) + Tailwind CSS + Supabase (Postgres, auth,
storage). Deploys free on Vercel; Supabase's free tier is plenty for a small
business.

## What's included

- `/` — Public catalog with category filtering (Tables, Sofa Sets, Beds, Storage)
- `/product/[slug]` — Product detail page with dimensions, wood, lead time, price
- `/quote` — Custom order / quote request form
- `/admin` — Orders and materials inventory dashboard (low-stock warnings)
- `supabase/schema.sql` — Database schema + seed data, ready to paste into Supabase

The site currently runs on **mock data** (`lib/data.ts`, `lib/adminData.ts`)
so it works immediately with zero setup — useful for demoing to your uncle
before going live. Follow the steps below to connect it to a real database.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Go live with Supabase

1. Create a free project at supabase.com
2. In the Supabase dashboard, open **SQL Editor** and run the contents of
   `supabase/schema.sql` — this creates the `products`, `materials`, and
   `quote_requests` tables and seeds them with the same demo data.
3. Copy `.env.local.example` to `.env.local` and fill in your project's URL
   and anon key (Project Settings -> API):
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-public-key
   ```
4. Restart the dev server. The quote form will now write real submissions
   into `quote_requests`.
5. To make `/admin` and the catalog pull live data instead of the mock
   arrays, swap the imports in `components/AdminDashboard.tsx`,
   `components/CatalogGrid.tsx`, and `lib/data.ts` for calls to
   `supabase.from(...).select()`. This was left as mock data for the demo
   so you have something to show before wiring up real data end-to-end.

## Add login to /admin

Right now `/admin` is open to anyone with the link — fine for a demo, not
fine for production. Use **Supabase Auth** (email/password or magic link)
and wrap `/admin` in a server-side session check. Supabase's docs have a
ready-made Next.js App Router guide for this under Authentication -> Next.js.

## Deploy

1. Push this project to a GitHub repo
2. Import it at vercel.com/new
3. Add the same two `NEXT_PUBLIC_SUPABASE_*` environment variables in the
   Vercel project settings
4. Deploy — you get a free `*.vercel.app` URL, or attach your own domain

## Fonts

This sandbox couldn't reach Google Fonts, so the site currently ships with
system-font fallbacks that approximate the intended look. Once deployed
(Vercel has open internet access), restore the original type pairing by
adding back to `app/layout.tsx`:

```ts
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
```

and re-applying the font variables the way `app/globals.css` already
expects (`--font-fraunces`, `--font-inter`, `--font-plex-mono`).

## Payments (optional, later)

If you want to take deposits or full payment online, Paystack or
Flutterwave both support M-Pesa and are easier to integrate for a Kenyan
business than Stripe.


34088964Dan