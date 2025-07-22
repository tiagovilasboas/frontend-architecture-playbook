import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import DocsShell from './components/DocsShell.tsx';
import { ArchitectureLoader } from './components/ArchitectureLoader.tsx';
import { MobileLoader } from './components/MobileLoader.tsx';
import { useMobileDetector } from './hooks/useMobileDetector.ts';
import { updatePageMeta } from './utils/seo.ts';
import {
  guides,
  architectures,
  patterns,
  techniques,
  bestPractices,
} from './lib/content.tsx';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home.tsx'));
const DocPage = lazy(() => import('./pages/DocPage.tsx'));

function App() {
  const { isMobile } = useMobileDetector();
  const location = useLocation();

  // Update meta tags when route changes
  useEffect(() => {
    updatePageMeta(location.pathname);
  }, [location.pathname]);

  return (
    <DocsShell
      guides={guides}
      architectures={architectures}
      patterns={patterns}
      techniques={techniques}
      bestPractices={bestPractices}
    >
      <Suspense
        fallback={
          isMobile ? <MobileLoader size="lg" /> : <ArchitectureLoader />
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":collection/:slug" element={<DocPage />} />
        </Routes>
      </Suspense>
    </DocsShell>
  );
}

export default App;
