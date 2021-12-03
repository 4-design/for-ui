import React from 'react'
import { useDropzone } from 'react-dropzone'
import { MdFileUpload } from 'react-icons/md'
import tw, { TwStyle } from 'twin.macro'

import { Chip } from '../chip/Chip'
import { Text } from '../typography/Typography'

export type DropzoneProps = {
  twin?: TwStyle[]
  files: File[]
  message?: string
  multiple?: boolean
  onDrop: (acceptedFiles: File[]) => void
  onRemove: (file: File) => (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const Dropzone: React.VFC<DropzoneProps> = ({
  twin,
  files,
  onDrop,
  onRemove,
  message = 'ここにファイルをドロップしてアップロード',
  multiple = false,
}) => {
  const { getRootProps, getInputProps } = useDropzone({ onDrop, multiple })

  return (
    <div
      {...getRootProps()}
      css={[
        tw`w-auto min-h-[144px] flex justify-center px-5 py-3 border rounded border-dashed cursor-pointer border-shade-medium-default`,
        twin,
      ]}
    >
      <input {...getInputProps()} />

      {files.length > 0 ? (
        <div tw="w-full flex justify-start gap-8">
          {files.map((file) => (
            <Chip
              key={file.name}
              label={file.name}
              onDelete={() => console.log('delete')}
            />
          ))}
        </div>
      ) : (
        <div tw="py-3 w-full flex flex-col items-center text-shade-medium-default">
          <MdFileUpload size={48} tw="mb-3 text-shade-light-default" />
          <Text variant="span">{message}</Text>
        </div>
      )}
    </div>
  )
}
