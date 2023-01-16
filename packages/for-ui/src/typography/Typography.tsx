import React from 'react';
import { fsx } from '../system/fsx';

export const sizes = {
  xs: 'xs',
  s: 's',
  r: 'r',
  xr: 'xr',
  l: 'l',
  xl: 'xl',
} as const;

export type Size = (typeof sizes)[keyof typeof sizes];

// See https://www.figma.com/file/6lYya5bf9katRbZsIFZTYv/3design?node-id=1833%3A4192
// In tailwind.css, 1rem = 16px
export const texts: { [key in Size]: string } = {
  xs: fsx(`text-xs`),
  s: fsx`text-s`,
  r: fsx`text-r`,
  xr: fsx`text-xr`,
  l: fsx`text-l`,
  xl: fsx`text-xl`,
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

export type Variant = (typeof variants)[keyof typeof variants];

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
  [variants.h1]: fsx`font-bold text-xl text-shade-dark-default`,
  [variants.h2]: fsx`font-bold text-xl text-shade-medium-default`,
  [variants.h3]: fsx`font-bold text-l text-shade-dark-default`,
  [variants.h4]: fsx`font-bold text-l text-shade-medium-default`,
  [variants.h5]: fsx`font-bold text-r text-shade-dark-default`,
  [variants.h6]: fsx`font-bold text-r text-shade-medium-default`,
  [variants.subtitle1]: fsx`text-l text-shade-dark-default`,
  [variants.subtitle2]: fsx`text-l text-shade-medium-default`,
  [variants.p]: fsx`text-r text-shade-dark-default`,
  [variants.body1]: fsx`text-r text-shade-dark-default`,
  [variants.body2]: fsx`text-r text-shade-medium-default`,
  [variants.span]: fsx`text-r text-shade-medium-default`,
  [variants.caption]: fsx`text-s text-shade-medium-default`,
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
      className={fsx([
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
