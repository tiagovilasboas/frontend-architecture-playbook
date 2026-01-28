import React from 'react';
import { Paper, Group, UnstyledButton, Text, Badge } from '@mantine/core';
import { Spotlight } from '@mantine/spotlight';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMediaQuery } from '@mantine/hooks';
import {
  IconHome,
  IconBook,
  IconStack,
  IconPuzzle,
  IconSearch,
} from '@tabler/icons-react';

interface NavItem {
  icon: React.ReactNode;
  label: string;
  path: string;
  badge?: number;
}

export default function MobileBottomNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width: 768px)');

  if (!isMobile) return null;

  const navItems: NavItem[] = [
    {
      icon: <IconHome size={26} />,
      label: 'Home',
      path: '/',
    },
    {
      icon: <IconBook size={26} />,
      label: 'Guides',
      path: '/guides',
    },
    {
      icon: <IconStack size={26} />,
      label: 'Arch',
      path: '/architectures',
    },
    {
      icon: <IconPuzzle size={26} />,
      label: 'Patterns',
      path: '/patterns',
    },
    {
      icon: <IconSearch size={26} />,
      label: 'Search',
      path: '#search',
    },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const handleClick = (path: string) => {
    if (path === '#search') {
      // Abre o Spotlight
      Spotlight.open();
      return;
    }
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Paper
      withBorder
      p="sm"
      radius={0}
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        borderTop: '1px solid var(--mantine-color-dark-3)',
        backgroundColor: 'var(--mantine-color-body)',
      }}
    >
      <Group justify="space-around" gap={0}>
        {navItems.map(item => {
          const active = isActive(item.path);
          return (
            <UnstyledButton
              key={item.path}
              onClick={() => handleClick(item.path)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 6,
                padding: '10px 16px',
                borderRadius: 8,
                minWidth: 70,
                position: 'relative',
                transition: 'all 0.2s ease',
                color: active
                  ? 'var(--mantine-color-brand-6)'
                  : 'var(--mantine-color-dimmed)',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {item.icon}
                {item.badge && (
                  <Badge
                    size="xs"
                    variant="filled"
                    color="red"
                    style={{
                      position: 'absolute',
                      top: -6,
                      right: -8,
                      minWidth: 16,
                      height: 16,
                      padding: 0,
                      fontSize: 10,
                    }}
                  >
                    {item.badge}
                  </Badge>
                )}
              </div>
              <Text size="sm" fw={active ? 600 : 400}>
                {item.label}
              </Text>
              {active && (
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 32,
                    height: 3,
                    backgroundColor: 'var(--mantine-color-brand-6)',
                    borderRadius: '0 0 4px 4px',
                  }}
                />
              )}
            </UnstyledButton>
          );
        })}
      </Group>
    </Paper>
  );
}
