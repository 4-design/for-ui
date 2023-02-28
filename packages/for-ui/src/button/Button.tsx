import { Children, ComponentPropsWithoutRef, ElementType, forwardRef, ReactNode, Ref } from 'react';
import LoadingButton, { LoadingButtonProps } from '@mui/lab/LoadingButton';
import { fsx } from '../system/fsx';

export type ButtonProps<As extends ElementType> = Omit<
  LoadingButtonProps,
  'href' | 'color' | 'variant' | keyof ComponentPropsWithoutRef<As>
> &
  ComponentPropsWithoutRef<As> & {
    /**
     * 種類を指定
     * _deprecated: contained_
     * @default filled
     */
    variant?: 'filled' | 'contained' | 'outlined' | 'text';

    /**
     * 色を指定
     * @default primary
     */
    color?: 'primary' | 'secondary' | 'default';

    /**
     * サイズを指定
     * @default large
     */
    size?: 'large' | 'medium' | 'small';

    /**
     * レンダリングするコンポーネントを指定 (例: button, a, input)
     * @default button
     */
    as?: As | undefined;

    className?: string;
  };

const sizes = {
  large: `px-6 py-2 text-r`,
  medium: `px-4 py-1 text-s`,
  small: `px-2 py-0 text-s hover:bg-transparent`,
};

const defaultStyles = {
  contained: 'text-shade-white-default bg-primary-dark-default',
  outlined: 'bg-shade-white-default text-primary-dark-default border-primary-dark-default',
  text: 'text-primary-dark-default bg-shade-white-default',
};

const hoverStyles = {
  contained: 'hover:text-shade-white-default hover:bg-primary-dark-hover',
  outlined: 'hover:bg-shade-white-hover hover:text-primary-dark-hover hover:border-primary-dark-hover',
  text: 'hover:text-primary-dark-hover hover:bg-shade-white-hover',
};

const disableStyles = {
  contained: 'text-shade-white-disabled bg-primary-dark-disabled',
  outlined: 'bg-shade-white-disabled text-primary-dark-disabled border-primary-dark-disabled',
  text: 'text-primary-dark-disabled bg-shade-white-disabled',
};

const loadingIndicatorStyles = {
  contained: 'text-primary-dark-default',
  outlined: 'text-primary-dark-default',
  text: 'text-primary-dark-default',
};

const loadingIndicatorStartStyles = {
  contained: 'text-shade-white-disabled',
  outlined: '',
  text: '',
};

const loadingIndicatorEndStyles = {
  contained: 'text-shade-white-disabled',
  outlined: '',
  text: '',
};

const _Button = <As extends ElementType = 'button'>({
  as,
  variant = 'filled',
  size = 'large',
  color = 'primary',
  loadingPosition = 'center',
  disabled = false,
  loading = false,
  startIcon,
  endIcon,
  children,
  onClick,
  _ref,
  className,
  ...rest
}: { _ref?: Ref<As> } & ButtonProps<As>): JSX.Element => {
  const label: string = Children.toArray(children).reduce<string>((acc: string, child: ReactNode): string => {
    if (typeof child === 'string' || typeof child === 'number') {
      return acc.concat(child.toString());
    }
    return acc;
  }, '');
  const _ = color;

  const _variant = variant === 'filled' ? 'contained' : variant;

  const component = as || 'button';

  return (
    <LoadingButton
      component={component}
      // FIXME: LoadingButton does not support generic component switch (e.g. Even if set component="a", href prop is invalid).
      // Therefore generic _ref should be casted to HTMLButtonElement.
      ref={_ref as Ref<HTMLButtonElement>}
      variant={_variant}
      startIcon={startIcon}
      endIcon={endIcon}
      loading={loading}
      loadingPosition={loadingPosition}
      disabled={disabled}
      onClick={onClick}
      aria-label={label || rest['aria-label'] || 'button'}
      classes={{
        root: fsx([
          'h-max-content flex max-w-max cursor-pointer whitespace-nowrap rounded-lg px-6 py-2 font-sans font-bold shadow-none transition hover:shadow-none focus:outline-none disabled:cursor-not-allowed',
          defaultStyles[_variant],
          hoverStyles[_variant],
          sizes[size],
          className,
        ]),
        disabled: fsx([disableStyles[_variant], loading && loadingPosition === 'center' && 'text-transparent']),
        loadingIndicator: fsx([loadingIndicatorStyles[_variant]]),
        loadingIndicatorStart: fsx([loadingIndicatorStartStyles[_variant]]),
        loadingIndicatorEnd: fsx([loadingIndicatorEndStyles[_variant]]),
      }}
      {...rest}
    >
      {children}
    </LoadingButton>
  );
};

export const Button = forwardRef((props: ButtonProps<ElementType>, ref: Ref<ElementType>) => (
  <_Button _ref={ref} {...props} />
)) as <As extends ElementType = 'button'>(props: ButtonProps<As>) => JSX.Element;
