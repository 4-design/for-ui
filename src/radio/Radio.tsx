import { FC, Fragment, memo, forwardRef } from 'react'
import FormControlLabel from '@mui/material/FormControlLabel'
import MuiRadio, { RadioProps as MuiRadioProps } from '@mui/material/Radio'
import clsx from 'clsx'

export interface RadioProps extends MuiRadioProps {
  label?: string
  error?: string
  nopadding?: boolean
}

const Indicator: FC<{ checked: boolean; disabled: boolean }> = ({
  checked,
  disabled,
}) => (
  <span
    className={clsx([
      'h-5 w-5 rounded-full bg-shade-white-default transition-[border-width] duration-100',
      checked
        ? 'border-7'
        : 'border-2 group-hover:border-3 group-hover:border-secondary-dark-default',
      disabled
        ? 'border-shade-medium-disabled'
        : checked
        ? 'border-secondary-dark-default'
        : 'border-shade-medium-default',
    ])}
  />
)

const _Radio: FC<RadioProps> = memo(({ nopadding, disabled, ...rest }) => (
  <MuiRadio
    disableRipple
    icon={<Indicator checked={false} disabled={!!disabled} />}
    checkedIcon={<Indicator checked={true} disabled={!!disabled} />}
    disabled={disabled}
    classes={{
      root: clsx(['group hover:bg-transparent', nopadding ? 'p-0' : 'p-1']),
    }}
    {...rest}
  />
))

export const Radio: FC<RadioProps> = forwardRef(
  ({ label, value, disabled, ...rest }, ref) => {
    return (
      <Fragment>
        {label ? (
          <FormControlLabel
            disabled={disabled}
            value={value}
            label={label}
            control={<_Radio value={value} disabled={disabled} {...rest} />}
            ref={ref}
            classes={{
              root: clsx([' m-0 flex gap-2']),
              label: clsx(['font-sans text-s text-shade-dark-default']),
              disabled: clsx(['text-shade-dark-disabled']),
            }}
          />
        ) : (
          <_Radio value={value} disabled={disabled} ref={ref} {...rest} />
        )}
      </Fragment>
    )
  }
)
