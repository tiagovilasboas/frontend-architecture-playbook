import React from 'react';
import {
  Group,
  Burger,
  UnstyledButton,
  Title,
  ActionIcon,
  Paper,
  Anchor,
  Menu,
  Text,
} from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import { Link, useLocation } from 'react-router-dom';
import {
  IconCode,
  IconSun,
  IconMoon,
  IconBrandGithub,
} from '@tabler/icons-react';
import { useMantineColorScheme } from '@mantine/core';
import { useBreakpoints } from '../hooks/useBreakpoints.ts';
import { NAV_JOURNEY, isSectionActive } from '../lib/navigation.ts';
import { CONTENT_GUTTER_MIN_PX } from '../theme/mobile-ux-tokens.ts';

interface Props {
  opened: boolean;
  onBurger: () => void;
}

export default function HeaderBar({ opened, onBurger }: Props) {
  const { isMobile, isDesktop } = useBreakpoints();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const location = useLocation();
  const title = 'Front Arch. Playbook';

  return (
    <Paper
      p={0}
      radius={0}
      withBorder={false}
      className="header-bar"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 2500,
      }}
    >
      <Group
        h={isMobile ? undefined : 56}
        justify="space-between"
        align="center"
        wrap="nowrap"
        style={{
          // Mobile: gutter legível + notch (antes só safe-area = 0 na maioria dos browsers)
          paddingLeft: isMobile
            ? `max(${CONTENT_GUTTER_MIN_PX}px, env(safe-area-inset-left, 0px))`
            : 'var(--mantine-spacing-xl)',
          paddingRight: isMobile
            ? `max(${CONTENT_GUTTER_MIN_PX}px, env(safe-area-inset-right, 0px))`
            : 'var(--mantine-spacing-xl)',
          paddingTop: isMobile
            ? 'env(safe-area-inset-top, 0px)'
            : undefined,
          minHeight: isMobile
            ? 'calc(56px + env(safe-area-inset-top, 0px))'
            : undefined,
        }}
      >
        <Group gap="lg" wrap="nowrap" style={{ minWidth: 0, flex: 1 }}>
          {!isDesktop && (
            <Burger
              opened={opened}
              onClick={onBurger}
              size="sm"
              color={colorScheme === 'dark' ? 'gray.3' : 'dark.8'}
              aria-label={opened ? 'Fechar menu' : 'Abrir menu'}
            />
          )}
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

          {isDesktop && (
            <Group gap="xs" wrap="nowrap" style={{ flexShrink: 0 }} ml="md">
              {NAV_JOURNEY.map(section => {
                const label = section.shortLabel ?? section.label;
                const active = isSectionActive(
                  location.pathname,
                  section.items
                );
                const isDirectLink = section.items.length === 1;
                const firstHref = section.items[0]?.href;

                if (isDirectLink && firstHref) {
                  return (
                    <UnstyledButton
                      key={section.key}
                      component={Link}
                      to={firstHref}
                      className="header-nav-item"
                      style={{
                        textDecoration: 'none',
                        fontWeight: active ? 600 : 500,
                        color: active
                          ? 'var(--mantine-color-green-6)'
                          : 'var(--mantine-color-text)',
                      }}
                    >
                      <Text size="sm">{label}</Text>
                    </UnstyledButton>
                  );
                }

                return (
                  <Menu
                    key={section.key}
                    trigger="hover"
                    openDelay={100}
                    closeDelay={150}
                    position="bottom-start"
                    offset={4}
                    withArrow
                    shadow="sm"
                    radius="md"
                    classNames={{ dropdown: 'header-nav-dropdown' }}
                  >
                    <Menu.Target>
                      <UnstyledButton
                        className="header-nav-item"
                        style={{
                          fontWeight: active ? 600 : 500,
                          color: active
                            ? 'var(--mantine-color-green-6)'
                            : 'var(--mantine-color-text)',
                        }}
                      >
                        <Group gap={4} wrap="nowrap">
                          <Text size="sm">{label}</Text>
                          <IconChevronDown size={14} />
                        </Group>
                      </UnstyledButton>
                    </Menu.Target>
                    <Menu.Dropdown>
                      {section.items.map(item => (
                        <Menu.Item
                          key={item.href}
                          component={Link}
                          to={item.href}
                          style={{
                            fontWeight:
                              location.pathname === item.href ? 600 : 500,
                            color:
                              location.pathname === item.href
                                ? 'var(--mantine-color-green-6)'
                                : undefined,
                          }}
                        >
                          {item.label}
                        </Menu.Item>
                      ))}
                    </Menu.Dropdown>
                  </Menu>
                );
              })}
            </Group>
          )}
        </Group>

        <Group
          gap={isMobile ? 'xs' : 'md'}
          wrap="nowrap"
          style={{ flexShrink: 0 }}
        >
          <ActionIcon
            onClick={() => toggleColorScheme()}
            variant="light"
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
              <ActionIcon variant="light" size="lg" aria-label="GitHub">
                <IconBrandGithub size={18} />
              </ActionIcon>
            </Anchor>
          )}
        </Group>
      </Group>
    </Paper>
  );
}
