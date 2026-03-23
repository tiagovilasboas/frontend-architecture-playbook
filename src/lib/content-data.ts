/**
 * Loads content-driven pages from JSON.
 * Uses lazy imports (eager: false) so each page is loaded on demand, not in the initial bundle.
 * Manifest (meta only) is loaded eagerly for sync navigation/slugs.
 */
import type { ContentPage } from './content-schema';

import manifestData from '../data/content-manifest.json';

type ManifestEntry = {
  collection: string;
  slug: string;
  title: string;
  description: string;
};
const manifest = manifestData as { entries: ManifestEntry[] };

// Vite: lazy glob – each JSON loaded only when requested
const contentLoaders = import.meta.glob<{ default: ContentPage }>(
  '../data/content/**/*.json',
  { eager: false }
);

const loaderKeys = Object.keys(contentLoaders);

function pathToKey(filePath: string): string | null {
  const match = filePath.match(/\.\.\/data\/content\/([^/]+)\/(.+)\.json$/);
  if (!match) return null;
  const [, collection, slug] = match;
  return `${collection}/${slug}`;
}

const pathByKey = new Map<string, string>();
for (const p of loaderKeys) {
  const k = pathToKey(p);
  if (k) pathByKey.set(k, p);
}

const contentCache = new Map<string, ContentPage>();

/** Promise cache to avoid duplicate in-flight requests (Suspense). */
const promiseCache = new Map<string, Promise<ContentPage | null>>();

function getOrCreatePromise(
  collection: string,
  slug: string
): Promise<ContentPage | null> {
  const key = `${collection}/${slug}`;
  let p = promiseCache.get(key);
  if (!p) {
    p = loadDocContentImpl(collection, slug);
    promiseCache.set(key, p);
  }
  return p;
}

async function loadDocContentImpl(
  collection: string,
  slug: string
): Promise<ContentPage | null> {
  const key = `${collection}/${slug}`;
  const cached = contentCache.get(key);
  if (cached) return cached;

  const loaderPath = pathByKey.get(key);
  if (!loaderPath) return null;

  const loader = (
    contentLoaders as Record<string, () => Promise<{ default: ContentPage }>>
  )[loaderPath];
  if (!loader) return null;

  try {
    const mod = await loader();
    const page = mod?.default;
    if (page) {
      contentCache.set(key, page);
      return page;
    }
  } catch {
    return null;
  }
  return null;
}

/**
 * Loads page content from JSON (lazy). Returns null if no content exists.
 * Uses cache – same slug won't re-fetch.
 */
export async function loadDocContent(
  collection: string,
  slug: string
): Promise<ContentPage | null> {
  return getOrCreatePromise(collection, slug);
}

/**
 * Returns a promise for page content. Use with React.use() for Suspense.
 * Same key returns the same promise (deduped).
 */
export function getDocContentPromise(
  collection: string,
  slug: string
): Promise<ContentPage | null> {
  return getOrCreatePromise(collection, slug);
}

/**
 * Returns page content synchronously. Only when already cached (after loadDocContent).
 * Prefer loadDocContent for initial load.
 */
export function getDocContent(
  collection: string,
  slug: string
): ContentPage | null {
  return contentCache.get(`${collection}/${slug}`) ?? null;
}

/** Metadata from manifest (sync). */
export function getDocMeta(
  collection: string,
  slug: string
): { title: string; description: string } | null {
  const entry = manifest.entries.find(
    e => e.collection === collection && e.slug === slug
  );
  if (!entry) return null;
  return { title: entry.title, description: entry.description ?? '' };
}

/** All (collection, slug) pairs with content. */
export function getContentDrivenSlugs(): {
  collection: string;
  slug: string;
}[] {
  return manifest.entries.map(e => ({
    collection: e.collection,
    slug: e.slug,
  }));
}
