import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Box } from '@mantine/core';
import { Analytics } from '@vercel/analytics/react';
import DocsShell from './components/DocsShell.tsx';
import { updatePageMeta } from './utils/seo.ts';

const Home = lazy(() => import('./pages/Home.tsx'));
const DocPage = lazy(() => import('./pages/DocPage.tsx'));

/** Minimal Suspense fallback – no heavy loader component */
function PageFallback() {
  return (
    <Box
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 280,
        width: '100%',
      }}
    >
      <Box
        className="page-fallback-spinner"
        style={{
          width: 32,
          height: 32,
          borderRadius: '50%',
          border: '3px solid var(--mantine-color-default-border)',
          borderTopColor: 'var(--mantine-color-green-6)',
          animation: 'page-fallback-spin 0.8s linear infinite',
        }}
      />
    </Box>
  );
}

function App() {
  const location = useLocation();

  useEffect(() => {
    updatePageMeta(location.pathname);
  }, [location.pathname]);

  return (
    <DocsShell>
      <Analytics />
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="guides"
            element={<Navigate to="/guides/study-guide" replace />}
          />
          <Route
            path="architectures"
            element={<Navigate to="/architectures/spa" replace />}
          />
          <Route
            path="patterns"
            element={<Navigate to="/patterns/component-driven" replace />}
          />
          <Route
            path="techniques"
            element={<Navigate to="/techniques/performance" replace />}
          />
          <Route
            path="best-practices"
            element={<Navigate to="/best-practices/dry" replace />}
          />
          <Route path=":collection/:slug" element={<DocPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </DocsShell>
  );
}

export default App;
