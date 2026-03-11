import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box, UnstyledButton, Tooltip } from '@mantine/core';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { getPrevNext } from '../lib/navigation';
import { useBreakpoints } from '../hooks/useBreakpoints';

type Direction = 'prev' | 'next';

interface NavArrowProps {
  direction: Direction;
  item: { href: string; label: string } | null;
}

/** Uma seta só: direção (prev/next) define ícone, tooltip e aria-label. */
function NavArrow({ direction, item }: NavArrowProps) {
  const { isMobile } = useBreakpoints();
  if (!item) return null;

  /* 44×44 min for touch targets (WCAG 2.2); desktop keeps 44 */
  const size = 44;
  const iconSize = isMobile ? 22 : 24;

  return (
    <Tooltip
      label={item.label}
      position={direction === 'prev' ? 'right' : 'left'}
    >
      <UnstyledButton
        component={Link}
        to={item.href}
        onClick={() => window.scrollTo({ top: 0, behavior: 'auto' })}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: size,
          height: size,
          borderRadius: 'var(--mantine-radius-md)',
          color: 'var(--mantine-color-text)',
          backgroundColor: 'var(--mantine-color-default-hover)',
          border: '1px solid var(--mantine-color-default-border)',
          transition: 'background-color 0.15s, color 0.15s',
        }}
        className="prev-next-arrow"
        aria-label={
          direction === 'prev'
            ? `Anterior: ${item.label}`
            : `Próximo: ${item.label}`
        }
      >
        {direction === 'prev' ? (
          <IconChevronLeft size={iconSize} stroke={2} />
        ) : (
          <IconChevronRight size={iconSize} stroke={2} />
        )}
      </UnstyledButton>
    </Tooltip>
  );
}

interface PrevNextArrowsProps {
  children: React.ReactNode;
}

/**
 * Setas anterior/próximo nas laterais do conteúdo, alinhadas ao centro vertical.
 * Navega na ordem da jornada (NAV_JOURNEY); o breadcrumb atualiza com a rota.
 */
export default function PrevNextArrows({ children }: PrevNextArrowsProps) {
  const location = useLocation();
  const { isMobile } = useBreakpoints();
  const { prev, next } = getPrevNext(location.pathname);

  if (prev == null && next == null) {
    return <>{children}</>;
  }

  return (
    <Box style={{ position: 'relative', flex: 1, width: '100%', minHeight: 0 }}>
      {/* Setas fixas no viewport: centro vertical, laterais. z-index acima do conteúdo. */}
      {prev && (
        <Box
          style={{
            position: 'fixed',
            left: isMobile ? 8 : 16,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 100,
          }}
        >
          <NavArrow direction="prev" item={prev} />
        </Box>
      )}
      {next && (
        <Box
          style={{
            position: 'fixed',
            right: isMobile ? 8 : 16,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 100,
          }}
        >
          <NavArrow direction="next" item={next} />
        </Box>
      )}

      {/* Conteúdo com padding lateral para não ficar por baixo das setas (44px + 8px gap) */}
      <Box
        style={{
          paddingLeft: prev || next ? (isMobile ? 56 : 64) : 0,
          paddingRight: prev || next ? (isMobile ? 56 : 64) : 0,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
