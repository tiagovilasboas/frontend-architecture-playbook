import React from 'react';
import { Menu, UnstyledButton, Text, Group } from '@mantine/core';
import { Link, useLocation } from 'react-router-dom';
import { IconChevronDown } from '@tabler/icons-react';
import type { DocMeta } from '../lib/content.tsx';

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
            style={{
              textDecoration: 'none',
              color: isActive('/guides')
                ? 'var(--mantine-color-brand-6)'
                : 'var(--mantine-color-text)',
              fontWeight: isActive('/guides') ? 600 : 400,
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
        <Menu.Dropdown>
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
            style={{
              textDecoration: 'none',
              color: isActive('/architectures')
                ? 'var(--mantine-color-brand-6)'
                : 'var(--mantine-color-text)',
              fontWeight: isActive('/architectures') ? 600 : 400,
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
        <Menu.Dropdown>
          {architectures.map(arch => (
            <Menu.Item
              key={arch.slug}
              component={Link}
              to={`/architectures/${arch.slug}`}
            >
              {arch.title}
            </Menu.Item>
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
            style={{
              textDecoration: 'none',
              color: isActive('/patterns')
                ? 'var(--mantine-color-brand-6)'
                : 'var(--mantine-color-text)',
              fontWeight: isActive('/patterns') ? 600 : 400,
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
        <Menu.Dropdown>
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
            style={{
              textDecoration: 'none',
              color: isActive('/techniques')
                ? 'var(--mantine-color-brand-6)'
                : 'var(--mantine-color-text)',
              fontWeight: isActive('/techniques') ? 600 : 400,
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
        <Menu.Dropdown>
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
            style={{
              textDecoration: 'none',
              color: isActive('/best-practices')
                ? 'var(--mantine-color-brand-6)'
                : 'var(--mantine-color-text)',
              fontWeight: isActive('/best-practices') ? 600 : 400,
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
        <Menu.Dropdown>
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
