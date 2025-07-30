// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/panafri-ai/',          // ← GitHub Pages repo name
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})