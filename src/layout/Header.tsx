import React from 'react'
import 'twin.macro'

export interface HeaderLeftProps {
  children?: React.ReactNode
}

export interface HeaderRightProps {
  children: React.ReactNode | React.ReactNode[]
}

export interface HeaderProps {
  children: React.ReactNode | React.ReactNode[]
}

export const HeaderLeft: React.FC<HeaderLeftProps> = ({ children }) => (
  <div tw="flex flex-1 items-center">{children}</div>
)

export const HeaderRight: React.FC<HeaderRightProps> = ({ children }) => (
  <div tw="flex items-center ml-6">{children}</div>
)

export const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <header tw="relative h-20 z-header flex flex-shrink-0 items-center">
      <div tw="flex justify-between flex-1 pl-5 pr-10">{children}</div>
    </header>
  )
}
