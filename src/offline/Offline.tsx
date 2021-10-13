import React from 'react'
import Alert from '@mui/material/Alert'
import { Offline as DetectOffline } from 'react-detect-offline'

export const Offline: React.VFC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <DetectOffline>
      <Alert elevation={6} variant="filled" severity="error">
        {children}
      </Alert>
    </DetectOffline>
  )
}
