import type { DocMeta, CollectionType } from '../lib/content.ts';

interface NavigationAction {
  id: string;
  label: string;
  description: string;
  onTrigger: () => void;
}

export function useNavigationActions(
  guides: DocMeta[],
  architectures: DocMeta[],
  patterns: DocMeta[],
  techniques: DocMeta[],
  bestPractices: DocMeta[]
): NavigationAction[] {
  const createActions = (
    docs: DocMeta[],
    collection: CollectionType
  ): NavigationAction[] =>
    docs.map(doc => ({
      id: doc.slug,
      label: doc.title,
      description: getCollectionLabel(collection),
      onTrigger: () =>
        (window.location.pathname = `/${collection}/${doc.slug}`),
    }));

  return [
    ...createActions(guides, 'guides'),
    ...createActions(architectures, 'architectures'),
    ...createActions(patterns, 'patterns'),
    ...createActions(techniques, 'techniques'),
    ...createActions(bestPractices, 'best-practices'),
  ];
}

function getCollectionLabel(collection: CollectionType): string {
  const labels: Record<CollectionType, string> = {
    guides: 'Guide',
    architectures: 'Architecture',
    patterns: 'Pattern',
    techniques: 'Technique',
    'best-practices': 'Best Practice',
  };
  return labels[collection];
}
