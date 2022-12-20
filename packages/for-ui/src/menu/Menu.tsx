import React, { forwardRef } from 'react';
import MuiMenu, { MenuProps as MuiMenuProps } from '@mui/material/Menu';
import { fsx } from '../system/fsx';
import { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { usePopupState } from 'material-ui-popup-state/hooks';

export type MenuProps = Omit<MuiMenuProps, 'open'> & {
  TriggerComponent: React.ReactNode;
  nopadding?: boolean;
  className?: string;
};

export const Menu = forwardRef<HTMLDivElement, MenuProps>(
  (
    {
      anchorOrigin = {
        vertical: 'bottom',
        horizontal: 'right',
      },
      transformOrigin = {
        vertical: 'top',
        horizontal: 'right',
      },
      children,
      TriggerComponent,
      nopadding = false,
      className,
      ...rest
    },
    ref
  ) => {
    const popupState = usePopupState({
      variant: 'popover',
      popupId: undefined,
    });

    let _TriggerComponent = <></>;

    if (React.isValidElement<unknown>(TriggerComponent)) {
      _TriggerComponent = React.cloneElement(TriggerComponent, {
        ...bindTrigger(popupState),
      });
    }

    return (
      <React.Fragment>
        {_TriggerComponent}

        <MuiMenu
          ref={ref}
          anchorOrigin={anchorOrigin}
          transformOrigin={transformOrigin}
          classes={{
            root: fsx('translate-y-2', className),
            paper: fsx(['z-modal shadow-menu  min-w-min rounded-[4px]', nopadding ? 'p-0' : 'p-1']),
            list: fsx(['divide-shade-light-default grid grid-cols-1 divide-y py-0']),
            ...rest.classes,
          }}
          {...bindMenu(popupState)}
          {...rest}
        >
          {children}
        </MuiMenu>
      </React.Fragment>
    );
  }
);
