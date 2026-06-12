# CHANGELOG - Vortiq Dynamics

## [2026-06-12] - Homepage R&D Lab Showcase Added

**What changed:**
- Added a new homepage section titled `Inside the Vortiq R&D Lab`.
- Placed it after Capability Flow and before Services.
- Implemented a featured grid instead of a carousel so multiple work categories stay visible.
- Added data-driven R&D lab entries in [assets/js/data.js](./assets/js/data.js).
- Added rendering support in [assets/js/site.js](./assets/js/site.js).
- Added responsive grid styling in [assets/css/styles.css](./assets/css/styles.css).
- Added `rd-lab` as a future admin/media slot.

**Why:**
- The site needs a strong place to showcase real R&D/work photos later across IoT, DevOps/cloud, mobile/web, edge AI, and product integration.

**Verification:**
- JavaScript syntax checks passed.
- Local static server confirmed all eight pages returned `200`.
- Browser verification confirmed 5 R&D Lab cards, 1 featured card, the drone/sensor image in the featured card, no console errors, and no horizontal scroll on desktop or mobile.
- GitHub Pages build for commit `87adfa3` completed successfully.
- Live HTML contains `Inside the Vortiq R&D Lab.` and live `assets/js/data.js` references `drone-sensor-fusion-module.png`.

## [2026-06-12] - AI Handoff Documentation Added

**What changed:**
- Added [AI.md](./AI.md) as the mandatory starting point for future AI agents.
- Added [CURRENT_STATE.md](./CURRENT_STATE.md) to capture current project status, deployment state, architecture, and next plan.
- Added this changelog to track project changes and decisions.
- Replaced the placeholder README with a project-focused [README.md](./README.md).
- Adapted the living documentation structure from the user's CoffeeCall project without claiming CoffeeCall-only tooling exists here.

**Why:**
- Future AI agents need a clear entry point and should not have to rediscover the site structure, deployment state, design rules, or admin-ready content model.

## [2026-06-12] - GitHub Pages Enabled

**What changed:**
- Confirmed remote repository: `robindev2026-a11y/vortex_dynamics`.
- Enabled GitHub Pages from branch `main`, path `/`.
- GitHub Pages API reported the build as `built`.
- Public URL: `https://robindev2026-a11y.github.io/vortex_dynamics/`.

**Verification:**
- Live HTTPS check returned HTTP `200`.
- Response HTML contains `Vortiq Dynamics`.

## [2026-06-12] - Static Website Built

**What changed:**
- Built a multi-page static website for Vortiq Dynamics.
- Added pages:
  - Home
  - Services
  - Solutions
  - Case Studies
  - About
  - Careers
  - Contact
  - Request Quote
- Added shared CSS in [assets/css/styles.css](./assets/css/styles.css).
- Added data-driven content in [assets/js/data.js](./assets/js/data.js).
- Added shared rendering, navigation, animation, and form behavior in [assets/js/site.js](./assets/js/site.js).
- Added SVG placeholder assets under [assets/images](./assets/images).
- Added [publish](./publish) folder and [vortiq-dynamics-static-site.zip](./vortiq-dynamics-static-site.zip) for temporary publishing.

**Verification:**
- JavaScript syntax checks passed for `assets/js/site.js` and `assets/js/data.js`.
- Local static server verification confirmed all eight pages returned `200`.
- Headless browser verification confirmed:
  - 7 nav links
  - 7 service cards
  - 7 capability flow nodes
  - 3 case cards
  - 5 FAQ items
  - Quote form success behavior
  - Mobile menu behavior
  - No console/page errors
- Desktop and mobile screenshots saved under [verification](./verification).

## [2026-06-12] - Planning Docs Created And Updated

**What changed:**
- Created and updated project planning docs:
  - [WEBSITE_PLAN.md](./WEBSITE_PLAN.md)
  - [PROMPT.md](./PROMPT.md)
  - [CONTENT_OUTLINE.md](./CONTENT_OUTLINE.md)
  - [DESIGN_DIRECTION.md](./DESIGN_DIRECTION.md)
  - [FUNCTIONAL_REQUIREMENTS.md](./FUNCTIONAL_REQUIREMENTS.md)
  - [ANIMATION_AND_ADMIN_PLAN.md](./ANIMATION_AND_ADMIN_PLAN.md)
- Confirmed design direction:
  - Abstract PCB/cloud animation
  - Typewriter hero text
  - All seven services equally visible
  - Placeholder images now
  - Real work images later
  - Future admin-panel-ready data structure
- Validated the green/teal palette and added contrast rules.
