import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Box,
  UnstyledButton,
  Tooltip,
  Group,
  Anchor,
} from '@mantine/core';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { getPrevNextByCollection } from '../lib/content.tsx';
import { useBreakpoints } from '../hooks/useBreakpoints';
import {
  DOC_ARROW_CONTENT_INSET_PX,
  POINTER_TARGET_COMFORTABLE_PX,
} from '../theme/mobile-ux-tokens.ts';

type Direction = 'prev' | 'next';

interface NavArrowProps {
  direction: Direction;
  item: { href: string; label: string } | null;
}

/** Uma seta só: direção (prev/next) define ícone, tooltip e aria-label. */
function NavArrow({ direction, item }: NavArrowProps) {
  if (!item) return null;

  const size = POINTER_TARGET_COMFORTABLE_PX;
  const iconSize = 24;

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
            ? `Anterior na mesma coleção: ${item.label}`
            : `Próximo na mesma coleção: ${item.label}`
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
 * Desktop/tablet: setas fixas nas laterais (mesma coleção — `getPrevNextByCollection`).
 * Mobile: sem setas flutuantes (sobrepõem texto, gesto de voltar já existe); links
 * texto no fim da página.
 */
export default function PrevNextArrows({ children }: PrevNextArrowsProps) {
  const location = useLocation();
  const { isMobile } = useBreakpoints();
  const { prev, next } = getPrevNextByCollection(location.pathname);

  if (prev == null && next == null) {
    return <>{children}</>;
  }

  const showFixedArrows = !isMobile;

  return (
    <Box style={{ position: 'relative', flex: 1, width: '100%', minHeight: 0 }}>
      {showFixedArrows && prev && (
        <Box
          style={{
            position: 'fixed',
            left: 16,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 100,
          }}
        >
          <NavArrow direction="prev" item={prev} />
        </Box>
      )}
      {showFixedArrows && next && (
        <Box
          style={{
            position: 'fixed',
            right: 16,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 100,
          }}
        >
          <NavArrow direction="next" item={next} />
        </Box>
      )}

      <Box
        style={{
          paddingLeft:
            showFixedArrows && (prev || next) ? 32 : 0,
          paddingRight:
            showFixedArrows && (prev || next) ? 32 : 0,
        }}
      >
        {children}
      </Box>

      {isMobile && (prev || next) ? (
        <Group
          justify="space-between"
          align="flex-start"
          gap="md"
          wrap="nowrap"
          mt="lg"
          mb="sm"
          style={{
            paddingLeft: `max(${DOC_ARROW_CONTENT_INSET_PX}px, env(safe-area-inset-left, 0px))`,
            paddingRight: `max(${DOC_ARROW_CONTENT_INSET_PX}px, env(safe-area-inset-right, 0px))`,
          }}
        >
          <Box style={{ flex: 1, minWidth: 0 }}>
            {prev ? (
              <Anchor
                component={Link}
                to={prev.href}
                size="md"
                fw={500}
                onClick={() => window.scrollTo({ top: 0, behavior: 'auto' })}
                style={{ lineHeight: 1.35 }}
                lineClamp={3}
              >
                ← {prev.label}
              </Anchor>
            ) : (
              <span />
            )}
          </Box>
          <Box style={{ flex: 1, minWidth: 0, textAlign: 'right' }}>
            {next ? (
              <Anchor
                component={Link}
                to={next.href}
                size="md"
                fw={500}
                onClick={() => window.scrollTo({ top: 0, behavior: 'auto' })}
                style={{ lineHeight: 1.35 }}
                lineClamp={3}
              >
                {next.label} →
              </Anchor>
            ) : (
              <span />
            )}
          </Box>
        </Group>
      ) : null}
    </Box>
  );
}
