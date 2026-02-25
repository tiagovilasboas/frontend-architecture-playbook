import React from 'react';
import { Breadcrumbs, Anchor, Text, Group } from '@mantine/core';
import { Link, useLocation } from 'react-router-dom';
import { IconHome, IconChevronRight } from '@tabler/icons-react';
import { useBreakpoints } from '../hooks/useBreakpoints.ts';
import { getBreadcrumbItems } from '../lib/breadcrumbs';

export default function MobileBreadcrumbs() {
  const location = useLocation();
  const { isMobile } = useBreakpoints();

  if (!isMobile || location.pathname === '/') return null;

  const items = getBreadcrumbItems(location.pathname);

  return (
    <Group
      px="md"
      py="xs"
      style={{
        borderBottom: '1px solid var(--mantine-color-dark-3)',
        backgroundColor: 'var(--mantine-color-body)',
      }}
    >
      <Breadcrumbs
        separator={<IconChevronRight size={18} />}
        styles={{
          separator: {
            margin: '0 6px',
            color: 'var(--mantine-color-dimmed)',
          },
        }}
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1 || item.href == null;

          if (isLast) {
            return (
              <Text key={item.href ?? item.label} size="md" fw={500} c="brand">
                {item.label}
              </Text>
            );
          }

          return (
            <Anchor
              key={item.href ?? index}
              component={Link}
              to={item.href ?? '#'}
              size="md"
              c="dimmed"
              style={{
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              {index === 0 && <IconHome size={18} />}
              {item.label}
            </Anchor>
          );
        })}
      </Breadcrumbs>
    </Group>
  );
}
