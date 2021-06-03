import React from 'react'
import CloseIcon from '@material-ui/icons/Close'
import { useDropzone } from 'react-dropzone'
import { TwStyle } from 'twin.macro'

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
    <div {...getRootProps()} css={[twin]} tw="cursor-pointer">
      <input {...getInputProps()} />
      {files.length > 0 ? (
        <div>
          {files.map((file) => (
            <div key={file.name} tw="flex justify-center items-center">
              <div tw="mr-4 flex-1 self-center">{file.name}</div>
              <Button
                onClick={(e) => onRemove(file)(e)}
                color="danger"
                variant="text"
              >
                <CloseIcon className="error w-6 h-6" />
              </Button>
            </div>
          ))}
        </div>
      ) : (
        <p>{message}</p>
      )}
    </div>
  )
}
