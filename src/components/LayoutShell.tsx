import React, { useState } from 'react';
import { AppShell, Navbar, Header, Burger, ScrollArea, NavLink, Group, Title, ColorSchemeProvider, ColorScheme, ActionIcon } from '@mantine/core';
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
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <AppShell
        navbar={{ width: 260, breakpoint: 'sm', collapsed: { mobile: !opened } }}
        header={{ height: 56 }}
        padding="md"
      >
        <Navbar p="xs">
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
        </Navbar>

        <Header height={56} px="md">
          <Group h="100%" justify="space-between">
            <Group>
              <Burger opened={opened} onClick={() => setOpened((o) => !o)} hiddenFrom="sm" size="sm" />
              <Title order={4}>Front-End Architecture</Title>
            </Group>
            <ActionIcon variant="subtle" onClick={toggleColorScheme} size="lg">
              {colorScheme === 'light' ? <IconSun size={18} /> : <IconMoon size={18} />}
            </ActionIcon>
          </Group>
        </Header>

        <AppShell.Main>{children}</AppShell.Main>
      </AppShell>
    </ColorSchemeProvider>
  );
} 