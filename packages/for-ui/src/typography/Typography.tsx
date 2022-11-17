import React from 'react';
import clsx from 'clsx';

export const sizes = {
  xs: 'xs',
  s: 's',
  r: 'r',
  xr: 'xr',
  l: 'l',
  xl: 'xl',
} as const;

export type Size = typeof sizes[keyof typeof sizes];

// See https://www.figma.com/file/6lYya5bf9katRbZsIFZTYv/3design?node-id=1833%3A4192
// In tailwind.css, 1rem = 16px
export const texts: { [key in Size]: string } = {
  xs: clsx(`text-xs`),
  s: clsx`text-s`,
  r: clsx`text-r`,
  xr: clsx`text-xr`,
  l: clsx`text-l`,
  xl: clsx`text-xl`,
};

export const variants = {
  h1: `h1`,
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
} as const;

export type Variant = typeof variants[keyof typeof variants];

interface Props {
  className?: string;
  variant?: Variant;
  bold?: boolean;
  children: React.ReactNode;
  disabled?: boolean;
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
} as const;

export const typographyStyles: { [key in Variant]: string } = {
  [variants.h1]: clsx`font-bold text-xl text-shade-dark-default`,
  [variants.h2]: clsx`font-bold text-xl text-shade-medium-default`,
  [variants.h3]: clsx`font-bold text-l text-shade-dark-default`,
  [variants.h4]: clsx`font-bold text-l text-shade-medium-default`,
  [variants.h5]: clsx`font-bold text-r text-shade-dark-default`,
  [variants.h6]: clsx`font-bold text-r text-shade-medium-default`,
  [variants.subtitle1]: clsx`text-l text-shade-dark-default`,
  [variants.subtitle2]: clsx`text-l text-shade-medium-default`,
  [variants.p]: clsx`text-r text-shade-dark-default`,
  [variants.body1]: clsx`text-r text-shade-dark-default`,
  [variants.body2]: clsx`text-r text-shade-medium-default`,
  [variants.span]: clsx`text-r text-shade-medium-default`,
  [variants.caption]: clsx`text-s text-shade-medium-default`,
} as const;

export const LegacyTypography: React.FC<Props> = ({
  className,
  children,
  bold = false,
  variant = 'p',
  disabled = false,
}) => {
  const ElementType: React.ElementType = mapVariantToTag[variant];
  return (
    <ElementType
      className={clsx([
        `relative font-sans`,
        typographyStyles[variant],
        bold && 'font-bold',
        disabled && 'text-shade-dark-disabled',
        className,
      ])}
    >
      {children}
    </ElementType>
  );
};

export const LegacyText = LegacyTypography;
