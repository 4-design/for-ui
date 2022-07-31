import { FC } from 'react'
import { UseAutocompleteProps } from '@mui/material'
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete'
import MuiPaper, { PaperProps } from '@mui/material/Paper'
import { MdCheck, MdExpandMore } from 'react-icons/md'
import tw, { css, TwStyle, theme } from 'twin.macro'
import { MenuItem } from '../menu'
import { Tag } from '../tag'
import { TextField } from '../textField'

const Paper = (props: PaperProps) => {
  return <MuiPaper {...props} tw="rounded-md shadow-lg" />
}

export type SelectOption = {
  label: string
  inputValue: string
}

const filter = createFilterOptions<SelectOption>()

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
  disabled?: boolean
}

export const Select: FC<AutocompleteProps> = ({
  name,
  options = [],
  label,
  required = false,
  twin,
  inputTwin,
  placeholder,
  multiple,
  freeSolo,
  onChange,
  disabled = false,
  ...rest
}) => {
  return (
    <Autocomplete
      disablePortal
      disableCloseOnSelect={multiple}
      disableClearable
      autoHighlight
      clearOnBlur
      disabled={disabled}
      includeInputInList
      handleHomeEndKeys
      multiple={multiple}
      freeSolo={freeSolo}
      options={options}
      onChange={onChange}
      PaperComponent={Paper}
      isOptionEqualToValue={(option, v) => option.inputValue === v.inputValue}
      noOptionsText="データが見つかりません"
      popupIcon={<MdExpandMore size={24} />}
      filterOptions={(options, params) => {
        const filtered = filter(options, params)
        const { inputValue } = params
        // Suggest the creation of a new value
        const isExisting = options.some((option) => {
          return typeof option === 'string'
            ? inputValue === option
            : inputValue === option.inputValue
        })

        if (!freeSolo && !isExisting) {
          return filtered
        }

        if (inputValue !== '' && !isExisting) {
          filtered.push({
            inputValue,
            label: inputValue,
          })
        }

        return filtered
      }}
      getOptionLabel={(option) => {
        // Value selected with enter, right from the input
        if (typeof option === 'string') {
          return option
        }
        // Add "xxx" option created dynamically
        if (option.label) {
          return option.label
        }
        // Regular option
        return option.inputValue
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
            key={option.inputValue}
            twin={[
              selected
                ? tw`(text-primary-dark-default text-base hover:bg-primary-white-hover)!`
                : tw``,
            ]}
          >
            {label}
            {selected && (
              <MdCheck
                size={20}
                tw="text-primary-medium-default absolute right-4"
              />
            )}
          </MenuItem>
        )
      }}
      css={[
        css`
          ${tw`(bg-shade-white-default)!`}

          & .MuiAutocomplete-paper {
            ${tw`(py-2 min-w-min rounded-2xl transform translate-y-4)!`}
          }

          & .MuiOutlinedInput-root {
            ${
              tw`(p-0 text-base text-shade-dark-default h-11)!` /* h-11 is temporary, must be fixed in TextField */
            }
          }

          & .MuiOutlinedInput-input {
            ${tw`(px-3 text-base text-shade-dark-default)!`}
          }

          & .MuiChip-root {
            ${tw`bg-shade-light-default border-none`}

            > .MuiChip-deleteIcon {
              ${tw`text-shade-dark-default`}
            }
          }

          & .MuiAutocomplete-endAdornment svg {
            fill: ${theme`iconColor.shade.medium.default`};
          }

          & .Mui-focused .MuiAutocomplete-endAdornment svg {
            fill: ${theme`iconColor.shade.medium.active`};
          }
        `,
        required &&
          css`
            & .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
              ${tw`(border border-negative-medium-default)!`}
            }
            &:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
              ${tw`(border border-negative-medium-default)!`}
            }
            & .Mui-focused fieldset {
              ${tw`(border border-negative-medium-default)!`}
            }
          `,
        twin,
      ]}
      renderInput={(params) => {
        return (
          <TextField
            {...params}
            autoComplete="off"
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
