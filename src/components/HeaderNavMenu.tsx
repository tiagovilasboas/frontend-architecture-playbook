import React from 'react';
import { Menu, UnstyledButton, Text, Group } from '@mantine/core';
import { Link, useLocation } from 'react-router-dom';
import { IconChevronDown } from '@tabler/icons-react';
import { NAV_JOURNEY, isSectionActive } from '../lib/navigation';

export default function HeaderNavMenu() {
  const location = useLocation();

  return (
    <Group gap="xs" wrap="nowrap">
      {NAV_JOURNEY.map(section => (
        <Menu
          key={section.key}
          trigger="hover"
          openDelay={100}
          closeDelay={200}
          position="bottom-start"
          withArrow
        >
          <Menu.Target>
            <UnstyledButton
              className="header-nav-btn"
              data-active={isSectionActive(location.pathname, section.items) || undefined}
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
              <Text size="sm">{section.shortLabel ?? section.label}</Text>
              <IconChevronDown size={14} />
            </UnstyledButton>
          </Menu.Target>
          <Menu.Dropdown className="header-nav-dropdown">
            {section.items.map(item => (
              <Menu.Item
                key={item.href}
                component={Link}
                to={item.href}
              >
                {item.label}
              </Menu.Item>
            ))}
          </Menu.Dropdown>
        </Menu>
      ))}
    </Group>
  );
}
