module.exports = {
  important: ':is(#root, #storybook-root, #storybook-docs)',
  presets: [require('./tailwind.config.base.js')],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
};
