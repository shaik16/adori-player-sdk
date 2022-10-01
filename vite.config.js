import { defineConfig } from 'vite'

import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    minify: true,
    lib: {
      name: 'lib',
      entry: 'src/index.ts',
      formats: ['es'],
      fileName: 'index',
    },
  },

  plugins: [dts()],
})
