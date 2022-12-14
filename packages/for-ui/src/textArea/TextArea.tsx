import TextareaAutosize, { TextareaAutosizeProps } from '@mui/base/TextareaAutosize';
import { forwardRef } from 'react';
import { fsx } from '../system/fsx';

export type TextAreaProps = TextareaAutosizeProps & {
  className?: string;
  error?: boolean;
} & (
    | {
        minRows?: TextareaAutosizeProps['minRows'];
        maxRows?: TextareaAutosizeProps['maxRows'];
        rows?: never;
      }
    | {
        minRows?: never;
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
