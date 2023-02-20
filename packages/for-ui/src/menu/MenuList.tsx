import { forwardRef, ElementType, Ref } from 'react';
import MuiMenuList, { MenuListProps as MuiMenuListProps } from '@mui/material/MenuList';
import { fsx } from '../system/fsx';
import { style } from './style';

export type MenuListProps<P extends ElementType = 'ul'> = MuiMenuListProps<P> & {
  /**
   * レンダリングするコンポーネントを指定 (例: h1, p, strong)
   * @default span
   */
  as?: P;

  ref?: Ref<P | null>;
};

const _MenuList = <P extends ElementType = 'ul'>({
  as,
  className,
  _ref,
  ...rest
}: MenuListProps<P> & {
  _ref: Ref<P | null | unknown>;
}) => <MuiMenuList component={as || 'ul'} inputRef={_ref} className={fsx(style, className)} {...rest} />;

export const MenuList = forwardRef((props, ref) => <_MenuList _ref={ref} {...props} />) as unknown as <
  P extends ElementType = 'ul'
>(
  props: MenuListProps<P>
) => JSX.Element;
