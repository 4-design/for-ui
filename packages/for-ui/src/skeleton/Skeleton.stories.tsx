import React, { FC, ReactNode } from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { Meta } from '@storybook/react/types-6-0';
import { Text } from '../text';
import { Skeleton, SkeletonX } from './Skeleton';

export const Playground = {
  args: {
    loading: true,
    children: undefined,
  },
};

export default {
  title: 'Feedback / Skeleton',
  component: Skeleton,
  decorators: [
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (Story: any) => (
      <div className="">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

export const WithText = () => {
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    const intervalId = setInterval(() => setLoading((x) => !x), 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col">
      <Skeleton loading={loading}>
        <Text size="xl" as="h1">
          H1. Heading
        </Text>
      </Skeleton>
      <Skeleton loading={loading}>
        <Text size="l" as="h2">
          H2. Heading
        </Text>
      </Skeleton>
      <Skeleton loading={loading}>
        <Text size="xr" as="h3">
          H3. Heading
        </Text>
      </Skeleton>
      <Skeleton loading={loading}>
        <Text size="r" as="h4">
          H4. Heading
        </Text>
      </Skeleton>
      <Skeleton loading={loading}>
        <Text size="s" as="h5">
          H5. Heading
        </Text>
      </Skeleton>
      <Skeleton loading={loading}>
        <Text size="xs" as="h6">
          H6. Heading
        </Text>
      </Skeleton>
    </div>
  );
};

export const WithImage = () => {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const intervalId = setInterval(() => setLoading((x) => !x), 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col">
      <Skeleton loading={loading} variant="circular">
        <img
          className="h-8 w-8 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="テスト画像"
        />
      </Skeleton>
    </div>
  );
};

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
  );
};

export const WithCount = () => {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const intervalId = setInterval(() => setLoading((x) => !x), 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col">
      <Skeleton loading={loading} count={10}>
        <Text size="xl" as="h1">
          H1. Heading
        </Text>
        <Text size="xl" as="h1">
          H1. Heading
        </Text>
      </Skeleton>
    </div>
  );
};

export const WithNest = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const intervalId = setInterval(() => setLoading((x) => !x), 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col">
      <SkeletonX loading={loading} variant="text">
        <Row>
          <Text weight="bold" className="text-shade-dark-default mb-2">
            サービス名
          </Text>

          <Text className="text-shade-dark-default">{undefined}</Text>
        </Row>

        <Row>
          <Text weight="bold" className="text-shade-dark-default">
            サービス概要
          </Text>

          <Text className="text-shade-dark-default">
            「Reckoner」は、個人が簡単にモノの売り買いが楽しめるフリマアプリです。AIによる不正の監視や独自の入金システムにより、誰でも安心・安全な取引が行えます。
          </Text>
        </Row>

        <Row>
          <Text weight="bold" className="text-shade-dark-default">
            使用中のインフラサービス
          </Text>

          <Text className="text-shade-dark-default">Google Cloud</Text>
        </Row>

        <Row>
          <Text weight="bold" className="text-shade-dark-default">
            停止の際の影響範囲
          </Text>

          <Text className="text-shade-dark-default">顧客がReckoner上で取引が出来ない</Text>
        </Row>

        <Row>
          <Text weight="bold" className="text-shade-dark-default">
            構成図リンク
          </Text>

          <Text className="text-shade-dark-default">https://3-shake.com</Text>
        </Row>

        <Row>
          <Text weight="bold" className="text-shade-dark-default">
            トラフィック·ピーク時間帯
          </Text>

          <Text className="text-shade-dark-default">00:00 ~ 24:00</Text>
        </Row>
      </SkeletonX>
    </div>
  );
};

const Row: FC<{ children: ReactNode }> = ({ children }) => <div className="flex flex-col gap-2">{children}</div>;
