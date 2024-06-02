import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // default output directory
  },
  server: {
    historyApiFallback: true, // This is more useful for local development
  },
})
