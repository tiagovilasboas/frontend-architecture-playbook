import React from 'react';
import { Stack, Group, Text, Accordion, ScrollArea, Anchor } from '@mantine/core';
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
  IconBrandGithub,
  IconBrandLinkedin,
  IconHeart,
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
  const current = location.pathname;

  const groupedArchitectures = {
    fundamental: architectures.slice(0, 4),
    design: architectures.slice(4, 7),
    integration: architectures.slice(7, 9),
    modular: architectures.slice(9, 12),
    advanced: architectures.slice(12, 15),
  };

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
          {/* 1. Guias */}
          <Accordion.Item value="guides">
            <Accordion.Control className="mobile-accordion-control">
              <Group gap="sm">
                <IconBook size={18} color="var(--mantine-color-brand-6)" />
                <Text fw={500} size="sm">
                  Guias · {guides.length}
                </Text>
              </Group>
            </Accordion.Control>
            <Accordion.Panel className="mobile-nav-panel">
              <Stack gap={0}>
                {guides.length > 0 ? (
                  guides.map(g => (
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

          {/* 2. Arquiteturas */}
          <Accordion.Item value="architectures">
            <Accordion.Control className="mobile-accordion-control">
              <Group gap="sm">
                <IconStack size={18} color="var(--mantine-color-brand-6)" />
                <Text fw={500} size="sm">
                  Arquiteturas · {architectures.length}
                </Text>
              </Group>
            </Accordion.Control>
            <Accordion.Panel className="mobile-nav-panel">
              <Stack gap={0}>
                <div className="mobile-nav-subgroup">
                  <Group gap={6} mb={1}>
                    <IconRocket size={12} color="var(--mantine-color-brand-6)" />
                    <Text size="xs" c="dimmed" fw={500}>
                      Fundamentais
                    </Text>
                  </Group>
                  <Stack gap={0}>
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

                <div className="mobile-nav-subgroup">
                  <Group gap={6} mb={1}>
                    <IconBuilding size={12} color="var(--mantine-color-brand-6)" />
                    <Text size="xs" c="dimmed" fw={500}>
                      Padrões de Design
                    </Text>
                  </Group>
                  <Stack gap={0}>
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

                <div className="mobile-nav-subgroup">
                  <Group gap={6} mb={1}>
                    <IconPlug size={12} color="var(--mantine-color-brand-6)" />
                    <Text size="xs" c="dimmed" fw={500}>
                      Integração e API
                    </Text>
                  </Group>
                  <Stack gap={0}>
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

                <div className="mobile-nav-subgroup">
                  <Group gap={6} mb={1}>
                    <IconPuzzlePiece size={12} color="var(--mantine-color-brand-6)" />
                    <Text size="xs" c="dimmed" fw={500}>
                      Modularização
                    </Text>
                  </Group>
                  <Stack gap={0}>
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

                <div className="mobile-nav-subgroup">
                  <Group gap={6} mb={1}>
                    <IconBolt size={12} color="var(--mantine-color-brand-6)" />
                    <Text size="xs" c="dimmed" fw={500}>
                      Avançadas
                    </Text>
                  </Group>
                  <Stack gap={0}>
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

          {/* 3. Padrões */}
          <Accordion.Item value="patterns">
            <Accordion.Control className="mobile-accordion-control">
              <Group gap="sm">
                <IconPuzzle size={18} color="var(--mantine-color-brand-6)" />
                <Text fw={500} size="sm">
                  Padrões · {patterns.length}
                </Text>
              </Group>
            </Accordion.Control>
            <Accordion.Panel className="mobile-nav-panel">
              <Stack gap={0}>
                {patterns.length > 0 ? (
                  patterns.map(p => (
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

          {/* 4. Técnicas */}
          <Accordion.Item value="techniques">
            <Accordion.Control className="mobile-accordion-control">
              <Group gap="sm">
                <IconTools size={18} color="var(--mantine-color-brand-6)" />
                <Text fw={500} size="sm">
                  Técnicas · {techniques.length}
                </Text>
              </Group>
            </Accordion.Control>
            <Accordion.Panel className="mobile-nav-panel">
              <Stack gap={0}>
                {techniques.length > 0 ? (
                  techniques.map(t => (
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

          {/* 5. Boas Práticas */}
          <Accordion.Item value="best-practices">
            <Accordion.Control className="mobile-accordion-control">
              <Group gap="sm">
                <IconCheck size={18} color="var(--mantine-color-brand-6)" />
                <Text fw={500} size="sm">
                  Boas Práticas · {bestPractices.length}
                </Text>
              </Group>
            </Accordion.Control>
            <Accordion.Panel className="mobile-nav-panel">
              <Stack gap={0}>
                {bestPractices.length > 0 ? (
                  bestPractices.map(b => (
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
