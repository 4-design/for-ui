import React from 'react';

import { fsx } from '../system/fsx';
import { BadgeProps } from './Badge';

export const OutlineBadge: React.FC<BadgeProps> = ({ color = 'white', icon, label }) => {
  return (
    <div
      className={fsx([
        'flex flex-row items-center w-fit gap-1 text-r justify-center rounded outline px-2',
        color === 'white' && 'bg-[#fff] text-[#0B0D0E] outline-[#EEF0F1]',
        color === 'gray' && 'bg-[#F7F8F8] text-[#0B0D0E] outline-[#EEF0F1]',
        color === 'primary' && 'bg-[#E0F4FD] text-[#005093] outline-[#AFE2F8]',
        color === 'native' && 'bg-[#FBEEF1] text-[#C00F50] outline-[#F9BACB]',
      ])}
    >
      {icon && (
        <div
          className={fsx([
            color === 'white' && 'text-[#B3BCC1]',
            color === 'gray' && 'text-[#B3BCC1]',
            color === 'primary' && 'text-[#7ACFF4]',
            color === 'native' && 'text-[#F58DA9]',
          ])}
        >
          {icon}
        </div>
      )}

      <span>{label}</span>
    </div>
  );
};
