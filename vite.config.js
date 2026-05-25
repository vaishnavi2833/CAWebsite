import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/fetch_circulars.php': {
        target: 'https://anilvishwakarma.co.in/kb/circulars',
        changeOrigin: true,
        secure: false,   // accept self-signed / untrusted certs
        rewrite: path => path,
      },
    },
  },
})
