# Build Blueprint

## Source Files

- `project-brief.md`
- `architecture.md`
- `design.md`
- `work-cards/00-setup-gate.md`

## Project Identity

- Name: **Tuition Service Landing**
- Course: AI Builder Foundations (Spec, Build, Check tonight).
- One landing page. No login, payments, backend or deploy tonight.

## Build Shape

**Content-led site** — a single responsive landing page with display-only sample data and one primary action (the booking/enquiry flow).

## Version-One Promise

A visitor lands, immediately feels the tutor is trustworthy and worth clicking, reads the subjects, combo prices, availability and feedback, and completes a short booking flow: **level → subjects → combo price → availability → contact**, ending in a clear on-screen success message. The page also showcases products (for teachers and students) and the teacher AI-marking service as a preview.

## Scope Lock

### Now

- One responsive landing page, all sections in order.
- Header, hero (with free-trial offer + CTA), tutor profile, subjects & combo prices, availability list, client feedback (sample), product showcase, teacher AI-marking demo (marketing/preview), booking flow, contact/footer.
- Booking flow: level (SPM / IGCSE / A-Level) → subjects (multi-select for that level) → combo price computed from chosen subjects → preferred availability slot → name/contact → submit shows an on-screen success message.
- Money shown as figures only.
- Mobile check, working links.

### Later (needs trainer approval or the paid cohort)

- Login/accounts, mutual availability agreement, real booking engine, payments, real teacher AI-marking tool, cart/checkout, multi-user sync, admin, uploads.

### Never (tonight)

- No login, payments, database, backend, live API or secret keys.
- No in-app agreed bookings.
- No real names, phone numbers, IC numbers, account numbers, real balances or company names.
- No action the brief does not have (no pay, apply, add-to-cart).

## Architecture Summary

- Stack: Vite + React + plain CSS. No Tailwind.
- One page; sections stacked in the order listed in Scope Lock / `architecture.md`.
- Components: `Header`, `Hero`, `Profile`, `SubjectsPricing`, `Availability`, `Feedback`, `ProductShowcase`, `TeacherToolDemo`, `BookingFlow`, `Footer`.
- App lives in this project folder, beside `START_HERE.md`.

## Data / State / Storage Rules

- All section content is static sample data in code (levels, subjects, prices, packages, availability, feedback, products).
- Live state only in the booking flow: `step`, `level`, `subjects[]`, computed `comboPrice`, `slot`, contact fields, validation errors, `submitted` flag.
- No storage anywhere: no `localStorage`, cookies or network. Refresh clears the form.
- Every testimonial/stat is labelled sample; all names, prices and products are made-up.

## Design Direction Summary

- Fallback 2: Apple-like premium minimal, warm not cold.
- **Borrow:** whitespace, large confident type, quiet near-white canvas, one strong accent, hairlines instead of boxes, big amber CTA, gentle on-entry motion.
- **Do not copy:** Apple logo, wordmark, imagery, wording, fonts or colours; no fake logos/testimonials/stats; no copied text, photos or identity.
- Mood: welcoming, quietly impressive. Colour psychology — deep teal-green `#0F6B5C` = trust, warm amber `#E8890C` = action/free trial only, indigo `#3B4CCA` = teacher demo only.
- Follow the `## Visual recipe` in `design.md` card by card.

## Implementation Rules

- Mobile-first, one column below 700px.
- Prices use tabular numbers.
- Booking flow is minimal and straight-forward: 4 short steps, "step n of 4" text line, no heavy stepper, no dragging.
- Combo price must be computed in code from the chosen subjects — never typed into the page.
- Form fields have visible labels; errors in text, not colour alone.
- No emoji; inline SVG only.
- Plain CSS and inline SVG; no new libraries.

## File and Folder Expectations

- `index.html`, `src/main.jsx`, `src/App.jsx`
- `src/components/*.jsx` — one per section.
- `src/data/sampleData.js` — levels, subjects, prices, packages, availability, feedback, products.
- `src/styles/*.css` — global + sections.
- Planning files stay untouched beside the app.

## Work Card Plan

1. **01 Project skeleton** — Vite + React app in this folder, header + one-line purpose, project name in `index.html`/`package.json`.
2. **02 First visible version** — every section in order with real (sample) content, built to the `## Visual recipe`; combo price and any computed figure show a placeholder (`RM -`) until Card 03; nothing interactive.
3. **03 Core behaviour** — the booking flow (level → subjects → combo price → availability → contact) with validation and on-screen success; combo price and all figures worked out in code from sample data; working nav links.
4. **04 Save or polish** — phone width, on-entry motion, final check of every line of the `## Visual recipe`, accessibility basics, final content check. A site saves nothing, so this is its polish card.

## Review Mirror

Optional tonight: `prompts/07-review-mirror.md`, not a work card.

## Proof Ladder

- App running on localhost.
- Every section renders, links work, booking flow validates and shows its success message.
- Improved your way in the Improve phase. No GitHub or Vercel tonight.

## 60-Second Explanation Template

"In one evening I planned and built a one-page tuition service site. A visitor sees the tutor's profile, subjects, combo prices, availability and sample feedback, and books through a short flow — level, subjects, combo price, availability, contact — that confirms on screen. A product showcase and a teacher AI-marking preview sit on the same page. It is all sample data, no login or payments, and I can keep improving it."

## Guardrails for the Coding Agent

- Read `build-status.md`, `build-blueprint.md`, and the current work card before editing.
- Implement only the current work card. Do not jump ahead.
- Stop after verification; update `build-status.md` after each work card.
- Do not add backend, auth, database, API or secrets unless the blueprint explicitly allows it.
- Do not add secrets or keys to code.
- Do not invent claims, testimonials, logos or real numbers.
- Content-led site guardrails: one page; factual content in clear sections; one clear primary action (the booking flow); responsive layout + mobile check; working links and honest form behaviour.
- No action the brief does not have (no pay, apply or add-to-cart).
- Money brief: work out and show figures only (prices, sums, what each package includes); never advise, rate or recommend, and never work out interest.
- A legacy `Build Mode` file is read as `Build Shape` without stopping.