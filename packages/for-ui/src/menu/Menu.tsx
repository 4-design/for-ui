import React, { forwardRef } from 'react';
import MuiMenu, { MenuProps as MuiMenuProps } from '@mui/material/Menu';
import { fsx } from '../system/fsx';
import { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { usePopupState } from 'material-ui-popup-state/hooks';
import { style } from './style';

export type MenuProps = Omit<MuiMenuProps, 'open'> & {
  TriggerComponent: React.ReactNode;
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
            root: fsx('-translate-x-2', className),
            paper: fsx(`shadow-none overflow-visible p-0`),
            list: fsx(style),
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
