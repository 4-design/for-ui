const defaultTheme = require('tailwindcss/defaultTheme')

// fontSizes is separeted for the legacy support of fontSizes.
// Once repalcing done, this should be written in config directly.
const fontSizes = {
  xs: [
    '.75rem',
    {
      lineHeight: '1rem',
      letterSpacing: '.03rem',
    },
  ],
  s: [
    '.875rem',
    {
      lineHeight: '1.25rem',
      letterSpacing: '.03rem',
    },
  ],
  r: [
    '1rem',
    {
      lineHeight: '1.5rem',
      letterSpacing: '.03rem',
    },
  ],
  xr: [
    '1.25em',
    {
      lineHeight: '1.75rem',
      letterSpacing: '.03rem',
    },
  ],
  l: [
    '1.5rem',
    {
      lineHeight: '2rem',
      letterSpacing: '.03rem',
    },
  ],
  xl: [
    '2rem',
    {
      lineHeight: '2.5rem',
      letterSpacing: '.03rem',
    },
  ],
}

module.exports = {
  important: true,
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    textColor: (theme) => ({
      ...theme('colors'),
      high: 'var(--text-high)',
      middle: 'var(--text-middle)',
      low: 'var(--text-low)',
      disabled: 'var(--text-disabled)',
      accent: 'var(--text-accent)',
      'accent-dark': 'var(--text-accent-dark)',
      error: 'var(--text-error)',
      info: 'var(--text-info)',
      white: 'var(--text-white)',
    }),
    fontSize: {
      xs: fontSizes.s,
      sm: fontSizes.s,
      base: fontSizes.r,
      lg: fontSizes.l,
      '2xl': fontSizes.xl,
      '3xl': fontSizes.xl,
      '4xl': fontSizes.xl,
      '5xl': fontSizes.xl,
      '6xl': fontSizes.xl,
      '7xl': fontSizes.xl,
      '8xl': fontSizes.xl,
      '9xl': fontSizes.xl,
      ...fontSizes,
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      body: 'var(--background-body)',
      primary: {
        dark: 'var(--bg-primary-dark)',
        main: 'var(--bg-primary-main)',
        light: 'var(--bg-primary-light)',
        bg: 'var(--bg-primary-bg)',
      },
      gray: {
        dark: 'var(--bg-gray-dark)',
        main: 'var(--bg-gray-main)',
        light: 'var(--bg-gray-light)',
        bg: 'var(--bg-gray-bg)',
      },
      error: {
        dark: 'var(--bg-error-dark)',
        main: 'var(--bg-error-main)',
        light: 'var(--bg-error-light)',
      },
    }),
    borderColor: (theme) => ({
      ...theme('colors'),
      high: 'var(--border-high)',
      middle: 'var(--border-middle)',
      low: 'var(--border-low)',
      bg: 'var(--border-bg)',
      accent: 'var(--border-accent)',
      error: 'var(--border-error)',
    }),
    extend: {
      spacing: {
        100: '25rem',
        104: '26rem',
        108: '27rem',
        112: '28rem',
        116: '29rem',
        120: '30rem',
        124: '31rem',
        128: '32rem',
        132: '33rem',
        136: '34rem',
        140: '35rem',
        144: '36rem',
        148: '37rem',
        152: '38rem',
        156: '39rem',
        160: '40rem',
      },
      height: {
        'max-content': 'max-content',
      },
      fontSize: {
        'icon-18': '18px !important',
        'icon-24': '24px !important',
        'icon-36': '36px !important',
        'icon-48': '48px !important',
        'icon-64': '64px !important',
        'icon-92': '92px !important',
      },
      colors: {
        white: '#FFF',
        background: 'var(--background)',
        primary: {
          dark: 'var(--primary-dark)',
          main: 'var(--primary-main)',
          light: 'var(--primary-light)',
          bg: 'var(--primary-bg)',
        },
        gray: {
          // variable
          high: 'var(--gray-high)',
          middle: 'var(--gray-middle)',
          low: 'var(--gray-low)',

          disabled: 'var(--gray-disabled)',
          hover: 'var(--gray-hover)',
          bg: 'var(--gray-bg)',
        },
        info: {
          main: 'var(--info-main)',
          bg: 'var(--info-bg)',
        },
        success: {
          dark: 'var(--success-dark)',
          main: 'var(--success-main)',
          bg: 'var(--success-bg)',
        },
        warning: {
          dark: 'var(--warning-dark)',
          main: 'var(--warning-main)',
          bg: 'var(--warning-bg)',
        },
        error: {
          dark: 'var(--error-dark)',
          main: 'var(--error-main)',
          bg: 'var(--error-bg)',
          disabled: 'var(--error-disabled)',
        },
        alert: {
          bg: '#FFFCC8',
          main: '#F7D928',
        },
      },
      boxShadow: {
        xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        md:
          '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg:
          '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl:
          '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
        focus: '0 0 0 3px rgba(66, 153, 225, 0.5)',
        none: 'none',
        // custom
        main: '0px 12px 23px rgba(191, 71, 0, 0.04)',
        solid: '0 0 0 2px white',
        hover: '0 0 20px -3px rgba(0, 0, 0, 0.15)',
        image: '0 16px 23px 0 rgba(191, 71, 0, 0.06)',
      },
      fontFamily: {
        sans: [
          'YakuHanJP',
          'Open Sans',
          'Noto Sans JP',
          ...defaultTheme.fontFamily.sans,
        ],
        mono: ['Fira Mono', 'Noto Sans JP', ...defaultTheme.fontFamily.mono],
      },
      gridTemplateColumns: {
        'auto-1': 'repeat(auto-fill, minmax(80px, 1fr))',
        'auto-2': 'repeat(auto-fill, minmax(120px, 1fr))',
        'auto-3': 'repeat(auto-fill, minmax(160px, 1fr))',
        'auto-4': 'repeat(auto-fill, minmax(240px, 1fr))',
        'auto-5': 'repeat(auto-fill, minmax(320px, 1fr))',
        ...defaultTheme.gridTemplateColumns,
      },
      transformOrigin: {
        0: '0%',
      },
      opacity: {
        disabled: '.4',
      },
      zIndex: {
        '-1': '-1',
        header: '1100',
        sidebar: '1100',
        modal: '1300',
        toast: '1400',
        tooltip: '1500',
      },
    },
  },
  variants: {
    backgroundColor: ['hover', 'focus', 'disabled', 'checked', 'active'],
    borderColor: ['hover', 'focus', 'focus-within', 'disabled'],
    borderWidth: ['hover', 'focus', 'checked'],
    boxShadow: ['hover', 'focus'],
    placeholderColor: ['focus', 'focus-within'],
    cursor: ['disabled'],
    textColor: ['hover', 'focus', 'disabled'],
    opacity: ['hover', 'disabled'],
  },
}
