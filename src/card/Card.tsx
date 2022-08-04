import React from 'react'
import { Typography } from '../typography/Typography'

export interface CardTitleProps {
  children: React.ReactNode | string
}

export interface CardProps {
  className?: string
  children: React.ReactNode
}

export interface CardHeaderProps {
  title: React.ReactNode | string

  className?: string
  action?: React.ReactNode
}

interface CardActionProps {
  children: React.ReactNode
}

export const CardTitle: React.FC<CardTitleProps> = ({ children }) => (
  <Typography
    variant="h4"
    className="border-none font-sans font-bold text-shade-dark-default"
  >
    {children}
  </Typography>
)

export const CardAction: React.FC<CardActionProps> = ({ children }) => (
  <div>{children}</div>
)

export const Card: React.FC<CardProps> = ({ className, children }) => (
  <section
    className={`flex flex-col overflow-y-visible rounded-3xl bg-shade-white-default font-sans shadow-main ${className}`}
  >
    {children}
  </section>
)

export const CardHeader: React.FC<CardHeaderProps> = ({
  className,
  title,
  action,
}) => {
  return (
    <div className={`flex justify-between px-8 pt-8 font-sans ${className}`}>
      <CardTitle>{title}</CardTitle>
      {action && <CardAction>{action}</CardAction>}
    </div>
  )
}

export const CardBody: React.FC<{
  className?: string
  children: React.ReactNode
}> = ({ className, children }) => {
  return <div className={`p-8 pt-6 font-sans ${className}`}>{children}</div>
}
