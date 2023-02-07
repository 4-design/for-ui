import React, { useEffect } from 'react';
import { FormHelperText } from '@mui/material';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Controller, useForm } from 'react-hook-form';
import { Button } from '../button';
import { Select, SelectOption } from './Select';

export default {
  title: 'Form / Select',
  component: Select,
  decorators: [(Story) => <Story />],
} as Meta;

const options: SelectOption[] = [
  {
    label: '日本',
    inputValue: 'japan',
  },
  {
    label: 'アメリカ',
    inputValue: 'america',
  },
  {
    label: 'イギリス',
    inputValue: 'england',
  },
  {
    label: 'スペイン',
    inputValue: 'spain',
  },
];

const SKILL: Record<string, string> = {
  // C#
  csharp: 'csharp',
  // C++
  cpp: 'cpp',
  // COBOL
  cobol: 'cobol',
  // CSS
  css: 'css',
  // C言語
  clang: 'clang',
  // Go
  golang: 'golang',
  // gRPC
  grpc: 'grpc',
  // HTML
  html: 'html',
  // Java
  java: 'java',
  // JavaScript
  javascript: 'javascript',
  // Kotlin
  kotlin: 'kotlin',
  // Perl
  perl: 'perl',
  // PHP
  php: 'php',
  // Python
  python: 'python',
  // Ruby
  ruby: 'ruby',
  // R言語
  rlang: 'rlang',
  // Scala
  scala: 'scala',
  // Swift
  swift: 'swift',
  // TypeScript
  typescript: 'typescript',
} as const;

const skillOptions: SelectOption[] = Object.keys(SKILL).map((key): SelectOption => {
  return { label: SKILL[key], inputValue: key };
});

export const Basic: Story = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      country: options[0],
    },
  });
  const onSubmit = (data: unknown) => console.info(JSON.stringify(data));

  return (
    <div className="flex flex-col gap-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="country"
          control={control}
          render={({ field: { name, onChange } }) => {
            return (
              <Select
                name={name}
                label="国名"
                placeholder="国名"
                options={options}
                onChange={(_, option) => {
                  onChange((option as SelectOption)?.inputValue);
                }}
              />
            );
          }}
        />

        <Button type="submit" className="mt-4">
          登録
        </Button>
      </form>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="country"
          control={control}
          render={({ field: { name, onChange } }) => {
            return (
              <Select
                name={name}
                required
                placeholder="国名"
                options={options}
                onChange={(_, option) => {
                  onChange((option as SelectOption)?.inputValue);
                }}
                error
                helperText="入力してください"
              />
            );
          }}
        />

        <Button type="submit" className="mt-4">
          登録
        </Button>
      </form>
      <form onSubmit={handleSubmit(onSubmit)} className="mb-10">
        <Controller
          name="country"
          control={control}
          render={({ field: { name, onChange } }) => {
            return (
              <Select
                name={name}
                size="medium"
                placeholder="国名"
                options={options}
                onChange={(_, option) => {
                  onChange((option as SelectOption)?.inputValue);
                }}
              />
            );
          }}
        />

        <Button type="submit" className="mt-4">
          登録
        </Button>
      </form>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="country"
          control={control}
          render={({ field: { name, onChange } }) => {
            return (
              <>
                <Select
                  name={name}
                  size="medium"
                  required
                  placeholder="国名"
                  options={options}
                  onChange={(_, option) => {
                    onChange((option as SelectOption)?.inputValue);
                  }}
                />
                <FormHelperText error>入力してください</FormHelperText>
              </>
            );
          }}
        />

        <Button type="submit" className="mt-4">
          登録
        </Button>
      </form>
    </div>
  );
};

export const Single: Story = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      country: '',
    },
  });
  const onSubmit = (data: unknown) => console.info(JSON.stringify(data));

  return (
    <div className="flex flex-col gap-10">
      <form onSubmit={handleSubmit(onSubmit)} className="text-transparent">
        <Controller
          name="country"
          control={control}
          render={({ field: { onChange, ...fields } }) => {
            return (
              <Select
                {...fields}
                name={fields.name}
                label="国名"
                placeholder="未定"
                options={options}
                onChange={(_, option) => {
                  onChange(option as SelectOption);
                }}
              />
            );
          }}
        />
        <Button type="submit" className="mt-4">
          登録
        </Button>
      </form>

      <form onSubmit={handleSubmit(onSubmit)} className="text-transparent">
        <Controller
          name="country"
          control={control}
          render={({ field: { onChange, ...fields } }) => {
            return (
              <Select
                {...fields}
                name={fields.name}
                size="medium"
                label="国名"
                placeholder="未定"
                options={options}
                onChange={(_, option) => {
                  onChange(option as SelectOption);
                }}
              />
            );
          }}
        />
        <Button type="submit" className="mt-4">
          登録
        </Button>
      </form>
    </div>
  );
};

