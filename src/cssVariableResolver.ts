import type { CSSVariablesResolver } from '@mantine/core';

/**
 * Harmonized text and surface colors per scheme.
 * Light: white surfaces (no light gray backgrounds), dark text, subtle borders.
 */
export const mantineCssVariableResolver: CSSVariablesResolver = () => ({
  variables: {},
  light: {
    '--mantine-color-body': '#ffffff',
    '--mantine-color-default': '#ffffff',
    '--mantine-color-default-hover': '#f8f9fa',
    '--mantine-color-default-border': '#e9ecef',
    '--mantine-color-text': '#212529',
    '--mantine-color-dimmed': '#495057',
    /* Surfaces: white so no gray patches in background */
    '--mantine-color-dark-0': '#ffffff',
    '--mantine-color-dark-1': '#ffffff',
    '--mantine-color-dark-2': '#ffffff',
    '--mantine-color-dark-3': '#e9ecef',
    '--mantine-color-dark-4': '#dee2e6',
    '--mantine-color-dark-5': '#ced4da',
    '--mantine-color-dark-6': '#6c757d',
    '--mantine-color-dark-7': '#495057',
    '--mantine-color-dark-8': '#343a40',
    '--mantine-color-dark-9': '#212529',
    /* Gray scale used by inputs/cards: avoid gray.0/gray.1 as background */
    '--mantine-color-gray-0': '#ffffff',
    '--mantine-color-gray-1': '#ffffff',
  },
  dark: {},
});
