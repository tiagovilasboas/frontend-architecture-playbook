/**
 * Loads content-driven pages from JSON.
 * Same data can be consumed by the app (ContentRenderer) and by MCP (copy or symlink to mcp-server/data/content).
 */
import type { ContentPage } from './content-schema';

// Vite: eager glob gives sync access; keys are paths relative to this file
const modules = import.meta.glob<{ default: ContentPage }>(
  '../data/content/**/*.json',
  { eager: true }
);

const contentMap = new Map<string, ContentPage>();

for (const path of Object.keys(modules)) {
  const match = path.match(/\.\.\/data\/content\/([^/]+)\/(.+)\.json$/);
  if (match) {
    const [, collection, slug] = match;
    const entry = (modules as Record<string, { default: ContentPage }>)[path];
    if (entry?.default) {
      contentMap.set(`${collection}/${slug}`, entry.default);
    }
  }
}

/**
 * Returns page content from JSON if it exists; otherwise null.
 * Used by DocPage to render ContentRenderer instead of a legacy React component.
 */
export function getDocContent(
  collection: string,
  slug: string
): ContentPage | null {
  return contentMap.get(`${collection}/${slug}`) ?? null;
}

/** All (collection, slug) pairs that have content JSON (e.g. for MCP or sitemap). */
export function getContentDrivenSlugs(): {
  collection: string;
  slug: string;
}[] {
  return Array.from(contentMap.keys()).map(key => {
    const [collection, slug] = key.split('/');
    return { collection, slug };
  });
}
