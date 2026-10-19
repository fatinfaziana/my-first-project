# Design Direction

## Design Inspiration URL

Fallback 2: Apple-like premium minimal

## What We Borrow

- Generous whitespace and large, confident type.
- Quiet, near-white canvas with one strong accent doing the emotional work.
- Content grouped by meaning, not by boxes: sections separated by space and a hairline, not borders.
- Big, tappable primary button with generous padding and rounded corners.
- Product-photo-style cards: large area, small caption, price in the corner.
- Smooth, single-purpose motion (gentle fade/rise on section entry).

## What We Do Not Copy

- No Apple logo, wordmark, product imagery, or Apple wording.
- No iPhone/MacBook mockups or Apple-store phrasing.
- No borrowed brand fonts (SF Pro), brand colours or taglines.
- No fake reviews, fake stats or invented credentials presented as real.
- No copied text, photos or testimonials from any other site.

## Visual Mood

Premium, calm and trustworthy — but warm, not cold. The learner's one thing: **welcoming and quietly impressive, so a new visitor immediately feels "this person is safe and worth clicking," with a psychology-minded colour choice that builds interest before they read the reviews.**

Colour psychology used deliberately:

- **Deep teal-green as the primary accent** (`#0F6B5C`) — the education trust colour: calm, capable, grown-up; reads as "reliable teacher," not a startup.
- **Warm amber as the action colour** (`#E8890C`) — warmth, optimism, invitation; used ONLY on the free-trial highlight and the primary CTA, so it never competes and always means "start here."
- **Soft warm off-white canvas** (`#FBFAF7`) — approachable, not clinical; keeps the premium feel without feeling like a hospital.
- **Indigo accent for the teacher/products side** (`#3B4CCA`, used sparingly) — signals technology and usefulness for the teacher-tool demo section.
- Strong, readable ink (`#14181C`) and calm grey (`#5B6470`) for body text: contrast is what makes a page feel trustworthy.

## Layout Rules

- Max content width ~1120px, centred, with generous side padding (24px phone / 40px+ desktop).
- Section rhythm: vertical padding of 72–96px desktop, 48–56px phone; a single hairline (`1px solid rgba(0,0,0,.08)`) between major sections, never a box per section.
- **Hero / first screen:** two-column on desktop — left = short label, big headline (with the free trial line inside it), one-line promise, amber CTA button, small "sample data" note; right = a calm profile/portrait card area. On a phone this stacks: label, headline, promise, CTA, then the profile card.
- **Profile section:** portrait holds a large rounded card; text sits beside it with short, honest paragraphs and a small list of qualifications.
- **Subjects & prices:** simple rows (subject — level — individual price) separated by hairlines; packages shown as 2–3 side-by-side cards on desktop, stacked on phone. One package is marked "Most popular" with a small amber tag.
- **Availability:** a clean list of dates/time slots in two columns on desktop, one on phone; a "Free trial available" chip near the top of this list.
- **Feedback:** three lightweight cards (quote, first name, subject) side by side on desktop, stacked on phone; labelled sample.
- **Product showcase:** a responsive grid (2–3 across desktop, 1 on phone) of image-area cards with title, one-line description and price.
- **Teacher demo section:** darker inset band (deep teal tint) to visually separate it; description on one side, a small static "marked answer" preview card on the other.
- **Enquiry / booking form:** centred, single column, max ~640px; a short guided flow in this order — (1) level: SPM / IGCSE / A-Level as large selectable options, (2) subjects: multi-select from that level's list, (3) combo price: the price for the chosen subjects shown immediately with what is included, (4) availability: pick a preferred slot, then name/contact; one amber submit button; success message replaces the form area. Progress is a simple "step n of 4" text line, not a heavy stepper. Minimal and straight-forward: no extra questions, no dragging.
- **Footer:** contact details, a one-line sample-data disclaimer, small print.

## Colour / Contrast Rules

- Page background: warm off-white `#FBFAF7`, lightly tinted, never pure white `#FFFFFF`.
- Primary accent (trust): deep teal-green `#0F6B5C`.
- Action accent (interest/CTA + free trial): warm amber `#E8890C`.
- Teacher/tech accent: indigo `#3B4CCA` (used only in the teacher demo section).
- Ink `#14181C` for headings, grey `#5B6470` for body — both AA on the warm off-white.
- Amber buttons use dark ink text, not white, for AA contrast.
- No colour is used decoratively; every use carries a meaning (trust / action / teacher).

## Typography Feel

- One clean geometric-humanist sans for everything (system stack: `-apple-system, "Segoe UI", Inter, Roboto, sans-serif`).
- Headings: large and confident — hero H1 ~clamp(2rem, 5vw, 3.25rem), section H2 ~clamp(1.5rem, 3vw, 2.25rem), weight 600–700, tight line-height (1.1–1.2).
- Body: 16–18px, line-height 1.6, weight 400, max ~65 characters per line.
- Small labels/eyebrows: 12–13px, uppercase, letter-spacing 0.08em, grey.
- Prices use tabular numbers (`font-variant-numeric: tabular-nums`) so columns align.
- Emphasis comes from size and weight, never from boxes or pills around plain text.

