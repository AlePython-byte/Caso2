# Dakingo

Mobile-first bakery storefront frontend built with Next.js App Router, React, TypeScript, and Tailwind CSS. The visual storefront and product features are intentionally left for a later implementation.

## Project structure

| Path | Responsibility |
| --- | --- |
| `src/app/` | Routes, route layouts, metadata, and global styles only. Keep route files small. |
| `src/components/layout/` | Shared page structure used across routes. |
| `src/components/ui/` | Reusable, domain-neutral interface components. |
| `src/features/` | Feature-owned components and logic, grouped by feature when they are implemented. |
| `src/data/` | Typed, local storefront content when real content is available. |
| `src/types/` | Types shared across multiple features. Keep feature-only types with their feature. |
| `src/lib/` | Small, domain-neutral utilities. |
| `src/config/` | Application-wide constants and configuration. |
| `public/images/` | Approved static images, referenced from the site root. |

Empty directories contain `.gitkeep` solely so the architecture is visible in Git. Remove each marker when that directory gets a real file.

## Implementation conventions

- Design for 320–430px phone viewports first, then add tablet and desktop styles progressively. Avoid fixed widths that cause horizontal scrolling.
- Keep pages and layouts as React Server Components by default. Add `"use client"` only to the smallest component that needs state, event handlers, effects, or browser APIs.
- Put routing concerns in `src/app`, reusable presentation in `src/components`, and feature-specific code in `src/features`.
- Add types, data, utilities, and configuration only when an implemented feature needs them. Do not create placeholder products or assets.
- Keep source code, file names, identifiers, comments, and documentation in English.

## Development checks

```bash
npm run dev
npm run lint
npx tsc --noEmit
npm run build
```

The existing `build` script uses the standard Next.js production build for Vercel. No backend, database, or authentication is configured.
