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
├── site/
│   ├── index.html
│   ├── services.html
│   ├── solutions.html
│   ├── case-studies.html
│   ├── about.html
│   ├── careers.html
│   ├── contact.html
│   ├── request-quote.html
│   └── assets/
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
├── docs/
│   ├── knowledge/
│   ├── planning/
│   ├── media/
│   ├── alignment/
│   └── verification/
├── scripts/
│   └── sync-site.sh
├── publish/
├── AI.md
├── CHANGELOG.md
└── README.md
```

`site/` is the canonical editable website source. The root HTML files and root [assets](./assets) folder are the current GitHub Pages output because Pages is configured from branch `main`, path `/`. Use [scripts/sync-site.sh](./scripts/sync-site.sh) after editing `site/` to refresh both the root output and [publish](./publish).

## Important Files

- [AI.md](./AI.md): Required starting point for AI agents.
- [AIContext.md](./docs/knowledge/AIContext.md): High-density current context for AI agents.
- [Architecture.md](./docs/knowledge/Architecture.md): Static site architecture, data flow, and module boundaries.
- [DevelopmentStandards.md](./docs/knowledge/DevelopmentStandards.md): Coding, verification, deployment, and AI workflow rules.
- [KnownIssues.md](./docs/knowledge/KnownIssues.md): Active placeholders, limitations, risks, and workarounds.
- [PlannedFeatures.md](./docs/knowledge/PlannedFeatures.md): Accepted future features and later ideas.
- [DeferredWork.md](./docs/knowledge/DeferredWork.md): Postponed work, cleanup, and technical debt.
- [Decisions.md](./docs/knowledge/Decisions.md): Important decisions and rationale.
- [CURRENT_STATE.md](./docs/knowledge/CURRENT_STATE.md): Current operational state, progress, open issues, and next plan.
- [CHANGELOG.md](./CHANGELOG.md): Recent project changes.
- [AI_ALIGNMENT_REPORT.md](./docs/alignment/AI_ALIGNMENT_REPORT.md): AI Root System alignment report.
- [assets/js/data.js](./assets/js/data.js): Data-driven content and future admin-ready data shape.
- [assets/js/site.js](./assets/js/site.js): Rendering, navigation, animations, forms, and UI behavior.
- [assets/css/styles.css](./assets/css/styles.css): Full design system and responsive layout.
- [site/assets/js/data.js](./site/assets/js/data.js): Canonical editable data file.
- [site/assets/js/site.js](./site/assets/js/site.js): Canonical editable behavior file.
- [site/assets/css/styles.css](./site/assets/css/styles.css): Canonical editable stylesheet.

## Local Preview

Open [index.html](./index.html) directly in a browser, or run a local static server:

```bash
python3 -m http.server 4173
```

Then open:

```text
http://127.0.0.1:4173/
```

To preview canonical source directly:

```text
http://127.0.0.1:4173/site/
```

## Maintenance

Edit website files under [site](./site). Then sync the deploy outputs:

```bash
./scripts/sync-site.sh
```

This updates the root GitHub Pages output and [publish](./publish) from the same source.

## Publishing

For drag-and-drop hosting, use the [publish](./publish) folder or [vortiq-dynamics-static-site.zip](./vortiq-dynamics-static-site.zip).

For GitHub Pages, the current repo is already configured to publish from `main` branch `/`.

## AI Agent Instructions

Before making changes, read [AI.md](./AI.md). This project inherits the AI Root System at `/Users/robingeorge/Documents/Projects/AI-Root-System` and uses root-system knowledge files:

1. Read current state.
2. Check recent changelog.
3. Make the smallest correct change.
4. Update docs if the project state changes.
5. Edit `site/` first, then run `./scripts/sync-site.sh`.

## Current Known Placeholders

- Phone number
- Email address
- Location details
- Social links
- Real project/work images
- Real form submission backend
- Admin panel

These are intentional placeholders and should be replaced only when the user provides final details.
