/*
const path = require('path')

module.exports = {
  alias: {
    '/@/': path.resolve(__dirname, './src'),
    '/@components/': path.resolve(__dirname, './src/components'),
    '/@app_modules/': path.resolve(__dirname, './src/modules'),
  }
}
*/

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '/@': path.resolve(__dirname, './src'),
      '/@components': path.resolve(__dirname, './src/components'),
      '/@app_modules': path.resolve(__dirname, './src/modules'),
      '/@store': path.resolve(__dirname, './src/store'),
      '/@router': path.resolve(__dirname, './src/router'),
    }
  },
  plugins: [vue()],
})

