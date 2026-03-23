import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { MantineProvider } from '@mantine/core';
import { theme } from './theme.ts';
import { mantineCssVariableResolver } from './cssVariableResolver.ts';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary.tsx';
import '@mantine/core/styles.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <MantineProvider
        theme={theme}
        cssVariablesResolver={mantineCssVariableResolver}
        defaultColorScheme="dark"
      >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MantineProvider>
    </ErrorBoundary>
  </StrictMode>
);
