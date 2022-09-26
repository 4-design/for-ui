module.exports = {
  env: {
    browser: true,
  },
  overrides: [
    {
      files: '*.{,c,m}{j,t}s{,x}',
      extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:tailwindcss/recommended',
        'prettier',
      ],
      rules: {
        'react/display-name': 'off',
        'react/jsx-curly-brace-presence': 'error',
        'jsx-a11y/anchor-is-valid': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'react/react-in-jsx-scope': 'off', // import of React is no longer required starting from react@17
        'tailwindcss/no-custom-classname': 'off',
      },
    },
    {
      files: [
        '**/pages/**', // Next.js pages directory use default export
        '*.stories.tsx',
        'next.config.{,c,m}{j,t}s',
      ],
      rules: {
        'import/no-default-export': 'off',
      },
    },
    {
      files: ['next.config.mjs'],
      env: {
        node: true,
      },
    },
    {
      files: ['*.tsx'],
      rules: {
        'react/prop-types': 'off',
      },
    },
  ],
};
