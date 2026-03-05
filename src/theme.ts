import { createTheme } from '@mantine/core';
import { primary, brand, accent, semantic } from './theme/colors';

export const theme = createTheme({
  primaryColor: 'primary',
  colors: {
    primary,
    brand,
    accent,
  },
  fontFamily: 'Inter, system-ui, sans-serif',
  fontSizes: {
    xs: '0.8125rem', // ~13px
    sm: '0.9375rem', // ~15px
    md: '1rem', // 16px
    lg: '1.125rem', // ~18px
    xl: '1.25rem', // 20px
  },
  headings: {
    fontFamily: 'Inter, sans-serif',
    sizes: {
      h1: { fontSize: '2rem', fontWeight: '700' },
    },
  },
  // Custom components with consistent styling
  components: {
    Anchor: {
      defaultProps: {
        c: 'primary.6',
        underline: 'hover',
      },
      styles: {
        root: {
          fontWeight: 500,
          transition: 'color 0.2s ease',
          '&:hover': {
            color: 'var(--mantine-color-primary-7)',
          },
        },
      },
    },
    Paper: {
      defaultProps: {
        withBorder: true,
        p: 'xl',
        radius: 'lg',
      },
    },
    Card: {
      defaultProps: {
        withBorder: true,
        p: 'md',
        radius: 'md',
      },
    },
    ThemeIcon: {
      defaultProps: {
        variant: 'light',
        size: 'md',
        radius: 'md',
      },
    },
    Badge: {
      defaultProps: {
        variant: 'light',
      },
    },
    Alert: {
      defaultProps: {
        radius: 'md',
      },
    },
    Title: {
      styles: {
        root: {
          '[data-order="1"]': {
            background:
              'linear-gradient(135deg, var(--mantine-color-primary-3) 0%, var(--mantine-color-primary-5) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          },
        },
      },
    },
    Spotlight: {
      defaultProps: {
        searchProps: {
          placeholder: 'Buscar no playbook...',
          size: 'lg',
        },
        nothingFoundMessage: 'Nada encontrado. Tente outra busca.',
        highlightQuery: true,
        limit: 10,
      },
      styles: {
        root: {
          '& .mantine-Spotlight-overlay': {
            backgroundColor: semantic.spotlightOverlay,
            backdropFilter: 'blur(4px)',
          },
        },
        inner: {
          padding: '2rem',
        },
        content: {
          maxWidth: 600,
          margin: '0 auto',
        },
        search: {
          '& input': {
            fontSize: '1.1rem',
            padding: '1rem 1.5rem',
            borderRadius: '12px',
            border: '2px solid var(--mantine-color-primary-3)',
            transition: 'all 0.2s ease',
            '&:focus': {
              borderColor: 'var(--mantine-color-primary-6)',
              boxShadow: `0 0 0 4px ${semantic.focusRing}`,
            },
          },
        },
        actions: {
          marginTop: '1rem',
        },
        action: {
          padding: '0.75rem 1rem',
          borderRadius: '8px',
          transition: 'all 0.2s ease',
          '&:hover': {
            backgroundColor: 'var(--mantine-color-primary-1)',
            transform: 'translateX(4px)',
          },
          '&[data-selected]': {
            backgroundColor: 'var(--mantine-color-primary-2)',
            color: 'var(--mantine-color-primary-8)',
          },
        },
        actionBody: {
          '& .mantine-Spotlight-actionLabel': {
            fontWeight: 500,
            fontSize: '0.95rem',
          },
          '& .mantine-Spotlight-actionDescription': {
            fontSize: '0.85rem',
            opacity: 0.7,
            marginTop: '2px',
          },
        },
      },
    },
  },
});
