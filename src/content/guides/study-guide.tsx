import React from 'react';
import {
  Title,
  Text,
  Stack,
  Paper,
  List,
  ThemeIcon,
  Group,
  Anchor,
  Card,
  SimpleGrid,
} from '@mantine/core';
import {
  IconMap2,
  IconSchool,
  IconTrendingUp,
  IconUsers,
  IconTarget,
  IconArrowRight,
} from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import GuideNavigation from '../../components/GuideNavigation';

const JUNIOR_LINKS = [
  { href: '/guides/dependency-rule', label: 'Dependency Rule' },
  { href: '/best-practices/dry', label: 'DRY' },
  { href: '/best-practices/kiss', label: 'KISS' },
  { href: '/best-practices/yagni', label: 'YAGNI' },
  { href: '/best-practices/srp', label: 'Single Responsibility' },
  { href: '/best-practices/soc', label: 'Separation of Concerns' },
  { href: '/best-practices/clean-code', label: 'Clean Code' },
  {
    href: '/guides/how-to-choose',
    label: 'Como Escolher Arquitetura (visão geral)',
  },
  { href: '/architectures/spa', label: 'Single Page Application' },
  { href: '/patterns/component-driven', label: 'Component-Driven Dev' },
  {
    href: '/patterns/security',
    label: 'Security Patterns (noções de XSS/validação)',
  },
];

const SENIOR_LINKS = [
  { href: '/architectures/monorepo', label: 'Monorepo' },
  { href: '/architectures/micro-frontends', label: 'Micro-Frontends' },
  {
    href: '/architectures/microservices-frontend',
    label: 'Microservices Frontend',
  },
  { href: '/architectures/bff', label: 'Backend for Frontend (BFF)' },
  { href: '/techniques/feature-flags', label: 'Feature Flags' },
  {
    href: '/guides/architecture-comparison',
    label: 'Comparação de Arquiteturas',
  },
  { href: '/guides/implementation-roadmap', label: 'Roadmap de Implementação' },
  { href: '/guides/migration-strategies', label: 'Estratégias de Migração' },
  { href: '/guides/cases', label: '19 Casos Reais (uso em decisão)' },
];

const STAFF_LINKS = [
  { href: '/guides/staff', label: 'Para Staff (hub)' },
  { href: '/guides/staff-fundamentals', label: 'Staff · Fundamentos' },
  { href: '/guides/staff-ui', label: 'Staff · Construindo UI' },
  { href: '/guides/staff-entrega', label: 'Staff · Entrega' },
  { href: '/guides/staff-estrutura', label: 'Staff · Estrutura' },
  { href: '/guides/staff-escala', label: 'Staff · Escala' },
  { href: '/guides/adr', label: 'ADR - Decision Records' },
  { href: '/guides/cases', label: '19 Casos (evidência em decisões)' },
  { href: '/guides/how-to-choose', label: 'Decision Wizard' },
  { href: '/guides/implementation-roadmap', label: 'Roadmap de Implementação' },
  { href: '/guides/migration-strategies', label: 'Estratégias de Migração' },
  { href: '/guides/security-business', label: 'Segurança & Negócio' },
];

function LinkList({ items }: { items: { href: string; label: string }[] }) {
  return (
    <List
      spacing="xs"
      icon={
        <ThemeIcon size={20} radius="xl" color="brand">
          <IconArrowRight size={12} />
        </ThemeIcon>
      }
    >
      {items.map(({ href, label }) => (
        <List.Item key={href}>
          <Anchor component={Link} to={href} size="sm">
            {label}
          </Anchor>
        </List.Item>
      ))}
    </List>
  );
}

