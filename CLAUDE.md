# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server
npm run build     # Production build (output: dist/)
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

There are no tests configured in this project.

## Environment Setup

Copy `.env.example` to `.env` and fill in the EmailJS credentials before the Contact form will work:
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

## Architecture

**Stack:** React 19 SPA, Vite, React Router v7, Framer Motion, CSS Modules, no TypeScript.

**Entry flow:** `index.html` → `src/main.jsx` → `src/App.jsx`

`App.jsx` sets up:
1. `DarkModeContext` provider (persists to `localStorage`, toggles `dark` class on `<html>`)
2. React Router routes — one per page in `src/pages/`
3. Global wrappers: `SplashScreen`, `CustomCursor`, `CommandPalette`, `ScrollProgress`, `PageTransition`

**Styling system:** Each component has a co-located `ComponentName.module.css`. Global CSS variables (colors, typography, spacing, transitions) live in `src/index.css`. Dark mode is implemented via CSS custom properties scoped to `html.dark`.

**Data:** Static JS arrays in `src/data/` (`projectsData.js`, `experienceData.js`, `blogsData.js`) — no API calls for portfolio content.

**Deployment:** Netlify. `public/_redirects` handles SPA client-side routing fallback. Vite splits vendor chunks (React libs and Framer Motion separated) for performance.

## Key Interaction Patterns

- `CommandPalette` — triggered by `Ctrl+K`, provides keyboard navigation across pages
- `MagneticButton` — wraps CTA buttons with mouse-tracking magnetic effect
- `TiltCard` — wraps project cards with 3D perspective tilt on hover
- `ParticleCanvas` — canvas-based background animation on the landing page
- `PageTransition` — wraps every page route for enter/exit animations via Framer Motion
