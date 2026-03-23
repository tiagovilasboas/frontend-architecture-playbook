import { useNavigate } from 'react-router-dom';
import type { DocMeta, CollectionType } from '../lib/content.tsx';
import {
  guides,
  architectures,
  patterns,
  techniques,
  bestPractices,
} from '../lib/content.tsx';
import glossaryTerms from '../data/glossary/terms.json';

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
      id: `${collection}/${doc.slug}`,
      label: doc.title,
      description: [getCollectionLabel(collection), doc.description]
        .filter(Boolean)
        .join(' · '),
      onTrigger: () => navigate(`/${collection}/${doc.slug}`),
    }));

  const glossaryActions: NavigationAction[] = (
    glossaryTerms as {
      terms: Array<{ id: string; term: string; termPt?: string }>;
    }
  ).terms.map(t => ({
    id: `glossary/${t.id}`,
    label: t.term,
    description: ['Glossário', t.termPt].filter(Boolean).join(' · '),
    onTrigger: () => navigate(`/guides/glossary#${t.id}`),
  }));

  return [
    ...createActions(guides, 'guides'),
    ...createActions(architectures, 'architectures'),
    ...createActions(patterns, 'patterns'),
    ...createActions(techniques, 'techniques'),
    ...createActions(bestPractices, 'best-practices'),
    ...glossaryActions,
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
