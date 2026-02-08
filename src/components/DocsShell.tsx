import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Drawer, Box } from '@mantine/core';
import { Spotlight } from '@mantine/spotlight';
import { useMediaQuery } from '@mantine/hooks';
import HeaderBar from './HeaderBar.tsx';
import MobileNavMenu from './MobileNavMenu.tsx';
import AppBreadcrumbs from './AppBreadcrumbs.tsx';
import { ReadingProgress } from './ReadingProgress.tsx';
import { BackToTop } from './BackToTop.tsx';
import Footer from './Footer.tsx';
import NeuralNetworkCanvas from './NeuralNetworkCanvas.tsx';
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

  const location = useLocation();

  return (
    <>
      {/* Neural Network – comportamento único por página (seed = pathname) */}
      <NeuralNetworkCanvas
        nodeCount={isMobile ? 60 : 100}
        fullScreen={true}
        seed={location.pathname}
      />

      <ReadingProgress />
      <Spotlight
        shortcut="mod + k"
        actions={actions}
        searchProps={{
          placeholder: 'Buscar no playbook...',
          size: 'lg',
        }}
        nothingFoundMessage="Nada encontrado. Tente outra busca."
        highlightQuery
        limit={10}
      />

      {/* Drawer do menu mobile - apenas visível em telas pequenas */}
      <Drawer
        opened={opened}
        onClose={handleDrawerClose}
        padding={0}
        hiddenFrom="sm"
        title={null}
        zIndex={3000}
        lockScroll={false}
        closeOnClickOutside={true}
        closeOnEscape={true}
        size={300}
        className="mobile-nav-drawer"
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
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Header */}
        <HeaderBar
          opened={opened}
          onBurger={handleBurgerClick}
          guides={guides}
          architectures={architectures}
          patterns={patterns}
          techniques={techniques}
          bestPractices={bestPractices}
        />

        {/* Main Content – breadcrumb no topo, alinhado à esquerda */}
        <Box
          style={{
            flex: 1,
            width: '100%',
            padding: isMobile ? '1rem' : '2rem',
            paddingBottom: isMobile ? '1rem' : '2rem',
          }}
        >
          <AppBreadcrumbs />
          {children}
        </Box>

        {/* Footer */}
        <Footer />

        {/* Back to top - reduz fadiga de scroll (UX) */}
        <BackToTop />
      </Box>
    </>
  );
}
