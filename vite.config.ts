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

          // Architecture chunks - Core (SPA/SSR-SSG em JSON; restante TSX)
          'architectures-core': [
            './src/content/patterns/clean-architecture.tsx',
          ],

          // Micro Frontends (separado por ser complexo)
          'micro-frontends': ['./src/content/patterns/micro-frontends.tsx'],

          // Architecture chunks - Modern (tendências)
          'architectures-modern': [
            './src/content/patterns/islands-architecture.tsx',
          ],

          // Architecture chunks - Advanced (complexos)
          'architectures-advanced': [
            './src/content/patterns/hexagonal.tsx',
            './src/content/patterns/event-sourcing.tsx',
            './src/content/patterns/cqrs.tsx',
            './src/content/patterns/microservices-frontend.tsx',
          ],

          // Pattern chunks - Design (componentes)
          'patterns-design': [
            './src/content/patterns/component-driven.tsx',
            './src/content/patterns/atomic-design.tsx',
          ],

          // Pattern chunks - State (gerenciamento)
          'patterns-state': [
            './src/content/patterns/state-machines.tsx',
            './src/content/patterns/event-driven.tsx',
            './src/content/patterns/feature-flags.tsx',
          ],

          // Pattern chunks - Best Practices (princípios; dry/kiss/yagni/clean-code/srp/soc migrados para JSON)
          'patterns-best-practices': [
            './src/content/patterns/repository-pattern.tsx',
            './src/content/patterns/security.tsx',
          ],

          // Guide chunks (guias migrados para JSON; só glossary é TSX)
          'content-guides': ['./src/content/guides/glossary.tsx'],

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
