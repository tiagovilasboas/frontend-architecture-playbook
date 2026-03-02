import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), mdx()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-mantine': [
            '@mantine/core',
            '@mantine/hooks',
            '@mantine/spotlight',
          ],
          'vendor-icons': ['@tabler/icons-react'],

          // Architecture chunks - Core (todas architectures em JSON)
          'architectures-core': [],

          // Architecture chunks - Modern (islands-architecture em JSON)
          'architectures-modern': [],

          // Architecture chunks - Advanced (hexagonal, event-sourcing, cqrs, microservices-frontend em JSON)
          'architectures-advanced': [],

          // Pattern chunks - Design (component-driven e atomic-design em JSON)
          'patterns-design': [],

          // Pattern chunks - State (state-machines, feature-flags e event-driven em JSON)
          'patterns-state': [],

          // Pattern chunks - Best Practices (repository-pattern e security em JSON)
          'patterns-best-practices': [],

          // Guide chunks (todos os guias em JSON)
          'content-guides': [],

          // UI Components
          'components-core': [
            './src/components/DocsShell.tsx',
            './src/components/HeaderBar.tsx',
            './src/components/Footer.tsx',
          ],

          'components-interactive': [
            './src/components/interactive/DecisionWizard.tsx',
            './src/components/CaseCard.tsx',
            './src/components/LazyWrapper.tsx',
          ],

          // Pages
          pages: ['./src/pages/Home.tsx', './src/pages/DocPage.tsx'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg'],
});
