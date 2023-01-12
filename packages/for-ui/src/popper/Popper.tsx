import * as React from 'react';
import MuiPopper from '@mui/material/Popper';
import { bindPopper, bindTrigger } from 'material-ui-popup-state';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import { usePopupState } from 'material-ui-popup-state/hooks';
import { fsx } from '../system/fsx';

type PoppeChildrenProps = {
  onClick: (e: React.MouseEvent<any>) => void;
};

export type PopperProps = {
  TriggerComponent: React.ReactNode;

  children: React.ReactElement | ((props: PoppeChildrenProps) => React.ReactElement);
};

export const Popper = (props: PopperProps) => {
  const popupState = usePopupState({
    variant: 'popover',
    popupId: undefined,
  });

  const trigger = bindTrigger(popupState);
  let _TriggerComponent = <></>;
  if (React.isValidElement<unknown>(props.TriggerComponent)) {
    _TriggerComponent = React.cloneElement(props.TriggerComponent, {
      ...trigger,
    });
  }

  return (
    <React.Fragment>
      {_TriggerComponent}

      <MuiPopper {...bindPopper(popupState)} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper
              classes={{
                root: fsx(['z-modal shadow-menu  min-w-min rounded-[4px] p-1 translate-y-2']),
              }}
            >
              {typeof props.children === 'function' ? props.children({ onClick: popupState.close }) : props.children}
            </Paper>
          </Fade>
        )}
      </MuiPopper>
    </React.Fragment>
  );
};
