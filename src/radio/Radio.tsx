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
        <MuiRadio tw="(text-primary-main border-primary-main disabled:text-gray-disabled)!" />
      }
      css={[
        css`
          & .MuiFormControlLabel-label {
            ${tw`text-high!`}

            &.Mui-disabled {
              ${tw`text-disabled!`}
            }
          }
        `,
      ]}
    />
  )
}
