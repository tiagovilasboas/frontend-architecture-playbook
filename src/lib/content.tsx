import React, { lazy } from 'react';
import { LazyComponentWrapper } from '../components/LazyWrapper';

// Lazy loading para guides - carregamento sob demanda
const HowToChoose = lazy(() => import('../content/guides/how-to-choose.tsx'));
const DependencyRule = lazy(
  () => import('../content/guides/dependency-rule.tsx')
);
const Cases = lazy(() => import('../content/guides/cases.tsx'));

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
const Jamstack = lazy(() => import('../content/patterns/jamstack.tsx'));
const MicroFrontends = lazy(
  () => import('../content/patterns/micro-frontends.tsx')
);
const Monorepo = lazy(() => import('../content/patterns/monorepo.tsx'));
const Spa = lazy(() => import('../content/patterns/spa.tsx'));
const StateMachines = lazy(
  () => import('../content/patterns/state-machines.tsx')
);
const EventDriven = lazy(() => import('../content/patterns/event-driven.tsx'));
const FeatureFlags = lazy(
  () => import('../content/patterns/feature-flags.tsx')
);
const Dry = lazy(() => import('../content/patterns/dry.tsx'));
const Kiss = lazy(() => import('../content/patterns/kiss.tsx'));
const Yagni = lazy(() => import('../content/patterns/yagni.tsx'));
const RepositoryPattern = lazy(
  () => import('../content/patterns/repository-pattern.tsx')
);
const SecurityPatterns = lazy(() => import('../content/patterns/security.tsx'));
const CleanCode = lazy(() => import('../content/patterns/clean-code.tsx'));
const SRP = lazy(() => import('../content/patterns/srp.tsx'));
const SOC = lazy(() => import('../content/patterns/soc.tsx'));
const SSRSSGArchitecture = lazy(
  () => import('../content/patterns/ssr-ssg.tsx')
);
const BFFArchitecture = lazy(() => import('../content/patterns/bff.tsx'));
const PWAArchitecture = lazy(() => import('../content/patterns/pwa.tsx'));
const HeadlessArchitecture = lazy(
  () => import('../content/patterns/headless.tsx')
);
const HexagonalArchitecture = lazy(
  () => import('../content/patterns/hexagonal.tsx')
);
const LayeredArchitecture = lazy(
  () => import('../content/patterns/layered.tsx')
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
const VelocityImpact = lazy(
  () => import('../content/techniques/velocity-impact.tsx')
);

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
    title: 'Micro-frontends',
    description: 'Microserviços no front-end',
  },
  'clean-architecture': {
    title: 'Clean Architecture no Front-End',
    description: 'Separação clara de responsabilidades',
  },
  'micro-frontends': {
    title: 'Micro-frontends',
    description: 'Front-end modular',
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
  'velocity-impact': {
    title: 'Quando Velocidade Gera Impacto e Vira Dinheiro',
    description:
      'Por que velocidade de desenvolvimento não é só sobre entregar rápido, mas sobre capturar valor no mercado',
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
export const guides: DocMeta[] = [
  toMeta(HowToChoose, 'how-to-choose', 'guides', true),
  toMeta(DependencyRule, 'dependency-rule', 'guides', true),
  toMeta(Cases, 'cases', 'guides', true),
];

// Arquiteturas reais - estrutura fundamental do sistema
export const architectures: DocMeta[] = [
  toMeta(SSRSSGArchitecture, 'ssr-ssg', 'architectures', true),
  toMeta(BFFArchitecture, 'bff', 'architectures', true),
  toMeta(PWAArchitecture, 'pwa', 'architectures', true),
  toMeta(HeadlessArchitecture, 'headless', 'architectures', true),
  toMeta(HexagonalArchitecture, 'hexagonal', 'architectures', true),
  toMeta(LayeredArchitecture, 'layered', 'architectures', true),
  toMeta(EventSourcingArchitecture, 'event-sourcing', 'architectures', true),
  toMeta(CQRSArchitecture, 'cqrs', 'architectures', true),
  toMeta(
    MicroservicesFrontendArchitecture,
    'microservices-frontend',
    'architectures',
    true
  ),
  toMeta(CleanArchitecture, 'clean-architecture', 'architectures', true),
  toMeta(MicroFrontends, 'micro-frontends', 'architectures', true),
  toMeta(Monorepo, 'monorepo', 'architectures', true),
  toMeta(Spa, 'spa', 'architectures', true),
  toMeta(Jamstack, 'jamstack', 'architectures', true),
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
  toMeta(VelocityImpact, 'velocity-impact', 'techniques', true),
];

// Boas práticas - princípios fundamentais de código limpo
export const bestPractices: DocMeta[] = [
  toMeta(Dry, 'dry', 'best-practices', true),
  toMeta(Kiss, 'kiss', 'best-practices', true),
  toMeta(Yagni, 'yagni', 'best-practices', true),
  toMeta(CleanCode, 'clean-code', 'best-practices', true),
  toMeta(SRP, 'srp', 'best-practices', true),
  toMeta(SOC, 'soc', 'best-practices', true),
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
