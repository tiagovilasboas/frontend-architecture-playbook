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
          {/* 1. Guias – conceitos e decisão */}
          <Accordion.Item value="guides">
            <Accordion.Control>
              <Group gap="sm">
                <IconBook size={20} color="var(--mantine-color-brand-6)" />
                <Stack gap={0}>
                  <Text fw={500} size="md">
                    1. Guias
                  </Text>
                  <Text size="xs" c="dimmed">
                    Conceitos e decisão
                    {filteredGuides.length > 0 && ` · ${filteredGuides.length}`}
                  </Text>
                </Stack>
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

          {/* 2. Arquiteturas – o que escolher */}
          <Accordion.Item value="architectures">
            <Accordion.Control>
              <Group gap="sm">
                <IconStack size={20} color="var(--mantine-color-brand-6)" />
                <Stack gap={0}>
                  <Text fw={500} size="md">
                    2. Arquiteturas
                  </Text>
                  <Text size="xs" c="dimmed">
                    O que escolher · {architectures.length}
                  </Text>
                </Stack>
              </Group>
            </Accordion.Control>
            <Accordion.Panel>
              <Stack gap="md">
                {/* 🚀 FUNDAMENTALS */}
                <div>
                  <Group gap="sm" mb="sm">
                    <IconRocket size={18} color="var(--mantine-color-brand-6)" />
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
                      color="var(--mantine-color-brand-6)"
                    />
                    <Text size="sm" c="dimmed" fw={500}>
                      Padrões de Design
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
                    <IconPlug size={18} color="var(--mantine-color-brand-6)" />
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
                      color="var(--mantine-color-brand-6)"
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
                    <IconBolt size={18} color="var(--mantine-color-brand-6)" />
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

          {/* 3. Padrões – como estruturar */}
          <Accordion.Item value="patterns">
            <Accordion.Control>
              <Group gap="sm">
                <IconPuzzle size={20} color="var(--mantine-color-brand-6)" />
                <Stack gap={0}>
                  <Text fw={500} size="md">
                    3. Padrões
                  </Text>
                  <Text size="xs" c="dimmed">
                    Como estruturar
                    {filteredPatterns.length > 0 && ` · ${filteredPatterns.length}`}
                  </Text>
                </Stack>
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

          {/* 4. Técnicas – como implementar */}
          <Accordion.Item value="techniques">
            <Accordion.Control>
              <Group gap="sm">
                <IconTools size={20} color="var(--mantine-color-brand-6)" />
                <Stack gap={0}>
                  <Text fw={500} size="md">
                    4. Técnicas
                  </Text>
                  <Text size="xs" c="dimmed">
                    Como implementar
                    {filteredTechniques.length > 0 &&
                      ` · ${filteredTechniques.length}`}
                  </Text>
                </Stack>
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

          {/* 5. Boas Práticas – princípios de código */}
          <Accordion.Item value="best-practices">
            <Accordion.Control>
              <Group gap="sm">
                <IconCheck size={20} color="var(--mantine-color-brand-6)" />
                <Stack gap={0}>
                  <Text fw={500} size="md">
                    5. Boas Práticas
                  </Text>
                  <Text size="xs" c="dimmed">
                    Princípios de código
                    {filteredBestPractices.length > 0 &&
                      ` · ${filteredBestPractices.length}`}
                  </Text>
                </Stack>
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
        </Accordion>
      </ScrollArea>
    </Stack>
  );
}
