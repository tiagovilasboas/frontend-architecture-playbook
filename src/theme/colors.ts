/**
 * Single source of truth for app colors.
 * Dark: cinza escuro estilo ChatGPT (sem preto puro).
 * Light: branco e cinzas claros.
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

// ─── Semantic tokens (body, containers, nav, canvas) – escuro estilo ChatGPT ───
export const semantic = {
  // Dark: tons escuros (ChatGPT usa ~#212121 área principal, sidebar mais escuro)
  bodyDark: '#212121',
  bodyLight: '#ffffff',
  containerDark: '#2d2d2d',
  containerLight: '#f7f7f8',
  borderDark: '#404040',
  borderLight: '#e5e5e5',

  // Header e footer (sidebar ChatGPT é mais escuro)
  headerFooterDark: '#171717',
  headerFooterLight: '#f0f0f0',

  // Nav dark: overlay branco sutil
  navHoverBgDark: 'rgba(255, 255, 255, 0.08)',
  navActiveBgDark: 'rgba(255, 255, 255, 0.14)',
  accordionHoverBgDark: 'rgba(255, 255, 255, 0.05)',

  // Nav light: overlay preto sutil
  navHoverBgLight: 'rgba(0, 0, 0, 0.04)',
  navActiveBgLight: 'rgba(0, 0, 0, 0.08)',
  accordionHoverBgLight: 'rgba(0, 0, 0, 0.03)',

  // Neural network canvas (mesmo tom do body no dark)
  canvasBgDark: '#212121',
  canvasBgLight: 'rgb(247, 247, 248)',
  canvasTrailDark: 'rgba(33, 33, 33, 0.75)',
  canvasTrailLight: 'rgba(247, 247, 248, 0.4)',
  canvasLineDark: 'rgba(255, 255, 255, 0.2)',
  canvasLineLight: 'rgba(0, 0, 0, 0.14)',
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
