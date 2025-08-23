import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { imagetools } from 'vite-imagetools'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss(), imagetools()],
  base: '/',      // ← Netlify serves from root
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})