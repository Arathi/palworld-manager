import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: { port: 8212 },
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@apis": resolve(__dirname, "src", "apis"),
      "@components": resolve(__dirname, "src", "components"),
      "@domains": resolve(__dirname, "src", "domains"),
      "@stores": resolve(__dirname, "src", "stores")
    }
  }
})
