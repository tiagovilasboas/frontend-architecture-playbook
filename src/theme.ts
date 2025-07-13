import { createTheme } from '@mantine/core';
import type { MantineColorsTuple } from '@mantine/core';

// Custom primary color (blue)
const brand: MantineColorsTuple = [
  '#e0f2ff',
  '#b8d8ff',
  '#8bbcff',
  '#5c9fff',
  '#3385ff',
  '#1a70ff',
  '#0061ff',
  '#0055e6',
  '#004bcc',
  '#003db3',
];

export const theme = createTheme({
  primaryColor: 'brand',
  colors: {
    brand,
  },
  fontFamily: 'Inter, sans-serif',
  headings: {
    fontFamily: 'Inter, sans-serif',
    sizes: {
      h1: { fontSize: '2.25rem', fontWeight: '700' },
    },
  },
}); 