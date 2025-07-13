import { Routes, Route } from 'react-router-dom';
import DocsShell from './components/DocsShell.tsx';
import Home from './pages/Home.tsx';
import DocPage from './pages/DocPage.tsx';
import { guides, patterns } from './lib/content.ts';

function App() {
  return (
    <DocsShell guides={guides} patterns={patterns}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:collection/:slug" element={<DocPage />} />
      </Routes>
    </DocsShell>
  );
}

export default App;