## Component Style

- **Primary button (CTA + free trial):** amber fill, dark ink text, radius 12px, padding 14px 22px, subtle shadow on hover only, slight lift on hover.
- **Secondary button:** transparent, 1px teal border, teal text.
- **Cards (packages, feedback, products):** flat surface `#FFFFFF` on the warm canvas, radius 16px, hairline border, NO shadow on rows; at most a soft shadow on the packages.
- **Rows (subjects, availability):** hairline-separated list; no box per row, no shadow.
- **Form fields:** white fill, 1px grey border, radius 10px, clear focus ring in teal; error text in a red `#C0392B`, success in teal.
- **No pill shapes around plain text.** The only rounded containers are controls (buttons, inputs, tags with meaning like "Free trial" / "Most popular").
- Icons: small inline SVG only, never emoji.

## Mobile Rules

- One column everywhere below 700px; grids collapse to single column.
- Hero stacks CTA above the fold: label → headline → promise → amber CTA visible without scrolling.
- Touch targets ≥44px; buttons full-width in the form.
- Type never below 16px for body; headline scales down via clamp.
- Test at 375px width: no horizontal scrolling, no clipped text, price columns stay readable.

## Accessibility Basics

- Text contrast meets WCAG AA on the warm off-white and on card surfaces.
- Every image has meaningful `alt`, or `alt=""` when purely decorative.
- Form fields have visible `<label>`s (not placeholder-only); errors are announced in text, not colour alone.
- Nav links are real anchors with visible focus outlines; keyboard can reach every control.
- Heading order is logical (one H1, then H2 per section).
- Motion is subtle and non-essential; the page works with animations off.

## Anti-Slop Rules

- No fake logos.
- No fake testimonials — feedback is clearly made-up sample data and labelled so.
- No fake stats unless clearly marked sample.
- No "lorem ipsum" in the final proof — all copy is real, if sample.
- No emoji anywhere on the page.
- No box around every section; no pill around plain text.
- One clear primary action: send an enquiry (with the free-trial offer highlighted beside it). Nothing invented beyond what the brief has — no pay, apply or add-to-cart behaviour.
- Readable on phone width.
- Money shown as figures only (prices, what each package includes); no advising, rating or recommending, no interest.

## Design Verification Checklist

- [ ] Warm off-white canvas with one teal trust accent, amber action accent only on CTA + free trial.
- [ ] Hero fits label + headline + promise + CTA on a 375px screen.
- [ ] Sections separated by space and hairline, not boxes.
- [ ] Subjects/prices align in a readable column (tabular numbers).
- [ ] Packages show a "Most popular" tag without looking spammy.
- [ ] Availability shows the "Free trial available" chip.
- [ ] Feedback labelled as sample.
- [ ] Product grid is 2–3 across desktop, 1 on phone.
- [ ] Teacher demo band is visually distinct.
- [ ] Enquiry / booking form runs level → subjects → combo price → availability, validates, shows a clear on-screen success message, and is keyboard usable.
- [ ] No emoji, no dead links, no console errors.
- [ ] AA contrast passes; page looks finished at 375px and 1280px.

## Visual recipe

The build follows this section card by card. The style above sets the colours, typeface and mood; this section fixes what the page shows and how its surfaces, rows and icons are built, and wins wherever the two differ. For a landing page whose job is presenting a tuition service:

- Header: the service name, the one-line purpose under it, and the words `Sample data` in small muted text. A small inline SVG icon or no icon, never an emoji.
- Hero: a short label, the headline at 48px or larger in ink with the accent colour carrying one key phrase, the free-trial line directly under it, an amber primary CTA (`Send an enquiry`) and a secondary text link (`See availability`). A small "Free trial class available" tag in amber, plus the words `Sample data` in muted small text.
- Sections: each section is a labelled band (eyebrow label + H2), separated from the next by a hairline and generous space. Content sits on the warm canvas, never each in a box.
- Rows (subjects, availability): one list, not a box per row. Each row: the subject or slot in bold, secondary detail in grey, the amount or status on the right; hairline between rows.
- Cards: packages, feedback and products use a flat surface, hairline border, radius 16px, no shadow on rows, at most a soft shadow on the packages only. One package carries a small amber `Most popular` tag.
- Colour: the warm off-white canvas, deep teal-green trust accent, warm amber action accent (CTA + free trial only), and indigo only inside the teacher demo band. Every colour with AA contrast on its background.
- Surfaces: at most two areas stand out from the canvas (the hero and the teacher demo band). Never a box inside a box, never a border and a shadow on the same thing, no shadow on rows.
- Width: on a screen wider than 900px, use the width (hero two-column, packages and product grid multi-column). On a phone, one column.
- Type: the one sans for words and numbers, with tabular numbers so prices line up. Emphasis comes from size and weight, not from boxes or pills. The only boxes are controls (buttons, inputs, tags with meaning).
- Motion: sections and cards fade and rise gently once on entry (a CSS transition). Nothing else moves.
- No new library: plain CSS and inline SVG. No emoji anywhere on the page: they look different on every device.