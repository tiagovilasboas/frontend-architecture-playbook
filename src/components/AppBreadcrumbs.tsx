import React from 'react';
import { Breadcrumbs, Anchor, Text } from '@mantine/core';
import { Link, useLocation } from 'react-router-dom';
import { IconHome, IconChevronRight } from '@tabler/icons-react';
import { getBreadcrumbItems } from '../lib/breadcrumbs';

export default function AppBreadcrumbs() {
  const location = useLocation();

  if (location.pathname === '/') return null;

  const items = getBreadcrumbItems(location.pathname);

  return (
    <nav
      className="app-breadcrumbs"
      aria-label="Navegação"
      style={{
        marginTop: 'var(--mantine-spacing-md)',
        marginBottom: 'var(--mantine-spacing-md)',
      }}
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
          const isLast = index === items.length - 1 || item.href == null;

          if (isLast) {
            return (
              <Text
                key={item.href ?? item.label}
                component="span"
                size="sm"
                fw={500}
                className="app-breadcrumbs-current"
              >
                {item.label}
              </Text>
            );
          }

          return (
            <Anchor
              key={item.href ?? index}
              component={Link}
              to={item.href ?? '#'}
              size="sm"
              className="app-breadcrumbs-link"
            >
              {index === 0 ? (
                <>
                  <IconHome size={16} style={{ verticalAlign: 'middle' }} />
                  <span style={{ marginLeft: 4 }}>{item.label}</span>
                </>
              ) : (
                item.label
              )}
            </Anchor>
          );
        })}
      </Breadcrumbs>
    </nav>
  );
}
