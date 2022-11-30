import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import { fsx } from '../system/fsx';

type WithInherit<T> = T | 'inherit';

type Size = 'xs' | 's' | 'r' | 'xr' | 'l' | 'xl';

type Weight = 'regular' | 'bold';

type Typeface = 'sansSerif' | 'monospaced';

const style = (size: WithInherit<Size>, weight: WithInherit<Weight>, typeface: WithInherit<Typeface>): string => {
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
      inherit: ``,
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
   * @default inherit
   */
  size?: WithInherit<Size>;

  /**
   * 表示するテキストのウェイトを指定
   * @default inherit
   */
  weight?: WithInherit<Weight>;

  /**
   * 表示する書体の種別を指定
   * @default inherit
   */
  typeface?: WithInherit<Typeface>;

  className?: string;

  /**
   * 文字列またはstrong等のコンポーネント (HTML的にvalidになるようにしてください)
   */
  children: ReactNode;
};

export const Text = <P extends ElementType = 'span'>({
  as,
  size = 'inherit',
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
