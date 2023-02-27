import { FC } from 'react';
import { fsx } from '../system/fsx';
import { Loading } from './Loading';

export const Loader: FC<{ className?: string }> = ({ className }) => (
  <Loading className={fsx(`w-4 h-4 motion-safe:animate-spin`, className)} role="img" aria-label="処理中" aria-busy />
);
