import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "url";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src/VueStarRate', import.meta.url)),
    },
  },
  esbuild: {
    minify: true,
  },
  build: {
    minify: 'terser',
    emptyOutDir: false,
    sourcemap: false,
    lib: {
      formats: ['es', 'umd'],
      entry: resolve(__dirname, 'src', 'StarRating.vue'),
      name: 'VueDatepicker',
      fileName: (format) => `vue-star-rate.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        },
      },
    },
    terserOptions: {
      output: {
        ecma: 5,
      },
    },
  },
});
