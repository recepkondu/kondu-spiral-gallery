import { defineConfig } from 'vite';

export default defineConfig({
  base: '/kondu-spiral-gallery/',
  build: {
    outDir: 'docs',
  },
  server: {
    port: 5174,
    open: false,
  },
});
