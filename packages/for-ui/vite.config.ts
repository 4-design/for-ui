import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

import pkg from './package.json';

const externalPackages = Object.keys(pkg.peerDependencies || {});

const regexesOfPackages = externalPackages.map((packageName) => new RegExp(`^${packageName}(/.*)?`));

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  build: {
    sourcemap: mode === 'production' ? false : 'inline',
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'for-ui',
    },
    rollupOptions: {
      external: regexesOfPackages,
      output: [
        {
          preserveModulesRoot: 'src',
          exports: 'named',
          sourcemap: mode === 'production' ? false : 'inline',
          dir: 'dist/commonjs',
          format: 'cjs',
        },
        {
          preserveModulesRoot: 'src',
          sourcemap: mode === 'production' ? false : 'inline',
          exports: 'named',
          dir: 'dist/esm',
          format: 'esm',
        },
      ],
    },
  },
}));
