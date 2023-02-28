import { Children, cloneElement, FC, Fragment, isValidElement, ReactNode } from 'react';
import MuiSkeleton, { SkeletonProps as MuiSkeletonProps } from '@mui/material/Skeleton';
import { fsx } from '../system/fsx';

export type SkeletonProps = MuiSkeletonProps & {
  loading?: boolean;
  className?: string;
  count?: number;
};

export const Skeleton: FC<SkeletonProps> = ({ loading = false, count = 1, className, children, ...rest }) => {
  if (loading) {
    return (
      <>
        {[...Array(count)].map((_, idx) => (
          <MuiSkeleton className={fsx(`bg-shade-medium-disabled`, className)} {...rest} key={idx}>
            {Children.count(children) > 0 && Children.toArray(children)[0]}
          </MuiSkeleton>
        ))}
      </>
    );
  }
  if (isValidElement(children)) {
    return children;
  }
  return <Fragment>{children}</Fragment>;
};

const recursiveChildren = (children: ReactNode, empty: ReactNode): ReactNode => {
  if (!children) return <></>;

  return Children.map(children, (child: ReactNode) => {
    if (!isValidElement<unknown>(child)) {
      return child;
    }

    if (!isValidElement<unknown>(empty)) {
      return empty;
    }

    if (Children.count(child.props.children) > 1) {
      return recursiveChildren(child.props.children, empty);
    }
    if (Children.count(child.props.children) === 0) {
      return <MuiSkeleton className={fsx(`bg-shade-medium-disabled`)}>{cloneElement(empty, empty.props)}</MuiSkeleton>;
    }
    return <MuiSkeleton className={fsx(`bg-shade-medium-disabled`)}>{cloneElement(child, child.props)}</MuiSkeleton>;
  });
};

type SkeletonXProps = MuiSkeletonProps & {
  loading?: boolean;
  empty?: ReactNode;
};

export const SkeletonX: FC<SkeletonXProps> = ({
  loading = false,
  empty = <div aria-hidden>xxxxxxxxxxxxxxx</div>,
  children,
}) => {
  if (loading) {
    return <Fragment>{recursiveChildren(children, empty)}</Fragment>;
  }
  if (isValidElement(children)) {
    return children;
  }
  return <Fragment>{children}</Fragment>;
};
