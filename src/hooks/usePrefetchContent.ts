import { useCallback } from 'react';
import { getDocContentPromise } from '../lib/content-data';

const CONTENT_PATH =
  /^\/(guides|architectures|patterns|techniques|best-practices)\/([^/]+)$/;

/**
 * Returns handlers to prefetch content on hover/focus for internal doc links.
 * Call getDocContentPromise so the JSON chunk loads before the user clicks.
 */
export function usePrefetchContent(): (pathname: string) => void {
  return useCallback((pathname: string) => {
    const m = pathname.replace(/\/$/, '').match(CONTENT_PATH);
    if (!m) return;
    const [, collection, slug] = m;
    if (collection && slug) {
      getDocContentPromise(collection, slug);
    }
  }, []);
}
