import React, { Children, ReactNode } from 'react';
import LoadingButton, { LoadingButtonProps } from '@mui/lab/LoadingButton';
import clsx from 'clsx';

export type ButtonProps = Omit<LoadingButtonProps, 'color' | 'variant'> & {
  className?: string;

  // NOTE: duplicated "contained"
  variant?: 'filled' | 'contained' | 'outlined' | 'text';

  // duplicated
  color?: 'primary' | 'secondary' | 'default';
};

const sizes = {
  large: `px-6 py-2 text-r`,
  medium: `px-4 py-1 text-s`,
  small: `px-2 py-0 text-s hover:bg-transparent`,
};

const defaultStyles = {
  contained: 'text-primary-white-default bg-primary-dark-default',
  outlined: 'bg-primary-white-default text-primary-dark-default border-primary-dark-default',
  text: 'text-primary-dark-default bg-primary-white-default',
};

const hoverStyles = {
  contained: 'hover:text-primary-white-default hover:bg-primary-dark-hover',
  outlined: 'hover:bg-primary-white-hover hover:text-primary-dark-hover hover:border-primary-dark-hover',
  text: 'hover:text-primary-dark-hover hover:bg-primary-white-hover',
};

const disableStyles = {
  contained: 'text-primary-white-disabled bg-primary-dark-disabled',
  outlined: 'bg-primary-white-disabled text-primary-dark-disabled border-primary-dark-disabled',
  text: 'text-primary-dark-disabled bg-primary-white-disabled',
};

const loadingIndicatorStyles = {
  contained: 'text-primary-dark-default',
  outlined: 'text-primary-dark-default',
  text: 'text-primary-dark-default',
};

const loadingIndicatorStartStyles = {
  contained: 'text-primary-white-disabled',
  outlined: '',
  text: '',
};

const loadingIndicatorEndStyles = {
  contained: 'text-primary-white-disabled',
  outlined: '',
  text: '',
};

export const Button: React.ForwardRefExoticComponent<ButtonProps> = React.forwardRef((props, ref) => {
  const {
    type = 'button',
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
    ...rest
  } = props;

  const label: string = Children.toArray(props.children).reduce<string>((acc: string, child: ReactNode): string => {
    if (typeof child === 'string' || typeof child === 'number') {
      return acc.concat(child.toString());
    }
    return acc;
  }, '');
  const _ = color;

  const _variant = variant === 'filled' ? 'contained' : variant;

  return (
    <LoadingButton
      ref={ref}
      type={type}
      variant={_variant}
      startIcon={startIcon}
      endIcon={endIcon}
      loading={loading}
      loadingPosition={loadingPosition}
      disabled={disabled}
      onClick={onClick}
      aria-label={label || props['aria-label'] || 'button'}
      classes={{
        root: clsx([
          'h-max-content text-r flex max-w-max cursor-pointer whitespace-nowrap rounded-lg px-6 py-2 font-sans font-medium shadow-none transition hover:shadow-none focus:outline-none disabled:cursor-not-allowed',
          defaultStyles[_variant],
          hoverStyles[_variant],
          sizes[size],
        ]),
        disabled: clsx([disableStyles[_variant], loading && loadingPosition === 'center' && 'text-transparent']),
        loadingIndicator: clsx([loadingIndicatorStyles[_variant]]),
        loadingIndicatorStart: clsx([loadingIndicatorStartStyles[_variant]]),
        loadingIndicatorEnd: clsx([loadingIndicatorEndStyles[_variant]]),
      }}
      {...rest}
    >
      {children}
    </LoadingButton>
  );
});
