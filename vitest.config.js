import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { URL } from 'url'
 
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.js'],
  },
  resolve: {
    alias: {
      '@': new URL('./src', import.meta.url).pathname,
    },
  },
})
