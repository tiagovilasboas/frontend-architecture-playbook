import { ScrollArea, Title, NavLink, Stack, Divider, Group } from '@mantine/core';
import { IconBook, IconPuzzle, IconChevronRight } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import type { DocMeta } from './DocsShell.tsx';

interface Props {
  guides: DocMeta[];
  patterns: DocMeta[];
  onNavigate?: () => void;
}

export default function NavMenu({ guides, patterns, onNavigate }: Props) {
  const current = window.location.pathname;
  
  const NavItem = ({ href, label, icon, active }: { href: string; label: string; icon: React.ReactNode; active: boolean }) => (
    <NavLink
      component={Link}
      to={href}
      label={label}
      active={active}
      onClick={onNavigate}
      leftSection={icon}
      rightSection={active ? <IconChevronRight size={12} /> : null}
      variant={active ? "filled" : "subtle"}
      style={{
        borderRadius: '8px',
        marginBottom: '4px'
      }}
    />
  );

  return (
    <ScrollArea h="100%" p="md">
      <Stack gap="md">


        {/* Guides Section */}
        <div>
          <Group gap="xs" mb="sm">
            <IconBook size={16} color="var(--mantine-color-blue-6)" />
            <Title order={6} c="dimmed">Guides</Title>
          </Group>
          <Stack gap={4}>
            {guides.map((g) => (
              <NavItem
                key={g.slug}
                href={`/guides/${g.slug}`}
                label={g.title}
                icon={<IconBook size={16} />}
                active={current === `/guides/${g.slug}`}
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
          <Stack gap={4}>
            {patterns.map((p) => (
              <NavItem
                key={p.slug}
                href={`/patterns/${p.slug}`}
                label={p.title}
                icon={<IconPuzzle size={16} />}
                active={current === `/patterns/${p.slug}`}
              />
            ))}
          </Stack>
        </div>


      </Stack>
    </ScrollArea>
  );
} 