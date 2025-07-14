import type { DocMeta } from '../types/index.ts';

export function useNavigationActions(guides: DocMeta[], architectures: DocMeta[], patterns: DocMeta[], techniques: DocMeta[], bestPractices: DocMeta[]) {
  return [
    ...guides.map((g) => ({
      id: g.slug,
      label: g.title,
      description: 'Guide',
      onTrigger: () => (window.location.pathname = `/guides/${g.slug}`),
    })),
    ...architectures.map((a) => ({
      id: a.slug,
      label: a.title,
      description: 'Architecture',
      onTrigger: () => (window.location.pathname = `/architectures/${a.slug}`),
    })),
    ...patterns.map((p) => ({
      id: p.slug,
      label: p.title,
      description: 'Pattern',
      onTrigger: () => (window.location.pathname = `/patterns/${p.slug}`),
    })),
    ...techniques.map((t) => ({
      id: t.slug,
      label: t.title,
      description: 'Technique',
      onTrigger: () => (window.location.pathname = `/techniques/${t.slug}`),
    })),
    ...bestPractices.map((b) => ({
      id: b.slug,
      label: b.title,
      description: 'Best Practice',
      onTrigger: () => (window.location.pathname = `/best-practices/${b.slug}`),
    })),
  ];
} 