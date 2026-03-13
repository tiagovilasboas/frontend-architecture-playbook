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
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-mantine': [
            '@mantine/core',
            '@mantine/hooks',
            '@mantine/spotlight',
          ],
          'vendor-icons': ['@tabler/icons-react'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg'],
});
