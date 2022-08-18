module.exports = {
  important: '#root',
  presets: [require('@3-shake/3design-ui/tailwind.config.js')],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  //   theme: {
  //     extend: {
  //       backgroundColor: (theme) => ({
  //         ...theme('color'),
  //         primary: colors.primary.background,
  //       }),
  //       borderColor: (theme) => ({
  //         ...theme('color'),
  //         secondary: colors.secondary.border,
  //       }),
  //       boxShadow: (theme) => ({
  //         ...theme('color'),
  //         drawer: '0 0 24px 12px rgba(0, 0, 0, 0.05)',
  //         logo: '0 0 0.5px 0.5px rgba(0, 0, 0, 0.05)',
  //       }),
  //     },
  //   },
}
