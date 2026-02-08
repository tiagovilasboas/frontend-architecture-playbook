import { Stack, Group, Text, Accordion, ScrollArea, Anchor } from '@mantine/core';
import {
  IconBook,
  IconPuzzle,
  IconStack,
  IconRocket,
  IconBuilding,
  IconBrandGithub,
  IconBrandLinkedin,
  IconHeart,
  IconTarget,
} from '@tabler/icons-react';
import { useLocation } from 'react-router-dom';
import NavItem from './NavItem.tsx';

interface Props {
  onNavigate?: () => void;
}

// ─── Journey-based navigation structure ───────────────────────────────
// Each section answers ONE question in order:
// 1. Fundamentos → "What do I need to know first?"
// 2. Construindo UI → "How do I build components?"
// 3. Entrega → "How do I serve my app?"
// 4. Estrutura → "How do I organize my code?"
// 5. Escala → "How do I scale for teams?"
// 6. Decisão → "How do I choose and validate?"

const JOURNEY = [
  {
    key: 'fundamentals',
    label: 'Fundamentos',
    subtitle: 'Comece aqui',
    icon: <IconBook size={18} color="var(--mantine-color-brand-6)" />,
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
    subtitle: 'Componentes e estado',
    icon: <IconPuzzle size={18} color="var(--mantine-color-brand-6)" />,
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
    subtitle: 'Como servir o app',
    icon: <IconRocket size={18} color="var(--mantine-color-brand-6)" />,
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
    subtitle: 'Como organizar',
    icon: <IconBuilding size={18} color="var(--mantine-color-brand-6)" />,
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
    subtitle: 'Crescendo o time',
    icon: <IconStack size={18} color="var(--mantine-color-brand-6)" />,
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
    subtitle: 'Nível staff',
    icon: <IconTarget size={18} color="var(--mantine-color-brand-6)" />,
    items: [
      { href: '/guides/architecture-comparison', label: 'Comparação de Arquiteturas' },
      { href: '/guides/implementation-roadmap', label: 'Roadmap de Implementação' },
      { href: '/guides/migration-strategies', label: 'Estratégias de Migração' },
      { href: '/guides/adr', label: 'ADR - Decision Records' },
      { href: '/guides/cases', label: '19 Casos Reais' },
    ],
  },
] as const;

// Icon map for each section
const SECTION_ICONS: Record<string, React.ReactNode> = {
  fundamentals: <IconBook size={18} />,
  'building-ui': <IconPuzzle size={18} />,
  delivery: <IconRocket size={18} />,
  structure: <IconBuilding size={18} />,
  scale: <IconStack size={18} />,
  decision: <IconTarget size={18} />,
};

export default function MobileNavMenu({ onNavigate }: Props) {
  const location = useLocation();
  const current = location.pathname;

  return (
    <Stack gap={0} style={{ height: '100%' }} className="mobile-nav-menu">
      <ScrollArea style={{ flex: 1, minHeight: 0 }} className="mobile-nav-scroll">
        <Accordion
          defaultValue={[]}
          multiple
          variant="default"
          radius={0}
          className="mobile-nav-accordion"
        >
          {JOURNEY.map((section, idx) => (
            <Accordion.Item key={section.key} value={section.key}>
              <Accordion.Control className="mobile-accordion-control">
                <Group gap="sm">
                  {section.icon}
                  <Stack gap={0}>
                    <Text fw={500} size="sm">
                      {idx + 1}. {section.label}
                    </Text>
                    <Text size="xs" c="dimmed">
                      {section.subtitle}
                    </Text>
                  </Stack>
                </Group>
              </Accordion.Control>
              <Accordion.Panel className="mobile-nav-panel">
                <Stack gap={0}>
                  {section.items.map(item => (
                    <NavItem
                      key={item.href}
                      href={item.href}
                      label={item.label}
                      icon={SECTION_ICONS[section.key]}
                      active={current === item.href}
                      onNavigate={onNavigate}
                    />
                  ))}
                </Stack>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>

        <div className="mobile-nav-footer">
          <Stack gap={4} className="mobile-nav-footer-links">
            <Anchor
              href="https://github.com/tiagovilasboas"
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
              c="gray"
              className="mobile-nav-footer-link"
              aria-label="GitHub - Tiago Vilas Boas"
            >
              <Group gap="sm">
                <IconBrandGithub size={22} />
                <Text size="sm" fw={500}>GitHub</Text>
              </Group>
            </Anchor>
            <Anchor
              href="https://www.linkedin.com/in/tiagovilasboas"
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
              c="gray"
              className="mobile-nav-footer-link"
              aria-label="LinkedIn - Tiago Vilas Boas"
            >
              <Group gap="sm">
                <IconBrandLinkedin size={22} />
                <Text size="sm" fw={500}>LinkedIn</Text>
              </Group>
            </Anchor>
          </Stack>
          <Text size="sm" c="dimmed" ta="left" mt={4}>
            Feito com{' '}
            <IconHeart
              size={14}
              style={{
                verticalAlign: 'middle',
                color: 'var(--mantine-color-brand-6)',
              }}
            />{' '}
            por Tiago Vilas Boas
          </Text>
        </div>
      </ScrollArea>
    </Stack>
  );
}
