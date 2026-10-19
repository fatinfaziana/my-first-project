# Work Card 01: Project Skeleton

## Goal

Create the Vite + React app in this project folder, with the project name as a header and one line under it. Nothing else yet.

## Inputs

- `project-brief.md` (name: Tuition Service Landing)
- `architecture.md`
- `design.md`
- `build-blueprint.md`

## Files likely touched

- `index.html`, `package.json`
- `src/main.jsx`, `src/App.jsx`
- `src/styles/global.css`

## Instructions for the coding agent

- Create the app in a temporary subfolder:

  `npx -y create-vite@9.2.1 app-temp --template react --no-interactive`

- Ignore the scaffolder's "cd app-temp" hint. Move everything inside `app-temp`, hidden files included, up into this project folder, next to `START_HERE.md`. Then delete the empty `app-temp` folder.
- Set the `<title>` in `index.html` to `Tuition Service Landing`, and the `"name"` in `package.json` to `tuition-service-landing`.
- Replace the default `App` with a header only: the name `Tuition Service Landing` and one line under it, for example `Tuition for SPM, IGCSE and A-Level — sample data`. Small muted `Sample data` text.
- Basic global CSS: warm off-white background `#FBFAF7`, ink `#14181C`, the system sans stack from `design.md`.
- Run `npm install`, then `npm run dev`.

## What not to do

- Do not create any other section or component yet.
- Do not add content, forms or interactivity.
- Do not install extra packages or a CSS framework.
- Do not initialize Git or deploy.

## Done when

- The app runs and shows the header and its one-line purpose.
- No console errors.

## Verification steps

- `npm run dev` starts without errors.
- The browser shows the app name and the purpose line.
- `package.json` name is `tuition-service-landing`.

Design check: header follows `design.md` mood (warm off-white canvas, ink heading), spacing and type rules.

## Localhost test before continuing

After this card, the learner should test:

- `npm run dev` starts and the localhost URL loads.
- The page shows the name and the one-line purpose under it.
- The background is warm off-white, not plain white.

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

If the app cannot be scaffolded or started in five minutes, put a hand up for a trainer and sit with a neighbour.

## Status
Not started