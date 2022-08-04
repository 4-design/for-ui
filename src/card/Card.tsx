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
    className="font-sans font-bold text-shade-dark-default border-none"
  >
    {children}
  </Typography>
)

export const CardAction: React.FC<CardActionProps> = ({ children }) => (
  <div>{children}</div>
)

export const Card: React.FC<CardProps> = ({ className, children }) => (
  <section
    className={`font-sans flex flex-col bg-shade-white-default overflow-y-visible shadow-main rounded-3xl ${className}`}
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
    <div className={`font-sans flex justify-between pt-8 px-8 ${className}`}>
      <CardTitle>{title}</CardTitle>
      {action && <CardAction>{action}</CardAction>}
    </div>
  )
}

export const CardBody: React.FC<{
  className?: string
  children: React.ReactNode
}> = ({ className, children }) => {
  return <div className={`font-sans p-8 pt-6 ${className}`}>{children}</div>
}
