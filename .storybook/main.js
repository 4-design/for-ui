const path = require('path')
const toPath = (_path) => path.join(process.cwd(), _path)
const cssVariablesTheme = require('@etchteam/storybook-addon-css-variables-theme')

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-backgrounds',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
    '@etchteam/storybook-addon-css-variables-theme',
  ],
  babel: async (options) => {
    options.plugins.unshift('babel-plugin-twin')
    options.plugins.push([
      '@babel/plugin-proposal-private-property-in-object',
      { loose: true },
    ])
    options.plugins.push('@babel/plugin-proposal-private-methods')
    options.presets.push('@emotion/babel-preset-css-prop')
    return options
  },
  webpackFinal: async (config) => {
    config.module.rules[0].use[0].options.presets = [
      require.resolve('@babel/preset-react'),
      require.resolve('@babel/preset-env'),
      // Emotion preset must run BEFORE reacts preset to properly convert css-prop.
      // Babel preset-ordering runs reversed (from last to first). Emotion has to be after React preset.
      require.resolve('@emotion/babel-preset-css-prop'),
    ]

    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@emotion/core': toPath('node_modules/@emotion/react'),
          '@emotion/styled': toPath('node_modules/@emotion/styled'),
          'emotion-theming': toPath('node_modules/@emotion/react'),
        },
      },
    }
  },
}
