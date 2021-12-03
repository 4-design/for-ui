import React from 'react'
import FormControlLabel from '@mui/material/FormControlLabel'
import MuiRadio, { RadioProps as MuiRadioProps } from '@mui/material/Radio'
import tw, { css, theme, TwStyle } from 'twin.macro'

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
        <MuiRadio
          css={[
            tw`(disabled:text-primary-dark-disabled)!`,
            css`
              color: ${theme`textColor.shade.medium.default`} !important;

              &.Mui-checked {
                color: ${theme`backgroundColor.secondary.dark.default`} !important;
              }
            `,
          ]}
        />
      }
      css={[
        css`
          & .MuiFormControlLabel-label {
            ${tw`(font-sans text-s text-shade-dark-default)!`}

            &.Mui-disabled {
              ${tw`text-shade-dark-disabled!`}
            }
          }
        `,
      ]}
    />
  )
}
