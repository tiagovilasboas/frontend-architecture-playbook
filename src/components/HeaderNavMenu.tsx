import React from 'react';
import { Menu, UnstyledButton, Text, Group } from '@mantine/core';
import { Link, useLocation } from 'react-router-dom';
import { IconChevronDown } from '@tabler/icons-react';
import type { DocMeta } from '../lib/content.tsx';

const ARCH_GROUPS: { label: string; slice: [number, number] }[] = [
  { label: 'Fundamentals', slice: [0, 4] },
  { label: 'Padrões de Design', slice: [4, 7] },
  { label: 'Integration & API', slice: [7, 9] },
  { label: 'Modularization', slice: [9, 12] },
  { label: 'Advanced', slice: [12, 15] },
];

interface HeaderNavMenuProps {
  guides: DocMeta[];
  architectures: DocMeta[];
  patterns: DocMeta[];
  techniques: DocMeta[];
  bestPractices: DocMeta[];
}

export default function HeaderNavMenu({
  guides,
  architectures,
  patterns,
  techniques,
  bestPractices,
}: HeaderNavMenuProps) {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <Group gap="xs" wrap="nowrap">
      {/* Guides Dropdown */}
      <Menu
        trigger="hover"
        openDelay={100}
        closeDelay={200}
        position="bottom-start"
        withArrow
      >
        <Menu.Target>
          <UnstyledButton
            className="header-nav-btn"
            data-active={isActive('/guides') || undefined}
            style={{
              textDecoration: 'none',
              padding: '8px 12px',
              borderRadius: 6,
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              gap: 4,
            }}
          >
            <Text size="sm">Guias</Text>
            <IconChevronDown size={14} />
          </UnstyledButton>
        </Menu.Target>
        <Menu.Dropdown className="header-nav-dropdown">
          {guides.map(guide => (
            <Menu.Item
              key={guide.slug}
              component={Link}
              to={`/guides/${guide.slug}`}
            >
              {guide.title}
            </Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu>

      {/* Architectures Dropdown */}
      <Menu
        trigger="hover"
        openDelay={100}
        closeDelay={200}
        position="bottom-start"
        withArrow
      >
        <Menu.Target>
          <UnstyledButton
            className="header-nav-btn"
            data-active={isActive('/architectures') || undefined}
            style={{
              textDecoration: 'none',
              padding: '8px 12px',
              borderRadius: 6,
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              gap: 4,
            }}
          >
            <Text size="sm">Arquiteturas</Text>
            <IconChevronDown size={14} />
          </UnstyledButton>
        </Menu.Target>
        <Menu.Dropdown className="header-nav-dropdown">
          {ARCH_GROUPS.map(({ label, slice: [start, end] }) => (
            <React.Fragment key={label}>
              <Menu.Label>{label}</Menu.Label>
              {architectures.slice(start, end).map(arch => (
                <Menu.Item
                  key={arch.slug}
                  component={Link}
                  to={`/architectures/${arch.slug}`}
                >
                  {arch.title}
                </Menu.Item>
              ))}
            </React.Fragment>
          ))}
        </Menu.Dropdown>
      </Menu>

      {/* Patterns Dropdown */}
      <Menu
        trigger="hover"
        openDelay={100}
        closeDelay={200}
        position="bottom-start"
        withArrow
      >
        <Menu.Target>
          <UnstyledButton
            className="header-nav-btn"
            data-active={isActive('/patterns') || undefined}
            style={{
              textDecoration: 'none',
              padding: '8px 12px',
              borderRadius: 6,
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              gap: 4,
            }}
          >
            <Text size="sm">Padrões</Text>
            <IconChevronDown size={14} />
          </UnstyledButton>
        </Menu.Target>
        <Menu.Dropdown className="header-nav-dropdown">
          {patterns.map(pattern => (
            <Menu.Item
              key={pattern.slug}
              component={Link}
              to={`/patterns/${pattern.slug}`}
            >
              {pattern.title}
            </Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu>

      {/* Techniques - Menu Dropdown */}
      <Menu
        trigger="hover"
        openDelay={100}
        closeDelay={200}
        position="bottom-start"
        withArrow
      >
        <Menu.Target>
          <UnstyledButton
            className="header-nav-btn"
            data-active={isActive('/techniques') || undefined}
            style={{
              textDecoration: 'none',
              padding: '8px 12px',
              borderRadius: 6,
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              gap: 4,
            }}
          >
            <Text size="sm">Técnicas</Text>
            <IconChevronDown size={14} />
          </UnstyledButton>
        </Menu.Target>
        <Menu.Dropdown className="header-nav-dropdown">
          {techniques.map(technique => (
            <Menu.Item
              key={technique.slug}
              component={Link}
              to={`/techniques/${technique.slug}`}
            >
              {technique.title}
            </Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu>

      {/* Best Practices - Menu Dropdown */}
      <Menu
        trigger="hover"
        openDelay={100}
        closeDelay={200}
        position="bottom-start"
        withArrow
      >
        <Menu.Target>
          <UnstyledButton
            className="header-nav-btn"
            data-active={isActive('/best-practices') || undefined}
            style={{
              textDecoration: 'none',
              padding: '8px 12px',
              borderRadius: 6,
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              gap: 4,
            }}
          >
            <Text size="sm">Boas Práticas</Text>
            <IconChevronDown size={14} />
          </UnstyledButton>
        </Menu.Target>
        <Menu.Dropdown className="header-nav-dropdown">
          {bestPractices.map(practice => (
            <Menu.Item
              key={practice.slug}
              component={Link}
              to={`/best-practices/${practice.slug}`}
            >
              {practice.title}
            </Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu>
    </Group>
  );
}
