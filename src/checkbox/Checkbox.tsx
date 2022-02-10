import React, { FC, memo } from 'react'
import MuiCheckbox, {
  CheckboxProps as MuiCheckboxProps,
} from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import tw, { css, theme } from 'twin.macro'
import { Typography } from '../typography'

export type CheckboxProps = MuiCheckboxProps & {
  label?: string
}

const _Checkbox: FC<MuiCheckboxProps> = memo(({ ...rest }) => (
  <MuiCheckbox
    sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}
    css={[
      css`
        &.MuiCheckbox-root {
          ${tw`(text-primary-dark-default)!`}

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
))

export const Checkbox = memo(({ label, ...rest }: CheckboxProps) => {
  return (
    <>
      {label ? (
        <FormControlLabel
          control={<_Checkbox {...rest} />}
          label={
            <Typography
              variant="body1"
              disabled={rest.disabled}
              twin={tw`text-s`}
            >
              {label}
            </Typography>
          }
        />
      ) : (
        <_Checkbox {...rest} />
      )}
    </>
  )
})
