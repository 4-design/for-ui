import React from 'react'
import MuiCheckbox, {
  CheckboxProps as MuiCheckboxProps,
} from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import tw, { css } from 'twin.macro'
import { Typography } from '../typography'

export interface CheckboxProps extends MuiCheckboxProps {
  label: string
}

export const Checkbox: React.VFC<CheckboxProps> = ({ label, ...rest }) => {
  return (
    <FormControlLabel
      control={
        <MuiCheckbox
          disableRipple
          size="medium"
          css={[
            css`
              &.MuiCheckbox-root {
                ${tw`(text-primary-dark-default hover:bg-primary-white-default)!`}

                &.Mui-checked > span path {
                  ${tw`text-primary-dark-default!`}
                }

                &.Mui-disabled > span path {
                  ${tw`text-shade-dark-disabled!`}
                }
              }
            `,
          ]}
          {...rest}
        />
      }
      label={
        <Typography variant="body1" disabled={rest.disabled}>
          {label}
        </Typography>
      }
    />
  )
}
