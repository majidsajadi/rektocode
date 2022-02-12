import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        panel: resolve(__dirname, 'index.html'),
        devtool: resolve(__dirname, 'devtool.html')
      }
    }
  },
  plugins: [react()]
});
