import React, { FC, memo } from 'react'
import MuiCheckbox, {
  CheckboxProps as MuiCheckboxProps,
} from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import { Typography } from '../typography'

export type CheckboxProps = MuiCheckboxProps & {
  label?: string
  nopadding?: boolean
}

const _Checkbox: FC<CheckboxProps> = memo(({ nopadding = false, ...rest }) => (
  <MuiCheckbox
    // sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}
    // css={[
    //   css`
    //     &.MuiCheckbox-root {
    //       ${tw`(text-primary-dark-default)!`}
    //       ${nopadding && tw`p-0!`}

    //       color: ${theme`textColor.shade.medium.default`} !important;

    //       &.Mui-checked {
    //         color: ${theme`backgroundColor.secondary.dark.default`} !important;
    //       }

    //       &.Mui-disabled > span path {
    //         ${tw`text-shade-dark-disabled!`}
    //       }
    //     }
    //   `,
    // ]}
    {...rest}
  />
))

export const Checkbox = memo(
  ({ label, nopadding = false, ...rest }: CheckboxProps) => {
    return (
      <>
        {label ? (
          <FormControlLabel
            control={<_Checkbox nopadding={nopadding} {...rest} />}
            label={
              <Typography
                variant="body1"
                disabled={rest.disabled}
                className={`text-s`}
              >
                {label}
              </Typography>
            }
          />
        ) : (
          <_Checkbox nopadding={nopadding} {...rest} />
        )}
      </>
    )
  }
)
