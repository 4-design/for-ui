import React, { ReactNode } from 'react';

import { MdError } from 'react-icons/md';
import { fsx } from '../system/fsx';

type Props = {
  color?: 'white' | 'gray' | 'primary' | 'native';
  icon?: ReactNode;
  type?: 'constant' | 'text' | 'outline';
  label: string;
};

export const Badge: React.FC<Props> = ({ color = 'white', icon, type = 'constant', label }) => {
  switch (type) {
    case 'constant':
      return (
        <div
          className={fsx([
            'flex flex-row items-start gap-1 rounded',
            color === 'white' && 'text-[#0B0D0E]',
            color === 'primary' && 'text-[#005093]',
            color === 'native' && 'text-[#C00F50]',
          ])}
        >
          <div className="flex h-6 w-4 flex-row items-start py-1">
            <MdError className="h-4 w-4" />
          </div>
          <span className="text-r font-bold">{label}</span>
        </div>
      );
    case 'text':
      return (
        <div
          className={fsx([
            'flex flex-row items-center w-fit gap-1 text-r justify-center rounded px-2',
            color === 'white' && 'bg-[#fff] text-[#0B0D0E]',
            color === 'gray' && 'bg-[#F7F8F8] text-[#0B0D0E]',
            color === 'primary' && 'bg-[#E0F4FD] text-[#005093]',
            color === 'native' && 'bg-[#FBEEF1] text-[#C00F50]',
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
    case 'outline':
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
    default:
      return null;
  }
};
