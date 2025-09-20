import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/skyicon-travel-system-/', // 👈 هذا السطر يحدد المسار الصحيح لمشروعك في GitHub Pages
})
