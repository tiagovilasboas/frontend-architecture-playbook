import React from 'react';
import { Menu, UnstyledButton, Text, Group } from '@mantine/core';
import { Link, useLocation } from 'react-router-dom';
import {
  IconChevronDown,
  IconBook,
  IconPuzzle,
  IconStack,
  IconRocket,
  IconBuilding,
  IconTarget,
} from '@tabler/icons-react';

// ─── Journey-based navigation ─────────────────────────────────────────
// Same structure as MobileNavMenu but rendered as horizontal dropdowns.
// Each dropdown = one section of the developer journey.

const JOURNEY = [
  {
    key: 'fundamentals',
    label: 'Fundamentos',
    basePath: ['/guides/dependency-rule', '/best-practices/', '/guides/how-to-choose'],
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
    label: 'UI',
    basePath: ['/architectures/spa', '/patterns/component', '/patterns/atomic', '/techniques/state', '/patterns/event'],
    items: [
      { href: '/architectures/spa', label: 'Single Page Application' },
      { href: '/patterns/component-driven', label: 'Component-Driven Dev' },
      { href: '/patterns/atomic-design', label: 'Atomic Design' },
      { href: '/techniques/state-machines', label: 'State Machines' },
      { href: '/patterns/event-driven', label: 'Event-Driven' },
    ],
  },
  {
    key: 'delivery',
    label: 'Entrega',
    basePath: ['/architectures/ssr', '/architectures/jam', '/architectures/pwa', '/architectures/islands', '/techniques/performance'],
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
    label: 'Estrutura',
    basePath: ['/architectures/clean', '/architectures/layered', '/architectures/hexagonal', '/patterns/repository', '/patterns/security'],
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
    label: 'Escala',
    basePath: ['/architectures/monorepo', '/architectures/micro', '/architectures/bff', '/architectures/headless', '/techniques/feature', '/architectures/cqrs', '/architectures/event-sourcing'],
    items: [
      { href: '/architectures/monorepo', label: 'Monorepo' },
      { href: '/architectures/micro-frontends', label: 'Micro-Frontends' },
      { href: '/architectures/microservices-frontend', label: 'Microservices Frontend' },
      { href: '/architectures/bff', label: 'BFF' },
      { href: '/architectures/headless', label: 'Headless Architecture' },
      { href: '/techniques/feature-flags', label: 'Feature Flags' },
      { href: '/architectures/cqrs', label: 'CQRS' },
      { href: '/architectures/event-sourcing', label: 'Event Sourcing' },
    ],
  },
  {
    key: 'decision',
    label: 'Decisão',
    basePath: ['/guides/architecture-comparison', '/guides/implementation', '/guides/migration', '/guides/adr', '/guides/cases'],
    items: [
      { href: '/guides/architecture-comparison', label: 'Comparação de Arquiteturas' },
      { href: '/guides/implementation-roadmap', label: 'Roadmap' },
      { href: '/guides/migration-strategies', label: 'Estratégias de Migração' },
      { href: '/guides/adr', label: 'ADR - Decision Records' },
      { href: '/guides/cases', label: '19 Casos Reais' },
    ],
  },
] as const;

export default function HeaderNavMenu() {
  const location = useLocation();

  const isSectionActive = (basePaths: readonly string[]) => {
    return basePaths.some(path => location.pathname.startsWith(path));
  };

  return (
    <Group gap="xs" wrap="nowrap">
      {JOURNEY.map(section => (
        <Menu
          key={section.key}
          trigger="hover"
          openDelay={100}
          closeDelay={200}
          position="bottom-start"
          withArrow
        >
          <Menu.Target>
            <UnstyledButton
              className="header-nav-btn"
              data-active={isSectionActive(section.basePath) || undefined}
              style={{
                textDecoration: 'none',
                padding: '8px 12px',
                borderRadius: 6,
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: 4,
              }}
            >
              <Text size="sm">{section.label}</Text>
              <IconChevronDown size={14} />
            </UnstyledButton>
          </Menu.Target>
          <Menu.Dropdown className="header-nav-dropdown">
            {section.items.map(item => (
              <Menu.Item
                key={item.href}
                component={Link}
                to={item.href}
              >
                {item.label}
              </Menu.Item>
            ))}
          </Menu.Dropdown>
        </Menu>
      ))}
    </Group>
  );
}
