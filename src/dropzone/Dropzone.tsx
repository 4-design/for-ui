import React from 'react'
import clsx from 'clsx'
import { useDropzone } from 'react-dropzone'
import { MdFileUpload } from 'react-icons/md'
import { Chip } from '../chip'

import { Text } from '../typography/Typography'

export type DropzoneProps = {
  files: File[]
  message?: string
  multiple?: boolean
  onDrop: (acceptedFiles: File[]) => void
  onRemove: (file: File) => (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const Dropzone: React.VFC<DropzoneProps> = ({
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
      className={clsx([
        'flex w-auto cursor-pointer flex-col flex-wrap justify-center py-3 px-5',
        'rounded border border-dashed border-shade-medium-default',
      ])}
    >
      <input {...getInputProps()} />

      <div className="flex w-full flex-col items-center py-5 px-3 text-shade-medium-default">
        <MdFileUpload size={48} className="mb-3 text-shade-light-default" />
        <Text variant="caption">{message}</Text>
      </div>

      {files.length > 0 && (
        <div className="flex w-full flex-wrap justify-start gap-2">
          {files.map((file) => (
            <Chip
              key={file.name}
              label={file.name}
              onDelete={(e) => onRemove(file)(e)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
