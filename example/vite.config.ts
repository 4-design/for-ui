import path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  root: '../example',
  plugins: [react()],
  resolve: {
    alias: {
      '@/': path.join(__dirname, 'src/'),
    },
  },
})
