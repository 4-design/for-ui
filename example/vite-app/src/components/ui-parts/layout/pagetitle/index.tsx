import { FC, PropsWithChildren, ReactNode } from 'react';
import clsx from 'clsx';
import { Breadcrumb, BreadcrumbProps } from '../breadcrumb';

type PageTitleProps = PropsWithChildren<{
  breadcrumbs?: BreadcrumbProps['items'];
  subtitle?: string | ReactNode;
}>;

export const PageTitle: FC<PageTitleProps> = ({ breadcrumbs, subtitle, children }) => {
  return (
    <div
      className={clsx([
        'z-header border-shade-light-default bg-shade-white-default relative flex h-[52px] shrink-0 items-center border px-6',
      ])}
    >
      <PageTitleLeft>
        {breadcrumbs && <Breadcrumb items={breadcrumbs} />}
        {subtitle && (
          <span className="border-shade-light-default text-shade-medium-default ml-6 flex h-6 items-center border-l pl-6 text-xs font-normal">
            {subtitle}
          </span>
        )}
      </PageTitleLeft>
      {/* <PageTitleRight></PageTitleRight> */}
      {children}
    </div>
  );
};

const PageTitleLeft: FC<PropsWithChildren> = ({ children }) => (
  <div className="flex flex-1 items-center">{children}</div>
);

// const PageTitleRight: FC<PropsWithChildren> = ({ children }) => (
//   <div className="flex items-center">{children}</div>
// )
