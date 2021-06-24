import React from 'react'
import tw, { css } from 'twin.macro'

export interface SidebarMenuItemProps {
  href: string
  icon: React.ReactNode
  label: string | React.ReactNode // NOTE: 一時的に文字列とコンポーネントを許容
}

export const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({
  href,
  icon,
  label,
}) => (
  <a
    href={href}
    className="group"
    css={[
      tw`flex items-center pl-6 h-10 text-base font-medium rounded-md text-gray-low cursor-pointer hover:text-accent transition duration-300 ease-in-out`,
      css`
        & > svg {
          ${tw`w-6 h-6 mr-4`}
        }
      `,
    ]}
  >
    {icon}
    {label}
  </a>
)

export interface SidebarMenuProps {
  children: React.ReactNode
}

export const SidebarMenu: React.FC<SidebarMenuProps> = ({ children }) => {
  return (
    <div tw="flex flex-col flex-1 h-0 overflow-y-auto">
      <nav>{children}</nav>
    </div>
  )
}

export interface SidebarProps {
  logo: React.ReactNode
  children: React.ReactNode
}

export const Sidebar: React.FC<SidebarProps> = ({ logo, children }) => {
  return (
    <div tw="h-screen flex flex-shrink-0">
      <div tw="flex flex-col w-64">
        <div tw="flex flex-col flex-grow pb-4 overflow-y-auto">
          {logo}
          {children}
        </div>
      </div>
    </div>
  )
}
