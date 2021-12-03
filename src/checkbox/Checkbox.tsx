import React from 'react'
import MuiCheckbox, {
  CheckboxProps as MuiCheckboxProps,
} from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import tw, { css, theme } from 'twin.macro'
import { Typography } from '../typography'

export type CheckboxProps = MuiCheckboxProps & {
  label: string
}

export const Checkbox: React.VFC<CheckboxProps> = ({ label, ...rest }) => {
  return (
    <FormControlLabel
      control={
        <MuiCheckbox
          sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}
          css={[
            css`
              &.MuiCheckbox-root {
                ${tw`(text-primary-dark-default hover:bg-primary-white-default)!`}

                color: ${theme`textColor.shade.medium.default`} !important;

                &.Mui-checked {
                  color: ${theme`backgroundColor.secondary.dark.default`} !important;
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
        <Typography variant="body1" disabled={rest.disabled} twin={tw`text-s`}>
          {label}
        </Typography>
      }
    />
  )
}
