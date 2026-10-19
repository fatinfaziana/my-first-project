# Build Status

## Project

- Course: AI Builder Foundations (one evening: Spec, Build, Check; four work cards; no GitHub, Vercel or deploy tonight)
- Name: Tuition Service Landing
- Build shape: Content-led site
- Shape confirmation: Confirmed
- Current KDBM Lite stage: Build
- Current phase: Improve
- Current work card: done (all four complete)

## Completed planning phases

- [x] Project Brief
- [x] Architecture
- [x] Design
- [x] Build Blueprint
- [x] Work Cards 01 to 04

## Completed work cards

- [x] 00 Setup Gate
- [x] 01 Project Skeleton
- [x] 02 First Visible Version
- [x] 03 Core Behaviour
- [x] 04 Save or Polish

## In progress

- [ ] Improve phase (learner-driven changes, one at a time)

## Blockers

- None recorded yet

## Decisions made

- Build type: Content-led site
- Build shape: Content-led site (single landing page, sample data)
- Stack: Vite + React + plain CSS
- Design inspiration: Fallback 2: Apple-like premium minimal (warm teal trust + amber action)
- Storage: None (display-only sample data; no localStorage)
- Deployment target: None tonight (Ship is taught in Build & Ship)
- Project name: Tuition Service Landing
- Structure: 10 sections in order (Header, Hero, Profile, Subjects & prices, Availability, Feedback, Product showcase, Teacher demo, Booking flow, Footer)
- Booking flow: level (SPM / IGCSE / A-Level) -> subjects -> combo price -> availability -> contact -> success message
- Proof target: every section renders on phone and desktop, links work, booking flow validates and shows success message

## Last verified state

- Coding workspace: Ready (agent can read/write markdown and run terminal commands)
- File read/write access: Ready
- Terminal access: Ready
- Node: v24.21.0 (pass, >= v22.12)
- npm: 11.19.0 (pass)
- Git: git version 2.50.1 (Apple Git-155) (pass)
- GitHub account: Not needed tonight
- Vercel account: Not needed tonight
- KrackedDevs account: Done on the school page (not asked tonight)
- Localhost: Ready at http://localhost:5173 (Vite v8.3.4, dev server started)
- Build: Not started

## Work Card 02 result

- What changed: added `src/data/sampleData.js` (levels/subjects, packages, availability, feedback, products, teacher demo, contact); added `src/components/` Header, Hero, Profile, SubjectsPricing, Availability, Feedback, ProductShowcase, TeacherToolDemo, BookingFlow (placeholder), Footer; rewrote `App.jsx` and `App.css` to all ten sections in order following the `design.md` visual recipe; added `useReveal` hook + IntersectionObserver for gentle on-entry fade/rise.
- Passed: all ten sections render in order; hero shows headline, free-trial line, amber CTA and tags; computed prices show placeholder `RM -` (not typed); no emoji; nav links point to real section ids; `npm run lint` clean; no dev-server errors.
- Failed: none.

## Work Card 03 result

- What changed: `sampleData.js` gained `priceForSubjects()` (first subject at RM 60, each extra at RM 45) and price constants; `BookingFlow.jsx` rebuilt as a working 4-step flow (level -> subjects -> combo price -> availability + contact) with `step n of 4` line, text validation, success summary and `Start again`; `SubjectsPricing.jsx` now shows computed figures from the same rule; `App.css` gained booking/option/field styles and mobile stacking.
- Figures: single subject RM 60; two subjects RM 105; three subjects RM 150 (all computed in code, none typed in).
- Passed: flow completes through all 4 steps and shows the success message; validation blocks a missing level / no subject / no slot / no name with text errors; price updates from chosen subjects; `Start again` resets to step 1; nav links are real anchors; `npm run lint` clean; no dev-server errors.
- Failed: none.

## Work Card 04 result

- What changed: hardening polish only. Added global `:focus-visible` outline, `overflow-x` guards on html/body/#root, a `.visually-hidden` utility, fixed teacher-band preview tag and keyword chip contrast, thickened the demo card border.
- Passed: one h1 (site name) and an h2 per section; every form input has a visible label; errors are text with `role="alert"`; focus outlines visible; `npm run lint` clean; `npm run build` succeeds; no emoji; all testimonials labelled sample; footer states nothing is sent or saved. `dist/` removed after the build check.
- Failed: none.

## Next instruction for AI

Improve phase. Wait for the learner to ask for one change at a time. Do not add login, database, payments, secrets or anything online tonight.

## Work Card 01 result

- What changed: scaffolded Vite + React app into this folder (moved from `app-temp`), set `index.html` title and `package.json` name to `tuition-service-landing`, replaced the default App with a header only (name + one-line purpose + muted `Sample data`), rewrote `index.css`/`App.css` to the warm off-white canvas and ink from `design.md`, removed unused scaffold assets.
- Passed: `npm install` (0 vulnerabilities), `npm run dev` ready at http://localhost:5173, served `<title>Tuition Service Landing</title>`, `npm run lint` (oxlint) clean, no console errors.
- Failed: none.