import TextareaAutosize, { TextareaAutosizeProps } from '@mui/base/TextareaAutosize';
import { forwardRef, ReactNode } from 'react';
import { fsx } from '../system/fsx';

export type TextAreaProps = TextareaAutosizeProps & {
  className?: string;
  label?: ReactNode;
  error?: boolean;
} & ({
  minRows?: TextareaAutosizeProps['minRows'];
  maxRows?: TextareaAutosizeProps['maxRows'];
  rows?: never;
} | {
  minRows?: never;
  maxRows?: never;
  rows?: number;
})

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({className, minRows, maxRows, rows, ...props}, ref) => {
    return (
      <TextareaAutosize
        {...props}
        minRows={rows || minRows}
        maxRows={rows || maxRows}
        className={fsx([
          `bg-shade-white-default border-shade-medium-default border text-r text-shade-dark-default placeholder:text-shade-light-default rounded h-auto py-2.5 px-3 font-sans placeholder:opacity-100 focus-visible:border-primary-medium-active focus-visible:border-2 focus-visible:outline-none`,
          className,
        ])}
        ref={ref}
      />
    );
  }
)
