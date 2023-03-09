import { Fragment, useState } from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Button } from '../button';
import { Snackbar, SnackbarProps } from './Snackbar';

export default {
  title: 'Feedback / Snackbar',
  component: Snackbar,
} as Meta<SnackbarProps>;

export const Playground = {
  args: {
    open: true,
    message: 'テスト',
    autoHideDuration: null,
  },
};

export const Stateless = () => <Snackbar TriggerComponent={<Button>開く</Button>} message="操作が完了しました" />;

export const StatelessAutoHide = () => (
  <Snackbar TriggerComponent={<Button>開く</Button>} autoHideDuration={1000} message="操作が完了しました" />
);

export const Stateful = () => {
  const [open, setOpen] = useState(false);
  const openHandler = () => {
    setOpen(true);
  };
  const closeHandler = () => {
    setOpen(false);
  };
  return (
    <Fragment>
      <Button onClick={openHandler}>開く</Button>
      <Snackbar open={open} onClose={closeHandler} message="操作が完了しました" />
    </Fragment>
  );
};

export const StatefulAutoHide = () => {
  const [open, setOpen] = useState(false);
  const openHandler = () => {
    setOpen(true);
  };
  const closeHandler = () => {
    setOpen(false);
  };
  return (
    <Fragment>
      <Button onClick={openHandler}>開く</Button>
      <Snackbar open={open} onClose={closeHandler} autoHideDuration={1000} message="操作が完了しました" />
    </Fragment>
  );
};
