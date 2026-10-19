# Work Card 04: Save or Polish

## Goal

Polish: phone width, on-entry motion, a final check of every line of the `## Visual recipe`, accessibility basics and a final content check. A site saves nothing, so this is its polish card.

## Inputs

- `project-brief.md`, `architecture.md`, `design.md` (especially `## Visual recipe`), `build-blueprint.md`

## Files likely touched

- `src/styles/*.css`
- `src/components/*.jsx` (small fixes only)

## Instructions for the coding agent

- **Phone width:** check at 375px — one column, no horizontal scroll, hero fits label + headline + free-trial line + CTA without scrolling, buttons full-width in the flow, prices readable.
- **Motion:** sections and cards fade and rise gently once on entry (CSS transition). Nothing else moves.
- **Visual recipe pass:** walk every line of `## Visual recipe` and confirm it holds — header, hero, rows, cards, colour (teal trust / amber action / indigo in the teacher band only), surfaces (at most two standout areas), width rules, tabular numbers, no emoji, no box-in-box, no border + shadow on the same thing.
- **Accessibility:** AA contrast; every input has a visible label; errors are text, not colour alone; visible focus outlines; logical heading order (one H1, then H2 per section); works with motion off.
- **Content check:** no lorem ipsum; every testimonial/stat labelled sample; money shown as figures only; no real names, phone numbers, IC numbers, account numbers, real balances or company names.
- Note once, somewhere correct: this site saves nothing (all content is sample).

## What not to do

- Do not add `localStorage`, a backend, login or payments.
- Do not add new sections or new data types.
- Do not change the confirmed build shape or guardrails.

## Done when

- The page looks finished at 375px and 1280px.
- The visual recipe holds line by line.
- Accessibility basics and the content check pass.

## Verification steps

- At 375px: no horizontal scroll; hero CTA visible without scrolling; the flow is usable.
- Sections fade/rise gently once on entry.
- Contrast, labels, focus outlines and heading order are correct.
- No emoji; no lorem ipsum; every testimonial/stat labelled sample.

Design check: every line of the `## Visual recipe` in `design.md` holds, and the page still matches `design.md` mood, spacing, surfaces, CTA style and mobile rules.

## Localhost test before continuing

After this card, the learner should test:

- Resize to phone width (375px): nothing is cut off, no sideways scrolling, the hero CTA is visible without scrolling.
- Refresh and scroll: sections fade/rise gently, then hold still.
- Tab through the page: focus outline is visible on links, buttons and fields; every field has a label.
- Check text contrast and that every testimonial/stat says it is sample.
- Confirm the page still looks like `design.md` at desktop width.

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## After this card: tick chapter 03

End your first checkpoint message for this card (the one that gives its localhost tests) with these two lines, exactly, as plain chat text, never inside a code block (or the link cannot be clicked):

**Your cards are built. Next: tick chapter 03 on your class page.**
[Open chapter 03, Build and test](https://learn.theaibuilder.school/courses/ai-builder-foundations/modules/3) and press **I built my cards**. Then come back to this chat.

When the learner replies `continue`, start your reply with the same two lines.

## Status
Not started