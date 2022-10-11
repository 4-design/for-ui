module.exports = {
  important: '#__next',
  presets: [require('@4design/for-ui/tailwind.config.base.js')],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
