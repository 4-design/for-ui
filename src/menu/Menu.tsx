import React, { forwardRef } from 'react'
import MuiMenu, { MenuProps as MuiMenuProps } from '@mui/material/Menu'
import clsx from 'clsx'
import { bindTrigger, bindMenu } from 'material-ui-popup-state'
import { usePopupState } from 'material-ui-popup-state/hooks'

export type MenuProps = Omit<MuiMenuProps, 'open'> & {
  TriggerComponent: React.ReactNode
}

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
    },
    ref
  ) => {
    const popupState = usePopupState({
      variant: 'popover',
      popupId: undefined,
    })

    let _TriggerComponent = <></>
    if (React.isValidElement<unknown>(TriggerComponent)) {
      _TriggerComponent = React.cloneElement(TriggerComponent, {
        ...bindTrigger(popupState),
      })
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
            paper: clsx(['z-modal min-w-min  rounded-[4px] py-1 shadow-menu']),
            list: clsx([
              'grid grid-cols-1 divide-y divide-shade-light-default py-0',
            ]),
          }}
          {...bindMenu(popupState)}
        >
          {children}
        </MuiMenu>
      </React.Fragment>
    )
  }
)
