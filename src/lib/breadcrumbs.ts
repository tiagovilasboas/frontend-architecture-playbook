import { getBreadcrumbsForPath } from './navigation';

export const COLLECTION_LABELS: Record<string, string> = {
  guides: 'Guias',
  architectures: 'Arquiteturas',
  patterns: 'Padrões',
  techniques: 'Técnicas',
  'best-practices': 'Boas Práticas',
};

export function formatSlug(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export interface BreadcrumbItem {
  label: string;
  href: string | null;
}

/**
 * Returns breadcrumb items for a pathname. Uses NAV_JOURNEY when the path
 * matches a known item; otherwise builds items from path segments.
 */
export function getBreadcrumbItems(pathname: string): BreadcrumbItem[] {
  const navItems = getBreadcrumbsForPath(pathname);
  if (navItems) return navItems;

  const pathSegments = pathname.split('/').filter(Boolean);
  const getLabel = (segment: string) =>
    COLLECTION_LABELS[segment] ?? formatSlug(segment);
  const buildPath = (index: number) =>
    '/' + pathSegments.slice(0, index + 1).join('/');

  return [
    { label: 'Início', href: '/' },
    ...pathSegments.map((segment, index) => ({
      label: getLabel(segment),
      href: buildPath(index),
    })),
  ].map(({ label, href }) => ({ label, href: href as string | null }));
}
