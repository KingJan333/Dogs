import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      outDir: "dist",
      devOptions: {
          enabled: true
      },
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'Dogs',
        short_name: 'Dogs',
        description: 'Собакены',
        theme_color: 'black',
        icons: [
          {
              src: '/dog-192.jpeg',
              sizes: '192x192',
              type: 'image/png'
          },
          {
              src: '/dog-512.jpeg',
              sizes: '512x512',
              type: 'image/png'
          }
      ],
      }
    })
  ],
  server: {
    port: 1345,
    host: true
  }
})
