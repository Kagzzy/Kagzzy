import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'

export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ['defaults', 'not IE 11', 'Safari >= 12', 'iOS >= 12', 'Firefox ESR'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
    }),
  ],
  build: {
    target: ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari14'],
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          motion: ['framer-motion', 'gsap'],
        },
      },
    },
  },
})
