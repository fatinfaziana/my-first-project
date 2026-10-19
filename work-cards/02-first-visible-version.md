# Work Card 02: First Visible Version

## Goal

Build every section in order with its real (sample) content, following the `## Visual recipe` in `design.md`. The combo price and any computed figure show a placeholder until Card 03. Nothing interactive yet.

## Inputs

- `project-brief.md`, `architecture.md`, `design.md` (especially `## Visual recipe`), `build-blueprint.md`

## Files likely touched

- `src/App.jsx`
- `src/data/sampleData.js`
- `src/components/*.jsx` (Header, Hero, Profile, SubjectsPricing, Availability, Feedback, ProductShowcase, TeacherToolDemo, BookingFlow placeholder, Footer)
- `src/styles/*.css`

## Instructions for the coding agent

- Sections in this order: Header → Hero → Profile → Subjects & prices → Availability → Feedback → Product showcase → Teacher demo → Booking flow (placeholder) → Footer.
- Put all sample data in `src/data/sampleData.js`:
  - Levels: SPM, IGCSE, A-Level.
  - Subjects per level, each with an individual price.
  - Combo packages with what each includes and a price.
  - Availability: a list of dates/time slots.
  - Feedback: 3 sample quotes (first name + subject), labelled sample.
  - Products: marking products, answer checkers, completed notes — title, one-line description, price.
- Hero: short label, big headline (ink, with the teal accent on one key phrase), the free-trial line under it, an amber `Send an enquiry` button (scrolls to the booking section), a secondary `See availability` link, and a small amber `Free trial class available` tag. `Sample data` in muted small text.
- Labels use **inline SVG or none** — never an emoji.
- Follow the recipe exactly: warm canvas, teal trust accent, amber only on the CTA + free-trial tag, indigo only inside the teacher demo band, hairline-separated rows, at most two standout surfaces (hero + teacher demo band), no box-in-box, no border + shadow on the same thing, no shadow on rows.
- Combo price and any computed figure render as placeholders (`RM -`) — do NOT type a number in; Card 03 works them out.
- The booking section for now: show the four step headings as static text with `RM -` where the price goes. No inputs, no buttons that do anything.
- All words are real (no lorem ipsum); every testimonial/stat is labelled sample.

## What not to do

- Do not add working inputs, validation or interactivity.
- Do not type any computed price by hand.
- Do not add backend, APIs, login or packages.
- Do not use emoji, or wrap every section in a box.

## Done when

- All sections render in order with sample content.
- Placeholders (`RM -`) appear where computed figures belong.
- Layout matches the visual recipe.

## Verification steps

- Every section is visible in order.
- Subjects, packages, availability, feedback and products show the sample data.
- Combo price shows `RM -` (placeholder), not a typed value.
- No emoji anywhere; no dead nav links.

Design check: all sections follow `design.md` mood, spacing, CTA style, surfaces, width and type rules, and the `## Visual recipe`.

## Localhost test before continuing

After this card, the learner should test:

- Scroll the whole page: all ten sections appear in order.
- The hero shows the headline, the free-trial line, and the amber `Send an enquiry` button.
- Subjects, packages, availability, feedback and products show sample content.
- The combo price shows `RM -` for now.
- Nothing is clickable/interactive except nav links and the CTA scroll.

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

If sections are unstyled or cramped after 10 minutes, simplify to the recipe's core (header, hero, rows, cards) and move on.

## Status
Not started