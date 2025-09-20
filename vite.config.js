// // vite.config.js
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from 'tailwindcss'
// import path from 'path'

// export default defineConfig({
//   plugins: [react(),
//   base: '/skyicon-travel-system-/',
//     react(),
//     tailwindcss()
//   ],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, "./src"),
//     },
//   },
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/skyicon-travel-system-/', // 👈 هذا السطر يحدد المسار الصحيح لمشروعك في GitHub Pages
})
