import React, { useState } from 'react';
import {
  Stack,
  Group,
  Text,
  Accordion,
  TextInput,
  ActionIcon,
  ScrollArea,
} from '@mantine/core';
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
  IconSearch,
  IconX,
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

export default function MobileNavMenu({
  guides,
  architectures,
  patterns,
  techniques,
  bestPractices,
  onNavigate,
}: Props) {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const current = location.pathname;

  // Agrupar arquiteturas por complexidade
  const groupedArchitectures = {
    fundamental: architectures.slice(0, 4),
    design: architectures.slice(4, 7),
    integration: architectures.slice(7, 9),
    modular: architectures.slice(9, 12),
    advanced: architectures.slice(12, 15),
  };

  // Filtrar itens baseado na busca
  const filterItems = (items: DocMeta[], query: string) => {
    if (!query) return items;
    const lowerQuery = query.toLowerCase();
    return items.filter(
      item =>
        item.title.toLowerCase().includes(lowerQuery) ||
        item.description?.toLowerCase().includes(lowerQuery)
    );
  };

  const filteredGuides = filterItems(guides, searchQuery);
  const filteredBestPractices = filterItems(bestPractices, searchQuery);
  const filteredPatterns = filterItems(patterns, searchQuery);
  const filteredTechniques = filterItems(techniques, searchQuery);

  return (
    <Stack gap="md" style={{ height: '100%' }}>
      {/* Busca no topo do menu mobile */}
      <TextInput
        placeholder="Buscar no menu..."
        leftSection={<IconSearch size={20} />}
        rightSection={
          searchQuery && (
            <ActionIcon
              size="md"
              variant="transparent"
              onClick={() => setSearchQuery('')}
            >
              <IconX size={18} />
            </ActionIcon>
          )
        }
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        size="md"
        mb="sm"
      />

      <ScrollArea style={{ flex: 1, height: 'calc(100vh - 200px)' }}>
        <Accordion
          defaultValue={['guides', 'architectures']}
          multiple
          variant="separated"
          radius="md"
        >
          {/* Guides Section */}
          <Accordion.Item value="guides">
            <Accordion.Control>
              <Group gap="sm">
                <IconBook size={20} color="var(--mantine-color-blue-6)" />
                <Text fw={500} size="md">
                  Guides
                </Text>
                {filteredGuides.length > 0 && (
                  <Text size="xs" c="dimmed">
                    ({filteredGuides.length})
                  </Text>
                )}
              </Group>
            </Accordion.Control>
            <Accordion.Panel>
              <Stack gap={6}>
                {filteredGuides.length > 0 ? (
                  filteredGuides.map(g => (
                    <NavItem
                      key={g.slug}
                      href={`/guides/${g.slug}`}
                      label={g.title}
                      icon={<IconBook size={18} />}
                      active={current === `/guides/${g.slug}`}
                      onNavigate={onNavigate}
                    />
                  ))
                ) : (
                  <Text size="sm" c="dimmed" ta="center" py="xs">
                    Nenhum resultado encontrado
                  </Text>
                )}
              </Stack>
            </Accordion.Panel>
          </Accordion.Item>

          {/* Best Practices Section */}
          <Accordion.Item value="best-practices">
            <Accordion.Control>
              <Group gap="sm">
                <IconCheck size={20} color="var(--mantine-color-teal-6)" />
                <Text fw={500} size="md">
                  Best Practices
                </Text>
                {filteredBestPractices.length > 0 && (
                  <Text size="xs" c="dimmed">
                    ({filteredBestPractices.length})
                  </Text>
                )}
              </Group>
            </Accordion.Control>
            <Accordion.Panel>
              <Stack gap={6}>
                {filteredBestPractices.length > 0 ? (
                  filteredBestPractices.map(b => (
                    <NavItem
                      key={b.slug}
                      href={`/best-practices/${b.slug}`}
                      label={b.title}
                      icon={<IconCheck size={18} />}
                      active={current === `/best-practices/${b.slug}`}
                      onNavigate={onNavigate}
                    />
                  ))
                ) : (
                  <Text size="sm" c="dimmed" ta="center" py="xs">
                    Nenhum resultado encontrado
                  </Text>
                )}
              </Stack>
            </Accordion.Panel>
          </Accordion.Item>

          {/* Architectures Section */}
          <Accordion.Item value="architectures">
            <Accordion.Control>
              <Group gap="sm">
                <IconStack size={20} color="var(--mantine-color-green-6)" />
                <Text fw={500} size="md">
                  Architectures
                </Text>
                <Text size="xs" c="dimmed">
                  ({architectures.length})
                </Text>
              </Group>
            </Accordion.Control>
            <Accordion.Panel>
              <Stack gap="md">
                {/* 🚀 FUNDAMENTALS */}
                <div>
                  <Group gap="sm" mb="sm">
                    <IconRocket size={18} color="var(--mantine-color-blue-6)" />
                    <Text size="sm" c="dimmed" fw={500}>
                      Fundamentals
                    </Text>
                  </Group>
                  <Stack gap={6}>
                    {groupedArchitectures.fundamental.map(a => (
                      <NavItem
                        key={a.slug}
                        href={`/architectures/${a.slug}`}
                        label={a.title}
                        icon={<IconStack size={18} />}
                        active={current === `/architectures/${a.slug}`}
                        onNavigate={onNavigate}
                      />
                    ))}
                  </Stack>
                </div>

                {/* 🏗️ DESIGN PATTERNS */}
                <div>
                  <Group gap="sm" mb="sm">
                    <IconBuilding
                      size={18}
                      color="var(--mantine-color-violet-6)"
                    />
                    <Text size="sm" c="dimmed" fw={500}>
                      Design Patterns
                    </Text>
                  </Group>
                  <Stack gap={6}>
                    {groupedArchitectures.design.map(a => (
                      <NavItem
                        key={a.slug}
                        href={`/architectures/${a.slug}`}
                        label={a.title}
                        icon={<IconStack size={18} />}
                        active={current === `/architectures/${a.slug}`}
                        onNavigate={onNavigate}
                      />
                    ))}
                  </Stack>
                </div>

                {/* 🔌 INTEGRATION & API */}
                <div>
                  <Group gap="sm" mb="sm">
                    <IconPlug size={18} color="var(--mantine-color-cyan-6)" />
                    <Text size="sm" c="dimmed" fw={500}>
                      Integration & API
                    </Text>
                  </Group>
                  <Stack gap={6}>
                    {groupedArchitectures.integration.map(a => (
                      <NavItem
                        key={a.slug}
                        href={`/architectures/${a.slug}`}
                        label={a.title}
                        icon={<IconStack size={18} />}
                        active={current === `/architectures/${a.slug}`}
                        onNavigate={onNavigate}
                      />
                    ))}
                  </Stack>
                </div>

                {/* 🧩 MODULARIZATION */}
                <div>
                  <Group gap="sm" mb="sm">
                    <IconPuzzlePiece
                      size={18}
                      color="var(--mantine-color-orange-6)"
                    />
                    <Text size="sm" c="dimmed" fw={500}>
                      Modularization
                    </Text>
                  </Group>
                  <Stack gap={6}>
                    {groupedArchitectures.modular.map(a => (
                      <NavItem
                        key={a.slug}
                        href={`/architectures/${a.slug}`}
                        label={a.title}
                        icon={<IconStack size={18} />}
                        active={current === `/architectures/${a.slug}`}
                        onNavigate={onNavigate}
                      />
                    ))}
                  </Stack>
                </div>

                {/* ⚡ ADVANCED */}
                <div>
                  <Group gap="sm" mb="sm">
                    <IconBolt size={18} color="var(--mantine-color-red-6)" />
                    <Text size="sm" c="dimmed" fw={500}>
                      Advanced
                    </Text>
                  </Group>
                  <Stack gap={6}>
                    {groupedArchitectures.advanced.map(a => (
                      <NavItem
                        key={a.slug}
                        href={`/architectures/${a.slug}`}
                        label={a.title}
                        icon={<IconStack size={18} />}
                        active={current === `/architectures/${a.slug}`}
                        onNavigate={onNavigate}
                      />
                    ))}
                  </Stack>
                </div>
              </Stack>
            </Accordion.Panel>
          </Accordion.Item>

          {/* Patterns Section */}
          <Accordion.Item value="patterns">
            <Accordion.Control>
              <Group gap="sm">
                <IconPuzzle size={20} color="var(--mantine-color-purple-6)" />
                <Text fw={500} size="md">
                  Patterns
                </Text>
                {filteredPatterns.length > 0 && (
                  <Text size="xs" c="dimmed">
                    ({filteredPatterns.length})
                  </Text>
                )}
              </Group>
            </Accordion.Control>
            <Accordion.Panel>
              <Stack gap={6}>
                {filteredPatterns.length > 0 ? (
                  filteredPatterns.map(p => (
                    <NavItem
                      key={p.slug}
                      href={`/patterns/${p.slug}`}
                      label={p.title}
                      icon={<IconPuzzle size={18} />}
                      active={current === `/patterns/${p.slug}`}
                      onNavigate={onNavigate}
                    />
                  ))
                ) : (
                  <Text size="sm" c="dimmed" ta="center" py="xs">
                    Nenhum resultado encontrado
                  </Text>
                )}
              </Stack>
            </Accordion.Panel>
          </Accordion.Item>

          {/* Techniques Section */}
          <Accordion.Item value="techniques">
            <Accordion.Control>
              <Group gap="sm">
                <IconTools size={20} color="var(--mantine-color-orange-6)" />
                <Text fw={500} size="md">
                  Techniques
                </Text>
                {filteredTechniques.length > 0 && (
                  <Text size="xs" c="dimmed">
                    ({filteredTechniques.length})
                  </Text>
                )}
              </Group>
            </Accordion.Control>
            <Accordion.Panel>
              <Stack gap={6}>
                {filteredTechniques.length > 0 ? (
                  filteredTechniques.map(t => (
                    <NavItem
                      key={t.slug}
                      href={`/techniques/${t.slug}`}
                      label={t.title}
                      icon={<IconTools size={18} />}
                      active={current === `/techniques/${t.slug}`}
                      onNavigate={onNavigate}
                    />
                  ))
                ) : (
                  <Text size="sm" c="dimmed" ta="center" py="xs">
                    Nenhum resultado encontrado
                  </Text>
                )}
              </Stack>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </ScrollArea>
    </Stack>
  );
}
