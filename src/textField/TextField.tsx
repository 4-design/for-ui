import React from 'react'
import MuiTextField, {
  TextFieldProps as MuiTextFieldProps,
} from '@material-ui/core/TextField'
import tw, { TwStyle, css } from 'twin.macro'

export type TextFieldProps = MuiTextFieldProps & {
  variant?: 'outlined' | 'standard'
  twin?: TwStyle
  labelTwin?: TwStyle
  inputTwin?: TwStyle
}

const styles = {
  standard: css`
    & .MuiInputLabel-root.Mui-focused {
      ${tw`(text-accent)!`}
    }

    & .MuiInput-root {
      &:before {
        ${tw`(text-accent)!`}
      }
      &:after {
        ${tw`(border-accent)!`}
      }
    }

    & .MuiInput-root {
      &:hover:not(.Mui-disabled):before {
        ${tw`border-b border-accent`}
      }
    }
  `,
  outlined: css`
    & .MuiOutlinedInput-root {
      ${tw`p-0!`}

      &.Mui-disabled {
        ${tw`bg-gray-light`}
      }

      & fieldset {
        ${tw`border border-low`}
      }

      &.Mui-disabled .MuiOutlinedInput-notchedOutline {
        ${tw`border border-low`}
      }

      &.Mui-focused .MuiOutlinedInput-notchedOutline {
        ${tw`border border-accent`}
      }

      &.Mui-error .MuiOutlinedInput-notchedOutline {
        ${tw`border border-error`}
      }

      &:hover {
        & fieldset {
          ${tw`border border-accent`}
        }

        &.Mui-disabled .MuiOutlinedInput-notchedOutline {
          ${tw`border border-low`}
        }

        &.Mui-focused .MuiOutlinedInput-notchedOutline {
          ${tw`border border-accent`}
        }

        &.Mui-error .MuiOutlinedInput-notchedOutline {
          ${tw`border border-error`}
        }
      }

      &.Mui-error fieldset {
        ${tw`border-error`}
      }

      & .Mui-focused fieldset {
        ${tw`border border-accent!`}
      }
    }

    & .MuiOutlinedInput-input {
      ${tw`(text-high)!`}
    }

    & .MuiInputBase-input {
      ${tw`(py-2 px-3 focus:shadow-none)!`}
    }
  `,
}

export const TextField: React.ForwardRefExoticComponent<TextFieldProps> =
  React.forwardRef(
    (
      {
        label,
        variant = 'outlined',
        twin,
        labelTwin,
        inputTwin,
        required,
        inputRef,
        error,
        ...rest
      },
      ref
    ) => {
      /**
       * react-hook-form : v6 ~> inputRef   v7 ~> ref
       * TODO: react-hook-form v7で統合されたらrefを直接インラインで使用
       */
      const validRef = React.useMemo(() => {
        return inputRef ? inputRef : ref
      }, [ref, inputRef])

      const renderStandardTextField = (): JSX.Element => {
        return (
          <MuiTextField
            error={error}
            inputRef={validRef}
            required={required}
            label={label}
            variant={variant}
            css={[
              styles['standard'],
              css`
                & .MuiFormLabel-root {
                  ${labelTwin}
                }

                & .MuiFormLabel-asterisk {
                  ${tw`text-error`}
                }
                & .MuiInputBase-root {
                  ${inputTwin}
                }
              `,
              twin,
            ]}
            {...rest}
          />
        )
      }

      const renderOutlinedTextField = (): JSX.Element => {
        return (
          <div css={[tw`flex flex-col`, twin]}>
            {label && (
              <label css={[tw`mb-2 text-middle`, labelTwin]}>
                {label}
                {required && <span tw="text-error">*</span>}
              </label>
            )}

            <MuiTextField
              error={error}
              inputRef={validRef}
              required={required}
              variant={variant}
              css={[
                styles['outlined'],
                css`
                  & .MuiInputBase-root {
                    ${inputTwin}
                  }
                `,
              ]}
              {...rest}
            />
          </div>
        )
      }

      return variant === 'outlined'
        ? renderOutlinedTextField()
        : renderStandardTextField()
    }
  )
