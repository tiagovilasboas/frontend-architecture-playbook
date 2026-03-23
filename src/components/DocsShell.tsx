import React, { useState, lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import { Drawer, Box, useMantineColorScheme } from '@mantine/core';
import { Spotlight } from '@mantine/spotlight';
import HeaderBar from './HeaderBar.tsx';
import MobileNavMenu from './MobileNavMenu.tsx';
import PrevNextArrows from './PrevNextArrows.tsx';
import { ReadingProgress } from './ReadingProgress.tsx';
import { BackToTop } from './BackToTop.tsx';
import Footer from './Footer.tsx';
import { useNavigationActions } from '../hooks/useNavigationActions.ts';
import { useBreakpoints } from '../hooks/useBreakpoints.ts';

const NeuralNetworkCanvas = lazy(() => import('./NeuralNetworkCanvas.tsx'));

interface DocsShellProps {
  children: React.ReactNode;
}

export default function DocsShell({ children }: DocsShellProps) {
  const [opened, setOpened] = useState(false);
  const { isMobile } = useBreakpoints();
  const { colorScheme } = useMantineColorScheme();
  const actions = useNavigationActions();

  const handleBurgerClick = () => setOpened(prev => !prev);

  // Função que fecha o menu mobile - passada para o NavMenu
  const handleDrawerClose = () => {
    setOpened(false);
  };

  const location = useLocation();

  return (
    <>
      {/* Skip link: visible on focus for a11y (keyboard/screen reader) */}
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo
      </a>

      {/* Neural Network – lazy loaded only in dark mode */}
      {colorScheme === 'dark' && (
        <Suspense fallback={null}>
          <NeuralNetworkCanvas
            nodeCount={isMobile ? 60 : 100}
            fullScreen={true}
            seed={location.pathname}
          />
        </Suspense>
      )}

      <ReadingProgress />
      <Spotlight
        shortcut="mod + k"
        actions={actions}
        searchProps={{
          placeholder: 'Buscar no playbook...',
          size: 'lg',
        }}
        nothingFound="Nada encontrado. Tente outra busca."
        highlightQuery
        limit={10}
      />

      {/* Drawer do menu: abre quando o burger é clicado (burger aparece quando largura < 1100px) */}
      <Drawer
        opened={opened}
        onClose={handleDrawerClose}
        padding={0}
        title={null}
        withCloseButton={false}
        zIndex={3000}
        lockScroll={false}
        closeOnClickOutside={true}
        closeOnEscape={true}
        size={300}
        className="mobile-nav-drawer"
        aria-labelledby="mobile-nav-menu-title"
      >
        <MobileNavMenu onNavigate={handleDrawerClose} />
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
        <HeaderBar opened={opened} onBurger={handleBurgerClick} />

        {/* Main Content – setas prev/next nas laterais, breadcrumb e conteúdo no centro */}
        <Box
          id="main-content"
          tabIndex={-1}
          mb="2xl"
          className="docs-shell-main"
          style={{
            flex: 1,
            width: '100%',
            maxWidth: '100%',
            display: 'flex',
            flexDirection: 'column',
            minHeight: 0,
            boxSizing: 'border-box',
          }}
        >
          <PrevNextArrows>{children}</PrevNextArrows>
        </Box>

        {/* Footer */}
        <Footer />

        {/* Back to top - reduz fadiga de scroll (UX) */}
        <BackToTop />
      </Box>
    </>
  );
}
