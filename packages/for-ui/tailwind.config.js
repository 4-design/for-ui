module.exports = {
  important: ':is(#root, #storybook-root, #storybook-docs, body)',
  presets: [require('./tailwind.config.base.js')],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
};
