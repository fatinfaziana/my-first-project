# Architecture

## Build Shape

Content-led site: one responsive landing page with display-only sample data and one primary action (the enquiry form).

## Stack Decision

- **Vite** (dev server and build tool).
- **React** (component structure).
- **Plain CSS** (no Tailwind this session).
- No backend, auth, database, payment or live API.
- No `localStorage` — nothing needs to survive a refresh tonight.

## Structure Overview

One page, sections stacked in this order:

1. Header (tutor/service name + short purpose line + nav links to sections)
2. Hero (short label, headline, one-line promise, primary CTA button that scrolls to the enquiry form)
3. Tutor profile (about the tutor, made-up sample text)
4. Subjects & package prices (subject list, individual prices, combo packages)
5. Availability (list of available dates/times — view only, sample data)
6. Client feedback / comments (sample testimonials, clearly marked sample)
7. Product shop showcase (display only: marking products, answer checkers, completed notes; each with a short description and price)
8. Teacher AI-marking demo (marketing/preview section only — describes the service, shows a small non-working sample of a marked answer)
9. Booking / enquiry form (primary action, a short guided flow: level SPM/IGCSE/A-Level → subjects → combo price → preferred availability → name/contact; validates and shows an on-screen success message)
10. Contact / footer (how to reach the tutor, opening note that all data is sample)

## Component Map

- `App` — page shell, section order.
- `Header` — name, purpose line, in-page nav.
- `Hero` — headline, promise line, CTA (scrolls to `EnquiryForm`).
- `Profile` — tutor intro block.
- `SubjectsPricing` — subject rows + package cards.
- `Availability` — availability list.
- `Feedback` — client comment cards (sample).
- `ProductShowcase` — product cards (display only).
- `TeacherToolDemo` — service description + static sample preview.
- `BookingFlow` — guided level → subjects → combo price → availability → contact, with validation + success state.
- `Footer` — contact details, sample-data note.

## Data / State Model

- All section content is static sample data defined in code (arrays/objects or plain JSX).
- Only live state: the booking flow's step, chosen level, chosen subjects, computed combo price, chosen slot, contact fields, validation errors, and a `submitted` success flag.
- No user data is stored or sent anywhere.

## Storage Logic

None. No `localStorage`, no cookies, no network calls. The enquiry form resets to a success message on submit; refreshing clears it.

## User Flow

1. Land on hero, read the promise, click the CTA.
2. Browse profile, subjects/prices, availability, feedback.
3. Browse product showcase and teacher demo if interested.
4. Run the booking flow: level → subjects → see combo price → pick availability → send, see the on-screen success message.

## File Expectations

- `index.html`, `src/main.jsx`, `src/App.jsx`
- `src/components/*.jsx` (one file per section above)
- `src/styles/*.css` (global + section styles)
- App lives in this project folder, beside `START_HERE.md`.

## Constraints

- One page; mobile-first responsive layout.
- Money is shown as figures only (prices, what each package includes). No advising, rating or recommending, no interest.
- All people, prices, testimonials and products are made-up sample data.
- Feedback and any stats are clearly labelled as sample.

## Technical Non-Goals

- No login/accounts, for clients or teachers.
- No payments, cart or checkout.
- No database, backend or server code.
- No live AI API, handwriting reading, scanning or keyword marking engine.
- No in-app booking agreement between tutor and client.
- No multi-user sync, admin panel or uploads.
- No GitHub, Vercel or deploy tonight.

## Verification Notes

- `npm run dev` starts the local server; page opens on localhost.
- Check on phone width and desktop width.
- Every nav link scrolls to its section; no dead links.
- Enquiry / booking flow: level must be chosen before subjects; at least one subject required; combo price updates from the chosen subjects; a slot must be chosen; contact name required. Valid submit shows the success message.
- No console errors; no emoji on the page.