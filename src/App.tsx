import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import DocsShell from './components/DocsShell.tsx';
import { ArchitectureLoader } from './components/ArchitectureLoader.tsx';
import { MobileLoader } from './components/MobileLoader.tsx';
import { useMobileDetector } from './hooks/useMobileDetector.ts';
import { updatePageMeta } from './utils/seo.ts';
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
    <DocsShell>
      <Suspense
        fallback={
          isMobile ? <MobileLoader size="lg" /> : <ArchitectureLoader />
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":collection/:slug" element={<DocPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </DocsShell>
  );
}

export default App;
