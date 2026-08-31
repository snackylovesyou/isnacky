import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/isnacky/', // <--- Reemplaza con el nombre exacto de tu repositorio en GitHub
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'Snacky Music',
        short_name: 'Snacky',
        description: 'Tu reproductor de música personal',
        theme_color: '#070707',
        background_color: '#070707',
        display: 'standalone',
        orientation: 'portrait',
        icons: [
          {
            src: '/gumi.jpg',
            sizes: '192x192',
            type: 'image/jpeg'
          },
          {
            src: '/gumi.jpg',
            sizes: '512x512',
            type: 'image/jpeg'
          }
        ]
      }
    })
  ]
});