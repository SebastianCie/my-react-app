import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/my-react-app/", //github pages
  // server: {
  //   port: 3000,
  //   strictPort: true,
  //   host: true,
  //   origin: "http://0.0.0.0:3000"
  // }
})
