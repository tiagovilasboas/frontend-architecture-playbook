import type { DocMeta } from '../types/index.ts';

export function useNavigationActions(guides: DocMeta[], patterns: DocMeta[]) {
  return [
    ...guides.map((g) => ({
      id: g.slug,
      label: g.title,
      description: 'Guide',
      onTrigger: () => (window.location.pathname = `/guides/${g.slug}`),
    })),
    ...patterns.map((p) => ({
      id: p.slug,
      label: p.title,
      description: 'Pattern',
      onTrigger: () => (window.location.pathname = `/patterns/${p.slug}`),
    })),
  ];
} 