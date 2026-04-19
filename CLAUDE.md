# CLAUDE.md

Guidance for Claude Code (or any future editor) working in this repo.

## Project shape

Single-page personal portfolio. Vite + React 18 (JavaScript, not TypeScript) +
Tailwind CSS v3. No router, no state library, no backend. Pure client-side.

## Where to edit

| Want to change… | Edit this |
| --- | --- |
| Name, tagline, email, location, social links | [`src/data/portfolio.js`](src/data/portfolio.js) → `PROFILE` |
| Education block | `EDUCATION` |
| Job entries (role, company, dates, bullets) | `EXPERIENCE` |
| Project cards (title, dates, tags, gradient, art id) | `PROJECTS` |
| Toolkit / skills categories | `SKILLS` |
| Publications | `PUBLICATIONS` |
| Headline stat row in About | `STATS` |
| Sidebar nav order | `NAV` |
| Color palette | [`tailwind.config.js`](tailwind.config.js) → `theme.extend.colors` |
| Fonts (Google Fonts link) | [`index.html`](index.html) `<link>` tag + `theme.extend.fontFamily` |
| Global styles, animations, grain overlay, link hovers | [`src/index.css`](src/index.css) |
| Layout / scroll spy / reveal observer | [`src/App.jsx`](src/App.jsx) |

## Component map

```
src/
  main.jsx              ReactDOM bootstrap.
  App.jsx               Layout + scrollspy + reveal IntersectionObserver.
  index.css             Tailwind + grain, reveal, link-underline, dot-pulse keyframes, ::selection.
  data/
    portfolio.js        All content.
  components/
    Sidebar.jsx         Sticky left column (lg+). Big serif name, nav, social links, dot-pulse.
    MobileHeader.jsx    Stacked header for <1024px. Mirrors sidebar content.
    SectionLabel.jsx    "(0X) — TITLE ———" row that opens each section.
    About.jsx           Three intro paragraphs + 3-up stat row.
    Experience.jsx      Roles list with dividers, bullets, mono dates.
    Work.jsx            Projects grid + Publications block.
    ProjectCard.jsx     Cover art + title + tags. Hover scales the cover.
    ProjectArt.jsx      Inline-SVG cover art. Switch on `art` id from PROJECTS.
                        Add a new variant: extend the switch + add a new <…Art /> component.
    Skills.jsx          Toolkit categories + Education footer.
    Contact.jsx         Big serif headline + email + social row.
    Footer.jsx          Copyright + locale.
    Reveal.jsx          Optional wrapper. The IntersectionObserver in App.jsx
                        targets any element with class `reveal`, so most components
                        just add `reveal` directly instead of using this wrapper.
```

## Design tokens (Tailwind)

- `cream` 50/100/200/300 — page backgrounds, light text on dark
- `ink` 200–900 — text and dividers (200 = lightest border, 900 = body text)
- `accent` (#8b3a1f) / `accent.light` (#c4572f) — terracotta italics, links, dot

Body bg = `cream-100`. Body text = `ink-900`. Italic accents = `text-accent`.

## Design rules of thumb

- **Headings**: Instrument Serif (`font-display`) for giant display + Fraunces (`font-serif`) for subheads. Add `tracking-tightest` (-0.04em) on display.
- **Italic accents**: `font-display italic text-accent`.
- **Body**: Fraunces light (`font-serif font-light`) for long-form, ~1.05–1.4rem.
- **Labels / metadata**: use the `mono-caps` utility (JetBrains Mono, uppercase, 0.2em letter-spacing, ~0.7rem) defined in `index.css`.
- **Animations**: slow, editorial. `cubic-bezier(0.16, 1, 0.3, 1)`, durations 0.5–0.9s. No bounce.
- **Reveal on scroll**: add the `reveal` class to any element. App.jsx wires the observer once.

## Adding a new section

1. Make a new component under `src/components/`.
2. Open with `<SectionLabel index={N}>TITLE</SectionLabel>`.
3. Add an entry to `NAV` in `portfolio.js` (id matches the `<section id>`).
4. Render it in `App.jsx` between existing sections.
5. Use `id="…"` and `scroll-mt-24` so the scrollspy + smooth-scroll work.

## Adding a new project

1. Append to `PROJECTS` in `portfolio.js` with a unique `art` id.
2. In [`ProjectArt.jsx`](src/components/ProjectArt.jsx), add a `case 'your-id':` and a new `<…Art />` SVG component. Use `viewBox="0 0 800 450"` and `preserveAspectRatio="xMidYMid slice"`. Drop in a `<NoiseFilter />` + `<NoiseRect />` for the paper-noise overlay.
3. Pick a `gradient` (Tailwind `from-[#…] to-[#…]`) — the SVG sits on top of it.

## Accessibility notes

- Sections are real `<section>` with `id`. Nav is a real `<nav>` with `<ul>`.
- Heading order: `h1` (name in sidebar) → `h2` (Contact headline; section labels are decorative spans, not headings) → `h3` (roles, projects, skill categories).
- `prefers-reduced-motion` short-circuits the reveal observer + the dot pulse.
- All decorative SVGs are `aria-hidden`.

## What NOT to do

- Don't add a router. It's a single page; smooth-scroll handles navigation.
- Don't pull in icon libraries. The bullets, dots, and arrows are typographic.
- Don't add raster images for project art. Cover art is inline SVG by design.
- Don't introduce TypeScript — the project is JS-only on purpose.