export default function StudyGuide() {
  return (
    <Stack gap="xl">
      <div>
        <Title order={1} mb="md">
          Por onde começar
        </Title>
        <Text size="lg" c="dimmed">
          O playbook tem muita coisa. Este roteiro segmenta o conteúdo por
          nível: o que estudar primeiro como <strong>Júnior</strong>, o que
          somar como <strong>Pleno</strong> e <strong>Sênior</strong>, e o que
          entra no radar de <strong>Staff</strong>. Tudo com links para o
          conteúdo que já existe.
        </Text>
      </div>

      <Paper withBorder p="xl" radius="md">
        <Group gap="sm" mb="md">
          <ThemeIcon size={40} radius="md" variant="light" color="blue">
            <IconMap2 size={22} />
          </ThemeIcon>
          <div>
            <Title order={3}>Como usar</Title>
            <Text size="sm" c="dimmed">
              Cada nível traz o objetivo em uma frase e a lista de páginas na
              ordem sugerida. Quando estiver confortável, veja “Próximo nível” e
              siga.
            </Text>
          </div>
        </Group>
      </Paper>

      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
        <Card withBorder p="xl" radius="lg">
          <Stack gap="md">
            <Group gap="sm">
              <ThemeIcon size={44} radius="md" variant="light" color="green">
                <IconSchool size={24} />
              </ThemeIcon>
              <div>
                <Title order={3}>Júnior</Title>
                <Text size="sm" c="dimmed">
                  Fundamentos e entrega de valor em feature.
                </Text>
              </div>
            </Group>
            <Text size="sm">
              Foco em Dependency Rule, boas práticas de código, visão geral de
              como escolher arquitetura, SPA, component-driven e noções de
              segurança.
            </Text>
            <LinkList items={JUNIOR_LINKS} />
            <Paper withBorder p="sm" radius="md" bg="dimmed">
              <Text size="xs" fw={600} mb={4}>
                Próximo nível (Pleno)
              </Text>
              <Text size="xs" c="dimmed">
                Atomic Design, State Machines, SSR/SSG, PWA, Performance,
                Clean/Layered/Hexagonal, Repository e Security Patterns
                completo.
              </Text>
            </Paper>
          </Stack>
        </Card>

        <Card withBorder p="xl" radius="lg">
          <Stack gap="md">
            <Group gap="sm">
              <ThemeIcon size={44} radius="md" variant="light" color="blue">
                <IconTrendingUp size={24} />
              </ThemeIcon>
              <div>
                <Title order={3}>Pleno</Title>
                <Text size="sm" c="dimmed">
                  Dono de fluxo e qualidade.
                </Text>
              </div>
            </Group>
            <Text size="sm">
              Tudo do Júnior, mais: Atomic Design, State Machines, SSR/SSG, PWA,
              Performance, Clean/Layered/Hexagonal, Repository e Security
              Patterns completo.
            </Text>
            <LinkList
              items={[
                { href: '/patterns/atomic-design', label: 'Atomic Design' },
                { href: '/techniques/state-machines', label: 'State Machines' },
                { href: '/architectures/ssr-ssg', label: 'SSR & SSG' },
                { href: '/architectures/jamstack', label: 'JAMstack' },
                { href: '/architectures/pwa', label: 'Progressive Web Apps' },
                { href: '/techniques/performance', label: 'Performance' },
                {
                  href: '/architectures/clean-architecture',
                  label: 'Clean Architecture',
                },
                {
                  href: '/architectures/layered',
                  label: 'Layered Architecture',
                },
                {
                  href: '/architectures/hexagonal',
                  label: 'Hexagonal Architecture',
                },
                {
                  href: '/patterns/repository-pattern',
                  label: 'Repository Pattern',
                },
              ]}
            />
            <Paper withBorder p="sm" radius="md" bg="dimmed">
              <Text size="xs" fw={600} mb={4}>
                Próximo nível (Sênior)
              </Text>
              <Text size="xs" c="dimmed">
                Monorepo, Micro-frontends, BFF, Feature Flags, Comparação de
                Arquiteturas, Roadmap de Implementação, Migração e 19 Casos em
                decisão.
              </Text>
            </Paper>
          </Stack>
        </Card>

        <Card withBorder p="xl" radius="lg">
          <Stack gap="md">
            <Group gap="sm">
              <ThemeIcon size={44} radius="md" variant="light" color="violet">
                <IconUsers size={24} />
              </ThemeIcon>
              <div>
                <Title order={3}>Sênior</Title>
                <Text size="sm" c="dimmed">
                  Escala e decisão técnica.
                </Text>
              </div>
            </Group>
            <Text size="sm">
              Tudo do Pleno, mais: Monorepo, Micro-frontends, BFF, Feature
              Flags, Comparação de Arquiteturas, Roadmap de Implementação,
              Estratégias de Migração e 19 Casos para usar em decisão.
            </Text>
            <LinkList items={SENIOR_LINKS} />
            <Paper withBorder p="sm" radius="md" bg="dimmed">
              <Text size="xs" fw={600} mb={4}>
                Próximo nível (Staff)
              </Text>
              <Text size="xs" c="dimmed">
                Hub Para Staff, Staff por seção, ADR, Casos, Decision Wizard,
                Segurança & Negócio, back-end/protocolos, ferramentas.
                Justificar, documentar e falar com negócio e com back-end/front.
              </Text>
            </Paper>
          </Stack>
        </Card>

        <Card withBorder p="xl" radius="lg">
          <Stack gap="md">
            <Group gap="sm">
              <ThemeIcon size={44} radius="md" variant="light" color="orange">
                <IconTarget size={24} />
              </ThemeIcon>
              <div>
                <Title order={3}>Staff</Title>
                <Text size="sm" c="dimmed">
                  Decisão, alinhamento e referência.
                </Text>
              </div>
            </Group>
            <Text size="sm">
              Tudo do Sênior, mais: hub Para Staff e Staff por seção
              (Fundamentos, UI, Entrega, Estrutura, Escala), ADR, Casos como
              evidência, Decision Wizard, Segurança & Negócio. Foco em
              justificar e documentar, falar com negócio e com back-end/front,
              back-end e protocolos, ferramentas e guardrails.
            </Text>
            <LinkList items={STAFF_LINKS} />
          </Stack>
        </Card>
      </SimpleGrid>

      <Paper withBorder p="md" radius="md">
        <Text size="sm" c="dimmed">
          O conteúdo do playbook é o mesmo para todos; o que muda é a ordem e o
          foco por nível. Use o menu principal para navegar por tema
          (Fundamentos, UI, Entrega, etc.) quando quiser explorar por assunto em
          vez de por senioridade.
        </Text>
      </Paper>

      <GuideNavigation currentGuide="study-guide" />
    </Stack>
  );
}

StudyGuide.metadata = {
  title: 'Por onde começar',
  description:
    'Roteiro que segmenta o conteúdo do playbook por nível: Júnior, Pleno, Sênior e Staff. Links para o que estudar em cada etapa.',
};
