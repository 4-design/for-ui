import {
  cloneElement,
  forwardRef,
  Fragment,
  isValidElement,
  ReactElement,
  SyntheticEvent,
  useId,
  useState,
} from 'react';
import {
  SnackbarContent as NotistackSnackbarContent,
  SnackbarContentProps as NotistackSnackbarContentProps,
  SnackbarKey,
} from 'notistack';
import MuiSnackbar, { SnackbarProps as MuiSnackbarProps, SnackbarCloseReason } from '@mui/material/Snackbar';
import MuiSnackbarContent, { SnackbarContentProps as MuiSnackbarContentProps } from '@mui/material/SnackbarContent';
import { Button } from '../button';
import { fsx } from '../system/fsx';
import { Text } from '../text';
import { useSnackbar } from './SnackbarContext';

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
   *
   * ボタンを押すと即座に表示のように使うことができますが、通常はユーザーの操作と処理の完了は完全に同義ではないため、そのような場面では使用は非推奨です。
   */
  TriggerComponent?: ReactElement<{ onClick: () => void }>;

  className?: string;
};

export const Snackbar = forwardRef<HTMLDivElement, SnackbarProps>(
  ({ TriggerComponent, autoHideDuration, onClose, onClick, message, action, className, ...rest }, ref) => {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const [key, setKey] = useState<SnackbarKey | undefined>();
    const [open, setOpen] = useState(false);
    const handleClose = (e: Event | SyntheticEvent<HTMLDivElement, Event>, reason: SnackbarCloseReason) => {
      onClose?.(e, reason);
      closeSnackbar?.(key);
      setOpen(false);
    };
    const handleOpen = () => {
      const key = enqueueSnackbar?.(message, {
        autoHide: !!autoHideDuration,
        persist: !autoHideDuration,
        onClose: handleClose,
      });
      if (key) {
        setKey(key);
        return;
      }
      setOpen(true);
    };
    const Trigger =
      isValidElement(TriggerComponent) &&
      cloneElement(TriggerComponent, {
        onClick: handleOpen,
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
          onClose={handleClose}
          // If autoHideDuration is specified, closable when clicking the snackbar
          onClick={(e) => {
            onClick?.(e);
            autoHideDuration && handleClose(e, 'escapeKeyDown');
          }}
          {...rest}
        >
          <SnackbarContent autoHide={!!autoHideDuration} message={message} onClose={handleClose} action={action} />
        </MuiSnackbar>
      </Fragment>
    );
  },
);

export type SnackbarContentProps = NotistackSnackbarContentProps & {
  autoHide?: boolean;
  onClose?: SnackbarProps['onClose'];
  message?: MuiSnackbarContentProps['message'];
  action?: MuiSnackbarContentProps['action'];
};

export const SnackbarContent = forwardRef<HTMLDivElement, SnackbarContentProps>(
  ({ autoHide, message, action, onClose, onClick, className, ...rest }, ref) => {
    const messageId = useId();
    return (
      <NotistackSnackbarContent
        ref={ref}
        aria-describedby={messageId}
        role={autoHide ? 'alert' : 'alertdialog'}
        className={fsx(
          `rounded-2 bg-shade-dark-default shadow-more text-shade-white-default text-r flex w-[40rem] flex-nowrap items-center justify-between gap-4 p-4 font-sans`,
          `[&_.MuiSnackbarContent-message]:m-0 [&_.MuiSnackbarContent-message]:py-1`,
          `[&_.MuiSnackbarContent-action]:m-0 [&_.MuiSnackbarContent-action]:shrink-0 [&_.MuiSnackbarContent-action]:p-0`,
          className,
        )}
        onClick={(e) => {
          onClick?.(e);
          autoHide && onClose?.(e, 'escapeKeyDown');
        }}
        {...rest}
      >
        <Text id={messageId}>{message}</Text>
        {action ||
          (!autoHide && (
            <Button
              intention="shade"
              variant="filled"
              size="medium"
              onClick={(e) => {
                onClose?.(e, 'escapeKeyDown');
              }}
            >
              閉じる
            </Button>
          ))}
      </NotistackSnackbarContent>
    );
  },
);
