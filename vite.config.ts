import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
  plugins: [
    vue(),
    ViteImageOptimizer({
      includePublic: true,
      logStats: true,
      png: {
        quality: 90,
        compressionLevel: 9,
      },
      jpeg: {
        quality: 80,
        progressive: true,
      },
      jpg: {
        quality: 80,
        progressive: true,
      },
      webp: {
        quality: 80,
      },
      avif: {
        quality: 60,
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
