import React from 'react'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import MuiRadioGroup, {
  RadioGroupProps as MuiRadioGroupProps,
} from '@mui/material/RadioGroup'

export interface RadioGroupProps extends MuiRadioGroupProps {
  children: React.ReactNode
  required?: boolean
  label?: string
  error?: string
  className?: string
}

export const RadioGroup: React.VFC<RadioGroupProps> = ({
  className,
  name,
  label,
  defaultValue,
  row = true,
  error,
  children,
  onChange,
  required = false,
}) => {
  return (
    <FormControl
      component="fieldset"
      error={!!error}
      // css={[
      //   css`
      //     > .Mui-error {
      //       ${tw`m-0! mt-1! text-negative-medium-default!`}
      //     }
      //   `,
      // ]}
    >
      {label && (
        <label className={`mb-2 font-sans text-s text-shade-medium-default`}>
          {label}
          {required && <span className="text-negative-medium-default">*</span>}
        </label>
      )}
      <MuiRadioGroup
        row={row}
        name={name}
        defaultValue={defaultValue}
        // css={[tw`flex gap-x-6 gap-y-2`, twin]}
        className={`flex gap-x-6 gap-y-2 ${className}`}
        onChange={onChange}
      >
        {children}
      </MuiRadioGroup>
      {error && (
        <FormHelperText className="text-negative-medium-default!">
          {error}
        </FormHelperText>
      )}
    </FormControl>
  )
}
