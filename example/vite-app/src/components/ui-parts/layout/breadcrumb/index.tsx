import React from 'react';
import clsx from 'clsx';
import { MdChevronRight } from 'react-icons/md';

type BreadcrumbItem = {
  title: string;
  href?: string;
};

export type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <ul className="flex">
      {items.map((item, i) => (
        <li key={item.href} className="flex items-center">
          {item.href ? (
            <>
              <a
                href={item.href}
                className={clsx([
                  'text-xr cursor-pointer font-bold',
                  items.length - 1 === i ? 'text-shade-dark-default ' : 'text-shade-medium-default',
                ])}
              >
                {item.title}
              </a>
              {items.length - 1 !== i && <MdChevronRight size={24} className="icon-shade-medium-default mx-1" />}
            </>
          ) : (
            item.title
          )}
        </li>
      ))}
    </ul>
  );
};
