import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Send /api calls to the real backend while running `npm run dev`.
    // Default: the Docker stack from kanavoogle-platform (its nginx on :8088 forwards /api to Spring Boot).
    // Override with VITE_API_TARGET, e.g. VITE_API_TARGET=http://localhost:8080
    proxy: {
      '/api': {
        target: process.env.VITE_API_TARGET ?? 'http://localhost:8088',
        changeOrigin: true,
      },
    },
  },
})
