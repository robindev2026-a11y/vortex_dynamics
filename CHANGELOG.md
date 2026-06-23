# CHANGELOG - Vortiq Dynamics

## [2026-06-23] - Logo Spacing Optimization

**What changed:**
- Cropped the empty transparent margin area surrounding the letter 'V' symbol in `project/assets/images/logo.png` from `(1024, 1024)` to `(628, 721)`.
- Added a 5% margin buffer when cropping to prevent visual clipping of the logo symbol shadow.
- Changed the CSS `gap` property in the `.brand` style rule in `project/assets/css/styles.css` from `4px` to `0` to set the spacing between the logo and company name text to `0px`.
- Synced the updated logo image asset and CSS into the `publish/` directory.

**Why:**
- Reduce the visual whitespace and gap between the logo symbol and the company name ("Vortiq Dynamics") in the site header, footer, and chatbot.

**Verification:**
- Ran a local HTTP server and inspected the layout with the browser agent. Visual check confirmed the spacing looks balanced, clean, and professional on all viewports with a 0px gap.

## [2026-06-14] - Image Loading Optimization

**What changed:**
- Generated optimized WebP versions for all runtime JPG/PNG photo assets.
- Switched homepage, about page, R&D Lab, and gallery image references to WebP.
- Added `decoding="async"` to static page images and `loading="lazy" decoding="async"` to JavaScript-rendered media images.
- Synced optimized image references and assets from [project](./project) into [publish](./publish).

**Why:**
- Reduce image payload and decode pressure so scrolling and page loading stay smooth.

**Verification:**
- Runtime photo assets now total about `924 KB` as WebP, compared with about `5.3 MB` for the original JPG/PNG set.
- `node --check project/assets/js/site.js`
- `node --check project/assets/js/data.js`
- Local browser verification confirmed all eight pages return `200`, no local image/resource failures, no broken images, and no mobile horizontal overflow.

## [2026-06-14] - Futuristic Loader, Reveals, and Energy Motion

**What changed:**
- Added a first-session homepage loader with SVG circuit trace, boot status lines, centered `VORTIQ DYNAMICS` wordmark, bottom progress bar, sessionStorage skip behavior, and reduced-motion fallback.
- Added a shared top progress line and faster fade/scale page transitions for same-origin internal HTML navigation.
- Reworked the scroll reveal system into `spark`, `flow`, `circuit`, and mobile `pulse` modes using the existing `.reveal` + `IntersectionObserver` contract.
- Added CSS-only ambient energy motion for `.section.dark` sections, paused outside the viewport.
- Added energy-themed hover interactions for service cards, feature cards, nav links, and CTA buttons.
- Synced all source changes from [project](./project) into [publish](./publish).

**Why:**
- Make the site feel more futuristic and system-driven while staying no-build, dependency-free, responsive, and respectful of reduced-motion preferences.

**Verification:**
- `node --check project/assets/js/site.js`
- `node --check project/assets/js/data.js`
- Local static server on port `4173`
- Playwright local verification confirmed all eight pages return `200`, loader plays once and skips on same-session reload, internal page transition state activates before navigation, reduced-motion reveals content immediately, mobile reveal mode switches to `pulse`, and mobile width has no horizontal overflow.
- Homepage scroll verification confirmed all 46 reveal elements reach `is-revealed`.
- Updated screenshots: [docs/verification/futuristic-home-desktop.png](./docs/verification/futuristic-home-desktop.png), [docs/verification/futuristic-home-mobile.png](./docs/verification/futuristic-home-mobile.png).

## [2026-06-13] - B2B Modernization & Apple-Level Polish

**What changed:**
- **Luxury Aesthetic**: Redefined the visual theme to a default premium Dark Mode (Deep Obsidian `#05080C`) with a smooth dark/light mode toggle.
- **High-End Typography**: Integrated **Outfit** (headings) and **Inter** (body text) Google Fonts with fine-tuned tight tracking and leading.
- **Lenis Smooth Scroll**: Added Lenis smooth scrolling for momentum-based inertial scrolling.
- **Scroll Reveals & Transitions**: Custom `IntersectionObserver` triggers scroll reveals; clicking internal navigation links initiates smooth fade transitions.
- **Auto-Hiding Header**: The header blurs dynamically and autohides on scroll-down, sliding back down on scroll-up.
- **Interactive Circuit Nodes**: Hovering over the hero SVG circuit map dynamically expands nodes and accelerates telemetry line flows.
- **Form Hardcoding & Carousel Cleanups**: Dynamically rendered contact info from `data.js`, added upload type limits, and configured lazy-syncing on carousel images.
- **Zip and Code Syncing**: Synchronized all updates from `project/` into `publish/` and rebuilt `vortiq-dynamics-static-site.zip`.

**Why:**
- Make the B2B tech consulting landing page look extremely premium, high-contrast, responsive, and interactive to mimic luxury tech showcases.

