import React, { useState } from 'react';
import {
  Drawer,
  Box,
} from '@mantine/core';
import { Spotlight } from '@mantine/spotlight';
import { useMediaQuery } from '@mantine/hooks';
import HeaderBar from './HeaderBar.tsx';
import NavMenu from './NavMenu.tsx';
import Footer from './Footer.tsx';
import { useNavigationActions } from '../hooks/useNavigationActions.ts';
import type { DocMeta } from '../types/index.ts';

interface Props {
  guides: DocMeta[];
  architectures: DocMeta[];
  patterns: DocMeta[];
  techniques: DocMeta[];
  bestPractices: DocMeta[];
  children: React.ReactNode;
}

export default function DocsShell({ guides, architectures, patterns, techniques, bestPractices, children }: Props) {
  const [opened, setOpened] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const actions = useNavigationActions(guides, architectures, patterns, techniques, bestPractices);

  return (
    <>
      <Spotlight shortcut="mod + k" actions={actions} />

      <Drawer opened={opened} onClose={() => setOpened(false)} padding="xs" hiddenFrom="sm" title="Menu" zIndex={3000}>
        <NavMenu guides={guides} architectures={architectures} patterns={patterns} techniques={techniques} bestPractices={bestPractices} onNavigate={() => setOpened(false)} />
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
          {/* Sidebar - apenas no desktop */}
          {!isMobile && (
            <Box 
              className="sidebar-nav"
              style={{ 
                width: 260,
                padding: 12,
                paddingRight: 20,
                overflow: 'visible'
              }} 
            >
              <NavMenu guides={guides} architectures={architectures} patterns={patterns} techniques={techniques} bestPractices={bestPractices} />
            </Box>
          )}

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