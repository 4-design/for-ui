import React, { useEffect } from 'react'
import { FormHelperText } from '@mui/material'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Controller, useForm } from 'react-hook-form'
import { Button } from '../button'
import { Select, SelectOption } from './Select'

export default {
  title: 'Form / Select',
  component: Select,
  decorators: [(Story: any) => <Story />],
} as Meta

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
]

const SKILL = {
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
} as const

const skillOptions: SelectOption[] = Object.keys(SKILL).map(
  (key): SelectOption => {
    return { label: SKILL[key], inputValue: key }
  }
)

export const Basic: Story = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      country: options[0],
    },
  })
  const onSubmit = (data: unknown) => console.log(JSON.stringify(data))

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="mb-10">
        <Controller
          name="country"
          control={control}
          render={({ field: { name, onChange } }) => {
            return (
              <Select
                name={name}
                placeholder="国名"
                options={options}
                onChange={(e, option) => {
                  onChange((option as SelectOption)?.inputValue)
                }}
              />
            )
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
                  required
                  placeholder="国名"
                  options={options}
                  onChange={(e, option) => {
                    onChange((option as SelectOption)?.inputValue)
                  }}
                />
                <FormHelperText error>入力してください</FormHelperText>
              </>
            )
          }}
        />

        <Button type="submit" className="mt-4">
          登録
        </Button>
      </form>
    </div>
  )
}

export const Single: Story = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      country: options[0],
    },
  })
  const onSubmit = (data: unknown) => console.log(JSON.stringify(data))

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="country"
        control={control}
        render={({ field: { onChange, ...fields } }) => {
          return (
            <Select
              name={fields.name}
              placeholder="国名"
              options={options}
              onChange={(e, option) => {
                onChange((option as SelectOption)?.inputValue)
              }}
            />
          )
        }}
      />

      <Button type="submit" className="mt-4">
        登録
      </Button>
    </form>
  )
}

export const Disabled: Story = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      country: options[0],
    },
  })
  const onSubmit = (data: unknown) => console.log(JSON.stringify(data))

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="country"
        control={control}
        render={({ field: { onChange, ...fields } }) => {
          return (
            <Select
              disabled
              name={fields.name}
              placeholder="国名"
              options={options}
              onChange={(e, option) => {
                onChange((option as SelectOption)?.inputValue)
              }}
            />
          )
        }}
      />

      <Button type="submit" className="mt-4">
        登録
      </Button>
    </form>
  )
}

export const Multiple: Story = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      country: options,
    },
  })
  const onSubmit = (data: unknown) => console.log(JSON.stringify(data))

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="mb-10">
        <Controller
          name="country"
          control={control}
          render={({ field: { onChange, ...fields } }) => {
            return (
              <Select
                multiple
                name={fields.name}
                label="国名"
                placeholder="未定"
                options={options}
                onChange={(e, option) => {
                  onChange((option as SelectOption)?.inputValue)
                }}
              />
            )
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
                  onChange={(e, option) => {
                    onChange((option as SelectOption)?.inputValue)
                  }}
                />
                <FormHelperText error>入力してください</FormHelperText>
              </>
            )
          }}
        />

        <Button type="submit" className="mt-4">
          登録
        </Button>
      </form>
    </div>
  )
}

export const MultipleFreeSolo: Story = () => {
  const { control, reset, handleSubmit } = useForm<{
    country: { label: string; inputValue: string }[]
  }>({
    defaultValues: {
      country: [],
    },
  })
  const onSubmit = (data: unknown) => console.log(JSON.stringify(data))

  useEffect(() => {
    setTimeout(() => {
      reset({
        country: skillOptions,
      })
    }, 200)
  }, [reset])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="country"
        control={control}
        render={({ field: { name, value, onChange } }) => {
          console.log(value)
          return (
            <Select
              freeSolo
              multiple
              autoComplete
              placeholder="未設定"
              name={name}
              value={value}
              options={skillOptions}
              onChange={(e, option) => {
                onChange(option)
                // onChange((option as SelectOption)?.inputValue)
              }}
            />
          )
        }}
      />

      <Button type="submit" className="mt-4">
        登録
      </Button>
    </form>
  )
}
