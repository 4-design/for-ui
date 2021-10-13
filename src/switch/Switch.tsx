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
              & .MuiSwitch-switchBase.Mui-checked {
                ${tw`text-accent hover:bg-primary-main`}
              }

              & .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track {
                ${tw`bg-primary-main`}
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
