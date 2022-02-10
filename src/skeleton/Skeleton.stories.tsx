import React from 'react'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import { Meta } from '@storybook/react/types-6-0'
import tw from 'twin.macro'

import { Text, Typography } from '../typography'
import { Skeleton, SkeletonX } from './Skeleton'

export default {
  title: 'Atom/Skeleton',
  component: Skeleton,
  decorators: [
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (Story: any) => (
      <div tw="">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

export const WithText = () => {
  const [loading, setLoading] = React.useState(false)
  React.useEffect(() => {
    const intervalId = setInterval(() => setLoading((x) => !x), 1000)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div tw="flex flex-col">
      <Skeleton loading={loading}>
        <Typography variant="h1">H1. Heading</Typography>
      </Skeleton>
      <Skeleton loading={loading}>
        <Typography variant="h2">H2. Heading</Typography>
      </Skeleton>
      <Skeleton loading={loading}>
        <Typography variant="h3">H3. Heading</Typography>
      </Skeleton>
      <Skeleton loading={loading}>
        <Typography variant="h4">H4. Heading</Typography>
      </Skeleton>
      <Skeleton loading={loading}>
        <Typography variant="h5">H5. Heading</Typography>
      </Skeleton>
      <Skeleton loading={loading}>
        <Typography variant="h6">H6. Heading</Typography>
      </Skeleton>
    </div>
  )
}

export const WithImage = () => {
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    const intervalId = setInterval(() => setLoading((x) => !x), 1000)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div tw="flex flex-col">
      <Skeleton loading={loading} variant="circular">
        <img
          tw="h-8 w-8 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        />
      </Skeleton>
    </div>
  )
}

export const WithAvatar = () => {
  return (
    <div>
      <AvatarGroup total={24}>
        <Skeleton>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </Skeleton>
        <Skeleton>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </Skeleton>
        <Skeleton>
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
        </Skeleton>
        <Skeleton>
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </Skeleton>
      </AvatarGroup>

      <AvatarGroup total={24}>
        <Skeleton loading>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </Skeleton>
        <Skeleton loading>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </Skeleton>
        <Skeleton loading>
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
        </Skeleton>
        <Skeleton loading>
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </Skeleton>
      </AvatarGroup>
    </div>
  )
}

export const WithCount = () => {
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    const intervalId = setInterval(() => setLoading((x) => !x), 1000)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div tw="flex flex-col">
      <Skeleton loading={loading} count={10}>
        <Typography variant="h1">H1. Heading</Typography>
        <Typography variant="h1">H1. Heading</Typography>
      </Skeleton>
    </div>
  )
}

export const WithNest = () => {
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    const intervalId = setInterval(() => setLoading((x) => !x), 1000)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div tw="flex flex-col">
      <SkeletonX loading={loading} variant="text">
        <Row>
          <Text bold variant="caption" twin={tw`text-shade-dark-default mb-2`}>
            サービス名
          </Text>

          <Text variant="caption" twin={tw`text-shade-dark-default`}>
            {undefined}
          </Text>
        </Row>

        <Row>
          <Text bold variant="caption" twin={tw`text-shade-dark-default`}>
            サービス概要
          </Text>

          <Text variant="caption" twin={tw`text-shade-dark-default`}>
            「メルカリ」は、個人が簡単にモノの売り買いが楽しめるフリマアプリです。AIによる不正の監視や独自の入金システムにより、誰でも安心・安全な取引が行えます。
          </Text>
        </Row>

        <Row>
          <Text bold variant="caption" twin={tw`text-shade-dark-default`}>
            使用中のインフラサービス
          </Text>

          <Text variant="caption" twin={tw`text-shade-dark-default`}>
            Google Cloud
          </Text>
        </Row>

        <Row>
          <Text bold variant="caption" twin={tw`text-shade-dark-default`}>
            停止の際の影響範囲
          </Text>

          <Text variant="caption" twin={tw`text-shade-dark-default`}>
            顧客がメルカリ上で取引が出来ない
          </Text>
        </Row>

        <Row>
          <Text bold variant="caption" twin={tw`text-shade-dark-default`}>
            構成図リンク
          </Text>

          <Text variant="caption" twin={tw`text-shade-dark-default`}>
            https://3-shake.com
          </Text>
        </Row>

        <Row>
          <Text bold variant="caption" twin={tw`text-shade-dark-default`}>
            トラフィック·ピーク時間帯
          </Text>

          <Text variant="caption" twin={tw`text-shade-dark-default`}>
            00:00 ~ 24:00
          </Text>
        </Row>
      </SkeletonX>
    </div>
  )
}

const Row = ({ children }) => <div tw="flex flex-col gap-2">{children}</div>
