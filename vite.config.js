import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { imagetools } from 'vite-imagetools'
import { URL } from 'url'

export default defineConfig({
  plugins: [react(), tailwindcss(), imagetools()],
  base: '/',      // ← Netlify serves from root
  resolve: {
    alias: {
      '@': new URL('./src', import.meta.url).pathname,
    },
  },
})