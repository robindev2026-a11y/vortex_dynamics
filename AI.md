# Vortiq Dynamics AI Context Management

This file is the required starting point for any AI agent working on this project. It exists to preserve context, prevent instruction drift, and keep the website aligned with the Vortiq Dynamics direction.

## Mandatory Pre-Task Protocol

Before starting any task, read these files in order:

1. [CURRENT_STATE.md](./CURRENT_STATE.md): Current project status, architecture, active plan, deployment state, and known issues.
2. [CHANGELOG.md](./CHANGELOG.md): Recent changes and decisions.
3. [README.md](./README.md): Project overview, structure, run instructions, and deployment notes.

Then read only the planning docs relevant to the task:

- [WEBSITE_PLAN.md](./WEBSITE_PLAN.md): Page structure, audience, conversion strategy, and site requirements.
- [DESIGN_DIRECTION.md](./DESIGN_DIRECTION.md): Palette, typography, layout, image, and animation direction.
- [FUNCTIONAL_REQUIREMENTS.md](./FUNCTIONAL_REQUIREMENTS.md): Required pages, forms, responsive behavior, accessibility, performance, and admin-ready data expectations.
- [CONTENT_OUTLINE.md](./CONTENT_OUTLINE.md): Page copy, section order, FAQ answers, and content blocks.
- [ANIMATION_AND_ADMIN_PLAN.md](./ANIMATION_AND_ADMIN_PLAN.md): Abstract PCB/cloud animation plan, ambient image treatment, and future admin data model.
- [PROMPT.md](./PROMPT.md): High-level static website generation prompt.

## Mandatory Post-Task Protocol

After any task that changes project behavior, structure, deployment, visual direction, content model, or status:

1. Append a dated entry to [CHANGELOG.md](./CHANGELOG.md).
2. Update [CURRENT_STATE.md](./CURRENT_STATE.md) so the next AI sees the real current state.
3. If website source files changed, update the deploy package in [publish](./publish) before saying the project is ready to publish.
4. If visual or interactive behavior changed, run the strongest available verification and record it in [CURRENT_STATE.md](./CURRENT_STATE.md) or the final response.

## Project Identity Rules

- The brand is **Vortiq Dynamics**.
- Do not rename the brand to `vortex_dynamics`; that is only the current GitHub repository name.
- The website presents Vortiq Dynamics as an engineering-first technology partner for IoT, cloud, web, mobile, embedded systems, and edge AI.
- The tone should be confident, professional, modern, technical, and practical.

## Design Rules

- Use the validated green/teal palette from [DESIGN_DIRECTION.md](./DESIGN_DIRECTION.md).
- Use deep charcoal text `#0B1F23` on bright green CTA buttons `#3ED16F`.
- Do not use white text on bright green CTA buttons.
- Keep yellow and pink as small accents only.
- Keep all seven service cards equally visible.
- Preserve the abstract PCB/cloud hero direction and typewriter effect unless the user explicitly changes it.
- Preserve the ambient image treatment: clear main image, blurred enlarged duplicate behind it.
- Respect `prefers-reduced-motion`.
- Avoid heavy animation libraries unless the user explicitly approves them.

## Engineering Rules

- This is a static website built with plain HTML, CSS, and JavaScript.
- Do not introduce a framework, build step, or dependency manager unless the user approves it.
- Primary source files live at the project root and under `assets/`.
- Data-driven content lives in [assets/js/data.js](./assets/js/data.js).
- Shared behavior lives in [assets/js/site.js](./assets/js/site.js).
- Shared styling lives in [assets/css/styles.css](./assets/css/styles.css).
- Repeated content should remain data-driven where practical so a future admin panel can provide the same shape of data.
- Keep form behavior static unless the user asks to connect a real backend or form service.
- Do not hardcode final phone, email, address, or social links until the user provides them.

## Deployment Rules

- The clean upload package is [publish](./publish).
- The root project also contains planning docs, verification screenshots, and zip artifacts. Do not use the full root folder for drag-and-drop hosting unless the user wants docs exposed too.
- When changing website files, sync the equivalent files into `publish/`.
- GitHub repo: `robindev2026-a11y/vortex_dynamics`.
- GitHub Pages URL: `https://robindev2026-a11y.github.io/vortex_dynamics/`.
- GitHub Pages is configured from branch `main`, path `/`.

## Verification Rules

For non-trivial website changes, verify at minimum:

- `node --check assets/js/site.js`
- `node --check assets/js/data.js`
- Local static server test if practical
- Desktop and mobile visual checks when layout, animation, or responsive behavior changes
- Form success behavior if quote/contact/career forms change
- No horizontal scroll on mobile
- All eight pages still load:
  - `index.html`
  - `services.html`
  - `solutions.html`
  - `case-studies.html`
  - `about.html`
  - `careers.html`
  - `contact.html`
  - `request-quote.html`

## Current Priority

Preserve the completed static site, improve content/media as real business details arrive, and keep the project ready for future admin-panel integration.

---

Status: ACTIVE | System: Living Knowledge Base

