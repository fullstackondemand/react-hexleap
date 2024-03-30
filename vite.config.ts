import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  envDir: './src/environments',
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'main.js',
        assetFileNames: 'style.css',
        chunkFileNames: `assets/[name].[ext]`,
      }
    }
  }
})
