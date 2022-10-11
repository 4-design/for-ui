import React, { ReactNode } from 'react';

import { Typography } from '../typography';

type Props = {
  /** The contents of the Dialog. */
  children: ReactNode | string;
};

export const ModalHeader: React.FC<Props> = ({ children }) => {
  return (
    <div className="border-shade-light-default border-b p-4">
      <Typography variant="p" bold className="text-r font-bold">
        {children}
      </Typography>
    </div>
  );
};
