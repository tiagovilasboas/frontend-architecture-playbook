import React, { useState } from 'react';
import { Drawer, Box } from '@mantine/core';
import { Spotlight } from '@mantine/spotlight';
import { useMediaQuery } from '@mantine/hooks';
import HeaderBar from './HeaderBar.tsx';
import NavMenu from './NavMenu.tsx';
import Footer from './Footer.tsx';
import { useNavigationActions } from '../hooks/useNavigationActions.ts';
import type { DocMeta } from '../lib/content.tsx';

interface DocsShellProps {
  guides: DocMeta[];
  architectures: DocMeta[];
  patterns: DocMeta[];
  techniques: DocMeta[];
  bestPractices: DocMeta[];
  children: React.ReactNode;
}

export default function DocsShell({
  guides,
  architectures,
  patterns,
  techniques,
  bestPractices,
  children,
}: DocsShellProps) {
  const [opened, setOpened] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const actions = useNavigationActions(
    guides,
    architectures,
    patterns,
    techniques,
    bestPractices
  );

  const handleBurgerClick = () => setOpened(prev => !prev);

  // Função que fecha o menu mobile - passada para o NavMenu
  const handleDrawerClose = () => {
    setOpened(false);
  };

  const handleSearchClick = () => Spotlight.open();

  return (
    <>
      <Spotlight shortcut="mod + k" actions={actions} />

      {/* Drawer do menu mobile - apenas visível em telas pequenas */}
      <Drawer
        opened={opened}
        onClose={handleDrawerClose}
        padding="xs"
        hiddenFrom="sm"
        title="Menu"
        zIndex={3000}
        lockScroll={false}
        closeOnClickOutside={true}
        closeOnEscape={true}
      >
        <NavMenu
          guides={guides}
          architectures={architectures}
          patterns={patterns}
          techniques={techniques}
          bestPractices={bestPractices}
          onNavigate={handleDrawerClose} // Fecha o menu quando um link é clicado
        />
      </Drawer>

      <Box
        style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
      >
        {/* Header */}
        <HeaderBar
          opened={opened}
          onBurger={handleBurgerClick}
          onSearch={handleSearchClick}
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
                width: 300,
                padding: 12,
                paddingRight: 20,
                overflow: 'visible',
              }}
            >
              <NavMenu
                guides={guides}
                architectures={architectures}
                patterns={patterns}
                techniques={techniques}
                bestPractices={bestPractices}
                // No desktop não precisa fechar nada, então não passa onNavigate
              />
            </Box>
          )}

          {/* Content */}
          <Box style={{ flex: 1, padding: '1rem' }}>{children}</Box>
        </Box>

        {/* Footer */}
        <Footer />
      </Box>
    </>
  );
}
