import React from 'react'
import FormControlLabel from '@mui/material/FormControlLabel'
import MuiRadio, { RadioProps as MuiRadioProps } from '@mui/material/Radio'
import tw, { css, TwStyle } from 'twin.macro'

export interface RadioProps extends MuiRadioProps {
  label: string
  value: unknown
  error?: string
  twin?: TwStyle | TwStyle[]
}

export const Radio: React.VFC<RadioProps> = ({ label, value, disabled }) => {
  return (
    <FormControlLabel
      disabled={disabled}
      value={value}
      label={label}
      control={
        <MuiRadio tw="(text-primary-dark-default border-primary-dark-default disabled:text-primary-dark-disabled)!" />
      }
      css={[
        css`
          & .MuiFormControlLabel-label {
            ${tw`text-shade-dark-default!`}

            &.Mui-disabled {
              ${tw`text-shade-dark-disabled!`}
            }
          }
        `,
      ]}
    />
  )
}
