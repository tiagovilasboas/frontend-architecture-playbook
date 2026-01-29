import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { MantineProvider } from '@mantine/core';
import { theme } from './theme.ts';
import { BrowserRouter } from 'react-router-dom';
import '@mantine/core/styles.css';
import { semantic, semanticCssVars } from './theme/colors';

// Inject theme CSS vars from single source (no hardcoded colors in CSS)
Object.entries(semanticCssVars).forEach(([key, varName]) => {
  const value = semantic[key as keyof typeof semanticCssVars];
  if (typeof value === 'string')
    document.documentElement.style.setProperty(varName, value);
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MantineProvider>
  </StrictMode>
);
