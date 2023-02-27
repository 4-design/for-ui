import { FC, ReactNode, forwardRef, useMemo, useId } from 'react';
import OutlinedInput, { OutlinedInputProps } from '@mui/material/OutlinedInput';
import { InputBaseComponentProps } from '@mui/material/InputBase';
import { NumericFormat, NumericFormatProps } from 'react-number-format';
import { fsx } from '../system/fsx';
import { Text } from '../text';
import { TextDefaultStyler } from '../system/TextDefaultStyler';

export type TextFieldProps = Omit<OutlinedInputProps, 'size' | 'multiline' | 'rows' | 'margin' | 'fullWidth'> & {
  /**
   * 3桁区切りの金額表示をする場合に指定
   *
   * trueにすることでTextFieldへの入力値はnumberのみ許可されます
   */
  isPriceFormat?: boolean;

  /**
   * URLの先頭部分など期待する入力値にユーザーが入力しない部分があることを明示的にしたい場合に指定
   */
  prefix?: string;

  /**
   * 単位など期待する入力値にユーザーが入力しない部分があることを明示的にしたい場合に指定
   */
  suffix?: string;

  /**
   * サイズを指定
   *
   * @default large
   */
  size?: 'large' | 'medium';

  /**
   * アイコンを表示する場合に指定
   *
   * prefixまたはsuffixと同時に使用することはできません
   */
  icon?: ReactNode;

  /**
   * ラベルを表示するときに指定
   *
   * 文字列の場合はデフォルトのスタイルが適用され、ValidなReactElementを渡すと渡したものがそのまま描画されます。
   */
  label?: ReactNode;

  /**
   * エラーメッセージ等の副次的内容をユーザーに示すときに指定
   *
   * 文字列の場合はデフォルトのスタイルが適用され、ValidなReactElementを渡すと渡したものがそのまま描画されます。
   */
  helperText?: ReactNode;

  className?: string;
};

type NumberFormatCustomProps = InputBaseComponentProps &
  NumericFormatProps & {
    onChange: (event: { target: { name: string; value: string } }) => void;
    name: string;
  };

const NumberFormatCustom = forwardRef<HTMLInputElement, NumberFormatCustomProps>(
  ({ onChange, name, className, ...rest }, ref) => {
    return (
      <NumericFormat
        {...rest}
        className={fsx(className)}
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

const Adornment: FC<{ size: 'large' | 'medium'; className?: string; children: string }> = ({
  size,
  className,
  ...rest
}) => (
  <Text
    size="r"
    typeface="sansSerif"
    className={fsx([
      `border-shade-light-default bg-shade-light-default max-h-[fit-content] h-full m-0 cursor-default text-shade-medium-default inline-flex break-keep`,
      {
        large: `py-2 px-4`,
        medium: `py-1 px-2`,
      }[size],
      className,
    ])}
    {...rest}
  />
);

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      size = 'large',
      label,
      className,
      placeholder,
      disabled,
      required,
      inputRef,
      error,
      helperText,
      isPriceFormat = false,
      prefix,
      suffix,
      icon,
      id: passedId,
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

    const innerId = useId();
    const id = passedId || innerId;

    return (
      <div className={fsx(`w-full flex flex-col gap-1`, className)}>
        <fieldset className={fsx(`contents`)}>
          {label && (
            <legend className={fsx(`contents`)}>
              <TextDefaultStyler
                content={label}
                defaultRenderer={({ children, ...rest }) => (
                  <Text as="label" htmlFor={id} weight="bold" size="s" className={fsx(`text-shade-medium-default`)} {...rest}>
                    {children}
                    {required && <Text className="text-negative-medium-default">*</Text>}
                  </Text>
                )}
              />
            </legend>
          )}
          <OutlinedInput
            id={id}
            disabled={disabled}
            error={error}
            inputRef={validRef}
            required={required}
            placeholder={placeholder}
            classes={{
              root: fsx(`bg-shade-white-default p-0 w-full flex`),
              disabled: fsx(
                `bg-shade-white-disabled placeholder:text-shade-light-default [-webkit-text-fill-color:currentColor_!important] text-shade-light-disabled cursor-not-allowed`
              ),
              input: fsx([
                `font-sans text-r text-shade-dark-default placeholder:text-shade-light-default h-auto placeholder:opacity-100 focus:shadow-none`,
                {
                  large: [`py-2 px-4`, icon && `pl-1`],
                  medium: [`py-1 px-2`, icon && `pl-1`],
                }[size],
              ]),
              notchedOutline: fsx([
                `border border-shade-medium-default [.Mui-focused_&]:border-2 [.Mui-focused_&]:border-primary-medium-active`,
                error && `border-negative-medium-default`,
                disabled && `border-shade-medium-disabled`,
              ]),
            }}
            startAdornment={
              (prefix && (
                <Adornment size={size} className="border-r">
                  {prefix}
                </Adornment>
              )) ||
              (icon && <span className="[&_svg]:fill-shade-medium-default pl-2">{icon}</span>)
            }
            endAdornment={
              suffix && (
                <Adornment size={size} className="border-l">
                  {suffix}
                </Adornment>
              )
            }
            inputComponent={isPriceFormat ? NumberFormatCustom : 'input'}
            {...rest}
          />
        </fieldset>
        <TextDefaultStyler
          content={helperText}
          defaultRenderer={(props) => (
            <Text
              size="s"
              weight="regular"
              className={fsx(`text-shade-dark-default`, error && `text-negative-medium-default`)}
              {...props}
            />
          )}
        />
      </div>
    );
  }
);
