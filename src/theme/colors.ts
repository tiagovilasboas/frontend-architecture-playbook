/**
 * Single source of truth for app colors.
 * Dark: paleta black → white (fundo preto, conteúdo em direção ao branco).
 * Light: paleta white → black (fundo branco, conteúdo em direção ao preto).
 */

import type { MantineColorsTuple } from '@mantine/core';

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

// ─── Semantic tokens (body, containers, nav, canvas) ────────────────────
export const semantic = {
  // Dark: black → white
  bodyDark: '#0a0a0a',
  bodyLight: '#ffffff',
  containerDark: '#171717',
  containerLight: '#fafafa',
  borderDark: '#262626',
  borderLight: '#e5e5e5',

  // Header e footer: um pouco mais escuros que o body
  headerFooterDark: '#050505',
  headerFooterLight: '#ebebeb',

  // Nav dark: overlay branco sutil
  navHoverBgDark: 'rgba(255, 255, 255, 0.08)',
  navActiveBgDark: 'rgba(255, 255, 255, 0.14)',
  accordionHoverBgDark: 'rgba(255, 255, 255, 0.05)',

  // Nav light: overlay preto sutil
  navHoverBgLight: 'rgba(0, 0, 0, 0.04)',
  navActiveBgLight: 'rgba(0, 0, 0, 0.08)',
  accordionHoverBgLight: 'rgba(0, 0, 0, 0.03)',

  // Neural network canvas
  canvasBgDark: 'rgb(0, 0, 0)',
  canvasBgLight: 'rgb(250, 250, 250)',
  canvasTrailDark: 'rgba(0, 0, 0, 0.65)',
  canvasTrailLight: 'rgba(250, 250, 250, 0.4)',
  canvasLineDark: 'rgba(255, 255, 255, 0.08)',
  canvasLineLight: 'rgba(0, 0, 0, 0.06)',
  canvasNodeDark: 'rgba(255, 255, 255, 0.2)',
  canvasNodeLight: 'rgba(0, 0, 0, 0.14)',
  canvasGlowDark: 'rgba(255, 255, 255, 0.1)',
  canvasGlowLight: 'rgba(0, 0, 0, 0.08)',

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
