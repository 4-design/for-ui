import React from 'react'
import tw, { TwStyle } from 'twin.macro'

export const sizes = {
  xs: 'xs',
  s: 's',
  r: 'r',
  l: 'l',
  xl: 'xl',
} as const

export type Size = typeof sizes[keyof typeof sizes]

// See https://www.figma.com/file/6lYya5bf9katRbZsIFZTYv/3design?node-id=1833%3A4192
// In tailwind.css, 1rem = 16px
export const texts: { [key in Size]: TwStyle } = {
  xs: tw`text-xs`,
  s: tw`text-s`,
  r: tw`text-r`,
  l: tw`text-l`,
  xl: tw`text-xl`,
}

export const variants = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'subtitle1',
  subtitle2: 'subtitle2',
  p: 'p',
  body1: 'body1',
  body2: 'body2',
  span: 'span',
  caption: 'caption',
} as const

export type Variant = typeof variants[keyof typeof variants]

interface Props {
  twin?: TwStyle
  className?: TwStyle | TwStyle[]
  variant?: Variant
  bold?: boolean
  children: React.ReactNode
  disabled?: boolean
}

const mapVariantToTag: { [key in Variant]: React.ElementType } = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  p: 'p',
  body1: 'p',
  body2: 'p',
  span: 'span',
  caption: 'span',
} as const

export const typographyStyles: { [key in Variant]: TwStyle } = {
  [variants.h1]: tw`font-bold text-xl text-high`,
  [variants.h2]: tw`font-bold text-xl text-middle`,
  [variants.h3]: tw`font-bold text-l text-high`,
  [variants.h4]: tw`font-bold text-l text-middle`,
  [variants.h5]: tw`font-bold text-r text-high`,
  [variants.h6]: tw`font-bold text-r text-middle`,
  [variants.subtitle1]: tw`text-l text-high`,
  [variants.subtitle2]: tw`text-l text-middle`,
  [variants.p]: tw`text-r text-high`,
  [variants.body1]: tw`text-r text-high`,
  [variants.body2]: tw`text-r text-middle`,
  [variants.span]: tw`text-r text-middle`,
  [variants.caption]: tw`text-s text-middle`,
} as const

export const Typography: React.FC<Props> = ({
  className,
  twin,
  children,
  bold = false,
  variant = 'p',
  disabled = false,
}) => {
  const ElementType: React.ElementType = mapVariantToTag[variant]
  return (
    <ElementType
      css={[
        typographyStyles[variant],
        tw`relative`,
        bold && tw`font-bold`,
        disabled && tw`text-disabled`,
        twin,
        className,
      ]}
    >
      {children}
    </ElementType>
  )
}

export const Text = Typography
