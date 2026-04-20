# sysConnector

A modern SaaS marketing site for sysConnector built with Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, and Geist font.

## Requirements

- Node.js 20.x or newer

## Quick start

```bash
npm install
npm run dev
```

If you're upgrading from an earlier version of this project, delete `node_modules` and `package-lock.json` before reinstalling.

Open `http://localhost:3000`.

## Scripts

| Command         | Description                  |
| --------------- | ---------------------------- |
| `npm run dev`   | Start the dev server         |
| `npm run build` | Build for production         |
| `npm run start` | Run the production build     |
| `npm run lint`  | Run ESLint                   |

## Environment variables

Copy `.env.example` to `.env.local` and fill in values:

```
BREVO_API_KEY=xkeysib-...
BREVO_LIST_ID=12
CONTACT_FROM_EMAIL=noreply@yourdomain.com
CONTACT_TO_EMAIL=contact@sysconnector.com
```

**Shared:**
- `BREVO_API_KEY` — your Brevo v3 API key, used for both the signup modal and the contact form. Without it, forms log submissions to the server console and return success (useful for local dev).

**Signup modal only:**
- `BREVO_LIST_ID` — optional numeric list ID to add new subscribers to.

**Contact form only:**
- `CONTACT_FROM_EMAIL` — the "from" address on outgoing emails. **Must be on a domain verified in your Brevo account** (SPF/DKIM configured), otherwise sending will fail.
- `CONTACT_FROM_NAME` — display name on the email (default `sysConnector`).
- `CONTACT_TO_EMAIL` — recipient of contact-form submissions (default `contact@sysconnector.com`).
- `CONTACT_TO_NAME` — recipient display name (default `sysConnector`).

**Spam protection:**
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY` — Cloudflare Turnstile site key (get from dash.cloudflare.com → Turnstile). Without it, the CAPTCHA widget is skipped.
- `TURNSTILE_SECRET_KEY` — Cloudflare Turnstile secret key. Without it, server-side token verification is skipped.
- `UPSTASH_REDIS_REST_URL` — Upstash Redis REST URL for rate limiting (get from console.upstash.com). Without it, rate limiting is skipped.
- `UPSTASH_REDIS_REST_TOKEN` — Upstash Redis REST token. Without it, rate limiting is skipped.

The contact form also sets `replyTo` to the submitter's email, so hitting **Reply** in the inbox replies directly to the contact (not to your `noreply` sender).

## Project structure

```
app/
  layout.tsx              Root layout, Geist fonts, theme init script
  page.tsx                Homepage — composes all sections
  globals.css             Tailwind + design tokens (light + dark)
  icon.svg                Favicon
  contact/                Contact page
  privacy-policy/         Privacy placeholder
  terms-of-service/       Terms placeholder
  api/subscribe/          Brevo-backed form handler

components/
  layout/                 Header (with theme toggle), Footer
  sections/               12 section components
  ui/                     Button, Container, Eyebrow, Reveal,
                          SignupCTA, SignupModal, ThemeToggle

lib/
  content.ts              All visible copy, centralized
```

## Design system

### Typography
- **Geist Sans** — all body and display text. Sharp, neutral, designed for software UIs.
- **Geist Mono** — reserved for technical accents: eyebrow labels, platform chips in the flow diagram, numeric ordinals.

No serif fonts. No italic pull-quotes. Single sans family, mono for technical signal.

### Type scale
Only three heading sizes — use them consistently:
- `text-h1` — hero only
- `text-h2` — every section heading
- `text-h3` — card titles

Body text is always `text-base md:text-lg` for primary prose, `text-[0.95rem]` inside cards.

### Color tokens
All colors are CSS variables defined in `app/globals.css` and swap automatically between light and dark:

| Token              | Purpose                        |
| ------------------ | ------------------------------ |
| `bg`               | Page background                |
| `bg-elevated`      | Cards, modals                  |
| `bg-sunken`        | Alternating section background |
| `fg`               | Primary text                   |
| `fg-muted`         | Secondary text                 |
| `fg-subtle`        | Tertiary text, captions        |
| `border`           | Hairline dividers              |
| `border-strong`    | Hover borders                  |
| `accent`           | Brand blue (`blue-600` light, `blue-500` dark) |

Use Tailwind classes like `bg-bg`, `text-fg`, `border-border`, `text-accent`.

### Spacing rhythm
- Every section: `section-y` utility = `py-24 md:py-32`
- Every section wrapper: `container-x` utility = `max-w-content` with responsive padding
- Every card: `p-6` (`p-8` or `p-10` for hero cards)
- Every card stack: `gap-4`

No per-section overrides. If a section needs different spacing, push back on the design first.

## Dark mode

- Toggle is in the header (sun/moon icon).
- Persisted to `localStorage` under `sysconnector-theme`.
- Honors `prefers-color-scheme` on first visit.
- No-flash: an inline script in `<head>` sets the class before React hydrates.

## Editing the copy

All visible text lives in `lib/content.ts`. Edit one file — every section picks up your changes.

## Deployment

### Vercel (recommended)
1. Push to a Git repo.
2. Import into Vercel.
3. Add `BREVO_API_KEY` and `BREVO_LIST_ID` under Project Settings → Environment Variables.
4. Deploy.

### Other hosts
Any Node.js + Next.js-compatible host. After `npm run build`, run `npm run start`.

## Notes

- **Signup form** submits to `/api/subscribe` → Brevo `/v3/contacts` with `updateEnabled: true`. Safe to re-submit.
- **Modal accessibility** — focus trap, `Escape` to close, body scroll lock, focus restoration, honors `prefers-reduced-motion`.
- **SEO** — metadata set in `app/layout.tsx` and per-page via Next's `export const metadata`.

## License

Proprietary — © sysConnector.
