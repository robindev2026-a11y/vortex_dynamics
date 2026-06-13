# AI Context

## Current Project State

Vortiq Dynamics is a completed first-version static website for a technology solutions company. It is built with plain HTML, CSS, and vanilla JavaScript, with data-driven content structures that can later map to an admin panel.

Current status:

- Static website: built
- Canonical website source: [site](../../site)
- Root GitHub Pages output: synced from [site](../../site)
- Planning docs: present
- AI Root System documentation: present
- Clean deploy folder: [publish](../../publish)
- Deploy zip: [vortiq-dynamics-static-site.zip](../../vortiq-dynamics-static-site.zip)
- GitHub repository: `robindev2026-a11y/vortex_dynamics`
- GitHub Pages URL: `https://robindev2026-a11y.github.io/vortex_dynamics/`
- GitHub Pages source: `main` branch, `/`
- Latest known live verification: HTTP `200`; page contains `Vortiq Dynamics`; R&D Lab content and `drone-sensor-fusion-module.png` reference were published

## Active Priorities

1. Preserve the completed static site and its deployment-ready package.
2. Replace placeholders as real company contact details, social links, and work images become available.
3. Keep content structured so a future admin panel can supply the same data shape.
4. Maintain AI Root System knowledge files so future agents do not depend on chat history.

## Important Context

- Brand name is `Vortiq Dynamics`.
- Repository name is `vortex_dynamics`; do not use it as the public brand.
- The site presents the company as an engineering-first technology partner for IoT, cloud, web, mobile, embedded systems, websites, and edge AI.
- The visual direction is modern, technical, premium, trustworthy, and practical.
- The hero direction is abstract PCB/cloud animation with a typewriter effect.
- Homepage includes an `Inside the Vortiq R&D Lab` showcase after Capability Flow and before Services.
- All seven services must stay equally visible: IoT Solutions, Cloud Solutions, Web Applications, Mobile Applications, Websites, Embedded Systems, Edge AI.
- The admin panel is planned for later; current work should preserve admin-ready data structures without building admin features prematurely.

## Current Constraints

- No framework, build step, package manager, backend, or dependency manager unless the user approves it.
- Forms are static and show success messages; they do not submit to a backend.
- Resume upload is visual only until a backend or form service exists.
- Placeholder contact details, social links, and work images remain until the user provides final assets/details.
- Website source changes must be mirrored into [publish](../../publish) before release-ready claims.
- Website code should be edited under [site](../../site), then synced with [scripts/sync-site.sh](../../scripts/sync-site.sh).
- The deploy zip should be recreated when the user needs an updated drag-and-drop package.

## Frequently Touched Areas

- [site/index.html](../../site/index.html) and other [site](../../site) HTML files: editable page shells
- [site/assets/css/styles.css](../../site/assets/css/styles.css): visual system, responsive layout, animation styles
- [site/assets/js/data.js](../../site/assets/js/data.js): data-driven content and future admin-ready data shape
- [site/assets/js/site.js](../../site/assets/js/site.js): rendering, navigation, animations, forms, UI behavior
- [site/assets/images](../../site/assets/images): placeholder and real media assets
- Root HTML files and [assets](../../assets): synced GitHub Pages output
- [publish](../../publish): clean deploy package
- [docs/verification](../verification): browser verification screenshots

## AI Operating Notes

- Prefer small, scoped documentation or website changes that preserve the current architecture.
- Read [DevelopmentStandards.md](./DevelopmentStandards.md) before changing source files.
- Use [Architecture.md](./Architecture.md) to understand data flow and module boundaries.
- Record changed assumptions or important tradeoffs in [Decisions.md](./Decisions.md).
- Keep known placeholders and limitations visible in [KnownIssues.md](./KnownIssues.md).
- Use [PlannedFeatures.md](./PlannedFeatures.md) and [DeferredWork.md](./DeferredWork.md) instead of burying future work in final chat messages.
