import { Group, Burger, Title, ActionIcon, Anchor, Menu } from '@mantine/core';
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
        <Title order={4}>Front-End Architecture</Title>
      </Group>
      <Group gap="md" visibleFrom="sm">
        <Anchor component={Link} to="/" fw={500} size="sm">Home</Anchor>
        <Menu trigger="hover" openDelay={50} closeDelay={100} withinPortal>
          <Menu.Target>
            <Anchor fw={500} size="sm">Guides <IconChevronDown size={12} style={{ verticalAlign: 'middle' }} /></Anchor>
          </Menu.Target>
          <Menu.Dropdown>
            {guides.map((g) => (
              <Menu.Item key={g.slug} component={Link} to={`/guides/${g.slug}`}>{g.title}</Menu.Item>
            ))}
          </Menu.Dropdown>
        </Menu>
        <Menu trigger="hover" openDelay={50} closeDelay={100} withinPortal>
          <Menu.Target>
            <Anchor fw={500} size="sm">Patterns <IconChevronDown size={12} style={{ verticalAlign: 'middle' }} /></Anchor>
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