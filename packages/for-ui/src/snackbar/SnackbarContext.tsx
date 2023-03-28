import { FC } from 'react';
import {
  SnackbarProvider as NotistackSnackbarProvider,
  SnackbarProviderProps as NotistackSnackbarProviderProps,
} from 'notistack';
import Grow from '@mui/material/Grow';
import { SnackbarContent } from './Snackbar';

export type SnackbarProviderProps = NotistackSnackbarProviderProps;

export const SnackbarProvider: FC<SnackbarProviderProps> = ({ ...props }) => (
  <NotistackSnackbarProvider
    maxSnack={1}
    // For legacy support notistack v2.x
    // content={(key, message) => <SnackbarContent key={key} message={message} />}
    Components={{
      default: SnackbarContent,
    }}
    TransitionComponent={Grow}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    // autoHideDuration={null}
    {...props}
  />
);

export { useSnackbar } from 'notistack';
