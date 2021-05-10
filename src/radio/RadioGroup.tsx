import React from 'react'
import tw, { css, TwStyle } from 'twin.macro'
import MuiRadioGroup, {
  RadioGroupProps as MuiRadioGroupProps,
} from '@material-ui/core/RadioGroup'
import FormControl, { FormControlProps } from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormLabel from '@material-ui/core/FormLabel'

export interface RadioGroupProps extends MuiRadioGroupProps {
  label?: string
  error?: string

  twin?: TwStyle | TwStyle[]
  children: React.ReactNode
}

export const RadioGroup: React.VFC<RadioGroupProps> = ({
  twin,
  name,
  label,
  defaultValue,
  row = true,
  error,
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
      <MuiRadioGroup
        row={row}
        name={name}
        defaultValue={defaultValue}
        css={[twin]}
      >
        {children}
      </MuiRadioGroup>
      {error && <FormHelperText tw="text-error!">{error}</FormHelperText>}
    </FormControl>
  )
}
