import React from 'react';
import {
  Group,
  Burger,
  UnstyledButton,
  Title,
  ActionIcon,
  Paper,
  Anchor,
} from '@mantine/core';
import { Link } from 'react-router-dom';
import {
  IconCode,
  IconSun,
  IconMoon,
  IconBrandGithub,
} from '@tabler/icons-react';
import { useMantineColorScheme } from '@mantine/core';
import { useBreakpoints } from '../hooks/useBreakpoints.ts';
import HeaderNavMenu from './HeaderNavMenu.tsx';

interface Props {
  opened: boolean;
  onBurger: () => void;
}

export default function HeaderBar({ opened, onBurger }: Props) {
  const { isMobile, isDesktop } = useBreakpoints();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const title = 'Front Arch. Playbook';

  return (
    <Paper
      p={0}
      radius={0}
      className="header-bar"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}
    >
      <Group
        h={isMobile ? 64 : 56}
        px={isMobile ? 'lg' : 'xl'}
        justify="space-between"
        wrap="nowrap"
      >
        <Group gap="lg" wrap="nowrap" style={{ minWidth: 0, flex: 1 }}>
          {isMobile && <Burger opened={opened} onClick={onBurger} size="sm" />}
          <UnstyledButton
            component={Link}
            to="/"
            style={{
              textDecoration: 'none',
              color: 'inherit',
              minWidth: 0,
              flexShrink: 0,
              outline: 'none',
            }}
            className="header-logo-link"
          >
            <Group gap="xs" wrap="nowrap" style={{ minWidth: 0 }}>
              <IconCode
                size={isMobile ? 28 : 24}
                color="var(--mantine-color-brand-6)"
              />
              <Title
                size="h4"
                style={{
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  minWidth: 0,
                }}
              >
                {title}
              </Title>
            </Group>
          </UnstyledButton>

          {/* Menu horizontal - apenas no desktop */}
          {!isMobile && <HeaderNavMenu />}
        </Group>

        <Group gap="md" wrap="nowrap" style={{ flexShrink: 0 }}>
          <ActionIcon
            onClick={() => toggleColorScheme()}
            variant="light"
            color="brand"
            size={isMobile ? 'xl' : 'lg'}
            aria-label="Toggle color scheme"
          >
            {colorScheme === 'dark' ? (
              <IconSun size={isMobile ? 24 : 18} />
            ) : (
              <IconMoon size={isMobile ? 24 : 18} />
            )}
          </ActionIcon>

          {isDesktop && (
            <Anchor
              href="https://github.com/tiagovilasboas/frontend-architecture-playbook"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <ActionIcon
                variant="light"
                color="brand"
                size="lg"
                aria-label="GitHub"
              >
                <IconBrandGithub size={18} />
              </ActionIcon>
            </Anchor>
          )}
        </Group>
      </Group>
    </Paper>
  );
}
