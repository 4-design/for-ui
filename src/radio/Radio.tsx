import React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import MuiRadio, { RadioProps as MuiRadioProps } from '@material-ui/core/Radio'
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
