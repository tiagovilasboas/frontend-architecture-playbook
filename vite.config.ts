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

          // Architecture chunks - Core (mais usados)
          'architectures-core': [
            './src/content/patterns/monorepo.tsx',
            './src/content/patterns/spa.tsx',
          ],

          // Clean Architecture (separado por ser muito grande)
          'clean-architecture': [
            './src/content/patterns/clean-architecture.tsx',
          ],

          // Micro Frontends (separado por ser complexo)
          'micro-frontends': ['./src/content/patterns/micro-frontends.tsx'],

          // Architecture chunks - Modern (tendências)
          'architectures-modern': [
            './src/content/patterns/islands-architecture.tsx',
            './src/content/patterns/jamstack.tsx',
            './src/content/patterns/pwa.tsx',
            './src/content/patterns/ssr-ssg.tsx',
            './src/content/patterns/bff.tsx',
          ],

          // Architecture chunks - Advanced (complexos)
          'architectures-advanced': [
            './src/content/patterns/hexagonal.tsx',
            './src/content/patterns/layered.tsx',
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

          // Pattern chunks - Best Practices (princípios)
          'patterns-best-practices': [
            './src/content/patterns/dry.tsx',
            './src/content/patterns/kiss.tsx',
            './src/content/patterns/yagni.tsx',
            './src/content/patterns/clean-code.tsx',
            './src/content/patterns/srp.tsx',
            './src/content/patterns/soc.tsx',
            './src/content/patterns/repository-pattern.tsx',
            './src/content/patterns/security.tsx',
          ],

          // Guide chunks
          'content-guides': [
            './src/content/guides/how-to-choose.tsx',
            './src/content/guides/dependency-rule.tsx',
            './src/content/guides/cases.tsx',
          ],

          // UI Components
          'components-core': [
            './src/components/DocsShell.tsx',
            './src/components/HeaderBar.tsx',
            './src/components/NavMenu.tsx',
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
