import { Children, ElementType, forwardRef, ReactNode, useMemo } from 'react';
import { Loader } from '../loader';
import { ComponentPropsWithAs, Element, Ref } from '../system/componentType';
import { fsx } from '../system/fsx';
import { walkChildren } from '../system/walkChildren';

// Iterable<ReactNode> seems to contain string but cannot be excluded, so added as sum type.
type Child = Exclude<ReactNode, Iterable<ReactNode>> | string;

export type ButtonProps<As extends ElementType = 'button'> = ComponentPropsWithAs<
  {
    /**
     * 種類を指定
     *
     * @default outlined
     */
    variant?: 'filled' | 'outlined' | 'text';

    /**
     * 操作の意図を示す場合に指定
     *
     * 通常、コンテンツの削除など取り返しのつかないユーザーの操作を赤色で表示しますが、その場合intentionにnegativeを設定してください。
     *
     * @default subtle
     */
    intention?: 'subtle' | 'primary' | 'secondary' | 'shade' | 'negative';

    /**
     * サイズを指定
     *
     * @default large
     */
    size?: 'large' | 'medium' | 'small';

    /**
     * レンダリングするコンポーネントを指定 (例: button, a, input)
     *
     * @default button
     */
    as?: As | undefined;

    /**
     * 読み込み中の表示をする場合に指定
     */
    loading?: boolean;

    /**
     * 子要素を指定
     *
     * childrenには2つまでChildを指定でき、テキストのみ、アイコンのみ、アイコンとテキスト、テキストとアイコンを指定できます。
     * それぞれでスタイルが変わります。
     * テキストはTextコンポーネントやspanで囲われていても問題ありません。
     */
    children: Child | [Child, Child];

    disabled?: boolean;

    // onClick?: MouseEventHandler<HTMLElementTagNameMap[As extends keyof HTMLElementTagNameMap ? As : 'button']>;

    className?: string;
  },
  As
>;

const extractText = (root: ReactNode): string => {
  let ret = '';
  walkChildren(root, (node) => {
    if (typeof node === 'string') {
      ret += node;
      return;
    }
    if (typeof node === 'number') {
      ret += `${node}`;
      return;
    }
  });
  return ret;
};

const structures = ['text', 'icon', 'text-icon', 'icon-text'] as const;

type Structure = (typeof structures)[number];

type ButtonComponent = <As extends ElementType = 'button'>(props: ButtonProps<As>) => Element;

