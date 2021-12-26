import React from 'react'
import MuiSkeleton, {
  SkeletonProps as MuiSkeletonProps,
} from '@mui/material/Skeleton'
import { TwStyle } from 'twin.macro'

export type SkeletonProps = MuiSkeletonProps & {
  loading?: boolean
  twin?: TwStyle | TwStyle[]
  count?: number
}

export const Skeleton: React.FC<SkeletonProps> = ({
  loading = false,
  count = 1,
  twin,
  children,
  ...rest
}) => {
  if (loading) {
    return (
      <>
        {[...Array(count)].map((_, idx) => (
          <MuiSkeleton css={[twin]} {...rest} key={idx}>
            {React.Children.count(children) > 0 &&
              React.Children.toArray(children)[0]}
          </MuiSkeleton>
        ))}
      </>
    )
  }
  return children as React.ReactElement
}
