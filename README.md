# Vortiq Dynamics Website

Vortiq Dynamics is a static business website for a technology solutions company building IoT, cloud, web, mobile, embedded systems, and edge AI solutions.

The website is designed to feel engineering-first, modern, trustworthy, and interactive, with a green/teal technology palette, abstract PCB/cloud animation direction, scroll reveals, placeholder work imagery, and future admin-panel readiness.

## Live / Deployment

- GitHub repository: `robindev2026-a11y/vortex_dynamics`
- GitHub Pages URL: `https://robindev2026-a11y.github.io/vortex_dynamics/`
- Clean deploy folder: [publish](./publish)
- Deploy zip: [vortiq-dynamics-static-site.zip](./vortiq-dynamics-static-site.zip)

GitHub Pages is configured from branch `main`, path `/`.

## Pages

- Home: [index.html](./index.html)
- Services: [services.html](./services.html)
- Solutions: [solutions.html](./solutions.html)
- Case Studies: [case-studies.html](./case-studies.html)
- About: [about.html](./about.html)
- Careers: [careers.html](./careers.html)
- Contact: [contact.html](./contact.html)
- Request Quote: [request-quote.html](./request-quote.html)

## Tech Stack

- Plain HTML
- CSS
- Vanilla JavaScript
- Local SVG placeholder assets
- No build system
- No package manager required
- No backend yet

## Project Structure

```text
.
├── index.html
├── services.html
├── solutions.html
├── case-studies.html
├── about.html
├── careers.html
├── contact.html
├── request-quote.html
├── assets/
│   ├── css/styles.css
│   ├── js/data.js
│   ├── js/site.js
│   └── images/*.svg
├── publish/
├── verification/
├── AI.md
├── CURRENT_STATE.md
├── CHANGELOG.md
└── planning docs
```

## Important Files

- [AI.md](./AI.md): Required starting point for AI agents.
- [CURRENT_STATE.md](./CURRENT_STATE.md): Current state, progress, open issues, and next plan.
- [CHANGELOG.md](./CHANGELOG.md): Recent project changes.
- [assets/js/data.js](./assets/js/data.js): Data-driven content and future admin-ready data shape.
- [assets/js/site.js](./assets/js/site.js): Rendering, navigation, animations, forms, and UI behavior.
- [assets/css/styles.css](./assets/css/styles.css): Full design system and responsive layout.

## Local Preview

Open [index.html](./index.html) directly in a browser, or run a local static server:

```bash
python3 -m http.server 4173
```

Then open:

```text
http://127.0.0.1:4173/
```

## Publishing

For drag-and-drop hosting, use the [publish](./publish) folder or [vortiq-dynamics-static-site.zip](./vortiq-dynamics-static-site.zip).

For GitHub Pages, the current repo is already configured to publish from `main` branch `/`.

## AI Agent Instructions

Before making changes, read [AI.md](./AI.md). This project uses a living documentation pattern inspired by the user's CoffeeCall project:

1. Read current state.
2. Check recent changelog.
3. Make the smallest correct change.
4. Update docs if the project state changes.
5. Keep `publish/` in sync with website source files.

## Current Known Placeholders

- Phone number
- Email address
- Location details
- Social links
- Real project/work images
- Real form submission backend
- Admin panel

These are intentional placeholders and should be replaced only when the user provides final details.

