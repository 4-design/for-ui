import React, { useCallback, useMemo, useState } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import MuiTextField, { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField';
import { fsx } from '../system/fsx';
import { NumericFormat } from 'react-number-format';

export type TextFieldProps = Omit<MuiTextFieldProps, 'size'> & {
  unitLabel?: string;
  isPriceFormat?: boolean;
  variant?: 'outlined';
  className?: string;
  size?: 'large' | 'medium';
};

type NumberFormatCustomProps = {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
  className?: string;
  other: {
    children?: React.ReactNode;
  };
};

const NumberFormatCustom: React.ForwardRefExoticComponent<NumberFormatCustomProps> = React.forwardRef(
  ({ onChange, name, ...other }, ref) => {
    console.info(other);
    return (
      <NumericFormat
        {...other}
        className={fsx([other.className, 'text-right'])}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name,
              value: values.value,
            },
          });
        }}
        thousandSeparator
      />
    );
  }
);

export const TextField: React.ForwardRefExoticComponent<TextFieldProps> = React.forwardRef(
  (
    {
      size = 'large',
      label,
      variant = 'outlined',
      className,
      focused,
      placeholder,

      // labelTwin,
      // inputTwin,
      disabled,
      inputProps,
      required,
      inputRef,
      error,
      unitLabel = '',
      isPriceFormat = false,
      InputProps,
      onFocus,
      onBlur,
      ...rest
    },
    ref
  ) => {
    /**
     * react-hook-form : v6 ~> inputRef   v7 ~> ref
     * TODO: react-hook-form v7で統合されたらrefを直接インラインで使用
     */
    const validRef = useMemo(() => {
      return inputRef ? inputRef : ref;
    }, [ref, inputRef]);

    const _InputProps = useMemo(() => {
      const unitLabelProps = {
        endAdornment: (
          <InputAdornment
            classes={{
              root: fsx(['text-r text-shade-dark-default mr-3 font-sans antialiased']),
            }}
            position="start"
            disableTypography
          >
            {unitLabel}
          </InputAdornment>
        ),
      };
      const priceFormatProps = { inputComponent: NumberFormatCustom as any }; // eslint-disable-line

      return {
        ...(unitLabel ? unitLabelProps : {}),
        ...(isPriceFormat ? priceFormatProps : {}),
      };
    }, [unitLabel, isPriceFormat]);

    const [_focused, setFocused] = useState<boolean>(focused || false);
    const handleFocus = useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        setFocused(true);
        if (onFocus) {
          onFocus(e);
        }
      },
      [setFocused, onFocus]
    );
    const handleBlur = useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        setFocused(false);
        if (onBlur) {
          onBlur(e);
        }
      },
      [setFocused, onBlur]
    );

    return (
      <div className={fsx(['flex  flex-col', className])}>
        <label>
          {label && (
            <p
              className={fsx([
                'text-shade-medium-default mb-1 font-bold antialiased',
                {
                  large: 'text-r',
                  medium: 'text-s',
                }[size],
                // labelTwin,
              ])}
            >
              {label}
              {required && <span className="text-negative-medium-default">*</span>}
            </p>
          )}
          <MuiTextField
            // MuiTextFieldのpropsに対応する
            size={size === 'medium' ? 'small' : 'medium'}
            disabled={disabled}
            error={error}
            inputRef={validRef}
            required={required}
            variant={variant}
            placeholder={placeholder}
            sx={{
              '& .MuiInputBase-input:disabled::placeholder': {
                '-webkit-text-fill-color': 'currentColor',
              },
            }}
            FormHelperTextProps={{
              classes: {
                root: fsx([error && 'text-negative-medium-default m-0 mt-1 text-xs']),
              },
            }}
            InputProps={{
              classes: {
                root: fsx(['group bg-shade-white-default text-shade-light-default p-0 antialiased']),
                disabled: fsx(['bg-shade-white-disabled', 'placeholder:text-shade-light-default']),
                input: fsx([
                  'text-r text-shade-dark-default placeholder:text-shade-light-default h-auto py-2.5 px-3 font-sans placeholder:opacity-100 focus:shadow-none',
                  {
                    large: 'text-s py-2 px-4',
                    medium: 'py-1.5 px-2 text-xs',
                  }[size],
                ]),
                focused: fsx(['border-primary-medium-active']),
                notchedOutline: fsx([
                  'border',
                  disabled
                    ? 'border-shade-medium-disabled'
                    : error
                    ? 'border-negative-medium-default'
                    : _focused
                    ? 'border-primary-medium-active group-hover:border-primary-dark-default'
                    : 'border-shade-medium-default group-hover:border-primary-dark-default',
                ]),
                inputAdornedEnd: fsx(['pr-2']),
              },
              ...InputProps,
              ..._InputProps,
            }}
            inputProps={inputProps}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...rest}
          />
        </label>
      </div>
    );
  }
);
