import React from 'react'

export type HeaderLeftProps = {
  className?: string
  children?: React.ReactNode
}

export type HeaderRightProps = {
  className?: string
  children: React.ReactNode | React.ReactNode[]
}

export type HeaderProps = {
  children: React.ReactNode | React.ReactNode[]
}

export const HeaderLeft: React.FC<HeaderLeftProps> = ({
  className,
  children,
}) => <div className={`flex flex-1 items-center ${className}`}>{children}</div>

export const HeaderRight: React.FC<HeaderRightProps> = ({
  className,
  children,
}) => <div className={`flex items-center ${className}`}>{children}</div>

export const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <header className="relative h-16 px-6 z-header flex flex-shrink-0 items-center border-b border-shade-light-default">
      <div className="flex justify-between flex-1">{children}</div>
    </header>
  )
}
