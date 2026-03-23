/**
 * Mobile / touch UX tokens for the playbook UI.
 *
 * Use these instead of magic numbers in components. Extend in small PRs as we
 * align more screens with the guidelines in docs/MOBILE_UX.md.
 *
 * References (summary):
 * - WCAG 2.2: 2.5.8 Target Size (Minimum) — 24×24 CSS px (AA)
 * - WCAG 2.2: 2.5.5 Target Size (Enhanced) — 44×44 CSS px (AAA)
 * - Web reading: ~16px body is widely used to avoid iOS input zoom and aid readability
 */

/** WCAG 2.5.8 AA — minimum pointer target (CSS pixels). */
export const POINTER_TARGET_MIN_WCAG_PX = 24;

/**
 * Comfortable interactive target (Apple HIG–style; matches WCAG 2.5.5 Enhanced).
 * Use for primary chrome: icon buttons, floating nav arrows, etc.
 */
export const POINTER_TARGET_COMFORTABLE_PX = 44;

/**
 * Recommended minimum for long-form body text on the web (many design systems).
 * Mantine `md` font size is already 16px in theme.ts — this constant documents intent.
 */
export const BODY_TEXT_MIN_PX = 16;

/**
 * Typical minimum horizontal gutter for readable content on narrow viewports.
 */
export const CONTENT_GUTTER_MIN_PX = 16;

/**
 * Lateral padding for the main doc column when prev/next arrows are shown (mobile).
 * Keeps text readable while arrows use POINTER_TARGET_COMFORTABLE_PX hit area.
 */
export const DOC_ARROW_CONTENT_INSET_PX = CONTENT_GUTTER_MIN_PX;
