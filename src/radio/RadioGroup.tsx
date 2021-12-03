import React from 'react'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import MuiRadioGroup, {
  RadioGroupProps as MuiRadioGroupProps,
} from '@mui/material/RadioGroup'
import tw, { css, TwStyle } from 'twin.macro'

export interface RadioGroupProps extends MuiRadioGroupProps {
  children: React.ReactNode
  required?: boolean
  label?: string
  error?: string
  twin?: TwStyle | TwStyle[]
}

export const RadioGroup: React.VFC<RadioGroupProps> = ({
  twin,
  name,
  label,
  defaultValue,
  row = true,
  error,
  children,
  onChange,
  required = false,
}) => {
  return (
    <FormControl
      component="fieldset"
      error={!!error}
      css={[
        css`
          > .Mui-error {
            ${tw`m-0! mt-1! text-negative-medium-default!`}
          }
        `,
      ]}
    >
      {label && (
        <label css={[tw`font-sans text-s mb-2 text-shade-medium-default`]}>
          {label}
          {required && <span tw="text-negative-medium-default">*</span>}
        </label>
      )}
      <MuiRadioGroup
        row={row}
        name={name}
        defaultValue={defaultValue}
        css={[twin]}
        onChange={onChange}
      >
        {children}
      </MuiRadioGroup>
      {error && (
        <FormHelperText tw="text-negative-medium-default!">
          {error}
        </FormHelperText>
      )}
    </FormControl>
  )
}
