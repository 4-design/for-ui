import React, { Children, ReactNode } from 'react'
import LoadingButton, { LoadingButtonProps } from '@mui/lab/LoadingButton'
import tw, { TwStyle } from 'twin.macro'

export interface ButtonProps extends Omit<LoadingButtonProps, 'color'> {
  twin?: TwStyle[]
  color?: 'primary' | 'default' | 'danger'
}

const sizes: TwStyle = {
  large: tw`(px-6 py-2 text-r)!`,
  medium: tw`(px-4 py-2 text-s)!`,
  small: tw`(px-4 py-2 text-s)!`,
}

const styles: TwStyle = {
  contained: tw`(text-primary-white-default bg-primary-dark-default
  hover:text-primary-white-hover hover:bg-primary-dark-hover
  disabled:text-primary-white-disabled disabled:bg-primary-dark-disabled)!`,
  outlined: tw`(text-primary-dark-default bg-primary-white-default border-primary-dark-default
  hover:text-primary-dark-hover hover:bg-primary-white-hover hover:border-primary-dark-hover
  disabled:text-primary-dark-disabled disabled:bg-primary-white-disabled disabled:border-primary-dark-disabled)!`,
  text: tw`(text-primary-dark-default bg-primary-white-default
  hover:text-primary-dark-hover hover:bg-primary-white-hover
  disabled:text-primary-dark-disabled disabled:bg-primary-white-disabled)!`,
}

export const Button: React.VFC<
  ButtonProps & {
    // NOTE: duplicated
    pending?: boolean
  }
> = (props) => {
  const {
    type = 'button',
    // eslint-disable-next-line unused-imports/no-unused-vars
    color = 'primary',
    size = 'large',
    variant = 'contained',
    disabled = false,
    pending = false,
    startIcon,
    endIcon,
    twin,
    children,
    onClick,
    ...rest
  } = props

  const label: string = Children.toArray(props.children).reduce<string>(
    (acc: string, child: ReactNode): string => {
      if (typeof child === 'string' || typeof child === 'number') {
        return acc.concat(child.toString())
      }
      return acc
    },
    ''
  )

  return (
    <LoadingButton
      type={type}
      variant={variant}
      startIcon={startIcon}
      endIcon={endIcon}
      loading={pending}
      disabled={disabled}
      onClick={onClick}
      aria-label={label || props['aria-label'] || 'button'}
      css={[
        tw`
        (h-max-content max-w-max px-6 py-2
        flex text-base font-medium rounded-lg cursor-pointer shadow-none transition whitespace-nowrap
        disabled:cursor-not-allowed
        hover:shadow-none focus:outline-none)!`,
        styles[`${variant}`],
        sizes[size],
        twin,
      ]}
      {...rest}
    >
      {children}
    </LoadingButton>
  )
}
