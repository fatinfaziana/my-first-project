# Work Card 03: Core Behaviour

## Goal

Make the booking flow work: level → subjects → combo price → availability → contact, with validation and an on-screen success message. All figures (combo price, any count) are worked out in code from the sample data — never typed into the page. Nav links go to their sections.

## Inputs

- `project-brief.md`, `architecture.md`, `design.md`, `build-blueprint.md`
- `src/data/sampleData.js`

## Files likely touched

- `src/components/BookingFlow.jsx`
- `src/components/SubjectsPricing.jsx` (if the price display needs the same rule)
- `src/data/sampleData.js`
- `src/styles/*.css`

## Instructions for the coding agent

- `BookingFlow` order, minimal and straight-forward, with a `step n of 4` text line:
  1. **Level** — SPM / IGCSE / A-Level as large selectable options.
  2. **Subjects** — multi-select from the chosen level's subject list; at least one required.
  3. **Combo price** — computed in code from the chosen subjects: the first subject at its individual price, each added subject at its combo rate; show the total and one line of what it includes. Use the same rule the packages use. Figures only — no advising, rating or recommending, and never work out interest.
  4. **Availability** — pick a preferred slot from the availability list; then name and contact. A `Free trial class available` chip sits near the top of this step.
- Validation: cannot move on without a level; cannot submit without at least one subject, a chosen slot, and a name. Errors show in text next to the field.
- On valid submit: replace the form area with a clear success message (for example `Thank you — your enquiry has been recorded. This is a sample page, nothing was sent.`) and a `Start again` button that resets the flow.
- Progress is a small text line, not a heavy stepper. No dragging.
- Nav links in the header scroll to each section (real anchors, no dead links).
- Everything stays in memory; a refresh clears the form (Card 04 is polish only — a site saves nothing).

## What not to do

- Do not send data anywhere, or store it.
- Do not type any computed price into the page.
- Do not add login, payments, backend or APIs.
- Do not add extra questions beyond the four steps + contact.

## Done when

- The flow completes through all four steps and shows the success message.
- Combo price updates from the chosen subjects using the same rule as the packages.
- Validation blocks incomplete steps with text errors.

## Verification steps

- Choose A-Level → pick 2 subjects → the combo price shows a figure computed from their prices (not typed in).
- Try to submit with no slot/name: text errors appear.
- Complete the flow: success message replaces the form.
- `Start again` resets to step 1.
- Header nav links scroll to each section; no dead links.

Design check: the flow follows `design.md` — amber submit, field and focus styles, hairline rows, mobile stacking, and the `## Visual recipe`.

## Localhost test before continuing

After this card, the learner should test:

- Pick `IGCSE`, then pick two subjects: the combo price appears as a figure.
- Check that the price follows the package rule (first subject full price, each extra at combo rate).
- Try to continue/ submit with something missing: a text error shows.
- Complete every step and confirm the success message appears; then press `Start again`.
- Click each header nav link and confirm it jumps to that section.

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

If the price rule or validation cannot be made to work in 15 minutes, keep the flow with a clearly labelled sample total and note it in `build-status.md` for the Improve phase.

## Status
Not started