export const Disabled: Story = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      country: options[0],
    },
  });
  const onSubmit = (data: unknown) => console.info(JSON.stringify(data));

  return (
    <div className="flex flex-col gap-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="country"
          control={control}
          render={({ field: { onChange, ...fields } }) => {
            return (
              <Select
                disabled
                name={fields.name}
                label="国名"
                placeholder="国名"
                options={options}
                onChange={(_, option) => {
                  onChange((option as SelectOption)?.inputValue);
                }}
              />
            );
          }}
        />
        <Button type="submit" className="mt-4">
          登録
        </Button>
      </form>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="country"
          control={control}
          render={({ field: { onChange, ...fields } }) => {
            return (
              <Select
                disabled
                name={fields.name}
                size="medium"
                label="国名"
                placeholder="国名"
                options={options}
                onChange={(_, option) => {
                  onChange((option as SelectOption)?.inputValue);
                }}
              />
            );
          }}
        />
        <Button type="submit" className="mt-4">
          登録
        </Button>
      </form>
    </div>
  );
};

export const Multiple: Story = () => {
  const { control, handleSubmit } = useForm<{ country: SelectOption[] }>({
    defaultValues: {
      country: options,
    },
  });
  const onSubmit = (data: unknown) => console.info(JSON.stringify(data));

  return (
    <div className="flex flex-col gap-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="country"
          control={control}
          render={({ field: { onChange, ...fields } }) => {
            return (
              <Select
                multiple
                // freeSolo={false}
                name={fields.name}
                label="国名"
                placeholder="未定"
                options={options}
                onChange={onChange}
              />
            );
          }}
        />

        <Button type="submit" className="mt-4">
          登録
        </Button>
      </form>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="country"
          control={control}
          render={({ field: { onChange, ...fields } }) => {
            return (
              <>
                <Select
                  multiple
                  required
                  name={fields.name}
                  label="国名"
                  placeholder="未定"
                  options={options}
                  onChange={onChange}
                />
                <FormHelperText error>入力してください</FormHelperText>
              </>
            );
          }}
        />

        <Button type="submit" className="mt-4">
          登録
        </Button>
      </form>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="country"
          control={control}
          render={({ field: { onChange, ...fields } }) => {
            return (
              <Select<SelectOption, true, false>
                multiple
                name={fields.name}
                size="medium"
                label="国名"
                placeholder="未定"
                options={options}
                onChange={onChange}
              />
            );
          }}
        />

        <Button type="submit" className="mt-4">
          登録
        </Button>
      </form>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="country"
          control={control}
          render={({ field: { onChange, ...fields } }) => {
            return (
              <>
                <Select<SelectOption, true, false>
                  multiple
                  required
                  name={fields.name}
                  size="medium"
                  label="国名"
                  placeholder="未定"
                  options={options}
                  onChange={onChange}
                />
                <FormHelperText error>入力してください</FormHelperText>
              </>
            );
          }}
        />

        <Button type="submit" className="mt-4">
          登録
        </Button>
      </form>
    </div>
  );
};

export const MultipleFreeSolo: Story = () => {
  const { control, reset, handleSubmit } = useForm<{
    country: { label: string; inputValue: string }[];
  }>({
    defaultValues: {
      country: [],
    },
  });
  const onSubmit = (data: unknown) => console.info(JSON.stringify(data));

  useEffect(() => {
    setTimeout(() => {
      reset({
        country: skillOptions,
      });
    }, 200);
  }, [reset]);

  return (
    <div className="flex flex-col gap-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="country"
          control={control}
          render={({ field: { name, value, onChange } }) => {
            console.info(value);
            return (
              <Select
                freeSolo
                multiple
                placeholder="未設定"
                name={name}
                value={value}
                options={skillOptions}
                onChange={(_, option) => {
                  onChange(option);
                  // onChange((option as SelectOption)?.inputValue)
                }}
              />
            );
          }}
        />
        <Button type="submit" className="mt-4">
          登録
        </Button>
      </form>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="country"
          control={control}
          render={({ field: { name, value, onChange } }) => {
            console.info(value);
            return (
              <Select
                freeSolo
                multiple
                size="medium"
                placeholder="未設定"
                name={name}
                value={value}
                options={skillOptions}
                onChange={(_, option) => {
                  onChange(option);
                  // onChange((option as SelectOption)?.inputValue)
                }}
              />
            );
          }}
        />
        <Button type="submit" className="mt-4">
          登録
        </Button>
      </form>
    </div>
  );
};

export const DisableFilter: Story = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      country: '',
    },
  });
  const onSubmit = (data: unknown) => console.info(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="text-transparent">
      <Controller
        name="country"
        control={control}
        render={({ field: { onChange, ...fields } }) => {
          return (
            <Select
              {...fields}
              disableFilter
              name={fields.name}
              label="国名"
              placeholder="未定"
              options={options}
              onChange={(_, option) => {
                onChange(option as SelectOption);
              }}
            />
          );
        }}
      />

      <Button type="submit" className="mt-4">
        登録
      </Button>
    </form>
  );
};
