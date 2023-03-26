import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [svgr(), react(), eslintPlugin()],
});
