require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  reportUnusedDisableDirectives: true,
  ignorePatterns: [
    '!.*', // Don't ignore dot-files because by default ESLint ignore dot-files (except for .eslintrc.*) and dot-folders
  ],
  overrides: [
    {
      files: '*.{,c,m}{j,t}s{,x}',
      parser: '@typescript-eslint/parser',
      extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
      plugins: ['sonarjs', 'unicorn', 'promise', 'import', 'unused-imports'],
      rules: {
        // Disallows if statements as the only statement in else blocks
        // https://eslint.org/docs/rules/no-lonely-if
        'no-lonely-if': 'error',
        // Disallows the use of console
        // https://eslint.org/docs/rules/no-console
        'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
        // Requires method and property shorthand syntax for object literals
        // https://eslint.org/docs/rules/object-shorthand
        'object-shorthand': ['error', 'always'],
        // Disallows loops with a body that allows only one iteration
        // https://eslint.org/docs/rules/no-unreachable-loop
        'no-unreachable-loop': 'error',
        'sonarjs/no-one-iteration-loop': 'off', // similar to 'no-unreachable-loop' but reports less cases
        'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],

        'sonarjs/no-unused-collection': 'error',
        'sonarjs/no-identical-conditions': 'error',
        'sonarjs/no-inverted-boolean-check': 'error',
        'sonarjs/no-use-of-empty-return-value': 'error',
        'sonarjs/no-gratuitous-expressions': 'error',
        'sonarjs/no-nested-switch': 'error',
        'unicorn/no-lonely-if': 'error',
        'sonarjs/no-collapsible-if': 'off', // same as 'unicorn/no-lonely-if'
        'unicorn/filename-case': 'off',
        'unicorn/no-array-push-push': 'error',
        'unicorn/no-instanceof-array': 'error',
        'unicorn/no-empty-file': 'error',
        'unicorn/no-useless-fallback-in-spread': 'error',
        'unicorn/prefer-array-find': 'error',
        'unicorn/no-useless-spread': 'error',
        'unicorn/prefer-includes': 'error',

        'no-else-return': ['error', { allowElseIf: false }],
        'promise/no-nesting': 'error',

        'import/no-default-export': 'error',
        'import/prefer-default-export': 'off', // disable opposite of 'import/no-default-export'
        'import/order': [
          'error',
          {
            groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
            pathGroupsExcludedImportTypes: ['react'],
            pathGroups: [
              {
                pattern: 'react',
                group: 'builtin',
                position: 'before',
              },
              {
                pattern: '/**',
                group: 'internal',
                position: 'after',
              },
            ],
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
          },
        ],

        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
        'unused-imports/no-unused-vars': [
          'warn',
          {
            vars: 'all',
            varsIgnorePattern: '^_',
            args: 'after-used',
            argsIgnorePattern: '^_',
          },
        ],
      },
      settings: {
        'import/extensions': ['.ts', '.tsx'],
        'import/resolver': {
          typescript: {},
        },
      },
    },
    {
      files: ['vite.config.ts', 'jest.config.js', '*.d.ts'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
};
