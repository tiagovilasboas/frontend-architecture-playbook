import { Group, Burger, Title, ActionIcon, Menu, UnstyledButton } from '@mantine/core';
import { Link } from 'react-router-dom';
import { IconSearch, IconChevronDown, IconCode, IconHome, IconBook, IconPuzzle } from '@tabler/icons-react';
import type { DocMeta } from '../types/index.ts';

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
        <Burger opened={opened} onClick={onBurger} hiddenFrom="md" size="sm" />
        <UnstyledButton component={Link} to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Group gap="xs">
            <IconCode size={24} color="var(--mantine-color-brand-6)" />
            <Title order={4}>Front-End Architecture Playbook</Title>
          </Group>
        </UnstyledButton>
      </Group>
      <Group gap="md" hiddenFrom="md">
        <UnstyledButton component={Link} to="/" style={{ fontWeight: 500 }}>
          <IconHome size={16} style={{ verticalAlign: 'middle', marginRight: '4px' }} />
          Home
        </UnstyledButton>
        <Menu width={200} shadow="md" position="bottom-start" withinPortal zIndex={2000}>
          <Menu.Target>
            <UnstyledButton style={{ fontWeight: 500 }}>
              <IconBook size={16} style={{ verticalAlign: 'middle', marginRight: '4px' }} />
              Guides <IconChevronDown size={12} style={{ verticalAlign: 'middle' }} />
            </UnstyledButton>
          </Menu.Target>
          <Menu.Dropdown>
            {guides.map((g) => (
              <Menu.Item key={g.slug} component={Link} to={`/guides/${g.slug}`}>{g.title}</Menu.Item>
            ))}
          </Menu.Dropdown>
        </Menu>
        <Menu width={220} shadow="md" position="bottom-start" withinPortal zIndex={2000}>
          <Menu.Target>
            <UnstyledButton style={{ fontWeight: 500 }}>
              <IconPuzzle size={16} style={{ verticalAlign: 'middle', marginRight: '4px' }} />
              Patterns <IconChevronDown size={12} style={{ verticalAlign: 'middle' }} />
            </UnstyledButton>
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