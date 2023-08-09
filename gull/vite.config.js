import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    open: true,
  },
  base : process.env.NODE_ENV === 'production' ? '/static/dashboard/' : '/',

  build: {
    outDir: '../static/dashboard',
    publicPath: process.env.NODE_ENV === 'production' ? '/static/dashboard' : '/',
  },
})