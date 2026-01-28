import React, { useState } from 'react';
import { Drawer, Box, Text } from '@mantine/core';
import { Spotlight } from '@mantine/spotlight';
import { useMediaQuery } from '@mantine/hooks';
import HeaderBar from './HeaderBar.tsx';
import NavMenu from './NavMenu.tsx';
import MobileNavMenu from './MobileNavMenu.tsx';
import MobileBottomNav from './MobileBottomNav.tsx';
import MobileBreadcrumbs from './MobileBreadcrumbs.tsx';
import { TableOfContents } from './TableOfContents.tsx';
import { ReadingProgress } from './ReadingProgress.tsx';
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
      <ReadingProgress />
      <Spotlight shortcut="mod + k" actions={actions} />

      {/* Drawer do menu mobile - apenas visível em telas pequenas */}
      <Drawer
        opened={opened}
        onClose={handleDrawerClose}
        padding="md"
        hiddenFrom="sm"
        title={
          <Text fw={600} size="lg">
            Menu
          </Text>
        }
        zIndex={3000}
        lockScroll={false}
        closeOnClickOutside={true}
        closeOnEscape={true}
        size="85%"
      >
        <MobileNavMenu
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

        {/* Breadcrumbs - apenas no mobile */}
        <MobileBreadcrumbs />

        {/* Main Content */}
        <Box style={{ flex: 1, display: 'flex' }}>
          {/* Sidebar - apenas no desktop */}
          {!isMobile && (
            <Box
              className="sidebar-nav"
              style={{
                width: 280,
                padding: 12,
                paddingRight: 20,
                overflow: 'visible',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
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

              {/* Table of Contents - dinâmico baseado na página */}
              <TableOfContents />
            </Box>
          )}

          {/* Content */}
          <Box
            style={{
              flex: 1,
              padding: isMobile ? '1rem 0' : '1rem',
              paddingBottom: isMobile ? '80px' : '1rem', // Espaço para bottom nav
            }}
          >
            {children}
          </Box>
        </Box>

        {/* Footer */}
        <Footer />

        {/* Bottom Navigation - apenas no mobile */}
        <MobileBottomNav />
      </Box>
    </>
  );
}
