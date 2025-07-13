import React, { useState } from 'react';
import {
  AppShell,
  Drawer,
} from '@mantine/core';
import { Spotlight } from '@mantine/spotlight';
import HeaderBar from './HeaderBar.tsx';
import NavMenu from './NavMenu.tsx';

export interface DocMeta {
  slug: string;
  title: string;
  description?: string;
  collection: 'guides' | 'patterns';
}

interface Props {
  guides: DocMeta[];
  patterns: DocMeta[];
  children: React.ReactNode;
}

export default function DocsShell({ guides, patterns, children }: Props) {
  const [opened, setOpened] = useState(false);

  const actions = [
    ...guides.map((g) => ({
      id: g.slug,
      label: g.title,
      description: 'Guide',
      onTrigger: () => (window.location.pathname = `/guides/${g.slug}`),
    })),
    ...patterns.map((p) => ({
      id: p.slug,
      label: p.title,
      description: 'Pattern',
      onTrigger: () => (window.location.pathname = `/patterns/${p.slug}`),
    })),
  ];

  return (
    <>
      <Spotlight shortcut="mod + k" actions={actions} />

      <Drawer opened={opened} onClose={() => setOpened(false)} padding="xs" size={260} hiddenFrom="sm" title="Menu">
        <NavMenu guides={guides} patterns={patterns} onNavigate={() => setOpened(false)} />
      </Drawer>

      <AppShell navbar={{ width: 260, breakpoint: 'sm', collapsed: { mobile: true } }} header={{ height: 56 }} padding={0}>
        <AppShell.Navbar visibleFrom="sm" p="xs">
          <NavMenu guides={guides} patterns={patterns} />
        </AppShell.Navbar>

        <AppShell.Header>
          <HeaderBar opened={opened} onBurger={() => setOpened((o) => !o)} onSearch={() => Spotlight.open()} />
        </AppShell.Header>

        <AppShell.Main>{children}</AppShell.Main>
      </AppShell>
    </>
  );
} 