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
    { icon: <IconHome size={22} />, label: 'Início', path: '/' },
    { icon: <IconBook size={22} />, label: 'Guias', path: '/guides' },
    { icon: <IconStack size={22} />, label: 'Arq.', path: '/architectures' },
    { icon: <IconPuzzle size={22} />, label: 'Padrões', path: '/patterns' },
    { icon: <IconSearch size={22} />, label: 'Busca', path: '#search' },
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
      p="xs"
      radius={0}
      className="mobile-bottom-nav"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        borderTop: '1px solid var(--mantine-color-dark-3)',
        backgroundColor: 'var(--mantine-color-body)',
        paddingBottom: 'max(8px, env(safe-area-inset-bottom))',
      }}
    >
      <Group justify="space-around" gap={0}>
        {navItems.map(item => {
          const active = isActive(item.path);
          return (
            <UnstyledButton
              key={item.path}
              onClick={() => handleClick(item.path)}
              className="mobile-bottom-nav-btn"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 4,
                padding: '6px 8px',
                borderRadius: 8,
                minWidth: 0,
                flex: 1,
                maxWidth: 72,
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
              <Text size="xs" fw={active ? 600 : 400} style={{ lineHeight: 1.1 }}>
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