export const Button: ButtonComponent = forwardRef(
  <As extends ElementType = 'button'>(
    {
      as,
      variant = 'outlined',
      intention = 'subtle',
      size = 'large',
      loading = false,
      children,
      className,
      disabled,
      onClick,
      ...rest
    }: ButtonProps<As>,
    ref?: Ref<As>,
  ): Element => {
    const Component = as || 'button';
    const childTexts = useMemo(() => Children.map(children, extractText) || [], [children]);
    const structure: Structure = useMemo(() => {
      if (childTexts.at(0) && !childTexts.at(-1)) {
        return 'text-icon';
      }
      if (!childTexts.at(0) && childTexts.at(-1)) {
        return 'icon-text';
      }
      if (!childTexts.at(0)) {
        return 'icon';
      }
      return 'text';
    }, [childTexts]);

    return (
      <Component
        ref={ref}
        type="button"
        disabled={disabled}
        aria-disabled={loading || disabled}
        aria-busy={loading}
        className={fsx([
          `rounded-1.5 focus-visible:shadow-focused relative flex h-fit w-fit shrink-0 flex-row items-center justify-center font-sans outline-none aria-disabled:cursor-not-allowed [&_svg]:fill-inherit`,
          {
            text: {
              large: `px-4 py-2 gap-1`,
              medium: `px-4 py-1 gap-1`,
              small: `px-2 py-0.5 gap-0.5`,
            },
            icon: {
              large: `p-2 gap-1 [&_svg]:w-6 [&_svg]:h-6`,
              medium: `p-1 gap-1 [&_svg]:w-6 [&_svg]:h-6`,
              small: `p-1 gap-1 [&_svg]:w-4 [&_svg]:h-4`,
            },
            'text-icon': {
              large: `pl-4 pr-3 py-2 gap-1 [&_svg]:w-4 [&_svg]:h-4`,
              medium: `pl-4 pr-2 py-1 gap-1 [&_svg]:w-4 [&_svg]:h-4`,
              small: `pl-2 pr-1 py-0.5 gap-0.5 [&_svg]:w-3 [&_svg]:h-3`,
            },
            'icon-text': {
              large: `pl-3 pr-4 py-2 gap-1 [&_svg]:w-4 [&_svg]:h-4`,
              medium: `pl-2 pr-4 py-1 gap-1 [&_svg]:w-4 [&_svg]:h-4`,
              small: `pl-1 pr-2 py-0.5 gap-0.5 [&_svg]:w-3 [&_svg]:h-3`,
            },
          }[structure][size],
          {
            large: `text-r`,
            medium: `text-r`,
            small: `text-s`,
          }[size],
          {
            filled: `font-bold aria-disabled:bg-shade-dark-disabled aria-disabled:text-shade-white-disabled aria-disabled:fill-shade-dark-disabled`,
            outlined: `font-regular outline outline-1 -outline-offset-1 aria-disabled:bg-shade-dark-disabled aria-disabled:outline-shade-dark-disabled aria-disabled:text-shade-white-disabled aria-disabled:fill-shade-dark-disabled`,
            text: `font-bold aria-disabled:bg-shade-dark-disabled aria-disabled:text-shade-white-disabled aria-disabled:fill-shade-dark-disabled`,
          }[variant],
          {
            subtle: {
              filled: [
                `bg-shade-light-default hover:bg-shade-light-hover focus-visible:bg-shade-light-hover text-shade-medium-default fill-shade-medium-default`,
                structure === 'icon' && `fill-shade-dark-default`,
              ],
              outlined: [
                `bg-shade-white-default hover:bg-shade-white-hover focus-visible:bg-shade-white-hover outline-shade-medium-default text-shade-dark-default fill-shade-medium-default`,
                structure === 'icon' && `fill-shade-dark-default`,
              ],
              text: [
                `bg-shade-white-default hover:bg-shade-white-hover focus-visible:bg-shade-white-hover text-shade-medium-default fill-shade-medium-default`,
                structure === 'icon' && `fill-shade-dark-default`,
              ],
            },
            primary: {
              filled: `bg-primary-dark-default hover:bg-primary-dark-hover focus-visible:bg-primary-dark-hover text-shade-white-default fill-shade-white-default`,
              outlined: `bg-shade-white-default hover:bg-shade-white-hover focus-visible:bg-shade-white-hover outline-primary-dark-default text-primary-dark-default fill-primary-dark-default`,
              text: `bg-shade-white-default hover:bg-shade-white-hover focus-visible:bg-shade-white-hover text-primary-dark-default fill-primary-dark-default`,
            },
            secondary: {
              filled: `bg-secondary-dark-default hover:bg-secondary-dark-hover focus-visible:bg-secondary-dark-hover text-shade-white-default fill-shade-white-default`,
              outlined: `bg-shade-white-default hover:bg-shade-white-hover focus-visible:bg-shade-white-hover outline-secondary-dark-default text-secondary-dark-default fill-secondary-dark-default`,
              text: `bg-shade-white-default hover:bg-shade-white-hover focus-visible:bg-shade-white-hover text-secondary-dark-default fill-secondary-dark-default`,
            },
            shade: {
              filled: `bg-shade-dark-default hover:bg-shade-dark-hover text-shade-white-default fill-shade-white-default`,
              outlined: `bg-shade-white-default hover:bg-shade-white-hover outline-shade-dark-default text-shade-dark-default fill-shade-dark-default`,
              text: `bg-shade-white-default hover:bg-shade-white-hover text-shade-dark-default fill-shade-dark-default`,
            },
            negative: {
              filled: `bg-negative-dark-default hover:bg-negative-dark-hover text-shade-white-default fill-shade-white-default`,
              outlined: `bg-shade-white-default hover:bg-shade-white-hover outline-negative-dark-default text-negative-dark-default fill-negative-dark-default`,
              text: `bg-shade-white-default hover:bg-shade-white-hover text-negative-dark-default fill-negative-dark-default`,
            },
          }[intention][variant],
          className,
        ])}
        // FIXME: Avoid unintended type error, maybe MUI's problem?
        {...rest}
        onClick={(e) => {
          if (loading) {
            return;
          }
          onClick?.(e);
        }}
      >
        {children}
        {loading && (
          <div className={fsx(`absolute inset-0 grid h-full w-full place-items-center`)}>
            <Loader
              className={fsx(
                `[&:is(svg):is(svg)]:fill-shade-dark-default [&:is(svg):is(svg)]:h-6 [&:is(svg):is(svg)]:w-6`,
              )}
            />
          </div>
        )}
      </Component>
    );
  },
);
