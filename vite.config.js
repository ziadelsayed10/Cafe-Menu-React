import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression';
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    compression(),
    react()
  ],
  build: {
    minify: 'esbuild', // استخدم esbuild لتصغير الملفات
    rollupOptions: {
      external: ['react', 'react-dom'], // استثناء React و ReactDOM
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    
  },
})


