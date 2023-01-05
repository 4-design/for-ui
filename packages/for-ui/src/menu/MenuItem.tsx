import { forwardRef, ReactNode } from 'react';
import MuiMenuItem, { MenuItemProps as MuiMenuItemProps } from '@mui/material/MenuItem';
import { fsx } from '../system/fsx';
import { Text } from '../text';

export type MenuItemProps = Omit<MuiMenuItemProps, 'divider'> & {
  /**
   * アイコンを表示したい場合にreact-iconsのアイコンや画像を指定
   */
  icon?: ReactNode;

  /**
   * MenuItemに説明を追加したい場合に指定
   */
  description?: ReactNode;

  /**
   * 操作の意図を示す場合に指定
   *
   * 通常、コンテンツの削除など取り返しのつかないユーザーの操作を赤色で表示しますが、その場合intentionにnegativeを設定してください。
   *
   * @default 'shade'
   */
  intention?: 'shade' | 'negative';

  className?: string;
};

export const MenuItem = forwardRef<HTMLLIElement, MenuItemProps>(
  ({ icon, description, intention = 'shade', disabled, className, children, ...rest }, ref) => (
    <MuiMenuItem
      disableRipple
      ref={ref}
      disabled={disabled}
      classes={{
        root: fsx([
          `bg-shade-white-default text-r hover:bg-shade-white-hover whitespace-nowrap px-4 py-1 font-sans flex flex-row gap-2 focus-visible:bg-shade-white-active items-start`,
          icon && `pl-2`,
          {
            shade: `text-shade-dark-default`,
            negative: `text-negative-medium-default`,
          }[intention],
          disabled && `text-shade-dark-disabled opacity-100 [&.opacity-100]:opacity-100`,
          className,
        ]),
      }}
      {...rest}
    >
      {icon && (
        <figure
          className={fsx([
            `h-4 w-4 [&>svg]:h-full [&>svg]:w-full my-1 shrink-0`,
            {
              shade: `[&_svg]:fill-shade-medium-default`,
              negative: `[&_svg]:fill-negative-medium-default`,
            }[intention],
            disabled && `[&_svg]:fill-shade-medium-disabled`,
          ])}
        >
          {icon}
        </figure>
      )}
      <Text className={fsx(`flex flex-col`)}>
        <Text className={fsx(`whitespace-pre-wrap`)}>{children}</Text>
        <Text
          className={fsx([
            `text-s text-shade-medium-default whitespace-pre-wrap`,
            disabled && `text-shade-dark-disabled`,
          ])}
        >
          {description}
        </Text>
      </Text>
    </MuiMenuItem>
  )
);
