import React from 'react';
import { Text, Card, Button } from '@3-shake/3design-ui';

export const Login: React.FC = () => {
  return (
    <div className="min-width[1400px] bg-shade-light-default h-screen w-screen">
      <div className="m-auto flex h-full w-[fit-content] flex-col items-center justify-center">
        <Card className="w-120 border-shade-light-default flex min-h-[320px] justify-center rounded px-6 pt-12 pb-6 shadow-none">
          <div className="m-auto">
            <div className="relative h-9 min-w-[240px]">
              <div className="flex">
                <img src="/vite.svg" width="36" height="36" alt="logo" className="mr-4" />
                <span className="text-shade-dark-default overflow-x-hidden text-ellipsis whitespace-nowrap text-xl">
                  3design,inc
                </span>
              </div>
            </div>

            <Text variant="h1" className={'text-shade-medium-default mt-3 text-center text-base font-bold'}>
              ログイン
            </Text>
          </div>

          <div className="m-auto py-2.5">
            <Text className={'text-center text-base'}>
              サインアップ時に紐付けたアカウントで
              <br />
              ログインしてください
            </Text>

            <Button
              className={'font-bold! mx-auto mt-3 normal-case'}
              variant="outlined"
              startIcon={<img src="/images/login/google.svg" width="20" height="20" alt="Googleでログイン" />}
            >
              Googleでログイン
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};
