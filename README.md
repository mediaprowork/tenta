# Tentaklik.com

Production website for Tentaklik (Astro 6 + Bun).

## Develop

```bash
bun install
bun run dev          # http://localhost:4321
```

## Build & Preview

```bash
bun run astro build  # outputs to dist/
bun run preview      # serves dist/ for smoke test
```

## TypeScript check

```bash
bun run check
```

## Environment Variables

Copy `.env.example` to `.env` and fill in:

- `PUBLIC_SITE_URL` — production canonical URL  
- `PUBLIC_WA_NUMBER` — WhatsApp number for CTAs (no `+`, no spaces, e.g. `6281234567890`)
- `PUBLIC_GA_ID` — optional Google Analytics 4 ID

## Deploy

**Netlify / Vercel / Cloudflare Pages:**
- Build command: `bun run astro build`
- Output directory: `dist`
- Set env vars in the dashboard

**VPS (static):** serve `dist/` via Nginx or Caddy after running `bun run astro build`.

## Content updates

- **Services:** `src/content/services/*.md` — edit frontmatter (features, plans, process, FAQs, SEO title/desc)
- **Case studies:** `src/content/case-studies/*.md`
- **Testimonials, FAQs, Jobs:** JSON files in `src/content/`
- **Site config (WA number, social, address):** `src/data/site.ts`

## Project structure

- `src/components/` — icons, brand, layout, ui, sections
- `src/content/` — Content Layer collections (markdown + JSON)
- `src/layouts/` — BaseLayout, ServiceLayout
- `src/lib/` — seo.ts, reveal.ts
- `src/data/site.ts` — site-wide config
- `src/styles/` — tokens.css, components.css, global.css
- `public/assets/` — kraken images, partner logos
