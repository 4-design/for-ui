import React from 'react'
import MuiCheckbox, {
  CheckboxProps as MuiCheckboxProps,
} from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
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
                ${tw`(text-accent hover:bg-primary-bg)!`}

                &.Mui-checked > span path {
                  ${tw`text-accent!`}
                }

                &.Mui-disabled > span path {
                  ${tw`text-disabled!`}
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
