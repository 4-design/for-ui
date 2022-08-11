/* eslint-disable tailwindcss/no-custom-classname */
import React from 'react'
import clsx from 'clsx'
import {
  SidebarContext,
  SidebarProvider,
  useSidebarContext,
} from './SidebarContext'

export type SidebarMenuItemProps = {
  IconComponent: React.ElementType
  label: string | React.ReactNode // NOTE: 一時的に文字列とコンポーネントを許容
  active?: boolean
  className?: string
}

export const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({
  IconComponent,
  label,
  className,
  active = false,
}) => {
  const { open } = useSidebarContext()
  return (
    <div
      className={clsx([
        'flex cursor-pointer items-center px-4 py-3 text-r font-medium',
        'hover:text-primary-white-default',
        active
          ? 'rounded-none border-0 border-l-4 border-solid border-l-secondary-medium-active bg-primary-dark-active text-primary-white-default hover:bg-primary-dark-hover'
          : 'text-shade-light-default',
        className,
      ])}
    >
      {/* {IconElement} */}
      <IconComponent size={24} className={clsx([open ? 'mr-4' : 'mr-0'])} />

      {open ? label : null}
    </div>
  )
}

export type SidebarMenuProps = {
  children: React.ReactNode
}

export const SidebarMenu: React.FC<SidebarMenuProps> = ({ children }) => {
  return (
    <nav className="flex h-0 flex-1 flex-col overflow-y-auto pb-2">
      {children}
    </nav>
  )
}

export type SidebarProps = {
  LogoComponent: React.ElementType<{ open: boolean }>
  children: React.ReactElement
  defaultOpen?: boolean
}

export const Sidebar: React.FC<SidebarProps> = ({
  LogoComponent,
  defaultOpen = true,
  children,
}) => {
  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <SidebarContext.Consumer>
        {({ open }) => (
          <div
            className={clsx([
              'mx-0 flex h-screen w-14 shrink-0 grow bg-shade-dark-default',
              'transition-slowest transition-width duration-300 ease-in-out',
              open ? 'w-60' : 'w-[56px]',
            ])}
          >
            <div className="flex grow flex-col overflow-y-auto bg-primary-dark-default">
              <LogoComponent open={open} />
              {children}
            </div>
          </div>
        )}
      </SidebarContext.Consumer>
    </SidebarProvider>
  )
}
