# Homeless Help

A website for a grassroots nonprofit that collects donations and supplies to
assemble care kits for people experiencing homelessness, and delivers them to
local shelters. Built with [Next.js](https://nextjs.org).

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Before you launch: things to personalize

Almost everything on this site is real content *except* a handful of
placeholders that only you can fill in. Search the codebase for these and
replace them:

- **`lib/site-config.ts`** — the org name, email, phone, Venmo handle, and
  Zelle contact. Flip `isRegisteredNonprofit` to `true` once your 501(c)(3)
  paperwork is approved (this changes the footer and donate-page wording
  automatically).
- **`app/about/page.tsx`** — the founding story paragraph (marked with
  `[Replace this paragraph...]`).
- **`app/care-kits/page.tsx`** — the "Partner shelter" cards, once you have
  confirmed partners to name.
- **Photos** — every dashed box that says "Add a photo here" is a
  `PhotoPlaceholder` component (`components/PhotoPlaceholder.tsx`). Swap it
  for a real `next/image` once you have photos of kits, packing sessions, or
  the team.

## Setting up Stripe (card donations)

The donate page has a working card-payment flow, it just needs your Stripe
account connected. Here's the full walkthrough:

1. **Create a Stripe account** at [stripe.com](https://stripe.com) if you
   don't have one. You don't need to finish business verification to start
   testing — Stripe gives you sandbox ("test mode") keys immediately.
2. **Grab your test secret key**: in the Stripe Dashboard, make sure the
   "Test mode" toggle is on, then go to **Developers → API keys** and copy
   the **Secret key** (starts with `sk_test_...`).
3. **Add it locally**: copy `.env.local.example` to `.env.local` and paste
   your key in:
   ```bash
   cp .env.local.example .env.local
   ```
   ```
   STRIPE_SECRET_KEY=sk_test_...
   ```
4. **Restart `npm run dev`** and try a test donation. On the Stripe-hosted
   checkout page, use card number `4242 4242 4242 4242`, any future expiry,
   any CVC, and any ZIP — it'll complete successfully without charging
   anyone real money.
5. **Go live** when you're ready to accept real donations:
   - Finish Stripe's business verification (they'll ask for basic identity
     and bank account info so they know where to send your money).
   - Switch the "Test mode" toggle off, copy your **live** secret key
     (`sk_live_...`), and use that instead — locally in `.env.local`, and in
     Vercel's environment variables (see below) once deployed.
   - Stripe takes a standard processing fee per transaction (roughly 2.9% +
     $0.30 in the US) — that's deducted automatically; there's no bill to
     pay separately.

Until `STRIPE_SECRET_KEY` is set, the "Donate with Card" button fails
gracefully with a message pointing people to Venmo/Zelle instead — so it's
safe to deploy before Stripe is fully configured.

### Venmo and Zelle

These aren't API integrations (neither offers one for this kind of use) —
they're just your real handles, shown as plain instructions. Update them in
`lib/site-config.ts`:

```ts
venmo: "@your-real-handle",
zelle: "the-email-or-phone-tied-to-your-zelle",
```

## Deploying to Vercel

1. Push this repo to GitHub (see below).
2. Go to [vercel.com/new](https://vercel.com/new), import the
   `HomelessHelp` repo, and click **Deploy** — Vercel auto-detects Next.js,
   no configuration needed.
3. Add your environment variable: in the Vercel project, go to
   **Settings → Environment Variables** and add `STRIPE_SECRET_KEY` with
   your Stripe key (test or live). Redeploy after adding it.
4. Once you have your real `*.vercel.app` URL (or a custom domain), you can
   optionally set `NEXT_PUBLIC_SITE_URL` to it as a fallback — Stripe
   redirect URLs work automatically without it, this is just a safety net.

Vercel's free "Hobby" plan covers a site like this at no cost.

## Pushing this repo to GitHub

```bash
git add -A
git commit -m "Initial site"
git push -u origin main
```
