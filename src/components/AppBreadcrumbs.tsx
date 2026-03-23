import React from 'react';
import { Breadcrumbs, Anchor, Text } from '@mantine/core';
import { Link, useLocation } from 'react-router-dom';
import { IconHome, IconChevronRight } from '@tabler/icons-react';
import { getBreadcrumbItems } from '../lib/breadcrumbs';
import { useBreakpoints } from '../hooks/useBreakpoints.ts';

export default function AppBreadcrumbs() {
  const location = useLocation();
  const { isMobile } = useBreakpoints();

  if (location.pathname === '/') return null;

  const items = getBreadcrumbItems(location.pathname);

  return (
    <nav
      className="app-breadcrumbs"
      aria-label="Navegação"
      style={{
        marginTop: isMobile
          ? 'var(--mantine-spacing-xs)'
          : 'var(--mantine-spacing-md)',
        marginBottom: isMobile
          ? 'var(--mantine-spacing-xs)'
          : 'var(--mantine-spacing-md)',
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
