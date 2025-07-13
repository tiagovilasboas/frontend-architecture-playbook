import { Group, Burger, Title, ActionIcon, Menu, UnstyledButton } from '@mantine/core';
import { Link } from 'react-router-dom';
import { IconSearch, IconChevronDown } from '@tabler/icons-react';
import type { DocMeta } from './DocsShell.tsx';

interface Props {
  opened: boolean;
  onBurger: () => void;
  onSearch: () => void;
  guides: DocMeta[];
  patterns: DocMeta[];
}

export default function HeaderBar({ opened, onBurger, onSearch, guides, patterns }: Props) {
  return (
    <Group h={56} px="md" justify="space-between">
      <Group>
        <Burger opened={opened} onClick={onBurger} hiddenFrom="sm" size="sm" />
        <Title order={4}>Front-End Architecture Playbook</Title>
      </Group>
      <Group gap="md" visibleFrom="sm">
        <UnstyledButton component={Link} to="/" style={{ fontWeight: 500 }}>Home</UnstyledButton>
        <Menu width={200} shadow="md" position="bottom-start" withinPortal zIndex={2000}>
          <Menu.Target>
            <UnstyledButton style={{ fontWeight: 500 }}>Guides <IconChevronDown size={12} style={{ verticalAlign: 'middle' }} /></UnstyledButton>
          </Menu.Target>
          <Menu.Dropdown>
            {guides.map((g) => (
              <Menu.Item key={g.slug} component={Link} to={`/guides/${g.slug}`}>{g.title}</Menu.Item>
            ))}
          </Menu.Dropdown>
        </Menu>
        <Menu width={220} shadow="md" position="bottom-start" withinPortal zIndex={2000}>
          <Menu.Target>
            <UnstyledButton style={{ fontWeight: 500 }}>Patterns <IconChevronDown size={12} style={{ verticalAlign: 'middle' }} /></UnstyledButton>
          </Menu.Target>
          <Menu.Dropdown>
            {patterns.map((p) => (
              <Menu.Item key={p.slug} component={Link} to={`/patterns/${p.slug}`}>{p.title}</Menu.Item>
            ))}
          </Menu.Dropdown>
        </Menu>
      </Group>
      <ActionIcon variant="subtle" onClick={onSearch} size="lg">
        <IconSearch size={18} />
      </ActionIcon>
    </Group>
  );
} 