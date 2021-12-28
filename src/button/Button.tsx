import React, { Children, ReactNode } from 'react'
import LoadingButton, { LoadingButtonProps } from '@mui/lab/LoadingButton'
import tw, { css, TwStyle } from 'twin.macro'

export interface ButtonProps extends Omit<LoadingButtonProps, 'color'> {
  twin?: TwStyle[]
  color?: 'primary' | 'default' | 'danger'
}

const sizes: TwStyle = {
  large: tw`(px-6 py-2 text-r)!`,
  medium: tw`(px-4 py-1 text-s)!`,
  small: tw`(px-2 py-0 text-s hover:bg-transparent)!`,
}

const styles = {
  contained: css`
    ${tw`text-primary-white-default bg-primary-dark-default`}
    &:hover {
      ${tw`text-primary-white-default bg-primary-dark-hover`}
    }
    &.Mui-disabled {
      ${tw`text-primary-white-disabled bg-primary-dark-disabled`},
    }
    .MuiLoadingButton-loadingIndicator {
      ${tw`text-primary-dark-default!`}
    }
    &.MuiLoadingButton-loadingIndicatorStart {
      ${tw`text-primary-white-disabled!`}
    }
    &.MuiLoadingButton-loadingIndicatorEnd {
      ${tw`text-primary-white-disabled!`}
    }
  `,

  outlined: css`
    ${tw`bg-primary-white-default text-primary-dark-default border-primary-dark-default`}
    &:hover {
      ${tw`bg-primary-white-hover text-primary-dark-hover border-primary-dark-hover`}
    }
    &.Mui-disabled {
      ${tw`bg-primary-white-disabled text-primary-dark-disabled border-primary-dark-disabled`}
    }
    .MuiLoadingButton-loadingIndicator {
      ${tw`text-primary-dark-default!`}
    }
  `,

  text: css`
    ${tw`text-primary-dark-default bg-primary-white-default`}
    &:hover {
      ${tw`text-primary-dark-hover bg-primary-white-hover`}
    }
    &.Mui-disabled {
      ${tw`text-primary-dark-disabled bg-primary-white-disabled`}
    }
    .MuiLoadingButton-loadingIndicator {
      ${tw`text-primary-dark-default!`}
    }
  `,
}

const loadingPositionCenterStyle = css`
  &.Mui-disabled {
    ${tw`text-transparent`}
  }
`

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
    variant = 'contained',
    size = 'large',
    loadingPosition = 'center',
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
      loadingPosition={loadingPosition}
      disabled={disabled}
      onClick={onClick}
      aria-label={label || props['aria-label'] || 'button'}
      css={[
        tw`
        (h-max-content max-w-max px-6 py-2
        flex text-r font-medium font-sans rounded-lg cursor-pointer shadow-none transition whitespace-nowrap
        disabled:cursor-not-allowed
        hover:shadow-none focus:outline-none)!`,
        styles[`${variant}`],
        pending && loadingPosition === 'center' && loadingPositionCenterStyle,
        sizes[size],
        twin,
      ]}
      {...rest}
    >
      {children}
    </LoadingButton>
  )
}
