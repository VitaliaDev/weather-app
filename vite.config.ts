import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/icons/[name].[ext]',
      },
    },
  },
  server: {
    port: 5173, 
    open: true, 
  },
});
