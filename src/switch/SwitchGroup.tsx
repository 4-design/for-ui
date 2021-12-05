import React from 'react'
import FormControl from '@mui/material/FormControl'
import FormGroup from '@mui/material/FormGroup'
import FormHelperText from '@mui/material/FormHelperText'
import FormLabel from '@mui/material/FormLabel'
import { RadioGroupProps as MuiRadioGroupProps } from '@mui/material/RadioGroup'
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
            ${tw`text-negative-medium-default!`}
          }
        `,
      ]}
    >
      {label && <FormLabel component="legend">{label}</FormLabel>}
      <FormGroup row={row}>{children}</FormGroup>
      {error && (
        <FormHelperText tw="text-negative-medium-default!">
          {error}
        </FormHelperText>
      )}
    </FormControl>
  )
}
