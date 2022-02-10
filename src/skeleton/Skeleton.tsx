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

const recursiveChildren = (
  children: React.ReactNode,
  empty: React.ReactNode
): React.ReactNode => {
  if (!children) return <></>

  return React.Children.map(children, (child: React.ReactNode) => {
    if (!React.isValidElement<unknown>(child)) {
      return child
    }

    if (!React.isValidElement<unknown>(empty)) {
      return empty
    }

    if (React.Children.count(child.props.children) > 1) {
      return recursiveChildren(child.props.children, empty)
    } else if (React.Children.count(child.props.children) === 0) {
      return <MuiSkeleton>{React.cloneElement(empty, empty.props)}</MuiSkeleton>
    } else {
      return <MuiSkeleton>{React.cloneElement(child, child.props)}</MuiSkeleton>
    }
  })
}

type SkeletonXProps = MuiSkeletonProps & {
  loading?: boolean
  empty?: React.ReactNode
}

export const SkeletonX: React.FC<SkeletonXProps> = ({
  loading = false,
  empty = <div>xxxxxxxxxxxxxxx</div>,
  children,
}) => {
  if (loading) {
    const childs = recursiveChildren(children, empty)

    return <>{childs}</>
  }
  return children as React.ReactElement
}
