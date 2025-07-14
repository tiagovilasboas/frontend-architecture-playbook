import { Group, Burger, UnstyledButton, Title, ActionIcon, Paper } from '@mantine/core';
import { Link } from 'react-router-dom';
import { IconCode, IconSun, IconMoon } from '@tabler/icons-react';
import { useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import type { DocMeta } from '../types/index.ts';

interface Props {
  opened: boolean;
  onBurger: () => void;
  onSearch: () => void;
  guides: DocMeta[];
  patterns: DocMeta[];
}

export default function HeaderBar({ opened, onBurger }: Props) {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.getAttribute('data-mantine-color-scheme') === 'dark';
    }
    return true; // default to dark
  });

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-mantine-color-scheme', newTheme);
    setIsDark(!isDark);
  };

  return (
    <Paper withBorder p={0} radius={0} className="header-bar" style={{ 
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <Group h={56} px="md" justify="space-between">
        <Group>
          {isMobile && (
            <Burger opened={opened} onClick={onBurger} size="sm" />
          )}
          <UnstyledButton component={Link} to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Group gap="xs">
              <IconCode size={24} color="var(--mantine-color-brand-6)" />
              <Title size="h4">Front-End Architecture Playbook</Title>
            </Group>
          </UnstyledButton>
        </Group>
        
        <ActionIcon
          onClick={toggleTheme}
          variant="light"
          size="lg"
          aria-label="Toggle color scheme"
        >
          {isDark ? (
            <IconSun size={18} />
          ) : (
            <IconMoon size={18} />
          )}
        </ActionIcon>
      </Group>
    </Paper>
  );
} 