import { fsx } from '../system/fsx';

export const tabWrapperStyle = (color: 'primary' | 'secondary', noBorder: boolean, reverse: boolean) =>
  fsx([
    `border-solid h-10 min-h-min overflow-visible [&_.MuiTabs-indicator]:hidden [&_.MuiTabs-scroller]:h-10`,
    noBorder ? `border-transparent` : `border-shade-light-default`,
    reverse ? `border-t` : `border-b`,
    {
      primary: [
        `[&_[aria-selected=true]]:text-primary-dark-default`,
        reverse
          ? `[&_[aria-selected=true]]:border-t-primary-dark-default`
          : `[&_[aria-selected=true]]:border-b-primary-dark-default`,
      ],
      secondary: [
        `[&_[aria-selected=true]]:text-secondary-dark-default`,
        reverse
          ? `[&_[aria-selected=true]]:border-t-secondary-dark-default`
          : `[&_[aria-selected=true]]:border-b-secondary-dark-default`,
      ],
    }[color],
  ]);
