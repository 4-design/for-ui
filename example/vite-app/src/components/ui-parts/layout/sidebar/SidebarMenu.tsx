import React from 'react';
import clsx from 'clsx';
import { useSidebarContext } from './SidebarContext';

export type SidebarMenuItemProps = {
  IconComponent: React.ElementType;
  label: string | React.ReactNode; // NOTE: 一時的に文字列とコンポーネントを許容
  active?: boolean;
  className?: string;
};

export const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({
  IconComponent,
  label,
  className,
  active = false,
}) => {
  const { open } = useSidebarContext();
  return (
    <div
      className={clsx([
        'text-r flex cursor-pointer items-center px-4 py-3 font-medium',
        'hover:text-primary-white-default',
        active
          ? 'border-l-secondary-medium-active bg-primary-dark-active text-primary-white-default hover:bg-primary-dark-hover rounded-none border-0 border-l-4 border-solid'
          : 'text-shade-light-default',
        className,
      ])}
    >
      {/* {IconElement} */}
      <IconComponent size={24} className={clsx([open ? 'mr-4' : 'mr-0'])} />

      {open ? label : null}
    </div>
  );
};

export type SidebarMenuProps = {
  children: React.ReactNode;
};

export const SidebarMenu: React.FC<SidebarMenuProps> = ({ children }) => {
  return <nav className="flex h-0 flex-1 flex-col overflow-y-auto pb-2">{children}</nav>;
};
