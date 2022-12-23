import { FC } from 'react';
import { ChipProps as MuiChipProps } from '@mui/material/Chip';
import { fsx } from '../system/fsx';
import { MdClose } from 'react-icons/md';

type ChipColorType = 'default' | 'negative' | 'white';

export type ChipProps = Omit<MuiChipProps, 'color' | 'icon' | 'deleteIcon' | 'size'> & {
  // twin?: TwStyle[]
  color?: ChipColorType;
} & (
    | {
        leadingIcon: MuiChipProps['icon'];
      }
    | {
        leadingIcon?: never;

        onDelete?: MuiChipProps['onDelete'];
      }
  );

export const Chip: FC<ChipProps> = ({ label, leadingIcon, onDelete, clickable, color = 'default' }) => {
  return (
    <div
      className={fsx([
        'inline-flex flex-row gap-1 items-center justify-center rounded border',
        color === 'default' && 'border-[#42BCEF] bg-[#E0F4FD] text-[#005093] hover:bg-[#AFE2F8]',
        color === 'white' && 'border-[#B3BCC1] bg-[#FFFFFF] text-shade-dark-default hover:bg-[#F7F8F8]',
        color === 'negative' && 'border-[#F05F87] bg-[#FBEEF1] text-[#C00F50] hover:bg-[#F8DEE2]',
        color === 'default' && onDelete && 'hover:bg-[#E0F4FD]',
        color === 'white' && onDelete && 'hover:bg-[#FFFFFF]',
        color === 'negative' && onDelete && 'hover:bg-[#FBEEF1]',
        clickable && 'cursor-pointer',
        !onDelete ? 'px-2' : 'pl-2',
      ])}
    >
      {leadingIcon && leadingIcon}
      <span className="text-r flex items-center">{label}</span>
      {onDelete && (
        <button
          onClick={onDelete}
          className={fsx([
            'flex flex-row items-start border-l p-1 rounded-r',
            color === 'default' && 'border-[#AFE2F8] hover:border-[#42BCEF] bg-[#E0F4FD] hover:bg-[#AFE2F8]',
            color === 'white' && 'border-[#F7F8F8] hover:border-[#B3BCC1] bg-[#FFFFFF] hover:bg-[#F7F8F8]',
            color === 'negative' && 'border-[#F8DEE2] hover:border-[#F05F87] bg-[#FBEEF1] hover:bg-[#F8DEE2]',
          ])}
        >
          <MdClose className="h-4 w-4" />
        </button>
      )}
    </div>
  );
};