**Verification:**
- Verified no JS syntax errors.
- Confirmed the pages build action completed successfully and live pages render with Google Fonts and scroll scripts.

## [2026-06-13] - Project Structure Organized

**What changed:**
- Added [project](./project) as the canonical editable website source.
- Removed duplicated website HTML/assets from the repository root.
- Added [scripts/sync-site.sh](./scripts/sync-site.sh) to sync [project](./project) into [publish](./publish).
- Added [.github/workflows/deploy-pages.yml](./.github/workflows/deploy-pages.yml) to deploy [publish](./publish) to GitHub Pages.
- Moved AI Root System knowledge files into [docs/knowledge](./docs/knowledge).
- Moved planning docs into [docs/planning](./docs/planning), media guidance into [docs/media](./docs/media), alignment reports into [docs/alignment](./docs/alignment), and verification screenshots into [docs/verification](./docs/verification).
- Updated [AI.md](./AI.md), [README.md](./README.md), and knowledge docs to describe the new structure.
- Refreshed [vortiq-dynamics-static-site.zip](./vortiq-dynamics-static-site.zip) from [publish](./publish).

**Why:**
- The project needed a cleaner maintainable folder structure with source files in [project](./project) and deploy output in [publish](./publish).

**Verification:**
- Synced [project](./project) into [publish](./publish).
- JavaScript syntax checks passed for [project](./project) scripts.
- Local static server verification confirmed all eight [project](./project) pages and all eight [publish](./publish) pages returned `200`.

## [2026-06-13] - AI Root System Alignment Completed

**What changed:**
- Updated [AI.md](./AI.md) into a short AI bootloader that references the AI Root System.
- Added [AIContext.md](./docs/knowledge/AIContext.md), [Architecture.md](./docs/knowledge/Architecture.md), [PlannedFeatures.md](./docs/knowledge/PlannedFeatures.md), [DeferredWork.md](./docs/knowledge/DeferredWork.md), [Decisions.md](./docs/knowledge/Decisions.md), [KnownIssues.md](./docs/knowledge/KnownIssues.md), and [DevelopmentStandards.md](./docs/knowledge/DevelopmentStandards.md).
- Added [AI_ALIGNMENT_REPORT.md](./docs/alignment/AI_ALIGNMENT_REPORT.md).
- Updated [README.md](./README.md) and [CURRENT_STATE.md](./docs/knowledge/CURRENT_STATE.md) to point future agents to the aligned documentation structure.

**Why:**
- Future AI agents need to understand the project from durable project documentation without relying on chat history.

**Verification:**
- Validated required AI Root System knowledge files are present or clearly covered.
- Preserved older planning and state documents while migrating their useful knowledge into dedicated root-system files.

## [2026-06-12] - Homepage R&D Lab Showcase Added

**What changed:**
- Added a new homepage section titled `Inside the Vortiq R&D Lab`.
- Placed it after Capability Flow and before Services.
- Implemented a featured grid instead of a carousel so multiple work categories stay visible.
- Added data-driven R&D lab entries in [assets/js/data.js](./project/assets/js/data.js).
- Added rendering support in [assets/js/site.js](./project/assets/js/site.js).
- Added responsive grid styling in [assets/css/styles.css](./project/assets/css/styles.css).
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
- Added [CURRENT_STATE.md](./docs/knowledge/CURRENT_STATE.md) to capture current project status, deployment state, architecture, and next plan.
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
- Added shared CSS in [assets/css/styles.css](./project/assets/css/styles.css).
- Added data-driven content in [assets/js/data.js](./project/assets/js/data.js).
- Added shared rendering, navigation, animation, and form behavior in [assets/js/site.js](./project/assets/js/site.js).
- Added SVG placeholder assets under [assets/images](./project/assets/images).
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
- Desktop and mobile screenshots saved under [docs/verification](./docs/verification).

## [2026-06-12] - Planning Docs Created And Updated

**What changed:**
- Created and updated project planning docs:
  - [WEBSITE_PLAN.md](./docs/planning/WEBSITE_PLAN.md)
  - [PROMPT.md](./docs/planning/PROMPT.md)
  - [CONTENT_OUTLINE.md](./docs/planning/CONTENT_OUTLINE.md)
  - [DESIGN_DIRECTION.md](./docs/planning/DESIGN_DIRECTION.md)
  - [FUNCTIONAL_REQUIREMENTS.md](./docs/planning/FUNCTIONAL_REQUIREMENTS.md)
  - [ANIMATION_AND_ADMIN_PLAN.md](./docs/planning/ANIMATION_AND_ADMIN_PLAN.md)
- Confirmed design direction:
  - Abstract PCB/cloud animation
  - Typewriter hero text
  - All seven services equally visible
  - Placeholder images now
  - Real work images later
  - Future admin-panel-ready data structure
- Validated the green/teal palette and added contrast rules.
