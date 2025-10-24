import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: 'dist/stats.html',
      open: true,        // opens the report automatically after build
      gzipSize: true,    // show gzip size
      brotliSize: true,  // show brotli size
    }),
  ],
  base: "/",
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-dom/client'],

          // MUI libraries (including icons & emotion)
          mui: [
            '@mui/material',
            '@mui/icons-material',
            '@emotion/react',
            '@emotion/styled'
          ],

          // Translation JSONs
          locales: [
            './src/locales/en.json',
            './src/locales/si.json',
            './src/assets/blogs/blogs.json',
            './src/assets/blogs/components.json',
            './src/assets/blogs/images_collection.json',
          ],

          // i18n libraries
          i18n: [
            'i18next',
            'react-i18next',
            'i18next-browser-languagedetector'
          ],

          // React Router DOM
          router: ['react-router-dom'],
        },
      },
    },
  },
})
