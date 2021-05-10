import React from 'react'
import tw, { TwStyle } from 'twin.macro'
import { Typography } from '../typography/Typography'

export interface CardTitleProps {
  children: React.ReactNode | string
}

export interface CardProps {
  twin?: TwStyle[]
  children: React.ReactNode
}

export interface CardHeaderProps {
  title: React.ReactNode | string

  twin?: TwStyle[]
  action?: React.ReactNode
}

interface CardActionProps {
  children: React.ReactNode
}

export const CardTitle: React.VFC<CardTitleProps> = ({ children }) => (
  <Typography variant="h4" twin={tw`font-bold text-gray-high border-none`}>
    {children}
  </Typography>
)

export const CardAction: React.VFC<CardActionProps> = ({ children }) => (
  <div>{children}</div>
)

export const Card: React.VFC<CardProps> = ({ twin, children }) => (
  <section
    css={[
      tw`flex flex-col bg-white overflow-y-visible shadow-main rounded-3xl`,
      twin,
    ]}
  >
    {children}
  </section>
)

export const CardHeader: React.VFC<CardHeaderProps> = ({
  twin,
  title,
  action,
}) => {
  return (
    <div css={[tw`flex justify-between pt-8 px-8`, twin]}>
      <CardTitle>{title}</CardTitle>
      {action && <CardAction>{action}</CardAction>}
    </div>
  )
}

export const CardBody: React.VFC<{
  twin?: TwStyle[]
  children: React.ReactNode
}> = ({ twin, children }) => {
  return <div css={[tw`p-8 pt-6`, twin]}>{children}</div>
}
