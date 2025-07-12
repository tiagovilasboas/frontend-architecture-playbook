import React, { useState } from 'react';
import { AppShell, Burger, ScrollArea, NavLink, Group, Title, MantineProvider, ColorScheme, ActionIcon } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';
import type { CollectionEntry } from 'astro:content';

interface Props {
  patterns: CollectionEntry<'patterns'>[];
  guides: CollectionEntry<'guides'>[];
  children: React.ReactNode;
}

export default function LayoutShell({ patterns = [], guides = [], children }: Props) {
  const [opened, setOpened] = useState(false);
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');

  const toggleColorScheme = () => setColorScheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
      <AppShell
        navbar={{ width: 260, breakpoint: 'sm', collapsed: { mobile: !opened } }}
        header={{ height: 56 }}
        padding="md"
      >
        <AppShell.Navbar p="xs">
          <ScrollArea h="100%">
            <Title order={6} mb="xs">Guides</Title>
            {guides.map((g) => (
              <NavLink key={g.slug} label={g.data.title} component="a" href={`/guides/${g.slug}`} />
            ))}
            <Title order={6} mt="md" mb="xs">Patterns</Title>
            {patterns.map((p) => (
              <NavLink key={p.slug} label={p.data.title} component="a" href={`/patterns/${p.slug}`} />
            ))}
          </ScrollArea>
        </AppShell.Navbar>

        <AppShell.Header px="md" h={56}>
          <Group h="100%" justify="space-between">
            <Group>
              <Burger opened={opened} onClick={() => setOpened((o) => !o)} hiddenFrom="sm" size="sm" />
              <Title order={4}>Front-End Architecture</Title>
            </Group>
            <ActionIcon variant="subtle" onClick={toggleColorScheme} size="lg">
              {colorScheme === 'light' ? <IconSun size={18} /> : <IconMoon size={18} />}
            </ActionIcon>
          </Group>
        </AppShell.Header>

        <AppShell.Main>{children}</AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
} 