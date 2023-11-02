import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import globalPlugin from 'vite-plugin-global';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), globalPlugin()],
});
