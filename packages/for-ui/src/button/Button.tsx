import { forwardRef, ElementType, Children, ReactNode, Ref, ComponentPropsWithoutRef, useMemo } from 'react';
import { LoadingButtonProps } from '@mui/lab/LoadingButton';
import MuiButton, { ButtonUnstyledProps as MuiButtonProps } from '@mui/base/ButtonUnstyled';
import { fsx } from '../system/fsx';
import { walkChildren } from '../system/walkChildren';
import { Loader } from '../loader';

// Iterable<ReactNode> seems to contain string but cannot be excluded, so added as sum type.
type Child = Exclude<ReactNode, Iterable<ReactNode>> | string;

export type ButtonProps<As extends ElementType = 'button'> = MuiButtonProps<As> &
  ComponentPropsWithoutRef<As> & {
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

    /**
     * 先頭に表示するアイコンを指定
     *
     * @deprecated childrenを使用してください
     * ```
     * <Button>
     *   <MdEdit />
     *   編集
     * </Button>
     * ```
     */
    startIcon?: ReactNode;

    /**
     * 末尾に表示するアイコンを指定
     *
     * @deprecated childrenを使用してください
     * ```
     * <Button>
     *   編集
     *   <MdEdit />
     * </Button>
     * ```
     */
    endIcon?: ReactNode;

    /**
     * 読み込み中のアイコンを表示する場所を指定
     *
     * @deprecated デザインの仕様変更に伴い表示位置は固定になりました
     */
    loadingPosition?: LoadingButtonProps['loadingPosition'];

    /**
     * colorを指定する場合に指定
     *
     * @deprecated intention propsを使ってください
     */
    color?: 'primary' | 'secondary' | 'default';

    className?: string;
  };

const extractText = (root: ReactNode): string => {
  let ret = '';
  walkChildren(root, (node) => {
    if (typeof node !== 'string') {
      return;
    }
    ret += node;
  });
  return ret;
};

const structures = ['text', 'icon', 'text-icon', 'icon-text'] as const;

type Structure = (typeof structures)[number];

const _Button = <As extends ElementType = 'button'>({
  as,
  variant = 'outlined',
  intention: passedIntention = 'subtle',
  size = 'large',
  disabled = false,
  loading = false,
  startIcon,
  endIcon,
  color,
  children,
  _ref,
  className,
  ...rest
}: ButtonProps<As> & { _ref?: Ref<As> }): JSX.Element => {
  const component = as || 'button';
  const childTexts = useMemo(() => Children.map(children, extractText) || [], [children]);
  const label = childTexts.join('');
  const structure: Structure = useMemo(() => {
    if ((childTexts.at(0) && !childTexts.at(-1)) || (endIcon && children)) {
      return 'text-icon';
    }
    if ((!childTexts.at(0) && childTexts.at(-1)) || (startIcon && children)) {
      return 'icon-text';
    }
    if (!childTexts.at(0) || (startIcon && !children)) {
      return 'icon';
    }
    return 'text';
  }, [startIcon, endIcon, children, childTexts]);

  // Legacy support for color props
  // If not needed, rename the passedIntention to intention.
  const intention =
    {
      primary: 'primary',
      secondary: 'secondary',
      default: 'primary',
      '': '',
    }[color || ''] || passedIntention;

  return (
    <MuiButton<As>
      component={component}
      ref={_ref}
      disabled={disabled || loading}
      aria-label={label || rest['aria-label'] || 'button'}
      aria-busy={loading}
      className={fsx([
        `flex flex-row items-center justify-items-center relative rounded-1.5 font-sans w-fit h-fit outline-none [&_svg]:fill-inherit disabled:cursor-not-allowed`,
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
          filled: `font-bold disabled:bg-shade-dark-disabled disabled:text-shade-white-disabled disabled:fill-shade-dark-disabled`,
          outlined: `font-regular outline outline-1 -outline-offset-1 disabled:bg-shade-dark-disabled disabled:outline-shade-dark-disabled disabled:text-shade-white-disabled disabled:fill-shade-dark-disabled`,
          text: `font-bold disabled:bg-shade-dark-disabled disabled:text-shade-white-disabled disabled:fill-shade-dark-disabled`,
        }[variant],
        {
          subtle: {
            filled: `bg-shade-light-default hover:bg-shade-light-hover focus-visible:bg-shade-light-hover text-shade-medium-default fill-shade-medium-default`,
            outlined: `bg-shade-white-default hover:bg-shade-white-hover focus-visible:bg-shade-white-hover outline-shade-medium-default text-shade-dark-default fill-shade-medium-default`,
            text: `bg-shade-white-default hover:bg-shade-white-hover focus-visible:bg-shade-white-hover text-shade-medium-default fill-shade-medium-default`,
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
      {...(rest as MuiButtonProps<As>)}
    >
      {startIcon}
      {children}
      {endIcon}
      {loading && (
        <div className={fsx(`absolute grid place-items-center inset-0 w-full h-full`)}>
          <Loader className={fsx(`[&:is(svg)]:fill-shade-dark-default [&:is(svg)]:w-6 [&:is(svg)]:h-6`)} />
        </div>
      )}
    </MuiButton>
  );
};

export const Button = forwardRef((props: ButtonProps<ElementType>, ref: Ref<ElementType>) => (
  <_Button _ref={ref} {...props} />
)) as <As extends ElementType = 'button'>(props: ButtonProps<As>) => JSX.Element;
