import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig( ({ mode }) => {

  const dev = mode === 'development' 

  return {
    base: dev ? '/' : '/vue-test-router-pinia/', 
    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
})