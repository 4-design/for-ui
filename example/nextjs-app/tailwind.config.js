module.exports = {
  important: ':is(#__next, .MuiPopover-root)',
  presets: [require('@4design/for-ui/tailwind.config.base.js')],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@4design/for-ui/dist/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
