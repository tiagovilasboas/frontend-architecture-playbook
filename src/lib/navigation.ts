/**
 * Single source of truth for journey-based navigation.
 * Used by MobileNavMenu and HeaderNavMenu (DRY).
 *
 * Order: 1. Fundamentos → 2. Construindo UI → 3. Entrega → 4. Estrutura → 5. Escala → 6. Decisão
 */

export interface NavItemEntry {
  href: string;
  label: string;
}

export type NavSectionIconKey =
  | 'book'
  | 'puzzle'
  | 'rocket'
  | 'building'
  | 'stack'
  | 'target';

export interface NavSectionEntry {
  key: string;
  label: string;
  /** Short label for header dropdown (optional). Falls back to label. */
  shortLabel?: string;
  /** Subtitle for mobile accordion (optional). */
  subtitle?: string;
  iconKey: NavSectionIconKey;
  items: NavItemEntry[];
}

export const NAV_JOURNEY: NavSectionEntry[] = [
  {
    key: 'fundamentals',
    label: 'Fundamentos',
    shortLabel: 'Fundamentos',
    subtitle: 'Comece aqui',
    iconKey: 'book',
    items: [
      { href: '/guides/dependency-rule', label: 'Dependency Rule' },
      { href: '/best-practices/dry', label: 'DRY' },
      { href: '/best-practices/kiss', label: 'KISS' },
      { href: '/best-practices/yagni', label: 'YAGNI' },
      { href: '/best-practices/srp', label: 'Single Responsibility' },
      { href: '/best-practices/soc', label: 'Separation of Concerns' },
      { href: '/best-practices/clean-code', label: 'Clean Code' },
      { href: '/guides/how-to-choose', label: 'Como Escolher Arquitetura' },
    ],
  },
  {
    key: 'building-ui',
    label: 'Construindo UI',
    shortLabel: 'UI',
    subtitle: 'Componentes e estado',
    iconKey: 'puzzle',
    items: [
      { href: '/architectures/spa', label: 'Single Page Application' },
      { href: '/patterns/component-driven', label: 'Component-Driven Dev' },
      { href: '/patterns/atomic-design', label: 'Atomic Design' },
      { href: '/techniques/state-machines', label: 'State Machines' },
      { href: '/patterns/event-driven', label: 'Event-Driven Architecture' },
    ],
  },
  {
    key: 'delivery',
    label: 'Arquitetura de Entrega',
    shortLabel: 'Entrega',
    subtitle: 'Como servir o app',
    iconKey: 'rocket',
    items: [
      { href: '/architectures/ssr-ssg', label: 'SSR & SSG' },
      { href: '/architectures/jamstack', label: 'JAMstack' },
      { href: '/architectures/pwa', label: 'Progressive Web Apps' },
      { href: '/architectures/islands-architecture', label: 'Islands Architecture' },
      { href: '/techniques/performance', label: 'Performance' },
    ],
  },
  {
    key: 'structure',
    label: 'Estrutura de Código',
    shortLabel: 'Estrutura',
    subtitle: 'Como organizar',
    iconKey: 'building',
    items: [
      { href: '/architectures/clean-architecture', label: 'Clean Architecture' },
      { href: '/architectures/layered', label: 'Layered Architecture' },
      { href: '/architectures/hexagonal', label: 'Hexagonal Architecture' },
      { href: '/patterns/repository-pattern', label: 'Repository Pattern' },
      { href: '/patterns/security', label: 'Security Patterns' },
    ],
  },
  {
    key: 'scale',
    label: 'Escala & Times',
    shortLabel: 'Escala',
    subtitle: 'Crescendo o time',
    iconKey: 'stack',
    items: [
      { href: '/architectures/monorepo', label: 'Monorepo' },
      { href: '/architectures/micro-frontends', label: 'Micro-Frontends' },
      { href: '/architectures/microservices-frontend', label: 'Microservices Frontend' },
      { href: '/architectures/bff', label: 'Backend for Frontend (BFF)' },
      { href: '/architectures/headless', label: 'Headless Architecture' },
      { href: '/techniques/feature-flags', label: 'Feature Flags' },
      { href: '/architectures/cqrs', label: 'CQRS' },
      { href: '/architectures/event-sourcing', label: 'Event Sourcing' },
    ],
  },
  {
    key: 'decision',
    label: 'Decisão & Referência',
    shortLabel: 'Decisão',
    subtitle: 'Nível staff',
    iconKey: 'target',
    items: [
      { href: '/guides/architecture-comparison', label: 'Comparação de Arquiteturas' },
      { href: '/guides/implementation-roadmap', label: 'Roadmap de Implementação' },
      { href: '/guides/migration-strategies', label: 'Estratégias de Migração' },
      { href: '/guides/adr', label: 'ADR - Decision Records' },
      { href: '/guides/cases', label: '19 Casos Reais' },
    ],
  },
];

/** True if pathname is this section (exact or child of an item). */
export function isSectionActive(pathname: string, items: NavItemEntry[]): boolean {
  return items.some(
    item =>
      pathname === item.href || pathname.startsWith(item.href + '/')
  );
}

export interface BreadcrumbItem {
  label: string;
  href: string | null;
}

/**
 * Gera breadcrumbs automaticamente a partir da navegação (NAV_JOURNEY).
 * Retorna [Início, Seção, Página atual] com labels corretos, ou null se a rota não estiver no menu.
 */
export function getBreadcrumbsForPath(pathname: string): BreadcrumbItem[] | null {
  if (!pathname || pathname === '/') return null;

  for (const section of NAV_JOURNEY) {
    const item = section.items.find(entry => entry.href === pathname);
    if (item) {
      const firstInSection = section.items[0];
      return [
        { label: 'Início', href: '/' },
        {
          label: section.label,
          href: firstInSection.href === pathname ? null : firstInSection.href,
        },
        { label: item.label, href: null },
      ];
    }
  }

  return null;
}
