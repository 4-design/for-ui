import TextareaAutosize, { TextareaAutosizeProps } from '@mui/base/TextareaAutosize';
import { forwardRef } from 'react';
import { fsx } from '../system/fsx';

export type TextAreaProps = TextareaAutosizeProps & {
  /**
   * エラーが発生していることを示したい場合に指定
   * @default false
   */
  error?: boolean;

  className?: string;
} & (
    | {
        /**
         * 最小の行数を指定 (入力行が何行でもminRows未満にはならない)
         */
        minRows?: TextareaAutosizeProps['minRows'];

        /**
         * 最大の行数を指定 (入力行が何行でもmaxRowsより多くはならない)
         */
        maxRows?: TextareaAutosizeProps['maxRows'];

        /**
         * minRows, maxRowsと組み合わせて使うことはできません
         */
        rows?: never;
      }
    | {
        /**
         * rowsと組み合わせて使うことはできません
         */
        minRows?: never;

        /**
         * rowsと組み合わせて使うことはできません
         */
        maxRows?: never;
        rows?: number;
      }
  );

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, minRows, maxRows, rows, error, ...props }, ref) => {
    return (
      <TextareaAutosize
        {...props}
        minRows={rows || minRows}
        maxRows={rows || maxRows}
        className={fsx([
          `w-full bg-shade-white-default ring-shade-medium-default ring-inset ring-1 text-r text-shade-dark-default placeholder:text-shade-light-default rounded h-auto py-2.5 px-3 font-sans font-normal placeholder:opacity-100  focus-visible:outline-none focus-visible:ring-primary-medium-active focus-visible:ring-2`,
          error && `ring-negative-medium-default focus-visible:ring-negative-medium-default`,
          className,
        ])}
        ref={ref}
      />
    );
  }
);
