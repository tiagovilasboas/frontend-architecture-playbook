import { Routes, Route } from 'react-router-dom';
import { LoadingOverlay } from '@mantine/core';
import { lazy, Suspense } from 'react';
import DocsShell from './components/DocsShell.tsx';
import { guides, architectures, patterns, techniques, bestPractices } from './lib/content.ts';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home.tsx'));
const DocPage = lazy(() => import('./pages/DocPage.tsx'));

function App() {
  return (
    <DocsShell 
      guides={guides} 
      architectures={architectures} 
      patterns={patterns} 
      techniques={techniques} 
      bestPractices={bestPractices}
    >
      <Suspense fallback={<LoadingOverlay visible />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":collection/:slug" element={<DocPage />} />
        </Routes>
      </Suspense>
    </DocsShell>
  );
}

export default App;
