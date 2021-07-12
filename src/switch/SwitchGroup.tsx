import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormLabel from '@material-ui/core/FormLabel'
import { RadioGroupProps as MuiRadioGroupProps } from '@material-ui/core/RadioGroup'
import tw, { css, TwStyle } from 'twin.macro'

export interface RadioGroupProps extends MuiRadioGroupProps {
  children: React.ReactNode
  required?: boolean
  label?: string
  row?: boolean
  error?: string
  twin?: TwStyle | TwStyle[]
}

export const SwitchGroup: React.VFC<RadioGroupProps> = ({
  label,
  error,
  row = false,
  children,
}) => {
  return (
    <FormControl
      component="fieldset"
      error={!!error}
      css={[
        css`
          > .Mui-error {
            ${tw`text-error!`}
          }
        `,
      ]}
    >
      {label && <FormLabel component="legend">{label}</FormLabel>}
      <FormGroup row={row}>{children}</FormGroup>
      {error && <FormHelperText tw="text-error!">{error}</FormHelperText>}
    </FormControl>
  )
}
