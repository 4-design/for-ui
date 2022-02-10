import React, { FC, memo } from 'react'
import FormControlLabel from '@mui/material/FormControlLabel'
import MuiRadio, { RadioProps as MuiRadioProps } from '@mui/material/Radio'
import tw, { css, theme, TwStyle } from 'twin.macro'

export interface RadioProps extends MuiRadioProps {
  label?: string
  error?: string
  twin?: TwStyle | TwStyle[]
}

const _Radio: FC<MuiRadioProps> = memo(({ ...rest }) => (
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
    {...rest}
  />
))

export const Radio: React.VFC<RadioProps> = ({
  label,
  value,
  disabled,
  ...rest
}) => {
  return (
    <>
      {label ? (
        <FormControlLabel
          disabled={disabled}
          value={value}
          label={label}
          control={<_Radio {...rest} />}
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
      ) : (
        <_Radio value={value} {...rest} />
      )}
    </>
  )
}
