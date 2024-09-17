import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  preview: {
    host: 'localhost',
    port: 5173,
    strictPort: true,
    headers: {
       'Access-Control-Allow-Origin': '*'
   }
  },
  plugins: [react()],
  
})
