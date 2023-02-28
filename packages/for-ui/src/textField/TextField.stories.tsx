import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Meta } from '@storybook/react/types-6-0';
import { Button } from '../button/Button';
import { Text } from '../text';
import { MdOutlineSearch } from 'react-icons/md';
import { MdDeleteOutline, MdOutlineEdit, MdOutlinePhone, MdOutlineMail } from 'react-icons/md';

const sampleIcons = {
  undefined,
  MdOutlineSearch: <MdOutlineSearch />,
  MdDeleteOutline: <MdDeleteOutline />,
  MdOutlineEdit: <MdOutlineEdit />,
  MdOutlinePhone: <MdOutlinePhone />,
  MdOutlineMail: <MdOutlineMail />,
};
import { TextField } from './TextField';

export default {
  title: 'Form / TextField',
  component: TextField,
  argTypes: {
    icon: {
      options: Object.keys(sampleIcons),
      mapping: sampleIcons,
    },
  },
} as Meta;

export const Playground = {
  args: {
    prefix: '',
    suffix: '',
    label: 'ラベル',
    required: false,
    disabled: false,
  },
};

const schema = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),
  price: yup.number().min(2).optional(),
  account: yup.string().optional(),
});

type FieldValue = yup.InferType<typeof schema>;

export const Base = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValue>({
    resolver: yupResolver(schema),
  });
  const onSubmit = useCallback((data: unknown) => {
    console.info(data);
  }, []);

  return (
    <div className="flex w-full gap-4">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <Text as="h3" size="l" weight="bold">
          Text Field
        </Text>

        <TextField
          required
          error={!!errors['email']}
          autoComplete="on"
          type="email"
          label="メールアドレス"
          placeholder="example@example.com"
          helperText={errors['email'] && `メールアドレスは必須です`}
          {...register('email')}
        />

        <TextField
          required
          type="password"
          label="パスワード"
          placeholder="********"
          error={!!errors['password']}
          helperText={errors['password'] && `パスワードは必須です`}
          {...register('password')}
        />

        <TextField
          label="金額 (2万円以上)"
          placeholder="2"
          suffix="万円"
          isPriceFormat
          error={!!errors['price']}
          helperText={errors['price'] && `金額は2万円以上を入力してください`}
          {...register('price')}
        />

        <TextField
          label="アカウント名"
          prefix="https://example.com/accounts/"
          error={!!errors['account']}
          helperText={errors['account'] && `エラーが発生しました`}
          {...register('account')}
        />

        <Button type="submit">登録する</Button>
      </form>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <Text as="h3" size="l" weight="bold">
          Text Field
        </Text>

        <TextField
          size="medium"
          required
          error={!!errors['email']}
          autoComplete="on"
          type="email"
          label="メールアドレス"
          placeholder="example@example.com"
          helperText={errors['email'] && `メールアドレスは必須です`}
          {...register('email')}
        />
        <TextField
          size="medium"
          required
          type="password"
          label="パスワード"
          placeholder="********"
          error={!!errors['password']}
          helperText={errors['password'] && `パスワードは必須です`}
          {...register('password')}
        />

        <TextField
          size="medium"
          label="金額 (2万円以上)"
          placeholder="2"
          suffix="万円"
          isPriceFormat
          error={!!errors['price']}
          helperText={errors['price'] && `金額は2万円以上を入力してください`}
          {...register('price')}
        />

        <TextField
          size="medium"
          label="アカウント名"
          prefix="https://example.com/accounts/"
          error={!!errors['account']}
          helperText={errors['account'] && `エラーが発生しました`}
          {...register('account')}
        />

        <Button type="submit">登録する</Button>
      </form>
    </div>
  );
};

export const WithIcon = () => <TextField icon={<MdOutlineSearch />} />;
