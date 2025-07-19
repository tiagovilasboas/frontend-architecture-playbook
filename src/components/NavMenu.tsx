import React from 'react';
import { ScrollArea, Title, Stack, Divider, Group, Text } from '@mantine/core';
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
    <ScrollArea h="calc(100vh - 120px)" style={{ overflow: 'auto' }}>
      <Stack gap="md">
        {/* Guides Section */}
        <div>
          <Group gap="xs" mb="sm">
            <IconBook size={16} color="var(--mantine-color-blue-6)" />
            <Title order={6} c="dimmed">
              Guides
            </Title>
          </Group>
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
        </div>

        <Divider />

        {/* Best Practices Section */}
        <div>
          <Group gap="xs" mb="sm">
            <IconCheck size={16} color="var(--mantine-color-teal-6)" />
            <Title order={6} c="dimmed">
              Best Practices
            </Title>
          </Group>
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
        </div>

        <Divider />

        {/* Architectures Section */}
        <div>
          <Group gap="xs" mb="sm">
            <IconStack size={16} color="var(--mantine-color-green-6)" />
            <Title order={6} c="dimmed">
              Architectures
            </Title>
          </Group>

          {/* 🚀 FUNDAMENTALS */}
          <Stack gap={4} mb="md">
            <Group gap="xs" mb="xs">
              <IconRocket size={14} color="var(--mantine-color-blue-6)" />
              <Text size="xs" c="dimmed" fw={500}>
                Fundamentals
              </Text>
            </Group>
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

          {/* 🏗️ DESIGN PATTERNS */}
          <Stack gap={4} mb="md">
            <Group gap="xs" mb="xs">
              <IconBuilding size={14} color="var(--mantine-color-violet-6)" />
              <Text size="xs" c="dimmed" fw={500}>
                Design Patterns
              </Text>
            </Group>
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

          {/* 🔌 INTEGRATION & API */}
          <Stack gap={4} mb="md">
            <Group gap="xs" mb="xs">
              <IconPlug size={14} color="var(--mantine-color-cyan-6)" />
              <Text size="xs" c="dimmed" fw={500}>
                Integration & API
              </Text>
            </Group>
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

          {/* 🧩 MODULARIZATION */}
          <Stack gap={4} mb="md">
            <Group gap="xs" mb="xs">
              <IconPuzzlePiece
                size={14}
                color="var(--mantine-color-orange-6)"
              />
              <Text size="xs" c="dimmed" fw={500}>
                Modularization
              </Text>
            </Group>
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

          {/* ⚡ ADVANCED */}
          <Stack gap={4} mb="md">
            <Group gap="xs" mb="xs">
              <IconBolt size={14} color="var(--mantine-color-red-6)" />
              <Text size="xs" c="dimmed" fw={500}>
                Advanced
              </Text>
            </Group>
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

        <Divider />

        {/* Patterns Section */}
        <div>
          <Group gap="xs" mb="sm">
            <IconPuzzle size={16} color="var(--mantine-color-purple-6)" />
            <Title order={6} c="dimmed">
              Patterns
            </Title>
          </Group>
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
        </div>

        <Divider />

        {/* Techniques Section */}
        <div>
          <Group gap="xs" mb="sm">
            <IconTools size={16} color="var(--mantine-color-orange-6)" />
            <Title order={6} c="dimmed">
              Techniques
            </Title>
          </Group>
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
        </div>
      </Stack>
    </ScrollArea>
  );
}
