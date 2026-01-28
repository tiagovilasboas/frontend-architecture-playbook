import { useState, useEffect } from 'react';
import { Paper, Stack, Text, Anchor, Group, ScrollArea } from '@mantine/core';
import { IconList } from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';

interface Heading {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState('');
  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    // Extract headings from the page
    const headingElements = Array.from(document.querySelectorAll('h2, h3, h4'));

    if (headingElements.length === 0) {
      setHeadings([]);
      return;
    }

    const extractedHeadings: Heading[] = headingElements.map(el => {
      const text = el.textContent || '';
      const id =
        el.id ||
        text
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-|-$/g, '');

      // Set ID if not present
      if (!el.id) {
        el.id = id;
      }

      return {
        id,
        text,
        level: parseInt(el.tagName[1]),
      };
    });

    setHeadings(extractedHeadings);

    // Intersection Observer to highlight active heading
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0,
      }
    );

    headingElements.forEach(el => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  if (headings.length === 0 || isMobile) return null;

  return (
    <Paper
      withBorder
      p="md"
      radius="md"
      style={{
        position: 'sticky',
        top: 80,
        maxHeight: 'calc(100vh - 100px)',
      }}
    >
      <Group gap="xs" mb="sm">
        <IconList size={16} />
        <Text fw={600} size="sm">
          Índice
        </Text>
      </Group>

      <ScrollArea style={{ maxHeight: 'calc(100vh - 180px)' }}>
        <Stack gap={4}>
          {headings.map(heading => {
            const isActive = activeId === heading.id;
            return (
              <Anchor
                key={heading.id}
                href={`#${heading.id}`}
                size="sm"
                style={{
                  paddingLeft: `${(heading.level - 2) * 12}px`,
                  color: isActive
                    ? 'var(--mantine-color-brand-6)'
                    : 'var(--mantine-color-dimmed)',
                  fontWeight: isActive ? 600 : 400,
                  textDecoration: 'none',
                  display: 'block',
                  transition: 'all 0.2s ease',
                }}
                onClick={e => {
                  e.preventDefault();
                  const element = document.getElementById(heading.id);
                  if (element) {
                    element.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    });
                    // Update URL without scrolling
                    window.history.pushState(null, '', `#${heading.id}`);
                  }
                }}
              >
                {heading.text}
              </Anchor>
            );
          })}
        </Stack>
      </ScrollArea>
    </Paper>
  );
}
