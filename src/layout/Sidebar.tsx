import React from 'react'
import tw, { TwStyle, css } from 'twin.macro'

export type SidebarMenuItemProps = {
  icon: React.ReactNode
  label: string | React.ReactNode // NOTE: 一時的に文字列とコンポーネントを許容
  active?: boolean
}

export const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({
  icon,
  label,
  active = false,
}) => (
  <div
    css={[
      tw`flex items-center mx-4 px-2 py-3 text-r font-medium transition duration-300 ease-in-out rounded-lg cursor-pointer text-shade-medium-default hover:text-primary-white-default`,
      css`
        & > svg {
          ${tw`mr-4`}
        }

        &:hover {
          ${tw`text-primary-white-default`}
        }
      `,
      active &&
        css`
          ${tw`text-primary-white-default bg-primary-dark-hover`}
        `,
    ]}
  >
    {icon}
    {label}
  </div>
)

export type SidebarMenuProps = {
  twin?: TwStyle
  children: React.ReactNode
}

export const SidebarMenu: React.FC<SidebarMenuProps> = ({ children }) => {
  return (
    <nav tw="flex flex-col flex-1 h-0 overflow-y-auto gap-2">{children}</nav>
  )
}

export type SidebarProps = {
  twin?: TwStyle
  logo: React.ReactNode
  children: React.ReactNode
}

export const Sidebar: React.FC<SidebarProps> = ({ logo, children }) => {
  return (
    <div tw="h-screen flex flex-shrink-0">
      <div tw="flex flex-col w-64 bg-primary-dark-default">
        <div tw="flex flex-col flex-grow overflow-y-auto">
          {logo}
          {children}
        </div>
      </div>
    </div>
  )
}
