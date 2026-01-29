# Theme & Colors – Single Source of Truth

**All app colors and theme tokens live here.** Change colors in one place only.

## Files

- **`colors.ts`** – Defines:
  - `brand` – Main palette (backgrounds, borders). Used by Mantine theme.
  - `accent` – Highlights, links, CTAs. Used by Mantine theme.
  - `semantic` – Named tokens for layout, nav, canvas, diagrams (body, container, nav hover, canvas line/node/glow, diagram success/error/fill/text, etc.).
  - `semanticCssVars` – Map of semantic keys to CSS variable names (`--app-*`) injected in `main.tsx`.

## How it works

1. **Mantine theme** (`../theme.ts`) imports `brand` and `accent` from `./theme/colors` and passes them to `createTheme()`. Components use `var(--mantine-color-brand-*)` and `var(--mantine-color-accent-*)`.

2. **Global CSS** (`../index.css`) uses `var(--app-body-dark)`, `var(--app-nav-hover-bg-dark)`, etc. Those variables are set in `main.tsx` from `semantic` before the app renders.

3. **Canvas / diagrams** (NeuralNetworkCanvas, DependencyRuleDiagram, etc.) import `semantic` from `../../theme/colors` and use `semantic.canvasBgDark`, `semantic.diagramSuccessBorderDark`, etc., because canvas 2D cannot use CSS variables.

## Changing the theme

Edit **`src/theme/colors.ts`** only:

- **Brand palette** – Change `brand[0]`…`brand[9]` (e.g. switch to another blue or another hue).
- **Accent** – Change `accent[0]`…`accent[9]` for links and highlights.
- **Semantic tokens** – Adjust `semantic.bodyDark`, `semantic.containerDark`, `semantic.navHoverBgDark`, canvas and diagram tokens, etc.

No need to touch `index.css`, `theme.ts`, or component files for color values.
