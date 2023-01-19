import React, { Fragment, ReactNode, forwardRef, Ref } from 'react';
import Autocomplete, {
  AutocompleteProps as MuiAutocompleteProps,
  createFilterOptions,
} from '@mui/material/Autocomplete';
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

// const filter = createFilterOptions<SelectOption>();

export type AutocompleteProps<
  Value extends SelectOption,
  Multiple extends boolean | undefined,
  FreeSolo extends boolean | undefined
> = Omit<MuiAutocompleteProps<Value, Multiple, true, FreeSolo, 'div'>, 'autoComplete' | 'renderInput'> & {
  // export type AutocompleteProps<T extends Object> = MuiAutocompleteProps<T, T, boolean ,boolean> & {
  name: string;
  label?: ReactNode;
  placeholder?: string;
  required?: boolean;
  loadingText?: ReactNode;
  disabled?: boolean;
  className?: string;
  disableFilter?: boolean;
  renderInput?: MuiAutocompleteProps<Value, Multiple, true, FreeSolo, 'div'>['renderInput'];
};

const _Select = <
  Value extends SelectOption,
  Multiple extends boolean | undefined,
  FreeSolo extends boolean | undefined
>({
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
  inputRef,
  noOptionsText = 'データが見つかりません',
  ...rest
}: AutocompleteProps<Value, Multiple, FreeSolo> & {
  inputRef?: Ref<HTMLInputElement | null>;
}): JSX.Element => (
  <Autocomplete<Value, Multiple, true, FreeSolo>
    ref={inputRef}
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
    isOptionEqualToValue={(option, v) =>
      typeof option === 'string' ? option === v : option.inputValue === v.inputValue
    }
    noOptionsText={noOptionsText}
    popupIcon={<MdExpandMore size={24} />}
    filterOptions={(options, params) => {
      const filtered = createFilterOptions<Value>()(options, params);
      const { inputValue } = params;
      // Suggest the creation of a new value
      const isExisting = options.some((option) => {
        return typeof option === 'string' ? inputValue === option : inputValue === option.inputValue;
      });

      if (!freeSolo && !isExisting) {
        return filtered;
      }

      if (inputValue !== '' && !isExisting) {
        // FIXME: filtered is a subtype of SelectOption, so may contain other fields.
        // Since no way to fill those fields, `as Value` is used.
        filtered.push({
          inputValue,
          label: inputValue,
        } as Value);
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
    renderTags={(values, getTagProps) => (
      <Fragment>
        {values.map((option, index) => {
          const tagProps = getTagProps({ index });
          const label = typeof option === 'string' ? option : option.label;
          return <Chip {...tagProps} key={tagProps.key} label={label} />;
        })}
      </Fragment>
    )}
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

export const Select = forwardRef((props, ref: Ref<HTMLInputElement>) => <_Select inputRef={ref} {...props} />) as <
  Value extends SelectOption,
  Multiple extends boolean | undefined,
  FreeSolo extends boolean | undefined
>(
  props: AutocompleteProps<Value, Multiple, FreeSolo>
) => JSX.Element;
