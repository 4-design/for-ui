import React from 'react';

import { fsx } from '../system/fsx';
import { BadgeProps } from './Badge';

export const ConstantBadge: React.FC<BadgeProps> = ({ color = 'white', icon, label }) => {
  return (
    <div
      className={fsx([
        'flex flex-row items-start gap-1 rounded',
        color === 'white' && 'text-[#0B0D0E]',
        color === 'primary' && 'text-[#005093]',
        color === 'native' && 'text-[#C00F50]',
      ])}
    >
      <div className="flex h-6 w-4 flex-row items-start py-1">{icon}</div>
      <span className="text-r font-bold">{label}</span>
    </div>
  );
};
