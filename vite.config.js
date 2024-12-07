import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Eksport konfiguracji
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Możesz zmienić port na dowolny
    historyApiFallback: true, // Kluczowe ustawienie dla React Router
  },
  base: '/', // Ustawienie podstawowej ścieżki (np. dla deploy na poddomenach)
});
