import { ElementType, HTMLAttributes, ReactNode } from 'react';
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

const style = (size: Size): string =>
  ({
    xs: clsx(`text-xs`),
    s: clsx(`text-s`),
    r: clsx(`text-r`),
    xr: clsx(`text-xr`),
    l: clsx(`text-l`),
    xl: clsx(`text-xl`),
  }[size]);

export interface TextProps<P extends ElementType> extends HTMLAttributes<P> {
  /** レンダリングするコンポーネントを指定 (例: h1, p, strong)
   * @default span */
  as?: P;

  /** テキストのサイズを指定
   * @default r */
  size?: Size;

  className?: string;

  /** 文字列またはstrong等のコンポーネント (HTML的にvalidになるようにしてください) */
  children?: ReactNode;
}

export const Text = <P extends ElementType>({ as, className, children, size = 'r' }: TextProps<P>): JSX.Element => {
  const Component: ElementType = as || 'span';
  return <Component className={clsx(style(size), className)}>{children}</Component>;
};
