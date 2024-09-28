import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
    }
  },
  css: {
    preprocessorOptions: {
      scss: { additionalData: `@import "./src/assets/styles/style.scss";` },
    },
  },
})