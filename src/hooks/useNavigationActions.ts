import { useNavigate } from 'react-router-dom';
import type { DocMeta, CollectionType } from '../lib/content.tsx';
import {
  guides,
  architectures,
  patterns,
  techniques,
  bestPractices,
} from '../lib/content.tsx';

interface NavigationAction {
  id: string;
  label: string;
  description: string;
  onTrigger: () => void;
}

export function useNavigationActions(): NavigationAction[] {
  const navigate = useNavigate();

  const createActions = (
    docs: DocMeta[],
    collection: CollectionType
  ): NavigationAction[] =>
    docs.map(doc => ({
      id: doc.slug,
      label: doc.title,
      description: getCollectionLabel(collection),
      onTrigger: () => navigate(`/${collection}/${doc.slug}`),
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
