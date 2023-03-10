import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [
    svelte({
      configFile: './svelte.config.js',
    })
  ],
  optimizeDeps: {
    exclude: ['postcss', 'autoprefixer', 'tailwindcss']
  }
});