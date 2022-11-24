import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
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

const style = (size: Size, bold: boolean): string => {
  return clsx(
    `text-shade-dark-default`,
    bold && `font-bold`,
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
   * 太字にする場合は指定 (classNameにfont-boldを指定するのと同値)
   * @default false
   */
  bold?: boolean;

  className?: string;

  /**
   * 文字列またはstrong等のコンポーネント (HTML的にvalidになるようにしてください)
   */
  children?: ReactNode;
}



export const Text = <P extends ElementType>(props: TextProps<P>): JSX.Element => {
  const {
    as: Component = 'span',
    className,
    children,
    size = 'r',
    bold = false,
  } = props;
  return <Component className={clsx(style(size, bold), className)} {...props}>{children}</Component>;
}
