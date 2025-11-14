import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Mini-Proyecto-React2/', // 👈 importantísimo para Vercel
})
