import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // This exposes the app to your network
    port: 5173,      // Optional: specify a custom port if needed
  },
});
