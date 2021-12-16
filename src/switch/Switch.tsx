import { VFC } from 'react'
import FormControlLabel, {
  FormControlLabelProps,
} from '@mui/material/FormControlLabel'
import MuiSwitch from '@mui/material/Switch'
import tw, { css, TwStyle } from 'twin.macro'

export type SwitchProps = Omit<FormControlLabelProps, 'control'> & {
  twin?: TwStyle[]
  value?: unknown
  disable?: boolean
}

export const Switch: VFC<SwitchProps> = ({
  twin,
  value,
  disabled,
  ...rest
}) => {
  return (
    <FormControlLabel
      control={
        <MuiSwitch
          value={value}
          disabled={disabled}
          css={[
            css`
              ${tw`w-11 h-6 p-0 mr-2 my-2`}
              .MuiSwitch-switchBase {
                &.Mui-checked + .MuiSwitch-track {
                  ${tw`bg-secondary-dark-default opacity-100`}
                }
                &.Mui-checked.Mui-disabled + .MuiSwitch-track {
                  ${tw`bg-secondary-dark-disabled opacity-100`}
                }
                &.Mui-disabled + .MuiSwitch-track {
                  ${tw`bg-primary-dark-disabled opacity-100`}
                }
              }
              .MuiSwitch-track {
                ${tw`block w-full h-full rounded-xl bg-primary-dark-default opacity-100`}
              }
              .MuiSwitch-thumb {
                ${tw` w-4 h-4 absolute top-1 left-1 rounded-2xl transition-all duration-200 ease-in bg-shade-white-default`}
              }
            `,
            twin,
          ]}
        />
      }
      {...rest}
    />
  )
}
