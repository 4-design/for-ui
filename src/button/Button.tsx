import { Children, ReactNode } from 'react'
import LoadingButton, {
  LoadingButtonProps,
} from '@mui/lab/LoadingButton'
import tw, { TwStyle } from 'twin.macro'

import capitalize from '../utils/capitalize'

export interface ButtonProps extends Omit<LoadingButtonProps, 'color'> {
  twin?: TwStyle[]
  color?: 'primary' | 'default' | 'danger'
}

const styles: TwStyle = {
  containedDefault: tw`
    (text-white bg-gray-main
    hover:bg-gray-dark disabled:bg-gray-main disabled:opacity-disabled)!`,
  containedPrimary: tw`
    (text-white bg-primary-main
    hover:bg-primary-dark disabled:bg-primary-main disabled:opacity-disabled)!`,
  containedDanger: tw`
    (text-white bg-error-main
    hover:bg-error-dark disabled:bg-error-main disabled:opacity-disabled)!`,
  outlinedDefault: tw`
    (bg-white text-gray-low border border-gray-low
    hover:bg-gray-main hover:text-white
    disabled:text-gray-low disabled:opacity-disabled disabled:bg-white)!`,
  outlinedPrimary: tw`
    (bg-white text-accent border border-accent
    hover:text-white hover:bg-primary-main
    disabled:text-accent disabled:bg-white disabled:opacity-disabled)!`,
  outlinedDanger: tw`
    (bg-white text-error border border-error
    hover:text-white hover:bg-error-main
    disabled:text-error disabled:opacity-disabled disabled:bg-white)!`,
  textDefault: tw`(text-gray-high disabled:text-gray-disabled hover:text-accent hover:bg-transparent)!`,
  textPrimary: tw`(text-accent disabled:text-accent disabled:opacity-disabled hover:opacity-70 hover:bg-transparent)!`,
  textDanger: tw`(text-error disabled:opacity-disabled hover:opacity-70 hover:bg-transparent)!`,
}

export const Button: React.VFC<
  ButtonProps & {
    // NOTE: duplicated
    pending?: boolean
  }
> = (props) => {
  const {
    type = 'button',
    color = 'primary',
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
      color="primary"
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
        flex text-base font-medium rounded-full cursor-pointer shadow-none transition whitespace-nowrap
        disabled:cursor-not-allowed
        hover:shadow-none focus:outline-none)!`,
        styles[`${variant}${capitalize(color)}`],
        twin,
      ]}
      {...rest}
    >
      {children}
    </LoadingButton>
  )
}
