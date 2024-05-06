import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: resolve(__dirname, 'src'),
  build: {
    emptyOutDir: true,
    outDir: resolve(__dirname, 'dist'),
  },
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
});
