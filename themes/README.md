# Themes

This folder holds **reference themes** (layout, structure, UI) that we gradually adapt into the main app.

## staff-level-shine

- **Source:** [staff-level-shine](https://github.com/your-repo/staff-level-shine) (or the zip you downloaded).
- **Stack:** Vite, React, TypeScript, **Tailwind CSS**, **shadcn/ui** (Radix), Framer Motion, Lucide icons.
- **Contains:** Full project — `src/` (App, pages, components/playbook, components/ui), configs (Tailwind, PostCSS, Vite), and all UI primitives.

### How to populate

**Option A – Run the copy script (recommended)**

From the repo root:

```bash
npm run theme:copy
```

Or directly:

```bash
node scripts/copy-staff-level-shine.cjs
```

By default it copies from:

- `C:\Users\tcarv\Downloads\staff-level-shine-main\staff-level-shine-main`

to:

- `themes/staff-level-shine`

To use another source path:

```bash
node scripts/copy-staff-level-shine.cjs "D:\path\to\staff-level-shine"
```

**Option B – Manual copy**

1. Create `themes/staff-level-shine`.
2. Copy the **entire** staff-level-shine project (all files and folders, including `src/`, `public/`, config files, `package.json`, etc.) into `themes/staff-level-shine`.

### After copying

- You can run the theme in isolation: `cd themes/staff-level-shine && npm i && npm run dev`.
- Use it as the single source of truth for layout, colors, and UI while we adapt our content (guides, architectures, etc.) into this structure.

### Adapting our content

We will, step by step:

1. Use this theme’s layout and UI as the reference.
2. Bring over our content (e.g. from `src/data/`, docs, guias) into that structure.
3. Keep the main app (Mantine, current routes) until the new theme is fully integrated.
