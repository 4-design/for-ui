import { ComponentPropsWithRef, forwardRef, ReactNode } from 'react';
import { fsx } from '../system/fsx';
import { TextDefaultStyler } from '../system/TextDefaultStyler';
import { Text } from '../text';

export type SwitchProps = ComponentPropsWithRef<'input'> & {
  label?: ReactNode;
  className?: string;
};

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(({ label, disabled, className, ...rest }, ref) => (
  <Text as="label" className={fsx(`group inline-flex w-[max-content] flex-row gap-1 items-center`, className)}>
    <input
      type="checkbox"
      ref={ref}
      className={fsx([
        `appearance-none bg-shade-medium-default rounded-full h-5 w-8 p-0.5 transition-all duration-100 cursor-pointer`,
        `before:content-[''] before:block before:h-4 before:w-4 before:bg-shade-white-default before:rounded-full`,
        `checked:bg-primary-dark-default checked:pl-3.5`,
        `disabled:cursor-not-allowed disabled:bg-shade-medium-disabled`,
        `disabled:checked:bg-primary-dark-disabled`,
      ])}
      disabled={disabled}
      {...rest}
    />
    <TextDefaultStyler
      content={label}
      defaultRenderer={(props) => (
        <Text size="r" className={fsx(`text-shade-dark-default`, disabled && `text-shade-dark-disabled`)} {...props} />
      )}
    />
  </Text>
));
