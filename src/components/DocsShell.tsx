import React, { useState } from 'react';
import {
  Drawer,
  Box,
} from '@mantine/core';
import { Spotlight } from '@mantine/spotlight';
import HeaderBar from './HeaderBar.tsx';
import NavMenu from './NavMenu.tsx';
import Footer from './Footer.tsx';

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

      <Drawer opened={opened} onClose={() => setOpened(false)} padding="xs" hiddenFrom="sm" title="Menu">
        <NavMenu guides={guides} patterns={patterns} onNavigate={() => setOpened(false)} />
      </Drawer>

      <Box style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <HeaderBar
          opened={opened}
          onBurger={() => setOpened((o) => !o)}
          onSearch={() => Spotlight.open()}
          guides={guides}
          patterns={patterns}
        />

        {/* Main Content */}
        <Box style={{ flex: 1, display: 'flex' }}>
          {/* Sidebar */}
          <Box 
            className="sidebar-nav"
            style={{ 
              width: 260
            }} 
          >
            <NavMenu guides={guides} patterns={patterns} />
          </Box>

          {/* Content */}
          <Box style={{ flex: 1, padding: '1rem' }}>
            {children}
          </Box>
        </Box>

        {/* Footer */}
        <Footer />
      </Box>
    </>
  );
} 