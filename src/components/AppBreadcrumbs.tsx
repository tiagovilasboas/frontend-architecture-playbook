import React from 'react';
import { Breadcrumbs, Anchor, Text } from '@mantine/core';
import { Link, useLocation } from 'react-router-dom';
import { IconHome, IconChevronRight } from '@tabler/icons-react';

const COLLECTION_LABELS: Record<string, string> = {
  guides: 'Guias',
  architectures: 'Arquiteturas',
  patterns: 'Padrões',
  techniques: 'Técnicas',
  'best-practices': 'Boas Práticas',
};

function formatSlug(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default function AppBreadcrumbs() {
  const location = useLocation();

  if (location.pathname === '/') return null;

  const pathSegments = location.pathname.split('/').filter(Boolean);

  const getLabel = (segment: string) =>
    COLLECTION_LABELS[segment] ?? formatSlug(segment);

  const buildPath = (index: number) =>
    '/' + pathSegments.slice(0, index + 1).join('/');

  const items = [
    { title: 'Início', href: '/' },
    ...pathSegments.map((segment, index) => ({
      title: getLabel(segment),
      href: buildPath(index),
    })),
  ];

  return (
    <nav
      className="app-breadcrumbs"
      aria-label="Navegação"
      style={{ marginBottom: 'var(--mantine-spacing-md)' }}
    >
      <Breadcrumbs
        separator={
          <IconChevronRight
            size={16}
            className="app-breadcrumbs-separator"
            aria-hidden
          />
        }
        className="app-breadcrumbs-list"
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          if (isLast) {
            return (
              <Text
                key={item.href}
                component="span"
                size="sm"
                fw={500}
                className="app-breadcrumbs-current"
              >
                {item.title}
              </Text>
            );
          }

          return (
            <Anchor
              key={item.href}
              component={Link}
              to={item.href}
              size="sm"
              className="app-breadcrumbs-link"
            >
              {index === 0 ? (
                <>
                  <IconHome size={16} style={{ verticalAlign: 'middle' }} />
                  <span style={{ marginLeft: 4 }}>{item.title}</span>
                </>
              ) : (
                item.title
              )}
            </Anchor>
          );
        })}
      </Breadcrumbs>
    </nav>
  );
}
