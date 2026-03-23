# Mobile UI/UX — rollout (baby steps)

We apply mobile UX improvements in **small PRs**, one concern at a time:

1. **Single source of truth** — `src/theme/mobile-ux-tokens.ts` (no scattered magic numbers).
2. **One or two call sites per PR** — easier review and rollback.
3. **Theme first, then components** — prefer Mantine `fontSizes` / `spacing` when a change is global.

## Done

- [x] **Step 1:** `mobile-ux-tokens.ts` + wire **PrevNextArrows** mobile lateral inset to `DOC_ARROW_CONTENT_INSET_PX` and arrow hit area to `POINTER_TARGET_COMFORTABLE_PX`.
- [x] **Step 1b:** `theme.ts` — `fontSizes.md` uses `BODY_TEXT_MIN_PX` so corpo “default” Mantine stays aligned with the token.
- [x] **Step 2:** `ContentRenderer` — texto/listas de leitura (diagramas, link/icon cards, rich cards, timeline, blocos `list`) usam **`size="md"`** onde antes era `sm`/`xs` para corpo.

## Next (ideas — pick one per PR)

- [ ] `GlossaryBlock` e outros componentes fora do JSON — mesmo critério, PR separado.
- [ ] Optional: `TypographyStylesProvider` defaults under `data-doc-content` for paragraph scale only.
- [ ] Audit interactive controls &lt; 24px hit area; add invisible padding where needed.
- [ ] Document safe-area patterns for any new fixed UI.

## Quick reference

| Token                           | Value | Intent                |
| ------------------------------- | ----- | --------------------- |
| `POINTER_TARGET_MIN_WCAG_PX`    | 24    | WCAG 2.5.8 AA floor   |
| `POINTER_TARGET_COMFORTABLE_PX` | 44    | Primary taps / arrows |
| `BODY_TEXT_MIN_PX`              | 16    | Body text baseline    |
| `CONTENT_GUTTER_MIN_PX`         | 16    | Side gutter default   |
| `DOC_ARROW_CONTENT_INSET_PX`    | 16    | Doc column + arrows   |
