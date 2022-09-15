// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme')
const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette')
const { default: toColorValue } = require('tailwindcss/lib/util/toColorValue')
const {
  default: withAlphaVariable,
} = require('tailwindcss/lib/util/withAlphaVariable')

const plugin = require('tailwindcss/plugin')

// fontSizes is separeted for the legacy support of fontSizes.
// Once repalcing done, this should be written in config directly.

const colors = {
  shade: {
    text: {
      dark: {
        default: 'var(--shade-text-dark-default)',
        disabled: 'var(--shade-text-dark-disabled)',
      },
      medium: {
        default: 'var(--shade-text-medium-default)',
        active: 'var(--shade-text-medium-active)',
      },
      light: {
        default: 'var(--shade-text-light-default)',
        disabled: 'var(--shade-text-light-disabled)',
      },
      white: {
        default: 'var(--shade-text-white-default)',
        disabled: 'var(--shade-text-white-disabled)',
      },
    },

    background: {
      dark: {
        default: 'var(--shade-background-dark-default)',
        hover: 'var(--shade-background-dark-hover)',
        disabled: 'var(--shade-background-dark-disabled)',
      },
      medium: {
        default: 'var(--shade-background-medium-default)',
        disabled: 'var(--shade-background-medium-disabled)',
      },
      light: {
        default: 'var(--shade-background-light-default)',
        hover: 'var(--shade-background-light-hover)',
      },
      white: {
        default: 'var(--shade-background-white-default)',
        hover: 'var(--shade-background-white-hover)',
        active: 'var(--shade-background-white-active)',
        disabled: 'var(--shade-background-white-disabled)',
      },
    },

    border: {
      dark: {
        default: 'var(--shade-border-dark-default)',
        hover: 'var(--shade-border-dark-hover)',
        disabled: 'var(--shade-border-dark-disabled)',
      },
      medium: {
        default: 'var(--shade-border-medium-default)',
        active: 'var(--shade-border-medium-active)',
        disabled: 'var(--shade-border-medium-disabled)',
      },
      light: {
        default: 'var(--shade-border-light-default)',
        active: 'var(--shade-border-light-active)',
      },
    },

    icon: {
      dark: {
        default: 'var(--shade-icon-dark-default)',
        disabled: 'var(--shade-icon-dark-disabled)',
      },
      medium: {
        default: 'var(--shade-icon-medium-default)',
        active: 'var(--shade-icon-medium-active)',
      },
      light: {
        default: 'var(--shade-icon-light-default)',
        hover: 'var(--shade-icon-medium-hover)',
      },
      white: {
        default: 'var(--shade-icon-white-default)',
      },
    },
  },

  // TODO
  primary: {
    text: {
      dark: {
        default: 'var(--primary-text-dark-default)',
        hover: 'var(--primary-text-dark-hover)',
        disabled: 'var(--primary-text-dark-disabled)',
      },
      medium: {
        default: 'var(--primary-text-medium-default)',
      },
      light: {
        default: 'var(--primary-text-light-default)',
      },
      white: {
        default: 'var(--primary-text-white-default)',
        hover: 'var(--primary-text-white-hover)',
        disabled: 'var(--primary-text-white-disabled)',
      },
    },

    background: {
      dark: {
        default: 'var(--primary-background-dark-default)',
        hover: 'var(--primary-background-dark-hover)',
        disabled: 'var(--primary-background-dark-disabled)',
        active: 'var(--primary-background-dark-active)',
      },
      medium: {
        default: 'var(--primary-background-medium-default)',
      },
      light: {
        default: 'var(--primary-background-light-default)',
      },
      white: {
        default: 'var(--primary-background-white-default)',
        hover: 'var(--primary-background-white-hover)',
        disabled: 'var(--primary-background-white-disabled)',
      },
    },

    border: {
      dark: {
        default: 'var(--primary-border-dark-default)',
        hover: 'var(--primary-border-dark-hover)',
        disabled: 'var(--primary-border-dark-disabled)',
      },
      medium: {
        active: 'var(--primary-border-medium-active)',
      },
    },

    icon: {
      dark: {
        default: 'var(--primary-icon-dark-default)',
        hover: 'var(--primary-icon-dark-hover)',
        disabled: 'var(--primary-icon-dark-disabled)',
      },
      white: {
        default: 'var(--primary-icon-white-default)',
        hover: 'var(--primary-icon-white-hover)',
        disabled: 'var(--primary-icon-white-disabled)',
      },
    },
  },

  secondary: {
    text: {
      dark: {
        default: 'var(--secondary-text-dark-default)',
        disabled: 'var(--secondary-text-dark-disabled)',
      },
    },
    background: {
      dark: {
        default: 'var(--secondary-background-dark-default)',
        disabled: 'var(--secondary-background-dark-disabled)',
      },
    },
    border: {
      dark: {
        default: 'var(--secondary-border-dark-default)',
      },
      medium: {
        active: 'var(--secondary-border-medium-active)',
      },
    },
  },

  negative: {
    text: {
      medium: {
        default: 'var(--negative-text-medium-default)',
      },
      light: {
        default: 'var(--negative-text-light-default)',
      },
    },
    background: {
      medium: {
        default: 'var(--negative-background-medium-default)',
      },
      light: {
        default: 'var(--negative-background-light-default)',
        hover: 'var(--negative-background-light-hover)',
      },
    },
    border: {
      medium: {
        default: 'var(--negative-border-medium-default)',
      },
    },
    icon: {
      medium: {
        default: 'var(--negative-icon-medium-default)',
        hover: 'var(--negative-icon-medium-hover)',
      },
    },
  },

  positive: {
    text: {
      medium: {
        default: 'var(--postive-text-medium-default)',
      },
      light: {
        default: 'var(--positive-text-light-default)',
      },
    },
    background: {
      medium: {
        default: 'var(--positive-background-medium-default)',
      },
      light: {
        default: 'var(--positive-background-light-default)',
      },
    },
    border: {
      medium: {
        default: 'var(--positive-border-medium-default)',
      },
      light: {
        default: 'var(--positive-border-light-default)',
      },
    },
    icon: {
      medium: {
        default: 'var(--positive-icon-medium-default)',
      },
      light: {
        default: 'var(--positive-icon-light-default)',
      },
    },
  },

  notice: {
    text: {
      medium: {
        default: 'var(--notice-text-medium-default)',
      },
      light: {
        default: 'var(--notice-text-light-default)',
      },
    },
    background: {
      medium: {
        default: 'var(--notice-background-medium-default)',
      },
      light: {
        default: 'var(--notice-background-light-default)',
      },
    },
    border: {
      medium: {
        default: 'var(--notice-border-medium-default)',
      },
      light: {
        default: 'var(--notice-border-light-default)',
      },
    },
    icon: {
      medium: {
        default: 'var(--notice-icon-medium-default)',
      },
      light: {
        default: 'var(--notice-icon-light-default)',
      },
    },
  },

  informative: {
    text: {
      medium: {
        default: 'var(--informative-text-medium-default)',
      },
    },
    background: {
      medium: {
        default: 'var(--informative-background-medium-default)',
      },
    },
    border: {
      medium: {
        default: 'var(--informative-border-medium-default)',
      },
    },
    icon: {
      medium: {
        default: 'var(--informative-icon-medium-default)',
      },
    },
  },
}

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
    '1.25rem',
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
  plugins: [
    plugin(function ({ matchUtilities, theme, corePlugins }) {
      matchUtilities(
        {
          icon: (value) => {
            if (!corePlugins('iconOpacity')) {
              return {
                color: toColorValue(value),
              }
            }

            return withAlphaVariable({
              color: value,
              property: 'color',
              variable: '--tw-color-opacity',
            })
          },
        },
        { values: flattenColorPalette(theme('iconColor')), type: 'color' }
      )
    }),
  ],
  theme: {
    textColor: {
      transparent: 'transparent',
      shade: colors.shade.text,
      primary: colors.primary.text,
      secondary: colors.secondary.text,
      negative: colors.negative.text,
      positive: colors.positive.text,
      notice: colors.notice.text,
      informative: colors.notice.text,
    },
    backgroundColor: {
      transparent: 'transparent',
      shade: colors.shade.background,
      primary: colors.primary.background,
      secondary: colors.secondary.background,
      negative: colors.negative.background,
      positive: colors.positive.background,
      notice: colors.notice.background,
      informative: colors.notice.background,
    },
    borderColor: {
      transparent: 'transparent',
      shade: colors.shade.border,
      primary: colors.primary.border,
      secondary: colors.secondary.border,
      negative: colors.negative.border,
      positive: colors.positive.border,
      notice: colors.notice.border,
      informative: colors.notice.border,
    },
    iconColor: {
      transparent: 'transparent',
      shade: colors.shade.icon,
      primary: colors.primary.icon,
      secondary: colors.secondary.icon,
      positive: colors.positive.icon,
      notice: colors.notice.icon,
      informative: colors.notice.icon,
      negative: colors.negative.icon,
    },
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
    extend: {
      borderRadius: {
        modal: '2rem',
      },
      borderWidth: {
        3: '3px',
        7: '7px',
      },
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
        164: '41rem',
        168: '42rem',
        172: '43rem',
        176: '44rem',
        180: '45rem',
        184: '46rem',
        188: '47rem',
        192: '48rem',
        196: '49rem',
        200: '50rem',
      },
      height: {
        'max-content': 'max-content',
      },
      minWidth: {
        16: '4rem',
        20: '5rem',
        24: '6rem',
        28: '7rem',
        32: '8rem',
        36: '9rem',
        40: '10rem',
      },
      fontSize: {
        'icon-18': '18px !important',
        'icon-24': '24px !important',
        'icon-36': '36px !important',
        'icon-48': '48px !important',
        'icon-64': '64px !important',
        'icon-92': '92px !important',
      },
      boxShadow: {
        xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
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
        menu: '0px 6px 32px rgba(82, 95, 95, 0.12)',
        modal: '0px 8px 32px rgba(0, 0, 0, 0.05)',
      },
      fontFamily: {
        sans: [
          'YakuHanJP',
          'Inter',
          'Noto Sans JP',
          ...defaultTheme.fontFamily.sans,
        ],
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
      outline: {
        focus: ['1px solid var(--primary-border-dark-default)', '1px'],
      },
      zIndex: {
        '-1': '-1',
        table: '900',
        header: '1100',
        sidebar: '1100',
        modal: '1300',
        toast: '1400',
        tooltip: '1500',
      },
      transitionProperty: {
        width: 'width',
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
