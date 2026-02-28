import React, { lazy } from 'react';
import { LazyComponentWrapper } from '../components/LazyWrapper';
import ContentDrivenPage from '../components/ContentDrivenPage';

// Lazy loading para guides - carregamento sob demanda
const GlossaryPage = lazy(() => import('../content/guides/glossary.tsx'));

// Lazy loading para patterns - carregamento sob demanda
const AtomicDesign = lazy(
  () => import('../content/patterns/atomic-design.tsx')
);
const CleanArchitecture = lazy(
  () => import('../content/patterns/clean-architecture.tsx')
);
const ComponentDriven = lazy(
  () => import('../content/patterns/component-driven.tsx')
);
const IslandsArchitecture = lazy(
  () => import('../content/patterns/islands-architecture.tsx')
);
const MicroFrontends = lazy(
  () => import('../content/patterns/micro-frontends.tsx')
);
const StateMachines = lazy(
  () => import('../content/patterns/state-machines.tsx')
);
const EventDriven = lazy(() => import('../content/patterns/event-driven.tsx'));
const FeatureFlags = lazy(
  () => import('../content/patterns/feature-flags.tsx')
);
const RepositoryPattern = lazy(
  () => import('../content/patterns/repository-pattern.tsx')
);
const SecurityPatterns = lazy(() => import('../content/patterns/security.tsx'));
const HexagonalArchitecture = lazy(
  () => import('../content/patterns/hexagonal.tsx')
);
const EventSourcingArchitecture = lazy(
  () => import('../content/patterns/event-sourcing.tsx')
);
const CQRSArchitecture = lazy(() => import('../content/patterns/cqrs.tsx'));
const MicroservicesFrontendArchitecture = lazy(
  () => import('../content/patterns/microservices-frontend.tsx')
);

// Lazy loading para techniques - carregamento sob demanda
const Performance = lazy(() => import('../content/techniques/performance.tsx'));

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
  lazy?: boolean;
}

// Metadados estáticos para evitar problemas com lazy loading
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
  collection: CollectionType,
  lazy = false
): DocMeta {
  const moduleWithMetadata = module as {
    metadata?: { title?: string; description?: string };
    default?: { metadata?: { title?: string; description?: string } };
  };

  // Usar metadados estáticos para evitar problemas com lazy loading
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
    component: lazy
      ? () => <LazyComponentWrapper component={Component} />
      : Component,
    lazy,
  };
}

// Organização por categorias com comentários explicativos
// Fluxo sequencial: Fundamento → Escolha → Análise → Validação
export const guides: DocMeta[] = [
  toMeta(ContentDrivenPage, 'dependency-rule', 'guides', false), // 1. Fundamento (content JSON)
  toMeta(ContentDrivenPage, 'how-to-choose', 'guides', false), // 2. Escolha (content JSON + decisionWizard)
  toMeta(ContentDrivenPage, 'architecture-comparison', 'guides', false), // 3. Análise (content JSON + ArchitectureComparisonWidget)
  toMeta(ContentDrivenPage, 'cases', 'guides', false), // 4. Validação (content JSON + casesGrid)
  toMeta(ContentDrivenPage, 'implementation-roadmap', 'guides', false), // 5. Implementação (content JSON + timeline)
  toMeta(ContentDrivenPage, 'migration-strategies', 'guides', false), // 6. Migração (content JSON)
  toMeta(ContentDrivenPage, 'adr', 'guides', false), // 7. Documentação de decisões (content JSON)
  toMeta(ContentDrivenPage, 'mcp', 'guides', false), // 8. MCP (Cursor, content JSON)
  toMeta(ContentDrivenPage, 'security-business', 'guides', false), // 9. Segurança & Negócio (content JSON)
  toMeta(ContentDrivenPage, 'study-guide', 'guides', false), // 10. Por onde começar (content JSON)
  toMeta(ContentDrivenPage, 'staff', 'guides', false), // 11. Para Staff (hub, content JSON)
  toMeta(ContentDrivenPage, 'staff-fundamentals', 'guides', false), // 12. Staff · Fundamentos (content JSON)
  toMeta(ContentDrivenPage, 'staff-ui', 'guides', false), // 13. Staff · UI (content JSON)
  toMeta(ContentDrivenPage, 'staff-entrega', 'guides', false), // 14. Staff · Entrega (content JSON)
  toMeta(ContentDrivenPage, 'staff-estrutura', 'guides', false), // 15. Staff · Estrutura (content JSON)
  toMeta(ContentDrivenPage, 'staff-escala', 'guides', false), // 16. Staff · Escala (content JSON)
  toMeta(GlossaryPage, 'glossary', 'guides', true), // 17. Glossário (conceitos)
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
  toMeta(ContentDrivenPage, 'spa', 'architectures', false),
  toMeta(ContentDrivenPage, 'ssr-ssg', 'architectures', false),
  toMeta(ContentDrivenPage, 'jamstack', 'architectures', false),
  toMeta(ContentDrivenPage, 'pwa', 'architectures', false),

  // 🏗️ PADRÕES DE DESIGN (Clean Architecture)
  toMeta(CleanArchitecture, 'clean-architecture', 'architectures', true),
  toMeta(ContentDrivenPage, 'layered', 'architectures', false),
  toMeta(HexagonalArchitecture, 'hexagonal', 'architectures', true),

  // 🔌 INTEGRAÇÃO E API
  toMeta(ContentDrivenPage, 'bff', 'architectures', false),
  toMeta(ContentDrivenPage, 'headless', 'architectures', false),

  // 🧩 MODULARIZAÇÃO (Micro-frontends)
  toMeta(MicroFrontends, 'micro-frontends', 'architectures', true),
  toMeta(
    MicroservicesFrontendArchitecture,
    'microservices-frontend',
    'architectures',
    true
  ),
  toMeta(ContentDrivenPage, 'monorepo', 'architectures', false),

  // ⚡ AVANÇADAS (Event-driven, Performance)
  toMeta(EventSourcingArchitecture, 'event-sourcing', 'architectures', true),
  toMeta(CQRSArchitecture, 'cqrs', 'architectures', true),
  toMeta(IslandsArchitecture, 'islands-architecture', 'architectures', true),
];

// Padrões de design - organização de componentes
export const patterns: DocMeta[] = [
  toMeta(ComponentDriven, 'component-driven', 'patterns', true),
  toMeta(AtomicDesign, 'atomic-design', 'patterns', true),
  toMeta(EventDriven, 'event-driven', 'patterns', true),
  toMeta(RepositoryPattern, 'repository-pattern', 'patterns', true),
  toMeta(SecurityPatterns, 'security', 'patterns', true),
];

// Técnicas de desenvolvimento - ferramentas e estratégias
export const techniques: DocMeta[] = [
  toMeta(FeatureFlags, 'feature-flags', 'techniques', true),
  toMeta(StateMachines, 'state-machines', 'techniques', true),
  toMeta(Performance, 'performance', 'techniques', true),
];

// Boas práticas - princípios fundamentais de código limpo
export const bestPractices: DocMeta[] = [
  toMeta(ContentDrivenPage, 'dry', 'best-practices', false),
  toMeta(ContentDrivenPage, 'kiss', 'best-practices', false),
  toMeta(ContentDrivenPage, 'yagni', 'best-practices', false),
  toMeta(ContentDrivenPage, 'clean-code', 'best-practices', false),
  toMeta(ContentDrivenPage, 'srp', 'best-practices', false),
  toMeta(ContentDrivenPage, 'soc', 'best-practices', false),
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
