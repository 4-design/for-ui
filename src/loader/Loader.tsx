import React from 'react'
import 'twin.macro'
import HashLoader from 'react-spinners/HashLoader'

export const Loader: React.VFC<{
  color: string
  loading: boolean
}> = ({ color, loading }) => {
  return (
    <div tw="h-screen w-full flex justify-center items-center">
      <HashLoader color={color} loading={loading} size={150} />
    </div>
  )
}
