/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useRef, useCallback } from 'react';
import MuiDrawer, { DrawerProps as MuiDrawerProps } from '@mui/material/Drawer';
import { fsx } from '../system/fsx';
import { MdClose, MdMoreVert } from 'react-icons/md';
import { Button } from '../button';

type Props = MuiDrawerProps & {
  headerChildren?: React.ReactNode;
  defaultWidth?: number;
  defaultHeight?: number;
  minWidth?: number;
  minHeight?: number;
  onClose?: () => void;
  className?: string;
};

const _minWidth = 240;

export const DrawerAnchor = {
  left: 'left',
  right: 'right',
} as const;
export type DrawerAnchor = (typeof DrawerAnchor)[keyof typeof DrawerAnchor];

export const Drawer: React.FC<Props> = ({
  open,
  anchor = DrawerAnchor.right,
  headerChildren,
  defaultWidth = _minWidth,
  minWidth = _minWidth,
  children,
  onClose,
  className,
  ...rest
}) => {
  const ref = useRef(null);
  const [width, setWidth] = useState(defaultWidth);

  const handleClose = useCallback(() => {
    if (onClose) onClose();
  }, [onClose]);

  const handleMouseMove = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (e: any) => {
      switch (anchor) {
        case DrawerAnchor.left: {
          const newWidth = e.pageX;
          if (newWidth > minWidth && newWidth < window.innerWidth) {
            setWidth(newWidth);
          }

          break;
        }
        case DrawerAnchor.right: {
          const newWidth = window.innerWidth - e.pageX;
          if (newWidth > minWidth && newWidth < window.innerWidth) {
            setWidth(newWidth);
          }

          break;
        }
      }
    },
    [anchor]
  );

  const handleMouseUp = useCallback(() => {
    document.removeEventListener('mouseup', handleMouseUp, true);
    document.removeEventListener('mousemove', handleMouseMove, true);
  }, []);

  const handleMouseDown = useCallback(() => {
    document.addEventListener('mouseup', handleMouseUp, true);
    document.addEventListener('mousemove', handleMouseMove, true);
  }, []);

  return (
    <MuiDrawer
      open={open}
      anchor={anchor}
      classes={{
        root: fsx('shadow-drawer z-modal', className),
        paper: fsx('p-6 [&.MuiBackdrop-root]:bg-transparent'),
      }}
      PaperProps={{
        sx: {
          width,
          height: '100%',
        },
      }}
      onClose={handleClose}
      {...rest}
    >
      <div className="flex items-center">
        <Button variant="text" size="small" startIcon={<MdClose size={16} />} onClick={handleClose}>
          閉じる
        </Button>

        {headerChildren && <div className="ml-auto">{headerChildren}</div>}
      </div>

      <div
        onMouseDown={handleMouseDown}
        ref={ref}
        className={fsx([
          'user-select[none] absolute top-0 h-full w-9 cursor-[ew-resize] px-3',
          anchor === 'left' ? '-right-3' : '-left-3',
        ])}
      >
        <span
          className={fsx([
            'border-shade-light-default hover:bg-shade-white-hover block h-full w-full',
            anchor === DrawerAnchor.left ? 'border-r' : 'border-l',
          ])}
        >
          <MdMoreVert
            size="24"
            className={fsx(['relative h-full', anchor === 'left' ? 'right-[6px]' : '-left-[6px]'])}
          />
        </span>
      </div>
      <div className="overflow-wrap[break-word] mt-3">{children}</div>
    </MuiDrawer>
  );
};
