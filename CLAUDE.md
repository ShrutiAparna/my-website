# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A minimal, editorial research portfolio website for Shruti Aparna (Engineering Physics, IIT Delhi), inspired by by-chen.com. Built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion, statically exported and deployed to GitHub Pages via GitHub Actions. No backend, no database.

## Commands

```bash
npm install      # install dependencies
npm run dev       # local dev server at localhost:3000
npm run build     # static export to ./out (also aliased as npm run export)
npx serve out     # preview the static export locally
npm run lint      # eslint
```

There is no test suite. GitHub Pages deployment is automatic on push to `main` via `.github/workflows/deploy.yml` — no manual build/commit of output is needed.

## Architecture

- **Content lives in `src/data/*.ts`, not in components.** `profile.ts`, `research.ts`, `projects.ts`, `publications.ts`, `achievements.ts` each export typed arrays/objects. Pages under `src/app/**/page.tsx` map over these arrays — adding content (a project, publication, achievement) means appending an object to the relevant data file, never editing JSX.
- **Static export constraints**: `next.config.ts` sets `output: 'export'`, `images.unoptimized: true`, and a `basePath`/`assetPrefix` driven by `NEXT_PUBLIC_BASE_PATH` (set automatically by `actions/configure-pages` in CI, empty for local dev). Anything added that needs server-side rendering, API routes, or dynamic routing will break the export.
- **Theming**: `next-themes` (`src/components/Providers.tsx`) drives a `class`-based dark mode (`darkMode: 'class'` in `tailwind.config.ts`). Light/dark only swap colors and the two hero background images (`public/images/hero-light.jpg`, `hero-dark.jpg`) — layout never changes between themes. The hero crossfades between the two images via opacity, not by swapping `src`.
- **Typography is the core design element**: `Cormorant_Garamond` (serif, headings) and `Inter` (sans, body) are loaded via `next/font/google` in `src/app/layout.tsx` and exposed as CSS variables (`--font-cormorant`, `--font-inter`) consumed by `font-serif`/`font-sans` in `tailwind.config.ts`. The `stone` Tailwind palette is used throughout for the warm-neutral editorial look — avoid introducing other color palettes, gradients, cards-with-shadows, or rounded boxy UI; the explicit design intent is anti-"generic AI portfolio" (no glassmorphism, no colorful pills, no dashboard aesthetics).
- **Shared layout chrome** (`Navbar`, `Footer`, theme `Providers`) wraps all pages in `src/app/layout.tsx`. `Navbar.tsx` is transparent over the hero on `/` and becomes a solid/blurred bar on scroll or on any non-home route (tracked via `usePathname` + scroll listener).
- **Animation** is intentionally subtle and centralized in two reusable client components: `FadeIn.tsx` (scroll-triggered fade/slide-up via `whileInView`) and `ScrollArrow.tsx`/`Hero.tsx` (parallax + crossfade via `useScroll`/`useTransform`). New sections should reuse `FadeIn` rather than writing ad hoc Framer Motion variants.
- Reusable page-level styling lives in `src/app/globals.css` under `@layer components` (`.page-container`, `.section-label`, `.section-title`, `.hr-divider`, `.link-subtle`, `.tech-list`) — prefer these over re-deriving the same Tailwind utility strings per page.

## Assets

- `public/images/hero-light.jpg` / `hero-dark.jpg` — hero backgrounds for light/dark mode.
- `public/images/profile.svg` — placeholder profile photo (replace with a real photo and update `profile.photo` in `src/data/profile.ts`).
- `public/cv/shruti_aparna_cv.pdf` — CV served directly; the navbar "CV" link points at `profile.cv`.

See README.md for the full content-editing guide (adding publications/projects/achievements, changing images, updating social links, GitHub Pages deployment mechanics).
