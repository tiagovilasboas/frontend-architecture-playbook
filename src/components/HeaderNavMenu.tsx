import React from 'react';
import { Menu, UnstyledButton, Text, Group } from '@mantine/core';
import { Link, useLocation } from 'react-router-dom';
import {
  IconChevronDown,
  IconChevronRight,
  IconRocket,
  IconBuilding,
  IconPlug,
  IconPuzzle,
  IconBolt,
} from '@tabler/icons-react';
import {
  guides,
  architectures,
  patterns,
  techniques,
  bestPractices,
} from '../lib/content.tsx';

const ARCH_GROUPS: {
  label: string;
  slice: [number, number];
  icon: React.ReactNode;
}[] = [
  { label: 'Fundamentais', slice: [0, 4], icon: <IconRocket size={14} /> },
  {
    label: 'Padrões de Design',
    slice: [4, 7],
    icon: <IconBuilding size={14} />,
  },
  { label: 'Integração e API', slice: [7, 9], icon: <IconPlug size={14} /> },
  { label: 'Modularização', slice: [9, 12], icon: <IconPuzzle size={14} /> },
  { label: 'Avançadas', slice: [12, 15], icon: <IconBolt size={14} /> },
];

export default function HeaderNavMenu() {
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

      {/* Architectures: dropdown com subdropdowns por grupo */}
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
        <Menu.Dropdown
          className="header-nav-dropdown"
          style={{ minWidth: 200 }}
        >
          {ARCH_GROUPS.map(({ label, slice: [start, end], icon }) => (
            <Menu
              key={label}
              trigger="hover"
              openDelay={100}
              closeDelay={150}
              position="right-start"
              withArrow={false}
            >
              <Menu.Target>
                <Menu.Item
                  closeMenuOnClick={false}
                  rightSection={<IconChevronRight size={14} />}
                  style={{ cursor: 'default' }}
                >
                  <Group gap="xs">
                    <span style={{ color: 'var(--mantine-color-brand-6)' }}>
                      {icon}
                    </span>
                    <Text size="sm">{label}</Text>
                  </Group>
                </Menu.Item>
              </Menu.Target>
              <Menu.Dropdown className="header-nav-dropdown">
                {architectures.slice(start, end).map(arch => (
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
