import React from 'react'
import { useDropzone } from 'react-dropzone'
import { MdFileUpload, MdClose } from 'react-icons/md'
import tw, { TwStyle } from 'twin.macro'

import { Button } from '../button'

export interface DropzoneProps {
  twin?: TwStyle[]
  files: File[]
  onDrop: (acceptedFiles: File[]) => void
  onRemove: (file: File) => (e: React.MouseEvent<HTMLButtonElement>) => void
  message?: string
  multiple?: boolean
}

export const Dropzone: React.VFC<DropzoneProps> = ({
  twin,
  files,
  onDrop,
  onRemove,
  message = 'ここにファイルをドロップ',
  multiple = false,
}) => {
  const { getRootProps, getInputProps } = useDropzone({ onDrop, multiple })

  return (
    <div
      {...getRootProps()}
      css={[
        tw`flex justify-center w-auto p-8 border border-dotted cursor-pointer border-middle`,
        twin,
      ]}
    >
      <input {...getInputProps()} />
      {files.length > 0 ? (
        <div>
          {files.map((file) => (
            <div key={file.name} tw="flex justify-center items-center">
              <div tw="mr-2">{file.name}</div>
              <Button
                onClick={(e) => onRemove(file)(e)}
                color="danger"
                variant="text"
              >
                <MdClose size={24} />
              </Button>
            </div>
          ))}
        </div>
      ) : (
        <div tw="flex flex-col items-center text-middle">
          <MdFileUpload size={48} tw="mb-3" />
          <p tw="text-middle">{message}</p>
        </div>
      )}
    </div>
  )
}
