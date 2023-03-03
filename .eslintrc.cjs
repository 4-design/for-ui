module.exports = {
  root: true,
  extends: ['@4design', '@4design/eslint-config/react'],
  env: {
    node: true,
  },
  settings: {
    tailwindcss: {
      // NOTE: eslint の設定はデフォルトに合わせる
      config: 'packages/for-ui/tailwindcss.config.js',
      callees: ['fsx'],
    },
  },
  rules: {},
};
