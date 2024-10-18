import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Bind to 0.0.0.0 for external access
    port: process.env.PORT || 4173, // Use Render's port or default to 4173
  },
  preview: {
    host: '0.0.0.0',
    port: process.env.PORT || 4173,
  },
})
