import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // Change base to '/' for user/org pages (username.github.io)
  // or to '/repo-name/' for project pages (username.github.io/repo-name)
  base: '/Christmas-tree.io/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
