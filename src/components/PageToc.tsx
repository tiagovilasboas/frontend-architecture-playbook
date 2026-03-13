import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Stack, NavLink, Text, Box } from '@mantine/core';
import { slugifyForId } from '../lib/page-toc';

const HEADING_SELECTOR = 'h2, h3';

interface PageTocItem {
  id: string;
  label: string;
  level: 'h2' | 'h3';
}

interface PageTocProps {
  /** Ref to the main content container. TOC discovers headings inside it. */
  contentRef: React.RefObject<HTMLDivElement | null>;
}

/**
 * Autonomous page TOC: scans the content DOM for h2/h3, ensures they have ids, builds links.
 */
export default function PageToc({ contentRef }: PageTocProps) {
  const [items, setItems] = useState<PageTocItem[]>([]);
  const { pathname } = useLocation();

  useEffect(() => {
    const scan = () => {
      const container = contentRef.current;
      if (!container) return;

      const headings =
        container.querySelectorAll<HTMLHeadingElement>(HEADING_SELECTOR);
      const next: PageTocItem[] = [];
      headings.forEach(el => {
        const label = el.textContent?.trim() || '';
        if (!label) return;
        if (!el.id) el.id = slugifyForId(label);
        next.push({
          id: el.id,
          label,
          level: el.tagName.toLowerCase() as 'h2' | 'h3',
        });
      });
      setItems(next);
    };

    const runAfterPaint = () => {
      window.requestAnimationFrame(() => scan());
    };

    runAfterPaint();
    const timer = window.setTimeout(runAfterPaint, 150);
    return () => window.clearTimeout(timer);
  }, [pathname, contentRef]);

  if (items.length === 0) return null;

  return (
    <Box component="nav" aria-label="Nesta página">
      <Text size="sm" fw={600} c="dimmed" mb="xs" tt="uppercase">
        Nesta página
      </Text>
      <Stack gap={2}>
        {items.map(item => (
          <NavLink
            key={item.id}
            component="a"
            href={`#${item.id}`}
            label={item.label}
            title={item.label}
            variant="light"
            style={{
              borderRadius: 6,
              paddingLeft: item.level === 'h3' ? 12 : undefined,
            }}
            styles={{
              label: {
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              },
            }}
          />
        ))}
      </Stack>
    </Box>
  );
}
