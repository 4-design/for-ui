import React from 'react'
import tw, { css, TwStyle } from 'twin.macro'
import { MenuItem } from '../menu'
import { TextField } from '../textField'
import Autocomplete, {
  AutocompleteChangeDetails,
  AutocompleteChangeReason,
} from '@material-ui/core/Autocomplete'
import MuiPaper, { PaperProps } from '@material-ui/core/Paper'

const Paper = (props: PaperProps) => {
  return <MuiPaper {...props} tw="rounded-2xl!" />
}

export interface SelectOption {
  label: string
  value: any
}

export interface SelectProps {
  options: SelectOption[]
  name: string
  value?: any
  label?: string
  required?: boolean
  fullWidth?: boolean
  onChange?: (
    event?: React.SyntheticEvent<Element, Event>,
    value?: SelectOption | null,
    reason?: AutocompleteChangeReason,
    detail?: AutocompleteChangeDetails<SelectOption> | undefined
  ) => void
  defaultValue?: SelectOption
  twin?: TwStyle[]
  inputTwin?: TwStyle
  placeholder?: string
}

export const Select: React.VFC<SelectProps> = ({
  name,
  options = [],
  label,
  required = false,
  defaultValue,
  twin,
  inputTwin,
  placeholder,
  onChange,
  ...rest
}: SelectProps) => {
  return (
    <Autocomplete<SelectOption>
      disablePortal
      autoComplete
      autoHighlight
      autoSelect
      loading={true}
      loadingText="Loading..."
      defaultValue={defaultValue}
      options={options}
      onChange={onChange}
      PaperComponent={Paper}
      renderOption={(props, option, { selected }) => {
        return (
          <MenuItem
            {...props}
            twin={[
              selected
                ? tw`(bg-primary-main text-white text-base hover:bg-primary-dark)!`
                : tw``,
            ]}
          >
            {option.label}
          </MenuItem>
        )
      }}
      css={[
        css`
          ${tw`(bg-white)!`}

          & .MuiAutocomplete-paper {
            ${tw`(py-2 min-w-min rounded-2xl shadow-main transform translate-y-4)!`}
          }

          & .MuiOutlinedInput-root {
            ${tw`(p-0 text-base text-middle)!`}
          }

          & .MuiOutlinedInput-input {
            ${tw`(px-3 text-base text-middle)!`}
          }
        `,
        twin,
      ]}
      renderInput={(params) => {
        return (
          <TextField
            name={name}
            required={required}
            label={label}
            variant="outlined"
            inputTwin={inputTwin}
            placeholder={placeholder}
            {...params}
          />
        )
      }}
      {...rest}
    />
  )
}
