import { cloneElement, forwardRef, Fragment, isValidElement, ReactElement, useState } from 'react';
import MuiSnackbar, { SnackbarProps as MuiSnackbarProps } from '@mui/material/Snackbar';
import SnackbarContent from '@mui/material/SnackbarContent';
import { Button } from '../button';
import { fsx } from '../system/fsx';

export type SnackbarProps = MuiSnackbarProps & {
  /**
   * 自動的にSnackbarが消えるまでの時間を指定
   *
   * 指定されているときは閉じるボタンは表示されません。
   * 消えるまでの時間はミリ秒で指定します。_message_を読むのに十分な時間を与えるようにしてください。
   */
  autoHideDuration?: MuiSnackbarProps['autoHideDuration'];

  /**
   * 表示するメッセージを指定
   */
  message: MuiSnackbarProps['message'];

  /**
   * 操作の起点となるコンポーネントを指定
   */
  TriggerComponent?: ReactElement<{ onClick: () => void }>;

  className?: string;
};

export const Snackbar = forwardRef<HTMLDivElement, SnackbarProps>(
  ({ TriggerComponent, autoHideDuration, onClose, onClick, message, action, className, ...rest }, ref) => {
    const [open, setOpen] = useState(false);
    const Trigger =
      isValidElement(TriggerComponent) &&
      cloneElement(TriggerComponent, {
        onClick() {
          setOpen(true);
        },
      });
    return (
      <Fragment>
        {Trigger}
        <MuiSnackbar
          ref={ref}
          open={open}
          transitionDuration={150}
          autoHideDuration={autoHideDuration}
          className={fsx(className)}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          ClickAwayListenerProps={{
            // To disable being closed by clicking outside of snackbar
            onClickAway() {
              undefined;
            },
          }}
          onClose={(e, reason) => {
            onClose?.(e, reason);
            setOpen(false);
          }}
          // If autoHideDuration is specified, closable when clicking the snackbar
          onClick={(e) => {
            onClick?.(e);
            autoHideDuration && onClose?.(e, 'escapeKeyDown');
            autoHideDuration && setOpen(false);
          }}
          {...rest}
        >
          <SnackbarContent
            message={message}
            className={fsx(
              `rounded-2 bg-shade-dark-default shadow-more text-shade-white-default text-r flex w-[40rem] flex-nowrap items-center justify-between gap-4 p-4 font-sans`,
              `[&_.MuiSnackbarContent-message]:m-0 [&_.MuiSnackbarContent-message]:py-1`,
              `[&_.MuiSnackbarContent-action]:m-0 [&_.MuiSnackbarContent-action]:shrink-0 [&_.MuiSnackbarContent-action]:p-0`,
            )}
            action={
              action ||
              (!autoHideDuration && (
                <Button
                  intention="shade"
                  variant="filled"
                  size="medium"
                  onClick={(e) => {
                    onClose?.(e, 'escapeKeyDown');
                    setOpen(false);
                  }}
                >
                  閉じる
                </Button>
              ))
            }
          />
        </MuiSnackbar>
      </Fragment>
    );
  },
);
