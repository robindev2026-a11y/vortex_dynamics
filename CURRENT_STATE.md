# CURRENT STATE - Vortiq Dynamics

## Project Overview

Vortiq Dynamics is a static website for a technology solutions company offering IoT, cloud, web, mobile, embedded systems, websites, and edge AI solutions.

The current site is a polished first version with placeholder contact details and placeholder project imagery. It is built to be easy to update and ready for a future admin panel.

## Active Status

- Static website: built
- Planning docs: created
- AI handoff docs: created
- Clean deploy folder: created at [publish](./publish)
- Deploy zip: created at [vortiq-dynamics-static-site.zip](./vortiq-dynamics-static-site.zip)
- GitHub repo: `robindev2026-a11y/vortex_dynamics`
- GitHub Pages: enabled from `main` branch `/`
- GitHub Pages build: API reported `built`
- Public URL: `https://robindev2026-a11y.github.io/vortex_dynamics/`
- Live URL verification: confirmed HTTP `200`, HTML contains `Vortiq Dynamics`

## Current Architecture

This is a no-build static site:

- Root HTML files define pages.
- [assets/css/styles.css](./assets/css/styles.css) defines the full visual system.
- [assets/js/data.js](./assets/js/data.js) stores data-driven content.
- [assets/js/site.js](./assets/js/site.js) renders shared sections and handles behavior.
- [assets/images](./assets/images) stores SVG placeholder visuals.
- [publish](./publish) stores the clean publish package.

## Pages

- [index.html](./index.html)
- [services.html](./services.html)
- [solutions.html](./solutions.html)
- [case-studies.html](./case-studies.html)
- [about.html](./about.html)
- [careers.html](./careers.html)
- [contact.html](./contact.html)
- [request-quote.html](./request-quote.html)

## Design Contract

- Brand: Vortiq Dynamics
- Style: modern, engineering-first, trustworthy, interactive
- Hero: abstract PCB/cloud animation
- Hero text: typewriter effect
- Services: all seven service cards equally visible
- Media: placeholder SVGs now, real work images later
- Image treatment: ambient blurred background clone behind clear foreground image
- Motion: lightweight CSS/JS animation with reduced-motion support

## Palette Rules

Validated palette:

- Deep Teal: `#005461`
- Dark Teal: `#1E3D40`
- Mint Green: `#A8E6CF`
- Bright Green: `#3ED16F`
- Soft Yellow: `#FFF57E`
- Soft Pink: `#FF7EB6`
- Warm Cream: `#FBF5DD`
- Slate Gray: `#7A8C8E`
- Deep Charcoal: `#0B1F23`

Non-negotiable contrast rules:

- Use deep charcoal text `#0B1F23` on bright green CTA buttons `#3ED16F`.
- Do not use white text on bright green CTA buttons.
- Use yellow and pink sparingly as small accents.

## Future Admin-Ready Direction

The admin panel is not built yet.

The site should remain ready to consume future admin-managed content through the data shape in [assets/js/data.js](./assets/js/data.js).

Expected future admin-editable groups:

- Navigation
- Hero content and media
- Services
- Capability flow
- Tech stack
- Case studies
- Gallery/work images
- FAQ
- Careers content
- Contact details
- Footer links

## Known Placeholders

- `contact@vortiqdynamics.com`
- `+91 XXXXX XXXXX`
- `India / Global project delivery`
- Social links use `#`
- Work/project images are SVG placeholders
- Forms show static success messages and do not submit to a backend
- Resume upload is visual only until a backend/form service exists

## Verification Already Completed

Local verification completed after the static build:

- `node --check assets/js/site.js`
- `node --check assets/js/data.js`
- Local static server on port `4173`
- All eight pages returned `200`
- Browser verification found:
  - 7 nav links
  - 7 service cards
  - 7 capability flow nodes
  - 3 case cards
  - 5 FAQ items
  - Quote form success behavior working
  - Mobile menu working
  - No console/page errors
- Desktop screenshot: [verification/home-desktop-revealed.png](./verification/home-desktop-revealed.png)
- Mobile screenshot: [verification/home-mobile-revealed.png](./verification/home-mobile-revealed.png)

## Open Issues / Next Plan

1. Replace placeholder phone, email, location, and social links when the user provides final details.
2. Replace placeholder SVGs with real work images.
3. Connect quote/contact/career forms to a real backend or form service when requested.
4. Build the admin panel later, using the existing data-driven content structure as the target shape.
5. Consider moving GitHub Pages deployment to `publish/` through a Pages workflow if the user does not want planning docs available from the public repo root.

## Important Workflow Note

When editing website source files, also update matching files inside [publish](./publish), then recreate [vortiq-dynamics-static-site.zip](./vortiq-dynamics-static-site.zip) if the user needs drag-and-drop deployment.
