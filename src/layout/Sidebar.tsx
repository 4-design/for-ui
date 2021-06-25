import React from 'react'
import tw, { css } from 'twin.macro'

export interface SidebarMenuItemProps {
  href: string
  icon: React.ReactNode
  label: string | React.ReactNode // NOTE: 一時的に文字列とコンポーネントを許容
  active?: boolean
}

export const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({
  href,
  icon,
  label,
  active = false,
}) => (
  <a
    href={href}
    className="group"
    css={[
      tw`flex items-center h-10 pl-6 text-base font-medium transition duration-300 ease-in-out rounded-md cursor-pointer text-gray-low hover:text-accent`,
      css`
        & > svg {
          ${tw`w-6 h-6 mr-4`}
        }
      `,
      active && tw`text-accent`,
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
