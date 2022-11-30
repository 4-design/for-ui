import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import { fsx } from '../system/fsx';

export const sizes = {
  xs: 'xs',
  s: 's',
  r: 'r',
  xr: 'xr',
  l: 'l',
  xl: 'xl',
} as const;

export type Size = typeof sizes[keyof typeof sizes];

type Weight = 'inherit' | 'regular' | 'bold';

type Typeface = 'inherit' | 'sansSerif' | 'monospaced';

const style = (size: Size, weight: Weight, typeface: Typeface): string => {
  return fsx(
    {
      inherit: ``,
      regular: `font-normal`,
      bold: `font-bold`,
    }[weight],
    {
      inherit: ``,
      sansSerif: `font-sans`,
      monospaced: `font-mono`,
    }[typeface],
    {
      xs: `text-xs`,
      s: `text-s`,
      r: `text-r`,
      xr: `text-xr`,
      l: `text-l`,
      xl: `text-xl`,
    }[size]
  );
};

export type TextProps<P extends ElementType> = ComponentPropsWithoutRef<P> & {
  /**
   * レンダリングするコンポーネントを指定 (例: h1, p, strong)
   * @default span
   */
  as?: P;

  /**
   * テキストのサイズを指定
   * @default r
   */
  size?: Size;

  /**
   * 表示するテキストのウェイトを指定
   * @default inherit
   */
  weight?: Weight;

  /**
   * 表示する書体の種別を指定
   * @default inherit
   */
  typeface?: Typeface;

  className?: string;

  /**
   * 文字列またはstrong等のコンポーネント (HTML的にvalidになるようにしてください)
   */
  children: ReactNode;
};

export const Text = <P extends ElementType = 'span'>({
  as,
  size = 'r',
  weight = 'inherit',
  typeface = 'inherit',
  className,
  children,
  ...rests
}: TextProps<P>): JSX.Element => {
  const Component = as || 'span';
  return (
    <Component className={fsx(style(size, weight, typeface), className)} {...rests}>
      {children}
    </Component>
  );
};
