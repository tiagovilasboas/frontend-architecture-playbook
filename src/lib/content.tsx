import React from 'react';
import ContentDrivenPage from '../components/ContentDrivenPage';

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

// Metadados estáticos para páginas de conteúdo (title/description por slug)
const STATIC_METADATA = {
  // Guides
  'how-to-choose': {
    title: 'Como Escolher uma Arquitetura',
    description: 'Guia para escolher a arquitetura certa',
  },
  'dependency-rule': {
    title: 'Dependency Rule',
    description: 'Regra fundamental de dependências',
  },
  cases: {
    title: 'Casos de Uso Reais',
    description: 'Exemplos práticos de arquiteturas front-end',
  },
  'implementation-roadmap': {
    title: 'Roadmap de Implementação',
    description:
      'Roadmap em 4 fases para evoluir a arquitetura frontend: performance, otimização, arquitetura e escala. Com checklists, ferramentas e critérios de avanço.',
  },
  'architecture-comparison': {
    title: 'Comparação de Arquiteturas',
    description: 'Compare arquiteturas baseado em métricas práticas',
  },
  adr: {
    title: 'ADR - Architecture Decision Records',
    description:
      'Como documentar decisões arquiteturais com ADRs. Template, processo, e exemplos reais.',
  },
  'migration-strategies': {
    title: 'Estratégias de Migração',
    description:
      'Strangler Fig, Branch by Abstraction, Parallel Run: como migrar sem big rewrite.',
  },
  mcp: {
    title: 'MCP: use o playbook no Cursor',
    description:
      'Integração MCP (em construção). Configure o servidor para usar o conteúdo do playbook no Cursor: guias, casos e navegação via chat.',
  },
  'security-business': {
    title: 'Segurança & Negócio',
    description:
      'Segurança como decisão de negócio: impacto financeiro, priorização e como comunicar com stakeholders. Nível staff.',
  },
  'study-guide': {
    title: 'Por onde começar',
    description:
      'Roteiro que segmenta o conteúdo do playbook por nível: Júnior, Pleno, Sênior e Staff. Links para o que estudar em cada etapa.',
  },
  staff: {
    title: 'Para Staff',
    description:
      'Hub para nível Staff: decisão com evidência, performance e métricas, OKRs, regras de negócio, falar com o negócio, boas práticas e guardrails. Staff por seção (Fundamentos, UI, Entrega, Estrutura, Escala).',
  },
  'staff-fundamentals': {
    title: 'Staff · Fundamentos',
    description:
      'Para Staff: usar fundamentos (Dependency Rule, Clean Code, SRP) como guardrails, critérios de revisão e quando exigir ADR.',
  },
  'staff-ui': {
    title: 'Staff · Construindo UI',
    description:
      'Para Staff: design system como guardrail, estado e state machines, Component-Driven e Atomic Design no time.',
  },
  'staff-entrega': {
    title: 'Staff · Arquitetura de Entrega',
    description:
      'Para Staff: performance, métricas, OKRs, Core Web Vitals e guardrails de entrega (SSR, SSG, JAMstack).',
  },
  'staff-estrutura': {
    title: 'Staff · Estrutura de Código',
    description:
      'Para Staff: guardrails de camadas, quando documentar no ADR, revisão de estrutura e segurança.',
  },
  'staff-escala': {
    title: 'Staff · Escala & Times',
    description:
      'Para Staff: decisão de escala com evidência (casos, comparação), migração incremental e quando usar cada arquitetura.',
  },
  glossary: {
    title: 'Glossário',
    description:
      'Conceitos de front-end com definição curta e link para o guia que aprofunda. SSR, hidratação, performance e mais.',
  },

  // Architectures
  'ssr-ssg': {
    title: 'SSR & SSG',
    description: 'Server-Side Rendering e Static Site Generation',
  },
  bff: {
    title: 'Backend for Frontend (BFF)',
    description: 'API específica para front-end',
  },
  pwa: {
    title: 'Progressive Web Apps',
    description: 'Apps web com recursos nativos',
  },
  headless: {
    title: 'Headless Architecture',
    description: 'Separação de UI e lógica',
  },
  hexagonal: {
    title: 'Hexagonal Architecture',
    description: 'Ports and Adapters pattern',
  },
  layered: {
    title: 'Layered Architecture',
    description: 'Arquitetura em camadas',
  },
  'event-sourcing': {
    title: 'Event Sourcing',
    description: 'Armazenamento baseado em eventos',
  },
  cqrs: {
    title: 'CQRS',
    description: 'Command Query Responsibility Segregation',
  },
  'microservices-frontend': {
    title: 'Microservices Frontend',
    description: 'Frontend espelhando microservices backend',
  },
  'clean-architecture': {
    title: 'Clean Architecture no Front-End',
    description: 'Separação clara de responsabilidades',
  },
  'micro-frontends': {
    title: 'Micro-Frontends (Conceitos)',
    description: 'Introdução aos conceitos de micro-frontends',
  },
  monorepo: {
    title: 'Monorepo',
    description: 'Múltiplos projetos em um repositório',
  },
  spa: {
    title: 'Single Page Application',
    description: 'Aplicação de página única',
  },
  jamstack: { title: 'JAMstack', description: 'JavaScript, APIs, Markup' },
  'islands-architecture': {
    title: 'Islands Architecture',
    description: 'Arquitetura de ilhas',
  },

  // Patterns
  'component-driven': {
    title: 'Component-Driven Development',
    description: 'Desenvolvimento baseado em componentes',
  },
  'atomic-design': {
    title: 'Atomic Design',
    description: 'Design system estruturado',
  },
  'event-driven': {
    title: 'Event-Driven Architecture',
    description: 'Arquitetura baseada em eventos',
  },
  'repository-pattern': {
    title: 'Repository Pattern',
    description: 'Padrão de acesso a dados',
  },
  security: { title: 'Security Patterns', description: 'Padrões de segurança' },

  // Techniques
  'feature-flags': {
    title: 'Feature Flags',
    description: 'Controle dinâmico de funcionalidades',
  },
  'state-machines': {
    title: 'State Machines',
    description: 'Máquinas de estado',
  },
  performance: {
    title: 'Performance',
    description:
      'Code splitting, lazy loading, chunks e métricas que fazem diferença real',
  },

  // Best Practices
  dry: {
    title: "DRY (Don't Repeat Yourself)",
    description: 'Não repita código',
  },
  kiss: {
    title: 'KISS (Keep It Simple, Stupid)',
    description: 'Mantenha simples',
  },
  yagni: {
    title: "YAGNI (You Aren't Gonna Need It)",
    description: 'Não implemente o que não precisa',
  },
  'clean-code': { title: 'Clean Code', description: 'Código limpo e legível' },
  srp: {
    title: 'Single Responsibility Principle',
    description: 'Princípio da responsabilidade única',
  },
  soc: {
    title: 'Separation of Concerns',
    description: 'Separação de responsabilidades',
  },
};

function toMeta(
  module: unknown,
  slug: string,
  collection: CollectionType
): DocMeta {
  const moduleWithMetadata = module as {
    metadata?: { title?: string; description?: string };
    default?: { metadata?: { title?: string; description?: string } };
  };

  const staticMeta =
    STATIC_METADATA[slug as keyof typeof STATIC_METADATA] || {};
  const dynamicMeta =
    moduleWithMetadata.metadata ?? moduleWithMetadata.default?.metadata ?? {};

  const Component = (moduleWithMetadata.default ??
    moduleWithMetadata) as React.ComponentType;

  return {
    slug,
    collection,
    title: staticMeta.title || dynamicMeta.title || slug,
    description: staticMeta.description || dynamicMeta.description || '',
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
