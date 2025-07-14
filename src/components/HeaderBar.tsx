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
  const isSmallMobile = useMediaQuery('(max-width: 480px)');
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

  const getTitle = () => {
    if (isSmallMobile) {
      return 'Arch Playbook';
    }
    if (isMobile) {
      return 'Front-End Arch Playbook';
    }
    return 'Front-End Architecture Playbook';
  };

  return (
    <Paper withBorder p={0} radius={0} className="header-bar" style={{ 
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <Group h={56} px="md" justify="space-between" wrap="nowrap">
        <Group gap="xs" wrap="nowrap" style={{ minWidth: 0, flex: 1 }}>
          {isMobile && (
            <Burger opened={opened} onClick={onBurger} size="sm" />
          )}
          <UnstyledButton 
            component={Link} 
            to="/" 
            style={{ 
              textDecoration: 'none', 
              color: 'inherit',
              minWidth: 0,
              flex: 1
            }}
          >
            <Group gap="xs" wrap="nowrap" style={{ minWidth: 0 }}>
              <IconCode size={24} color="var(--mantine-color-brand-6)" />
              <Title 
                size="h4" 
                style={{ 
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  minWidth: 0
                }}
              >
                {getTitle()}
              </Title>
            </Group>
          </UnstyledButton>
        </Group>
        
        <ActionIcon
          onClick={toggleTheme}
          variant="light"
          size="lg"
          aria-label="Toggle color scheme"
          style={{ flexShrink: 0 }}
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