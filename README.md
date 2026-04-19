# Alperen Aydin — Portfolio

Editorial-style personal portfolio. Vite + React 18 + Tailwind CSS v3.

## Run locally

```bash
npm install
npm run dev
```

Opens on http://localhost:5173.

## Build

```bash
npm run build       # outputs /dist
npm run preview     # preview the production build
```

## Deploy

- **Vercel**: `npm i -g vercel && vercel` — autodetects Vite, zero config.
- **Netlify**: build command `npm run build`, publish directory `dist`.
- **GitHub Pages**: set `base: '/your-repo-name/'` in [vite.config.js](vite.config.js), build, push `dist/` to a `gh-pages` branch.

## Editing content

All copy lives in [src/data/portfolio.js](src/data/portfolio.js). Update profile, experience, projects, skills, and publications there — components read from this file.

For component structure and where to make design changes, see [CLAUDE.md](CLAUDE.md).

## Stack

- Vite 5 + React 18 (JS, no TS)
- Tailwind v3 with custom cream/ink/accent palette
- Google Fonts: Instrument Serif, Fraunces, Inter, JetBrains Mono
- IntersectionObserver for scroll-reveal, scroll-position scrollspy for nav
- Pure inline SVG for project cover art — no external images
