import { ScrollArea, Title, NavLink, Stack } from '@mantine/core';
import type { DocMeta } from './DocsShell.tsx';

interface Props {
  guides: DocMeta[];
  patterns: DocMeta[];
  onNavigate?: () => void;
}

export default function NavMenu({ guides, patterns, onNavigate }: Props) {
  const current = window.location.pathname;
  const linkProps = (href: string) => ({href, onClick: onNavigate});
  return (
    <ScrollArea h="100%" p="sm">
      <Stack gap="xs">
        <Title order={6}>Guides</Title>
        {guides.map((g) => (
          <NavLink key={g.slug} label={g.title} active={current===`/guides/${g.slug}`} {...linkProps(`/guides/${g.slug}`)} />
        ))}
        <Title order={6} mt="md">Patterns</Title>
        {patterns.map((p) => (
          <NavLink key={p.slug} label={p.title} active={current===`/patterns/${p.slug}`} {...linkProps(`/patterns/${p.slug}`)} />
        ))}
      </Stack>
    </ScrollArea>
  );
} 