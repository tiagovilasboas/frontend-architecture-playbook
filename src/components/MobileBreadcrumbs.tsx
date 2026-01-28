import React from 'react';
import { Breadcrumbs, Anchor, Text, Group } from '@mantine/core';
import { Link, useLocation } from 'react-router-dom';
import { useMediaQuery } from '@mantine/hooks';
import { IconHome, IconChevronRight } from '@tabler/icons-react';

export default function MobileBreadcrumbs() {
  const location = useLocation();
  const isMobile = useMediaQuery('(max-width: 768px)');

  if (!isMobile || location.pathname === '/') return null;

  const pathSegments = location.pathname.split('/').filter(Boolean);

  const getLabel = (segment: string) => {
    // Capitaliza e formata labels
    if (segment === 'guides') return 'Guides';
    if (segment === 'architectures') return 'Architectures';
    if (segment === 'patterns') return 'Patterns';
    if (segment === 'techniques') return 'Techniques';
    if (segment === 'best-practices') return 'Best Practices';

    // Para slugs, capitaliza e substitui hífens
    return segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const buildPath = (index: number) => {
    return '/' + pathSegments.slice(0, index + 1).join('/');
  };

  const items = [
    {
      title: 'Home',
      href: '/',
    },
    ...pathSegments.map((segment, index) => ({
      title: getLabel(segment),
      href: buildPath(index),
    })),
  ];

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
          const isLast = index === items.length - 1;

          if (isLast) {
            return (
              <Text key={item.href} size="md" fw={500} c="brand">
                {item.title}
              </Text>
            );
          }

          return (
            <Anchor
              key={item.href}
              component={Link}
              to={item.href}
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
              {item.title}
            </Anchor>
          );
        })}
      </Breadcrumbs>
    </Group>
  );
}
