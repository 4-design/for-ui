import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import autoprefixer from 'autoprefixer'
import analyze from 'rollup-plugin-analyzer'
import filesize from 'rollup-plugin-filesize'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'

import pkg from './package.json'

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'prop-types': 'PropTypes',
}

const extensions = ['.ts', '.tsx']

const EXTERNAL = ['react', 'react-dom', 'prop-types']

const CJS_AND_ES_EXTERNALS = EXTERNAL.concat(/@babel\/runtime/)

const plugins = [
  postcss({
    extract: true,
    plugins: [autoprefixer],
  }),
  babel({
    include: ['src/**/*'],
    babelHelpers: 'bundled',
    exclude: 'node_modules/**',
    extensions,
  }),
  resolve({
    browser: true,
    resolveOnly: [/^(?!react$)/, /^(?!react-dom$)/, /^(?!prop-types)/],
    extensions,
  }),
  commonjs(),
  filesize(),
  peerDepsExternal(),
  terser(),
  replace({
    preventAssignment: true,
    'process.env.NODE_ENV': JSON.stringify('production'),
  }),
  analyze(),
]

const OUTPUT_DATA = [
  // {
  //   file: pkg.browser,
  //   dir: 'dist/umd',
  //   format: 'umd',
  // },
  {
    file: pkg.main,
    dir: 'dist/commonjs',
    format: 'cjs',
  },
  {
    file: pkg.module,
    dir: 'dist/esm',
    format: 'es',
  },
]

const config = OUTPUT_DATA.map(({ format, dir }) => ({
  input: 'src/index.ts',
  output: {
    name: '3-design',
    preserveModules: true,
    dir,
    format,
    globals,
  },
  external: ['cjs', 'es'].includes(format) ? CJS_AND_ES_EXTERNALS : EXTERNAL,
  plugins,
}))

export default config
