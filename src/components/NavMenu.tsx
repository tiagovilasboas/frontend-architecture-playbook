import { ScrollArea, Title, Stack, Divider, Group } from '@mantine/core';
import { IconBook, IconPuzzle } from '@tabler/icons-react';
import { useLocation } from 'react-router-dom';
import type { DocMeta } from '../types/index.ts';
import NavItem from './NavItem.tsx';

interface Props {
  guides: DocMeta[];
  patterns: DocMeta[];
  onNavigate?: () => void;
}

export default function NavMenu({ guides, patterns, onNavigate }: Props) {
  const location = useLocation();
  const current = location.pathname;

  return (
    <ScrollArea h="100%" style={{ overflow: 'visible' }}>
      <Stack gap="md">
        {/* Guides Section */}
        <div>
          <Group gap="xs" mb="sm">
            <IconBook size={16} color="var(--mantine-color-blue-6)" />
            <Title order={6} c="dimmed">Guides</Title>
          </Group>
          <Stack gap={8}>
            {guides.map((g) => (
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

        {/* Patterns Section */}
        <div>
          <Group gap="xs" mb="sm">
            <IconPuzzle size={16} color="var(--mantine-color-purple-6)" />
            <Title order={6} c="dimmed">Patterns</Title>
          </Group>
          <Stack gap={8}>
            {patterns.map((p) => (
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
      </Stack>
    </ScrollArea>
  );
} 