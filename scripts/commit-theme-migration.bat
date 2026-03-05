@echo off
REM Run from repo root: scripts\commit-theme-migration.bat
REM Context-segmented commits in English, then push.

cd /d "%~dp0.."
if errorlevel 1 exit /b 1

echo === Git status ===
git status --short
echo.

echo === 1: themes + copy script ===
git add themes/ scripts/copy-staff-level-shine.cjs 2>nul
git diff --cached --quiet || git commit -m "feat: add staff-level-shine theme folder and copy script"
echo.

echo === 2: Tailwind + PostCSS + deps ===
git add tailwind.config.ts postcss.config.js package.json 2>nul
if exist package-lock.json git add package-lock.json
if exist pnpm-lock.yaml git add pnpm-lock.yaml
if exist yarn.lock git add yarn.lock
git diff --cached --quiet || git commit -m "feat: add Tailwind and PostCSS config and dependencies"
echo.

echo === 3: theme CSS (vars, Tailwind, playbook, shell primary) ===
git add src/index.css 2>nul
git diff --cached --quiet || git commit -m "feat: add theme CSS variables, Tailwind and playbook styles, shell primary colors"
echo.

echo === 4: lib/utils + playbook-theme components ===
git add src/lib/utils.ts src/components/playbook-theme/ 2>nul
git diff --cached --quiet || git commit -m "feat: add lib/utils (cn) and playbook-theme components"
echo.

echo === 5: theme colors + Mantine theme ===
git add src/theme/ src/theme.ts 2>nul
git diff --cached --quiet || git commit -m "feat: add staff-level-shine theme colors and Mantine theme"
echo.

echo === 6: shell migration (HeaderBar, Footer, App) ===
git add src/App.tsx src/components/HeaderBar.tsx src/components/Footer.tsx 2>nul
git diff --cached --quiet || git commit -m "feat: migrate shell to new theme (HeaderBar, Footer, primary accents)"
echo.

echo === 7: Home page (staff-level-shine content) ===
git add src/pages/Home.tsx 2>nul
git diff --cached --quiet || git commit -m "feat: add Home page with staff-level-shine layout and content"
echo.

echo === 8: playbook components + ui (remaining) ===
git add src/components/playbook/ src/ui/ 2>nul
git diff --cached --quiet || git commit -m "chore: add playbook components and ui exports"
echo.

echo === Push ===
git push
echo.
echo Done.
