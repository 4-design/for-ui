import React, { forwardRef } from 'react';
import MuiMenu, { MenuProps as MuiMenuProps } from '@mui/material/Menu';
import clsx from 'clsx';
import { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { usePopupState } from 'material-ui-popup-state/hooks';

export type MenuProps = Omit<MuiMenuProps, 'open'> & {
  TriggerComponent: React.ReactNode;
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
            root: clsx(['translate-y-2']),
            paper: clsx(['z-modal shadow-menu  min-w-min rounded-[4px] py-1']),
            list: clsx(['divide-shade-light-default grid grid-cols-1 divide-y py-0']),
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
