import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslint from 'vite-plugin-eslint';
import viewport from 'postcss-px-to-viewport';

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [
        viewport({
          viewportWidth: 750,
          exclude: /(\/|\\)(node_modules)(\/|\\)/,
        }),
      ],
    },
  },
  plugins: [vue(), eslint({ cache: false })],
});
