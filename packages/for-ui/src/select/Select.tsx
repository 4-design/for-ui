import { Fragment, ReactNode, forwardRef, Ref } from 'react';
import Autocomplete, {
  AutocompleteProps as MuiAutocompleteProps,
  createFilterOptions,
} from '@mui/material/Autocomplete';
import { fsx } from '../system/fsx';
import { MdCheck, MdExpandMore } from 'react-icons/md';
import { Chip } from '../chip';
import { MenuItem, MenuList } from '../menu';
import { TextField } from '../textField';
import { Text } from '../text';

export type SelectOption = {
  label: string;
  inputValue: string;
};

export type AutocompleteProps<
  Value extends SelectOption,
  Multiple extends boolean | undefined,
  FreeSolo extends boolean | undefined
> = Omit<MuiAutocompleteProps<Value, Multiple, true, FreeSolo, 'div'>, 'autoComplete' | 'renderInput' | 'size'> & {
  name: string;
  label?: ReactNode;
  placeholder?: string;
  required?: boolean;
  loadingText?: ReactNode;
  error?: boolean;
  helperText?: ReactNode;
  disabled?: boolean;
  size?: 'large' | 'medium';
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
  size = 'large',
  options = [],
  label,
  required = false,
  placeholder,
  multiple,
  freeSolo,
  onChange,
  error,
  helperText,
  disabled = false,
  disableFilter = false,
  inputRef,
  noOptionsText = '選択肢がありません',
  className,
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
    openOnFocus
    disabled={disabled}
    includeInputInList
    handleHomeEndKeys
    multiple={multiple}
    freeSolo={freeSolo}
    options={options}
    onChange={onChange}
    PaperComponent={(props) => <MenuList as="div" {...props} />}
    ListboxComponent={(props) => <ul {...props} className={fsx(`p-0`)} />}
    isOptionEqualToValue={(option, v) =>
      typeof option === 'string' ? option === v : option.inputValue === v.inputValue
    }
    noOptionsText={
      <Text typeface="sansSerif" size="r" className={fsx(`flex py-1 px-4 text-shade-medium-default`)}>
        {noOptionsText}
      </Text>
    }
    popupIcon={<MdExpandMore size={24} />}
    componentsProps={{
      popupIndicator: {
        disableRipple: true,
      },
    }}
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
    renderTags={(values, getTagProps) => (
      <Fragment>
        {values.map((option, index) => {
          const tagProps = getTagProps({ index });
          const label = typeof option === 'string' ? option : option.label;
          return <Chip {...tagProps} key={tagProps.key} label={label} />;
        })}
      </Fragment>
    )}
    classes={{
      root: fsx(`bg-shade-white-default w-full p-0`, className),
      paper: fsx(`min-w-min`),
      inputRoot: fsx([
        `group bg-shade-white-default text-shade-light-default p-0 antialiased`,
        disableFilter && `cursor-pointer`,
      ]),
      noOptions: fsx(`p-0`),
      input: fsx([
        `text-r text-shade-dark-default placeholder:text-shade-light-default h-auto py-2.5 px-3 pr-0 font-sans placeholder:opacity-100 focus:shadow-none`,
        disableFilter && `cursor-pointer caret-transparent`,
      ]),
      inputFocused: fsx(`border-primary-medium-active`),
      focused: fsx(`[&_svg]:!icon-shade-medium-active`),
      tag: fsx(`bg-shade-light-default [&.MuiChip-deleteIcon]:text-shade-dark-default border-none`),
      endAdornment: fsx([
        `static flex [&_svg]:icon-shade-dark-default border-x border-shade-light-default`,
        {
          large: `px-2`,
          medium: `px-1`,
        }[size],
      ]),
      popupIndicator: fsx(`p-0 m-0`),
    }}
    renderInput={(params) => {
      return (
        <TextField
          {...params}
          size={size}
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
          placeholder={placeholder}
          error={error}
          helperText={helperText}
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
