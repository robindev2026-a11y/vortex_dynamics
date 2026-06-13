# Known Issues

## Active Issues

- Issue: Contact details are placeholders.
  - Impact: Phone, email, location, and social links are not final business information.
  - Workaround: Replace only when the user provides approved final details.
  - Status: Open.

- Issue: Forms do not submit to a backend.
  - Impact: Quote, contact, and career form submissions are not captured server-side.
  - Workaround: Forms show static client-side success behavior for the current static version.
  - Status: Open until a backend or form service is connected.

- Issue: Resume upload is visual only.
  - Impact: Career applicants cannot upload a resume through the static site.
  - Workaround: Treat it as a future-ready field until form infrastructure exists.
  - Status: Open.

- Issue: Work/project/R&D Lab imagery is partly placeholder-based.
  - Impact: Placeholder media reduces credibility compared with real company work photos.
  - Workaround: Use approved placeholders now and replace with real or generated consistent R&D imagery later.
  - Status: Open.

- Issue: GitHub Pages currently publishes from repository root.
  - Impact: Planning and documentation files may be reachable from the public Pages deployment if directly requested.
  - Workaround: Use [publish](../../publish) for clean drag-and-drop hosting, or add a publish-only Pages workflow later.
  - Status: Accepted for now.

## Risks

- Risk: Source and [publish](../../publish) can drift.
  - Likelihood: Medium when website files change.
  - Impact: Published handoff package may not match source.
  - Mitigation: Any website source change must be mirrored into [publish](../../publish) before release-ready claims.

- Risk: Future admin implementation may diverge from current data shape.
  - Likelihood: Medium.
  - Impact: Extra migration work could be needed.
  - Mitigation: Preserve stable IDs and structured content in [site/assets/js/data.js](../../site/assets/js/data.js); update [Architecture.md](./Architecture.md) when admin work begins.

- Risk: Motion or layout regressions can affect mobile usability.
  - Likelihood: Medium after visual changes.
  - Impact: Horizontal scroll, overlap, or inaccessible animation.
  - Mitigation: Verify desktop/mobile, no horizontal scroll, console/page errors, and `prefers-reduced-motion` behavior after visual changes.
