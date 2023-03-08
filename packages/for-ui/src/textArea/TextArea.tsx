import { forwardRef, ReactNode } from 'react';
import TextareaAutosize, { TextareaAutosizeProps } from '@mui/base/TextareaAutosize';
import { fsx } from '../system/fsx';
import { TextDefaultStyler } from '../system/TextDefaultStyler';
import { Text } from '../text';

export type TextAreaProps = Omit<TextareaAutosizeProps, 'disabled' | 'className' | 'minRows' | 'maxRows'> & {
  /**
   * エラーが発生していることを示したい場合に指定
   * @default false
   */
  error?: boolean;

  /**
   * ユーザーからの入力を受け付けないことを示すために非活性状態にしたい場合に指定
   * @default false
   */
  disabled?: boolean;

  /**
   * エラーメッセージ等の副次的内容をユーザーに示すときに指定
   *
   * 文字列の場合はデフォルトのスタイルが適用され、ValidなReactElementを渡すと渡したものがそのまま描画されます。
   */
  helperText?: ReactNode;

  /**
   * ラベルを表示するときに指定
   *
   * 文字列の場合はデフォルトのスタイルが適用され、ValidなReactElementを渡すと渡したものがそのまま描画されます。
   */
  label?: ReactNode;

  /**
   * サイズを指定
   *
   * @default large
   */
  size?: 'large' | 'medium';

  className?: string;
} & (
    | {
        /**
         * 最小の行数を指定 (入力行が何行でもminRows未満にはならない)
         *
         * _`rows`と組み合わせて使うことはできません_
         */
        minRows?: number;

        /**
         * 最大の行数を指定 (入力行が何行でもmaxRowsより多くはならない)
         *
         * _`rows`と組み合わせて使うことはできません_
         */
        maxRows?: number;

        /**
         * 行数を指定
         *
         * _`minRows`, `maxRows`と組み合わせて使うことはできません_
         */
        rows?: never;
      }
    | {
        /**
         * 最小の行数を指定 (入力行が何行でもminRows未満にはならない)
         *
         * _`rows`と組み合わせて使うことはできません_
         */
        minRows?: never;

        /**
         * 最大の行数を指定 (入力行が何行でもmaxRowsより多くはならない)
         *
         * _`rows`と組み合わせて使うことはできません_
         */
        maxRows?: never;

        /**
         * 行数を指定
         *
         * _`minRows`, `maxRows`と組み合わせて使うことはできません_
         */
        rows?: number;
      }
  );

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    { className, size = 'large', minRows, maxRows, rows, error, disabled, helperText, label, required, ...props },
    ref,
  ) => {
    return (
      <div className={fsx(`flex w-full flex-col gap-1`, className)}>
        <Text as="label" className={fsx(`flex flex-col gap-1`)}>
          <TextDefaultStyler
            content={label}
            defaultRenderer={({ children, ...props }) => (
              <Text {...props} size="s" weight="bold" className={fsx(`text-shade-medium-default`)}>
                {children}
                {children && required && (
                  <Text className={fsx(`text-negative-dark-default`)} weight="regular">
                    *
                  </Text>
                )}
              </Text>
            )}
          />
          <TextareaAutosize
            {...props}
            disabled={disabled}
            minRows={rows || minRows}
            maxRows={rows || maxRows}
            className={fsx([
              `bg-shade-white-default ring-shade-medium-default text-r text-shade-dark-default placeholder:text-shade-light-default focus-visible:ring-primary-medium-active w-full rounded font-sans font-normal ring-1 ring-inset placeholder:opacity-100 focus-visible:outline-none focus-visible:ring-2`,
              {
                large: `py-2 px-4`,
                medium: `py-1 px-2`,
              }[size],
              error && `ring-negative-medium-default focus-visible:ring-negative-medium-default`,
              disabled &&
                `bg-shade-white-disabled ring-shade-medium-disabled text-shade-dark-disabled placeholder:text-shade-light-disabled cursor-not-allowed`,
            ])}
            ref={ref}
          />
        </Text>
        <TextDefaultStyler
          content={helperText}
          defaultRenderer={(props) => (
            <Text
              size="s"
              weight="regular"
              className={fsx(`text-shade-dark-default`, error && `text-negative-dark-default`)}
              {...props}
            />
          )}
        />
      </div>
    );
  },
);
