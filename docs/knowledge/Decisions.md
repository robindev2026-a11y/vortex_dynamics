# Decisions

Important project decisions and their rationale.

## 2026-06-13 - Adopt AI Root System Documentation Structure

**Decision:** Align the project documentation with the AI Root System by adding dedicated knowledge files for AI context, architecture, planned features, deferred work, decisions, known issues, and development standards.

**Context:** The project already had useful knowledge in [AI.md](../../AI.md), [CURRENT_STATE.md](./CURRENT_STATE.md), [CHANGELOG.md](../../CHANGELOG.md), and planning documents, but several required categories were combined into broad files.

**Rationale:** Future AI agents should be able to understand the project without chat history and without searching through scattered docs for current state, risks, decisions, and standards.

**Alternatives considered:** Keep using [CURRENT_STATE.md](./CURRENT_STATE.md) as the single dense context file. This was rejected because it made root-system validation weaker and overloaded one document with multiple responsibilities.

**Tradeoffs:** More documentation files must be maintained, but each file now has a clearer responsibility.

## 2026-06-12 - Use A No-Build Static Website Architecture

**Decision:** Build the first version as plain HTML, CSS, and vanilla JavaScript with no framework, build step, dependency manager, or backend.

**Context:** The project needed a polished, deployable business website quickly, with drag-and-drop publishing and GitHub Pages compatibility.

**Rationale:** A no-build static architecture is easy to host, inspect, copy into [publish](../../publish), and maintain without dependency overhead.

**Alternatives considered:** Astro, Next.js static export, or another static-first framework. These remain possible later but were not necessary for the first version.

**Tradeoffs:** The site has less built-in routing/component tooling, but avoids build complexity and dependency maintenance.

## 2026-06-12 - Keep Content Admin-Ready Without Building Admin Yet

**Decision:** Keep repeated website content data-driven in [project/assets/js/data.js](../../project/assets/js/data.js), but defer admin panel development.

**Context:** The user wanted the static site prepared for a future admin panel while keeping the first version focused.

**Rationale:** Structured content makes future migration to an API, CMS, generated JSON, or admin panel easier without delaying the static launch.

**Alternatives considered:** Hardcode all content into HTML, or build the admin panel immediately. Hardcoding would make future content management harder; building admin immediately would expand scope.

**Tradeoffs:** Some content rendering logic exists in JavaScript even though the site is static, but it preserves a useful future migration path.

## 2026-06-12 - Use Abstract PCB/Cloud Hero And Lightweight Motion

**Decision:** Use an abstract PCB/cloud hero, typewriter text, scroll-triggered reveals, capability-flow animation, and reduced-motion support.

**Context:** The brand needed to feel technical, engineering-led, and more ambitious than a generic agency website.

**Rationale:** Lightweight CSS/JavaScript motion creates a stronger technology identity without requiring heavy animation libraries.

**Alternatives considered:** Static hero imagery only, generic stock visuals, or heavier animation libraries. These were rejected for either lower impact or unnecessary complexity.

**Tradeoffs:** Motion requires verification across desktop/mobile and reduced-motion contexts.

## 2026-06-12 - Keep All Seven Services Equally Visible

**Decision:** The service catalog must keep IoT Solutions, Cloud Solutions, Web Applications, Mobile Applications, Websites, Embedded Systems, and Edge AI equally visible.

**Context:** Vortiq Dynamics needs to communicate a broad engineering offering that includes both software and hardware work.

**Rationale:** Hiding services behind tabs, carousels, or collapsed desktop UI would weaken the company positioning.

**Alternatives considered:** Feature only three primary services and group the rest. This was rejected because it underrepresented the service catalog.

**Tradeoffs:** The page needs careful responsive layout to keep the catalog readable without overcrowding.

## 2026-06-13 - Shift to Dark-First Luxury Aesthetic & Smooth Interactivity

**Decision:** Transform the website into a dark-first B2B luxury tech product showcase (Apple-level polish) with Outfit/Inter typography, Lenis inertial scroll, scroll-triggered reveals, page transitions, and theme-toggling.

**Context:** The previous version used a warm cream background which felt classic but lacked the high-end, futuristic tech feel requested by the user.

**Rationale:** High-contrast dark obsidian layout combined with wide, clean typography (Outfit) and fluid inertia scrolling (Lenis) immediately creates a luxury, premium digital experience. Toggling themes dynamically satisfies both preferences while maintaining visual contrast.

**Alternatives considered:** Keep the light cream background default and add simple transitions. This was rejected because the visual impact did not feel sufficiently premium or high-tech.

**Tradeoffs:** Added dependencies on Lenis smooth scroll and Google Fonts, requiring careful styling overrides for light/dark modes and scroll events, but greatly increases aesthetic appeal and user engagement.

