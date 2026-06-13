# Architecture

## Overview

Vortiq Dynamics is a no-build static website made from HTML pages, shared CSS, shared vanilla JavaScript, and local assets.

The canonical editable source lives in [site](../../site). The repository root and [publish](../../publish) are synced outputs because GitHub Pages currently serves from branch `main`, path `/`.

The architecture intentionally avoids frameworks and runtime dependencies. Repeated content is centralized in JavaScript data objects where practical so a future admin panel, CMS, API, or generated JSON file can provide the same structure later.

## Components

- [site](../../site): canonical editable website source.
- Root HTML pages and [assets](../../assets): GitHub Pages output synced from [site](../../site).
- [site/assets/css/styles.css](../../site/assets/css/styles.css): owns the visual system, layout, responsive behavior, component styling, animation states, and reduced-motion behavior.
- [site/assets/js/data.js](../../site/assets/js/data.js): owns shared content data for navigation, services, process, tech stack, case studies, FAQ, R&D Lab, contact/footer items, and other repeated sections.
- [site/assets/js/site.js](../../site/assets/js/site.js): owns shared rendering logic, navigation behavior, mobile menu behavior, scroll reveals, typewriter effect, forms, and interactive UI behavior.
- [site/assets/images](../../site/assets/images): stores local SVG and PNG media used by website sections.
- [publish](../../publish): stores the clean deploy package for drag-and-drop hosting.
- [docs/verification](../verification): stores screenshots and evidence from visual verification.
- [scripts/sync-site.sh](../../scripts/sync-site.sh): syncs [site](../../site) to root output and [publish](../../publish).

## Pages

The site has eight public pages:

- [site/index.html](../../site/index.html)
- [site/services.html](../../site/services.html)
- [site/solutions.html](../../site/solutions.html)
- [site/case-studies.html](../../site/case-studies.html)
- [site/about.html](../../site/about.html)
- [site/careers.html](../../site/careers.html)
- [site/contact.html](../../site/contact.html)
- [site/request-quote.html](../../site/request-quote.html)

## Data Flow

1. A browser loads a root output page or a page under [site](../../site).
2. The page loads colocated `assets/css/styles.css`, `assets/js/data.js`, and `assets/js/site.js`.
3. `data.js` exposes structured content.
4. `site.js` reads that content and renders shared/repeated sections into matching HTML mount points.
5. `site.js` attaches behavior for mobile navigation, animation, typewriter text, accordions/forms where applicable, and static success messages.
6. Forms remain client-side only unless a future backend or form service is added.

## Module Boundaries

- `site/` owns editable website source.
- Root HTML/assets own GitHub Pages output and should be regenerated from `site/`.
- `publish/` mirrors deployment-ready website files only; planning docs and verification artifacts should not be required there.
- HTML owns page identity, high-level section order, metadata, and accessible structure.
- CSS owns presentation, layout, animation appearance, and responsive behavior.
- `data.js` owns content values and future admin-ready data shape.
- `site.js` owns DOM rendering and browser interactions.
- `docs/` owns project knowledge and should not be mixed into runtime behavior.

## External Dependencies

Current runtime dependencies:

- Browser platform only
- No package manager
- No framework
- No backend
- No database
- No form provider

External platforms:

- GitHub repository: `robindev2026-a11y/vortex_dynamics`
- GitHub Pages URL: `https://robindev2026-a11y.github.io/vortex_dynamics/`
- GitHub Pages source: `main` branch, `/`

## Architectural Decisions

Major decisions are recorded in [Decisions.md](./Decisions.md). Current architecture decisions include:

- Keep the first version static and dependency-free.
- Treat [site](../../site) as canonical source and sync outputs with [scripts/sync-site.sh](../../scripts/sync-site.sh).
- Keep repeated content data-driven where practical.
- Preserve a future admin-ready data model without building admin features yet.
- Use lightweight CSS/JavaScript animations with reduced-motion support.
- Maintain a clean [publish](../../publish) package separate from planning and verification files.

## Constraints

- Do not add a framework, build step, package manager, backend, or dependency without user approval.
- Edit [site](../../site) first, then sync root and [publish](../../publish).
- Keep all eight pages functional after shared JS/CSS changes.
- Keep all seven services equally visible.
- Preserve accessible forms, focus states, readable contrast, and responsive behavior.
- Respect `prefers-reduced-motion`.
- Avoid hardcoding final phone, email, address, or social links before the user provides final values.
