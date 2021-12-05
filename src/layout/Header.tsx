import React from 'react'
import tw, { TwStyle } from 'twin.macro'

export type HeaderLeftProps = {
  twin?: TwStyle
  children?: React.ReactNode
}

export type HeaderRightProps = {
  twin?: TwStyle
  children: React.ReactNode | React.ReactNode[]
}

export type HeaderProps = {
  twin?: TwStyle
  children: React.ReactNode | React.ReactNode[]
}

export const HeaderLeft: React.FC<HeaderLeftProps> = ({ twin, children }) => (
  <div css={[tw`flex flex-1 items-center`, twin]}>{children}</div>
)

export const HeaderRight: React.FC<HeaderRightProps> = ({ twin, children }) => (
  <div css={[tw`flex items-center`, twin]}>{children}</div>
)

export const Header: React.FC<HeaderProps> = ({ twin, children }) => {
  return (
    <header
      css={[
        tw`relative h-24 px-6 z-header flex flex-shrink-0 items-center`,
        twin,
      ]}
    >
      <div tw="flex justify-between flex-1">{children}</div>
    </header>
  )
}
