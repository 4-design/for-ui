import { FC } from 'react';
import MuiChip, { ChipProps as MuiChipProps } from '@mui/material/Chip';

export type TagProps = MuiChipProps & {
  className?: string;
};

export const Tag: FC<TagProps> = ({ label, className, onDelete, ...rest }) => {
  return (
    <MuiChip
      variant="outlined"
      label={label}
      onDelete={onDelete}
      classes={{
        root: `${className}`,
      }}
      {...rest}
    />
  );
};
