import { FocusEvent, forwardRef, ReactNode, useCallback, useMemo, useState } from 'react';
import { NumericFormat } from 'react-number-format';
import InputAdornment from '@mui/material/InputAdornment';
import MuiTextField, { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField';
import { fsx } from '../system/fsx';
import { Text } from '../text';

export type TextFieldProps = Omit<MuiTextFieldProps, 'variant' | 'multiline' | 'rows' | 'margin' | 'fullWidth'> & {
  /**
   * 単位を表示する場合に指定してください。
   */
  unitLabel?: string;

  /**
   * 3桁区切りの金額表示をする場合に指定してください。入力値はnumberのみ許可されます。
   */
  isPriceFormat?: boolean;

  /**
   * URLの先頭部分など期待する入力値にユーザーが入力しない部分があることを明示的にしたい場合、prefixを指定してください。
   */
  prefix?: string;

  className?: string;
};

type NumberFormatCustomProps = {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
  className?: string;
  other: {
    children?: ReactNode;
  };
};

const NumberFormatCustom = forwardRef<HTMLInputElement, NumberFormatCustomProps>(
  ({ onChange, name, className, ...rest }, ref) => {
    return (
      <NumericFormat
        {...rest}
        className={fsx(['text-right', className])}
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
  },
);

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      label,
      className,
      focused,
      placeholder,
      disabled,
      inputProps,
      required,
      inputRef,
      error,
      unitLabel = '',
      isPriceFormat = false,
      prefix = '',
      InputProps,
      onFocus,
      onBlur,
      ...rest
    },
    ref,
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
              root: fsx(['text-r text-shade-dark-default mr-3 font-sans']),
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
      (e: FocusEvent<HTMLInputElement>) => {
        setFocused(true);
        onFocus?.(e);
      },
      [setFocused, onFocus],
    );
    const handleBlur = useCallback(
      (e: FocusEvent<HTMLInputElement>) => {
        setFocused(false);
        onBlur?.(e);
      },
      [setFocused, onBlur],
    );

    return (
      <Text as="label" className={fsx('flex flex-col w-full gap-1', className)}>
        {label && (
          <Text className={fsx(['text-s text-shade-medium-default font-bold'])}>
            {label}
            {required && <Text className="text-negative-medium-default">*</Text>}
          </Text>
        )}
        <MuiTextField
          disabled={disabled}
          error={error}
          inputRef={validRef}
          required={required}
          variant="outlined"
          placeholder={placeholder}
          sx={{
            '& .MuiInputBase-input:disabled::placeholder': {
              '-webkit-text-fill-color': 'currentColor',
            },
          }}
          className={fsx(`w-full flex flex-col gap-1`)}
          FormHelperTextProps={{
            classes: {
              root: fsx([error && 'text-negative-medium-default m-0 text-s']),
            },
          }}
          InputProps={{
            classes: {
              root: fsx(['group bg-shade-white-default text-shade-light-default px-0 antialiased']),
              disabled: fsx(['bg-shade-white-disabled', 'placeholder:text-shade-light-default']),
              input: fsx([
                'text-r text-shade-dark-default placeholder:text-shade-light-default h-auto py-2.5 px-3 font-sans placeholder:opacity-100 focus:shadow-none',
              ]),
              focused: fsx(['border-primary-medium-active']),
              notchedOutline: fsx([
                'border',
                disabled
                  ? 'border-shade-medium-disabled'
                  : error
                  ? 'border-negative-medium-default'
                  : _focused
                  ? 'border-2 border-primary-medium-active group-hover:border-primary-dark-default'
                  : 'border-shade-medium-default group-hover:border-primary-dark-default',
              ]),
              inputAdornedEnd: fsx(['pr-2']),
            },
            startAdornment: prefix && (
              <InputAdornment
                position="start"
                classes={{
                  root: 'border-r border-shade-light-default bg-shade-light-default max-h-[fit-content] h-full py-2.5 px-3 m-0',
                }}
              >
                <Text className="text-shade-dark-default inline-flex">{prefix}</Text>
              </InputAdornment>
            ),
            ...InputProps,
            ..._InputProps,
          }}
          inputProps={inputProps}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...rest}
        />
      </Text>
    );
  },
);
