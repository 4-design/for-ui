import React from 'react'
import HashLoader from 'react-spinners/HashLoader'
import { Typography } from '../typography/Typography'

export const Loader: React.VFC<{
  color: string
  loading: boolean
  text?: string
}> = ({ color, loading, text }) => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <HashLoader color={color} loading={loading} size={150} />
      {text && (
        <Typography className="pt-20" variant="h4">
          {text}
        </Typography>
      )}
    </div>
  )
}
