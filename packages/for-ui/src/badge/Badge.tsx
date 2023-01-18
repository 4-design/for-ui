import React, { ReactNode } from 'react';

import { ConstantBadge } from './ConstantBadge';
import { OutlineBadge } from './OutlineBadge';
import { TextBadge } from './TextBadge';

export type BadgeProps = {
  color?: 'white' | 'gray' | 'primary' | 'native';
  icon?: ReactNode;
  label: string;
  className?: string;
};

export const Badge: React.FC<BadgeProps & { variant?: 'constant' | 'text' | 'outline' }> = ({
  color = 'white',
  icon,
  variant = 'constant',
  label,
}) => {
  switch (variant) {
    case 'constant':
      return <ConstantBadge color={color} icon={icon} label={label} />;
    case 'text':
      return <TextBadge color={color} icon={icon} label={label} />;
    case 'outline':
      return <OutlineBadge color={color} icon={icon} label={label} />;
  }
};
