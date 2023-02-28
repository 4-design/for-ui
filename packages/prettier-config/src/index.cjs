module.exports = {
  trailingComma: 'all', // default to `all` in v3
  printWidth: 120,
  singleQuote: true,
  plugins: [
    // for prettifying shellscript, Dockerfile, properties, gitignore, dotenv
    require('prettier-plugin-sh'),
    // for sort fields in package.json
    require('prettier-plugin-pkg'),
    // for sorting imports
    require('@trivago/prettier-plugin-sort-imports'),
  ],
  importOrder: [
    // TODO: Sort side effects on the top
    // See more: https://github.com/trivago/prettier-plugin-sort-imports/issues/110
    // React and Next.
    '^react(-dom)?$',
    '^next(/.*|$)',
    // Anything not matched in other groups.
    '<THIRD_PARTY_MODULES>',
    // Things that start with `@` or digit or underscore.
    '^(@|\\d|_)',
    // Anything that starts with a dot, or multiple dots, and doesn't have the "other files" extensions.
    '^(?=\\.+)(.(?!\\.(graphql|css|png|svg|jpe?g|webp|avif|wasm|mp4|webm)))+$',
    // Other files with extensions.
    '^.+\\.(graphql|css|png|svg|jpe?g|webp|avif|wasm|mp4|webm)$',
  ],
  importOrderSeparation: false, // import order groups won't be separated by a new line
  importOrderSortSpecifiers: true, // sorts the import specifiers alphabetically
  importOrderCaseInsensitive: true, // case-insensitive sorting
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
};
