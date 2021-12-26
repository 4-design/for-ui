import React from 'react'
import MuiSkeleton, {
  SkeletonProps as MuiSkeletonProps,
} from '@mui/material/Skeleton'
import { TwStyle } from 'twin.macro'

export type SkeletonProps = MuiSkeletonProps & {
  loading?: boolean
  twin?: TwStyle | TwStyle[]
}

export const Skeleton: React.FC<SkeletonProps> = ({
  loading = false,
  twin,
  children,
  ...rest
}) => {
  if (loading) {
    return (
      <MuiSkeleton css={[twin]} {...rest}>
        {children}
      </MuiSkeleton>
    )
  }
  return children as React.ReactElement
}
