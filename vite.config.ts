import { defineConfig } from 'vite'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { readFile } from 'fs/promises'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@public': path.resolve(__dirname, './public'),
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        {
          name: 'esbuild-plugin-react-virtualized',
          setup({ onLoad }) {
            onLoad(
              {
                filter:
                  /react-virtualized[/\\]dist[/\\]es[/\\]WindowScroller[/\\]utils[/\\]onScroll\.js$/,
              },
              async ({ path }) => {
                const code = await readFile(path, 'utf8')
                const broken = `import { bpfrpt_proptype_WindowScroller } from "../WindowScroller.js";`
                return { contents: code.replace(broken, '') }
              },
            )
          },
        },
      ],
    },
  },
  plugins: [TanStackRouterVite(), react()],
})
