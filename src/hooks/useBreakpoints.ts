import { useMediaQuery } from '@mantine/hooks';

/**
 * Centralized breakpoint hook.
 * Replaces scattered useMediaQuery calls with consistent values.
 *
 * Breakpoints:
 * - isSmallMobile: <= 480px (very small devices)
 * - isMobile: <= 768px (phones and small tablets)
 * - isDesktop: >= 1024px (laptops and above)
 */
export function useBreakpoints() {
  const isSmallMobile = useMediaQuery('(max-width: 480px)');
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  return { isSmallMobile, isMobile, isDesktop };
}
