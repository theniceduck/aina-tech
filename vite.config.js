import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/aina.tech/', // Set this to your GitHub repo name
  plugins: [react()],
})
