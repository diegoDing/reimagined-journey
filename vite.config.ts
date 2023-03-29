import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx';
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  css: {
    modules: {
      scopeBehaviour: 'local', // 'global' | 'local'
    }
  },
  plugins: [
    vue(),
    vueJsx()
  ],
  resolve:{
    alias:{
      "@":path.resolve(__dirname, "./src")
    },
    extensions: ['.js', '.json', '.ts']
  }
})
