import {
  ActionIcon,
  Alert,
  Badge,
  Button,
  Card,
  createTheme,
  Paper,
  Select,
  ThemeIcon,
} from '@mantine/core';
import { primary, brand, accent, primaryGreen, semantic } from './theme/colors';

export const theme = createTheme({
  primaryColor: 'primary',
  colors: {
    primary,
    brand,
    accent,
    green: primaryGreen,
  },
  fontFamily: 'Inter, system-ui, sans-serif',
  fontSizes: {
    xs: '0.8125rem',
    sm: '0.9375rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
  },
  headings: {
    fontFamily: 'Inter, sans-serif',
    sizes: {
      h1: { fontSize: '2rem', fontWeight: '700' },
    },
  },
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
    Paper: Paper.extend({
      defaultProps: {
        p: 'md',
        shadow: 'xl',
        radius: 'md',
        withBorder: true,
      },
    }),
    Card: Card.extend({
      defaultProps: {
        p: 'xl',
        shadow: 'xl',
        radius: 'var(--mantine-radius-default)',
        withBorder: true,
      },
    }),
    Select: Select.extend({
      defaultProps: {
        checkIconPosition: 'right',
      },
    }),
    Button: Button.extend({
      defaultProps: {
        color: 'green',
      },
    }),
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
        color: 'primary',
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
    ActionIcon: ActionIcon.extend({
      defaultProps: {
        color: 'primary',
      },
    }),
    ThemeIcon: ThemeIcon.extend({
      defaultProps: {
        color: 'green',
      },
    }),
    Badge: Badge.extend({
      defaultProps: {
        color: 'green',
      },
    }),
    Alert: Alert.extend({
      defaultProps: {
        color: 'green',
      },
    }),
  },
  other: {
    style: 'mantine',
  },
});
