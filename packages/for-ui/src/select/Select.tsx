import React, { FC, forwardRef } from 'react';
import { UseAutocompleteProps } from '@mui/material';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import MuiPaper, { PaperProps } from '@mui/material/Paper';
import { fsx } from '../system/fsx';
import { MdCheck, MdExpandMore } from 'react-icons/md';
import { Chip } from '../chip';
import { MenuItem } from '../menu';
import { TextField } from '../textField';

const Paper = (props: PaperProps) => {
  return <MuiPaper {...props} className="rounded-md shadow-lg" />;
};

export type SelectOption = {
  label: string;
  inputValue: string;
};

const filter = createFilterOptions<SelectOption>();

export type AutocompleteProps = Omit<UseAutocompleteProps<SelectOption, boolean, boolean, boolean>, 'autoComplete'> & {
  name: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  loadingText?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  disableFilter?: boolean;
};

export const Select: FC<AutocompleteProps> = forwardRef<HTMLInputElement, AutocompleteProps>(
  (
    {
      name,
      options = [],
      label,
      required = false,
      className,
      placeholder,
      multiple,
      freeSolo,
      onChange,
      disabled = false,
      disableFilter = false,
      ...rest
    },
    ref
  ) => {
    return (
      <Autocomplete
        ref={ref}
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
          const filtered = filter(options, params);
          const { inputValue } = params;
          // Suggest the creation of a new value
          const isExisting = options.some((option) => {
            return typeof option === 'string' ? inputValue === option : inputValue === option.inputValue;
          });

          if (!freeSolo && !isExisting) {
            return filtered;
          }

          if (inputValue !== '' && !isExisting) {
            filtered.push({
              inputValue,
              label: inputValue,
            });
          }

          return filtered;
        }}
        getOptionLabel={(option) => {
          // Value selected with enter, right from the input
          if (typeof option === 'string') {
            return option;
          }
          // Add "xxx" option created dynamically
          if (option.label) {
            return option.label;
          }
          // Regular option
          return option.inputValue;
        }}
        renderTags={(value, getTagProps) => {
          return value.map((option, index) => {
            const tagProps = getTagProps({ index });
            const label = typeof option === 'string' ? option : option.label;
            return <Chip {...tagProps} key={tagProps.key} label={label} />;
          });
        }}
        renderOption={(props, option, { selected }) => {
          const label = typeof option === 'string' ? option : option.label;
          return (
            <MenuItem
              {...props}
              key={option.inputValue}
              className={fsx([selected && 'text-primary-dark-default hover:bg-shade-white-hover text-base'])}
            >
              {label}
              {selected && <MdCheck size={20} className="text-primary-medium-default absolute right-4" />}
            </MenuItem>
          );
        }}
        classes={{
          root: fsx(['bg-shade-white-default w-full', className]),
          paper: fsx(['min-w-min translate-y-4 rounded-2xl py-2']),
          inputRoot: fsx([
            'group bg-shade-white-default text-shade-light-default p-0 antialiased',
            // 'group bg-shade-white-default text-shade-light-default antialiased !py-2',
            disableFilter && 'cursor-pointer',
          ]),
          input: fsx([
            'text-r text-shade-dark-default placeholder:text-shade-light-default h-auto py-2.5 px-3 font-sans placeholder:opacity-100 focus:shadow-none',
            // 'text-r text-shade-dark-default placeholder:text-shade-light-default h-auto font-sans placeholder:opacity-100 focus:shadow-none !p-0',
            disableFilter && 'cursor-pointer caret-transparent',
          ]),
          inputFocused: fsx(['border-primary-medium-active']),
          focused: fsx(['[&_svg]:!icon-shade-medium-active']),
          tag: fsx(['bg-shade-light-default [&.MuiChip-deleteIcon]:text-shade-dark-default border-none']),
          endAdornment: fsx(['[&_svg]:icon-shade-medium-default']),
        }}
        renderInput={(params) => {
          return (
            <TextField
              {...params}
              inputProps={
                disableFilter
                  ? {
                      ...params.inputProps,
                      onChange: () => {
                        // Ignore inputs if not searchable
                      },
                    }
                  : params.inputProps
              }
              autoComplete="off"
              name={name}
              required={required}
              label={label}
              // inputTwin={inputTwin}
              placeholder={placeholder}
            />
          );
        }}
        {...rest}
      />
    );
  }
);
