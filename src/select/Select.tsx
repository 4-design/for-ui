import React from 'react'
import { UseAutocompleteProps } from '@material-ui/core'
import Autocomplete from '@material-ui/core/Autocomplete'
import MuiPaper, { PaperProps } from '@material-ui/core/Paper'
import tw, { css, TwStyle } from 'twin.macro'
import { MenuItem } from '../menu'
import { Tag } from '../tag'
import { TextField } from '../textField'

const Paper = (props: PaperProps) => {
  return <MuiPaper {...props} tw="rounded-2xl!" />
}

export type SelectOption =
  | {
      label: string
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      value: any
    }
  | string

export type AutocompleteProps = UseAutocompleteProps<
  SelectOption,
  boolean,
  boolean,
  boolean
> & {
  name: string
  label?: string
  placeholder?: string
  required?: boolean
  fullWidth?: boolean
  loadingText?: React.ReactNode

  twin?: TwStyle[]
  inputTwin?: TwStyle
}

export const Select: React.VFC<AutocompleteProps> = ({
  name,
  options = [],
  label,
  required = false,
  twin,
  inputTwin,
  placeholder,
  multiple,
  loadingText,
  freeSolo,
  onChange,
  ...rest
}) => {
  return (
    <Autocomplete
      disablePortal
      autoComplete
      autoHighlight
      autoSelect
      multiple={multiple}
      freeSolo={freeSolo}
      loading={true}
      loadingText={loadingText || 'Enterで作成されます'}
      options={options}
      onChange={onChange}
      PaperComponent={Paper}
      getOptionLabel={(option) => {
        return typeof option === 'string' ? option : option.label
      }}
      renderTags={(value, getTagProps) => {
        return value.map((option, index) => {
          const tagProps = getTagProps({ index })
          const label = typeof option === 'string' ? option : option.label
          return (
            <Tag
              {...tagProps}
              key={tagProps.key}
              variant="outlined"
              label={label}
            />
          )
        })
      }}
      renderOption={(props, option, { selected }) => {
        const label = typeof option === 'string' ? option : option.label
        return (
          <MenuItem
            {...props}
            twin={[
              selected
                ? tw`(text-white text-base bg-primary-main hover:bg-primary-dark)!`
                : tw``,
            ]}
          >
            {label}
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
            {...params}
            name={name}
            required={required}
            label={label}
            variant="outlined"
            inputTwin={inputTwin}
            placeholder={placeholder}
          />
        )
      }}
      {...rest}
    />
  )
}
