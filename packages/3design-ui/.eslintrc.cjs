module.exports = {
  root: true,
  extends: ['@3design', '@3design/eslint-config/react'],
  settings: {
    tailwindcss: {
      // NOTE: eslint の設定はデフォルトに合わせる
      config: '',
    },
  },
  env: {
    node: true,
  },
  rules: {},
};
