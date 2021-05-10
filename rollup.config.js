import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import filesize from 'rollup-plugin-filesize'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import { terser } from 'rollup-plugin-terser'

import pkg from './package.json'

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'prop-types': 'PropTypes',
}

const extensions = ['.ts', '.tsx']

const EXTERNAL = [
  'react',
  'react-dom',
  'prop-types',
];

const CJS_AND_ES_EXTERNALS = EXTERNAL.concat(/@babel\/runtime/);

const plugins = [
  postcss({
    extract: true,
    plugins: [autoprefixer],
  }),
  babel({
    include: ['src/**/*'],
    babelHelpers: "bundled",
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
]

const OUTPUT_DATA = [
  {
    file: pkg.browser,
    format: 'umd',
  },
  {
    file: pkg.main,
    format: 'cjs',
  },
  {
    file: pkg.module,
    format: 'es',
  },
];

const config = OUTPUT_DATA.map(({ file, format }) => ({
  input: 'src/index.ts',
  output: {
    name: '3-design',
    file,
    format,
    globals,
  },
  external: ['cjs', 'es'].includes(format) ? CJS_AND_ES_EXTERNALS : EXTERNAL,
  plugins,
}));

export default config;
