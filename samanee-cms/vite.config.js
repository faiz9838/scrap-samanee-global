import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['hoist-non-react-statics'], // <== Ensures proper handling of CJS in dev
  },
})
