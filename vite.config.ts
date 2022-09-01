import path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

import pkg from './package.json'

const externalPackages = [
  ...Object.keys(pkg.peerDependencies || {}),
  ...Object.keys(pkg.dependencies || {}),
]

const regexesOfPackages = externalPackages.map(
  (packageName) => new RegExp(`^${packageName}(\/.*)?`)
)

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  build: {
    sourcemap: mode === 'production' ? false : 'inline',
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: '3design-ui',
    },
    rollupOptions: {
      external: regexesOfPackages,
      output: [
        {
          preserveModules: true,
          preserveModulesRoot: 'src',
          sourcemap: true,
          exports: 'named',
          dir: 'dist/commonjs',
          format: 'cjs',
        },
        {
          preserveModules: true,
          preserveModulesRoot: 'src',
          sourcemap: true,
          exports: 'named',
          dir: 'dist/esm',
          format: 'esm',
        },
      ],
    },
  },
}))
