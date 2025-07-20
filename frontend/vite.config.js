import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // Adjust the path as needed
    },
  },
  server: {
    port: 3000,
    host: 'localhost',
    strictPort: true, // Ensures port 3000 is used or fails if not available
  },
})
