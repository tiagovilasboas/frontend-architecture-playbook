import React from 'react';
import ContentDrivenPage from '../components/ContentDrivenPage';
import { getDocMeta } from './content-data';

export type CollectionType =
  | 'guides'
  | 'architectures'
  | 'patterns'
  | 'techniques'
  | 'best-practices';

export interface DocMeta {
  slug: string;
  title: string;
  description?: string;
  collection: CollectionType;
  component: React.ComponentType;
}

/** Format slug as title when no meta from content (e.g. slug "dependency-rule" → "Dependency Rule"). */
function slugToTitle(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function toMeta(
  module: unknown,
  slug: string,
  collection: CollectionType
): DocMeta {
  const moduleWithMetadata = module as {
    metadata?: { title?: string; description?: string };
    default?: { metadata?: { title?: string; description?: string } };
  };

  const contentMeta = getDocMeta(collection, slug);
  const dynamicMeta =
    moduleWithMetadata.metadata ?? moduleWithMetadata.default?.metadata ?? {};

  const Component = (moduleWithMetadata.default ??
    moduleWithMetadata) as React.ComponentType;

  return {
    slug,
    collection,
    title: contentMeta?.title || dynamicMeta.title || slugToTitle(slug),
    description: contentMeta?.description || dynamicMeta.description || '',
    component: Component,
  };
}

// Organização por categorias com comentários explicativos
// Fluxo sequencial: Fundamento → Escolha → Análise → Validação
export const guides: DocMeta[] = [
  toMeta(ContentDrivenPage, 'dependency-rule', 'guides'), // 1. Fundamento (content JSON)
  toMeta(ContentDrivenPage, 'how-to-choose', 'guides'), // 2. Escolha (content JSON + decisionWizard)
  toMeta(ContentDrivenPage, 'architecture-comparison', 'guides'), // 3. Análise (content JSON + ArchitectureComparisonWidget)
  toMeta(ContentDrivenPage, 'cases', 'guides'), // 4. Validação (content JSON + casesGrid)
  toMeta(ContentDrivenPage, 'implementation-roadmap', 'guides'), // 5. Implementação (content JSON + timeline)
  toMeta(ContentDrivenPage, 'migration-strategies', 'guides'), // 6. Migração (content JSON)
  toMeta(ContentDrivenPage, 'adr', 'guides'), // 7. Documentação de decisões (content JSON)
  toMeta(ContentDrivenPage, 'mcp', 'guides'), // 8. MCP (Cursor, content JSON)
  toMeta(ContentDrivenPage, 'security-business', 'guides'), // 9. Segurança & Negócio (content JSON)
  toMeta(ContentDrivenPage, 'study-guide', 'guides'), // 10. Por onde começar (content JSON)
  toMeta(ContentDrivenPage, 'staff', 'guides'), // 11. Para Staff (hub, content JSON)
  toMeta(ContentDrivenPage, 'staff-fundamentals', 'guides'), // 12. Staff · Fundamentos (content JSON)
  toMeta(ContentDrivenPage, 'staff-ui', 'guides'), // 13. Staff · UI (content JSON)
  toMeta(ContentDrivenPage, 'staff-entrega', 'guides'), // 14. Staff · Entrega (content JSON)
  toMeta(ContentDrivenPage, 'staff-estrutura', 'guides'), // 15. Staff · Estrutura (content JSON)
  toMeta(ContentDrivenPage, 'staff-escala', 'guides'), // 16. Staff · Escala (content JSON)
  toMeta(ContentDrivenPage, 'glossary', 'guides'), // 17. Glossário (conceitos)
];

/** Slug order for GuideNavigation (sidebar "Todos os Guias"). Single source of truth. */
export const GUIDE_NAV_SLUGS = [
  'dependency-rule',
  'how-to-choose',
  'architecture-comparison',
  'cases',
  'study-guide',
  'staff',
  'security-business',
  'glossary',
  'mcp',
  'adr',
  'migration-strategies',
  'implementation-roadmap',
] as const;

export interface GuideNavItem {
  id: string;
  title: string;
  description: string;
  path: string;
}

export function getGuideNavItems(): GuideNavItem[] {
  return GUIDE_NAV_SLUGS.map(slug => {
    const g = guides.find(m => m.slug === slug);
    return {
      id: slug,
      title: g?.title ?? slug,
      description: g?.description ?? '',
      path: `/guides/${slug}`,
    };
  });
}

// Arquiteturas organizadas por complexidade e popularidade
export const architectures: DocMeta[] = [
  // 🚀 FUNDAMENTAIS (mais usadas)
  toMeta(ContentDrivenPage, 'spa', 'architectures'),
  toMeta(ContentDrivenPage, 'ssr-ssg', 'architectures'),
  toMeta(ContentDrivenPage, 'jamstack', 'architectures'),
  toMeta(ContentDrivenPage, 'pwa', 'architectures'),

  // 🏗️ PADRÕES DE DESIGN (Clean Architecture)
  toMeta(ContentDrivenPage, 'clean-architecture', 'architectures'),
  toMeta(ContentDrivenPage, 'layered', 'architectures'),
  toMeta(ContentDrivenPage, 'hexagonal', 'architectures'),

  // 🔌 INTEGRAÇÃO E API
  toMeta(ContentDrivenPage, 'bff', 'architectures'),
  toMeta(ContentDrivenPage, 'headless', 'architectures'),

  // 🧩 MODULARIZAÇÃO (Micro-frontends)
  toMeta(ContentDrivenPage, 'micro-frontends', 'architectures'),
  toMeta(ContentDrivenPage, 'microservices-frontend', 'architectures'),
  toMeta(ContentDrivenPage, 'monorepo', 'architectures'),

  // ⚡ AVANÇADAS (Event-driven, Performance)
  toMeta(ContentDrivenPage, 'event-sourcing', 'architectures'),
  toMeta(ContentDrivenPage, 'cqrs', 'architectures'),
  toMeta(ContentDrivenPage, 'islands-architecture', 'architectures'),
];

// Padrões de design - organização de componentes
export const patterns: DocMeta[] = [
  toMeta(ContentDrivenPage, 'component-driven', 'patterns'),
  toMeta(ContentDrivenPage, 'atomic-design', 'patterns'),
  toMeta(ContentDrivenPage, 'event-driven', 'patterns'),
  toMeta(ContentDrivenPage, 'repository-pattern', 'patterns'),
  toMeta(ContentDrivenPage, 'security', 'patterns'),
];

// Técnicas de desenvolvimento - ferramentas e estratégias
export const techniques: DocMeta[] = [
  toMeta(ContentDrivenPage, 'feature-flags', 'techniques'),
  toMeta(ContentDrivenPage, 'state-machines', 'techniques'),
  toMeta(ContentDrivenPage, 'performance', 'techniques'),
];

// Boas práticas - princípios fundamentais de código limpo
export const bestPractices: DocMeta[] = [
  toMeta(ContentDrivenPage, 'dry', 'best-practices'),
  toMeta(ContentDrivenPage, 'kiss', 'best-practices'),
  toMeta(ContentDrivenPage, 'yagni', 'best-practices'),
  toMeta(ContentDrivenPage, 'clean-code', 'best-practices'),
  toMeta(ContentDrivenPage, 'srp', 'best-practices'),
  toMeta(ContentDrivenPage, 'soc', 'best-practices'),
];

// Mapa de coleções para facilitar lookup
const collectionMap: Record<CollectionType, DocMeta[]> = {
  guides,
  architectures,
  patterns,
  techniques,
  'best-practices': bestPractices,
};

export function getDoc(
  collection: CollectionType,
  slug: string
): DocMeta | undefined {
  const list = collectionMap[collection];
  return list.find(doc => doc.slug === slug);
}

/**
 * Prev/next arrows: same collection only, order = arrays in this file (guides,
 * architectures, …). Predictable “docs site” behaviour; no cross-collection jumps.
 * Home (/) has no arrows.
 */
export function getPrevNextByCollection(pathname: string): {
  prev: { href: string; label: string } | null;
  next: { href: string; label: string } | null;
} {
  const normalized = (pathname.replace(/\/$/, '') || '/') as string;
  if (normalized === '/') {
    return { prev: null, next: null };
  }

  const match = normalized.match(
    /^\/(guides|architectures|patterns|techniques|best-practices)\/([^/]+)$/
  );
  if (!match) {
    return { prev: null, next: null };
  }

  const collection = match[1] as CollectionType;
  const slug = match[2];
  const list = collectionMap[collection];
  const index = list.findIndex(doc => doc.slug === slug);
  if (index < 0) {
    return { prev: null, next: null };
  }

  const toEntry = (doc: DocMeta) => ({
    href: `/${doc.collection}/${doc.slug}`,
    label: doc.title,
  });

  return {
    prev: index > 0 ? toEntry(list[index - 1]!) : null,
    next: index < list.length - 1 ? toEntry(list[index + 1]!) : null,
  };
}
