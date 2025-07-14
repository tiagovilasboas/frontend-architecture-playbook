import { Group, Burger, Title, UnstyledButton, Paper } from '@mantine/core';
import { Link } from 'react-router-dom';
import { IconCode } from '@tabler/icons-react';
import type { DocMeta } from '../types/index.ts';

interface Props {
  opened: boolean;
  onBurger: () => void;
  onSearch: () => void;
  guides: DocMeta[];
  patterns: DocMeta[];
}

export default function HeaderBar({ opened, onBurger }: Props) {
  return (
    <Paper withBorder p={0} radius={0} className="header-bar" style={{ 
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <Group h={56} px="md" justify="space-between">
        <Group>
          <Burger opened={opened} onClick={onBurger} size="sm" />
          <UnstyledButton component={Link} to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Group gap="xs">
              <IconCode size={24} color="var(--mantine-color-brand-6)" />
              <Title size="h4">Front-End Architecture Playbook</Title>
            </Group>
          </UnstyledButton>
        </Group>
      </Group>
    </Paper>
  );
} 