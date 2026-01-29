import React from 'react';
import { Title, Stack, Group, Text, Accordion } from '@mantine/core';
import {
  IconBook,
  IconPuzzle,
  IconStack,
  IconTools,
  IconCheck,
  IconRocket,
  IconBuilding,
  IconPlug,
  IconPuzzle as IconPuzzlePiece,
  IconBolt,
} from '@tabler/icons-react';
import { useLocation } from 'react-router-dom';
import type { DocMeta } from '../lib/content.tsx';
import NavItem from './NavItem.tsx';

interface Props {
  guides: DocMeta[];
  architectures: DocMeta[];
  patterns: DocMeta[];
  techniques: DocMeta[];
  bestPractices: DocMeta[];
  onNavigate?: () => void;
}

export default function NavMenu({
  guides,
  architectures,
  patterns,
  techniques,
  bestPractices,
  onNavigate,
}: Props) {
  const location = useLocation();
  const current = location.pathname;

  // Agrupar arquiteturas por complexidade
  const groupedArchitectures = {
    fundamental: architectures.slice(0, 4), // SPA, SSR/SSG, JAMstack, PWA
    design: architectures.slice(4, 7), // Clean, Layered, Hexagonal
    integration: architectures.slice(7, 9), // BFF, Headless
    modular: architectures.slice(9, 12), // Micro-frontends, Microservices, Monorepo
    advanced: architectures.slice(12, 15), // Event Sourcing, CQRS, Islands
  };

  return (
    <div
      className="nav-menu-container"
      style={{
        overflowX: 'hidden',
      }}
    >
      <Accordion
        defaultValue={['guides', 'architectures']}
        multiple
        variant="separated"
        radius="md"
      >
        {/* 1. Guias – conceitos e decisão */}
        <Accordion.Item value="guides">
          <Accordion.Control>
            <Group gap="xs">
              <IconBook size={16} color="var(--mantine-color-brand-6)" />
              <Stack gap={0}>
                <Title order={6} c="dimmed" style={{ margin: 0 }}>
                  1. Guias
                </Title>
                <Text size="xs" c="dimmed" visibleFrom="sm">
                  Conceitos e decisão
                </Text>
              </Stack>
            </Group>
          </Accordion.Control>
          <Accordion.Panel>
            <Stack gap={4}>
              {guides.map(g => (
                <NavItem
                  key={g.slug}
                  href={`/guides/${g.slug}`}
                  label={g.title}
                  icon={<IconBook size={16} />}
                  active={current === `/guides/${g.slug}`}
                  onNavigate={onNavigate}
                />
              ))}
            </Stack>
          </Accordion.Panel>
        </Accordion.Item>

        {/* 2. Arquiteturas – o que escolher */}
        <Accordion.Item value="architectures">
          <Accordion.Control>
            <Group gap="xs">
              <IconStack size={16} color="var(--mantine-color-brand-6)" />
              <Stack gap={0}>
                <Title order={6} c="dimmed" style={{ margin: 0 }}>
                  2. Arquiteturas
                </Title>
                <Text size="xs" c="dimmed" visibleFrom="sm">
                  O que escolher
                </Text>
              </Stack>
            </Group>
          </Accordion.Control>
          <Accordion.Panel>
            <Stack gap="md">
              {/* 🚀 FUNDAMENTALS */}
              <div>
                <Group gap="xs" mb="xs">
                  <IconRocket size={14} color="var(--mantine-color-brand-6)" />
                  <Text size="xs" c="dimmed" fw={500}>
                    Fundamentals
                  </Text>
                </Group>
                <Stack gap={4}>
                  {groupedArchitectures.fundamental.map(a => (
                    <NavItem
                      key={a.slug}
                      href={`/architectures/${a.slug}`}
                      label={a.title}
                      icon={<IconStack size={16} />}
                      active={current === `/architectures/${a.slug}`}
                      onNavigate={onNavigate}
                    />
                  ))}
                </Stack>
              </div>

              {/* 🏗️ DESIGN PATTERNS */}
              <div>
                <Group gap="xs" mb="xs">
                  <IconBuilding
                    size={14}
                    color="var(--mantine-color-brand-6)"
                  />
                  <Text size="xs" c="dimmed" fw={500}>
                    Padrões de Design
                  </Text>
                </Group>
                <Stack gap={4}>
                  {groupedArchitectures.design.map(a => (
                    <NavItem
                      key={a.slug}
                      href={`/architectures/${a.slug}`}
                      label={a.title}
                      icon={<IconStack size={16} />}
                      active={current === `/architectures/${a.slug}`}
                      onNavigate={onNavigate}
                    />
                  ))}
                </Stack>
              </div>

              {/* 🔌 INTEGRATION & API */}
              <div>
                <Group gap="xs" mb="xs">
                  <IconPlug size={14} color="var(--mantine-color-brand-6)" />
                  <Text size="xs" c="dimmed" fw={500}>
                    Integration & API
                  </Text>
                </Group>
                <Stack gap={4}>
                  {groupedArchitectures.integration.map(a => (
                    <NavItem
                      key={a.slug}
                      href={`/architectures/${a.slug}`}
                      label={a.title}
                      icon={<IconStack size={16} />}
                      active={current === `/architectures/${a.slug}`}
                      onNavigate={onNavigate}
                    />
                  ))}
                </Stack>
              </div>

              {/* 🧩 MODULARIZATION */}
              <div>
                <Group gap="xs" mb="xs">
                  <IconPuzzlePiece
                    size={14}
                    color="var(--mantine-color-brand-6)"
                  />
                  <Text size="xs" c="dimmed" fw={500}>
                    Modularization
                  </Text>
                </Group>
                <Stack gap={4}>
                  {groupedArchitectures.modular.map(a => (
                    <NavItem
                      key={a.slug}
                      href={`/architectures/${a.slug}`}
                      label={a.title}
                      icon={<IconStack size={16} />}
                      active={current === `/architectures/${a.slug}`}
                      onNavigate={onNavigate}
                    />
                  ))}
                </Stack>
              </div>

              {/* ⚡ ADVANCED */}
              <div>
                <Group gap="xs" mb="xs">
                  <IconBolt size={14} color="var(--mantine-color-brand-6)" />
                  <Text size="xs" c="dimmed" fw={500}>
                    Advanced
                  </Text>
                </Group>
                <Stack gap={4}>
                  {groupedArchitectures.advanced.map(a => (
                    <NavItem
                      key={a.slug}
                      href={`/architectures/${a.slug}`}
                      label={a.title}
                      icon={<IconStack size={16} />}
                      active={current === `/architectures/${a.slug}`}
                      onNavigate={onNavigate}
                    />
                  ))}
                </Stack>
              </div>
            </Stack>
          </Accordion.Panel>
        </Accordion.Item>

        {/* 3. Padrões – como estruturar */}
        <Accordion.Item value="patterns">
          <Accordion.Control>
            <Group gap="xs">
              <IconPuzzle size={16} color="var(--mantine-color-brand-6)" />
              <Stack gap={0}>
                <Title order={6} c="dimmed" style={{ margin: 0 }}>
                  3. Padrões
                </Title>
                <Text size="xs" c="dimmed" visibleFrom="sm">
                  Como estruturar
                </Text>
              </Stack>
            </Group>
          </Accordion.Control>
          <Accordion.Panel>
            <Stack gap={4}>
              {patterns.map(p => (
                <NavItem
                  key={p.slug}
                  href={`/patterns/${p.slug}`}
                  label={p.title}
                  icon={<IconPuzzle size={16} />}
                  active={current === `/patterns/${p.slug}`}
                  onNavigate={onNavigate}
                />
              ))}
            </Stack>
          </Accordion.Panel>
        </Accordion.Item>

        {/* 4. Técnicas – como implementar */}
        <Accordion.Item value="techniques">
          <Accordion.Control>
            <Group gap="xs">
              <IconTools size={16} color="var(--mantine-color-brand-6)" />
              <Stack gap={0}>
                <Title order={6} c="dimmed" style={{ margin: 0 }}>
                  4. Técnicas
                </Title>
                <Text size="xs" c="dimmed" visibleFrom="sm">
                  Como implementar
                </Text>
              </Stack>
            </Group>
          </Accordion.Control>
          <Accordion.Panel>
            <Stack gap={4}>
              {techniques.map(t => (
                <NavItem
                  key={t.slug}
                  href={`/techniques/${t.slug}`}
                  label={t.title}
                  icon={<IconTools size={16} />}
                  active={current === `/techniques/${t.slug}`}
                  onNavigate={onNavigate}
                />
              ))}
            </Stack>
          </Accordion.Panel>
        </Accordion.Item>

        {/* 5. Boas Práticas – princípios de código */}
        <Accordion.Item value="best-practices">
          <Accordion.Control>
            <Group gap="xs">
              <IconCheck size={16} color="var(--mantine-color-brand-6)" />
              <Stack gap={0}>
                <Title order={6} c="dimmed" style={{ margin: 0 }}>
                  5. Boas Práticas
                </Title>
                <Text size="xs" c="dimmed" visibleFrom="sm">
                  Princípios de código
                </Text>
              </Stack>
            </Group>
          </Accordion.Control>
          <Accordion.Panel>
            <Stack gap={4}>
              {bestPractices.map(b => (
                <NavItem
                  key={b.slug}
                  href={`/best-practices/${b.slug}`}
                  label={b.title}
                  icon={<IconCheck size={16} />}
                  active={current === `/best-practices/${b.slug}`}
                  onNavigate={onNavigate}
                />
              ))}
            </Stack>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
