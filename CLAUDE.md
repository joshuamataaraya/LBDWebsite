# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Church website for "Iglesia La Biblia Dice" (LBDcr), a non-denominational Christian church in Santo Domingo, Heredia, Costa Rica. All user-facing content is in Spanish.

## Commands

- `npm run dev` — Start Vite dev server with HMR
- `npm run build` — Production build (outputs to `dist/`)
- `npm run preview` — Preview production build locally
- `npm run lint` — Run ESLint

## Architecture

React 19 SPA using Vite 7, react-router-dom v7 (client-side routing), deployed via AWS Amplify (`amplify.yml`).

**Routing:** All routes defined in `src/App.jsx` via `<BrowserRouter>`. Each route maps to a page component in `src/pages/`.

**Layout:** `App.jsx` renders a shared layout: `Navbar` + `<main>` (routed content) + `Footer`. A `ScrollAnimationManager` component uses `IntersectionObserver` to animate `.animate-on-scroll` elements on viewport entry.

**Pages:** `src/pages/` — one component per route (Inicio, Nosotros, PlanificaTuVisita, Sermones, Ministerios, Eventos, Liderazgo, Doctrinas, Contacto, Ofrendar). Pages are self-contained with inline data arrays for content.

**Styling:** Single global stylesheet `src/index.css` with CSS custom properties (design tokens in `:root`). Component styles in `src/App.css`. Uses Google Fonts: Playfair Display (headings) and Inter (body). Glassmorphism navbar with scroll-triggered state change.

**Fonts:** Playfair Display (serif, `--font-heading`) and Inter (sans-serif, `--font-body`), loaded from Google Fonts in `index.html`.

**Design tokens:** Navy/gold color palette defined as CSS variables in `src/index.css` (e.g., `--color-navy`, `--color-gold`).

## Deployment

AWS Amplify — `amplify.yml` runs `npm ci` then `npm run build`, serves from `dist/`.
