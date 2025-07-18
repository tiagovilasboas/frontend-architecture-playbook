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

          // Feature chunks
          'content-patterns': [
            './src/content/patterns/clean-architecture.tsx',
            './src/content/patterns/component-driven.tsx',
            './src/content/patterns/micro-frontends.tsx',
            './src/content/patterns/monorepo.tsx',
            './src/content/patterns/spa.tsx',
            './src/content/patterns/atomic-design.tsx',
            './src/content/patterns/islands-architecture.tsx',
            './src/content/patterns/jamstack.tsx',
            './src/content/patterns/state-machines.tsx',
            './src/content/patterns/event-driven.tsx',
            './src/content/patterns/feature-flags.tsx',
            './src/content/patterns/progressive-web-apps.tsx',
            './src/content/patterns/server-side-rendering.tsx',
          ],
          'content-guides': ['./src/content/guides/how-to-choose.tsx'],
          components: [
            './src/components/DocsShell.tsx',
            './src/components/HeaderBar.tsx',
            './src/components/NavMenu.tsx',
            './src/components/Footer.tsx',
            './src/components/interactive/DecisionWizard.tsx',
          ],
          pages: ['./src/pages/Home.tsx', './src/pages/DocPage.tsx'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg'],
});
