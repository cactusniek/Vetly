import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
const securityHeaders = {
    'Content-Security-Policy': "frame-ancestors 'self'",
    'X-Frame-Options': 'SAMEORIGIN',
}

export default defineConfig({
    server: {
        port: 8000,
        host: true,
        headers: securityHeaders,
    },

    preview: {
        headers: securityHeaders,
    },

    plugins: [react(), svgr()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },

    css: {
        preprocessorOptions: {
            scss: {
                loadPaths: [fileURLToPath(new URL('./src/styles', import.meta.url))],
            },
        },
    },
})
