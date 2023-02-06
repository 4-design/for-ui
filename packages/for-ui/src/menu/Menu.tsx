import { forwardRef, cloneElement, ReactElement, Fragment } from 'react';
import MuiMenu, { MenuProps as MuiMenuProps } from '@mui/material/Menu';
import { fsx } from '../system/fsx';
import { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { usePopupState } from 'material-ui-popup-state/hooks';
import { style } from './style';

export type MenuProps = Omit<MuiMenuProps, 'open'> & {
  TriggerComponent: ReactElement;
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

    const _TriggerComponent = cloneElement(TriggerComponent, {
      ...bindTrigger(popupState),
    });

    return (
      <Fragment>
        {_TriggerComponent}

        <MuiMenu
          ref={ref}
          anchorOrigin={anchorOrigin}
          transformOrigin={transformOrigin}
          classes={{
            root: fsx(className),
            paper: fsx(`p-0 shadow-none overflow-visible`),
            list: fsx(style),
          }}
          {...bindMenu(popupState)}
          {...rest}
        >
          {children}
        </MuiMenu>
      </Fragment>
    );
  }
);
