/**
 * Single source of truth for app colors.
 * staff-level-shine theme: dark blue-gray background, amber primary.
 */

import type { MantineColorsTuple } from '@mantine/core';

// ─── Primary (staff-level-shine): amber/gold ──────────────────────────
export const primary: MantineColorsTuple = [
  '#fffbeb',
  '#fef3c7',
  '#fde68a',
  '#fcd34d',
  '#fbbf24',
  '#f59e0b',
  '#d97706',
  '#b45309',
  '#92400e',
  '#78350f',
];

// ─── Neutral (grayscale): 0 = branco, 9 = preto ───────────────────────
export const brand: MantineColorsTuple = [
  '#ffffff', // 0 - white
  '#f5f5f5', // 1
  '#e5e5e5', // 2
  '#d4d4d4', // 3
  '#a3a3a3', // 4
  '#737373', // 5
  '#525252', // 6
  '#404040', // 7
  '#262626', // 8
  '#0a0a0a', // 9 - black
];

/** Mesma escala para harmonização total (links, ícones, destaque = tons de cinza) */
export const accent: MantineColorsTuple = [...brand];

// ─── Semantic tokens (staff-level-shine: 220 14% 6% background, amber accent) ───
export const semantic = {
  // Dark: staff-level-shine palette (hsl(220 14% 6%) ≈ #0e1014)
  bodyDark: '#0e1014',
  bodyLight: '#ffffff',
  containerDark: '#141619',
  containerLight: '#f7f7f8',
  borderDark: '#1e2128',
  borderLight: '#e5e5e5',

  // Header e footer: mesmo tom do body (tema unificado)
  headerFooterDark: '#0e1014',
  headerFooterLight: '#f0f0f0',

  // Nav dark: overlay branco sutil
  navHoverBgDark: 'rgba(255, 255, 255, 0.08)',
  navActiveBgDark: 'rgba(255, 255, 255, 0.14)',
  accordionHoverBgDark: 'rgba(255, 255, 255, 0.05)',

  // Nav light: overlay preto sutil
  navHoverBgLight: 'rgba(0, 0, 0, 0.04)',
  navActiveBgLight: 'rgba(0, 0, 0, 0.08)',
  accordionHoverBgLight: 'rgba(0, 0, 0, 0.03)',

  // Neural network canvas: tons âmbar no dark (staff-level-shine)
  canvasBgDark: '#0e1014',
  canvasBgLight: 'rgb(247, 247, 248)',
  canvasTrailDark: 'rgba(14, 16, 20, 0.75)',
  canvasTrailLight: 'rgba(247, 247, 248, 0.4)',
  canvasLineDark: 'rgba(251, 191, 36, 0.14)',
  canvasLineLight: 'rgba(245, 158, 11, 0.10)',
  canvasNodeDark: 'rgba(251, 191, 36, 0.20)',
  canvasNodeLight: 'rgba(245, 158, 11, 0.13)',
  canvasGlowDark: 'rgba(251, 191, 36, 0.06)',
  canvasGlowLight: 'rgba(245, 158, 11, 0.05)',

  // Diagrams (success/error mantidos para clareza)
  diagramSuccessBorderDark: 'rgba(34, 197, 94, 0.8)',
  diagramSuccessBorderLight: 'rgba(22, 163, 74, 0.9)',
  diagramErrorBorderDark: 'rgba(239, 68, 68, 0.8)',
  diagramErrorBorderLight: 'rgba(220, 38, 38, 0.9)',
  diagramFillDark: 'rgba(38, 38, 38, 0.5)',
  diagramFillLight: 'rgba(245, 245, 245, 0.9)',
  diagramTextDark: '#f5f5f5',
  diagramTextLight: '#171717',
  diagramSubDark: '#a3a3a3',
  diagramSubLight: '#525252',
  diagramArrowDark: 'rgba(34, 197, 94, 0.9)',
  diagramArrowLight: 'rgba(22, 163, 74, 0.9)',

  spotlightOverlay: 'rgba(0, 0, 0, 0.6)',
  focusRing: 'rgba(0, 0, 0, 0.12)',
} as const;

/** Map of semantic keys to CSS var names for injection (--app-*) */
export const semanticCssVars = {
  bodyDark: '--app-body-dark',
  bodyLight: '--app-body-light',
  containerDark: '--app-container-dark',
  containerLight: '--app-container-light',
  borderDark: '--app-border-dark',
  borderLight: '--app-border-light',
  navHoverBgDark: '--app-nav-hover-bg-dark',
  navActiveBgDark: '--app-nav-active-bg-dark',
  accordionHoverBgDark: '--app-accordion-hover-bg-dark',
  navHoverBgLight: '--app-nav-hover-bg-light',
  navActiveBgLight: '--app-nav-active-bg-light',
  accordionHoverBgLight: '--app-accordion-hover-bg-light',
  headerFooterDark: '--app-header-footer-dark',
  headerFooterLight: '--app-header-footer-light',
} as const;
