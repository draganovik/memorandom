import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')
import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), eslintPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
      '~@': path.resolve(__dirname, '/src')
    }
  }
})
