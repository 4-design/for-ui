/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable tailwindcss/enforces-negative-arbitrary-values */
import React, { useState, useRef, useCallback } from 'react'
import MuiDrawer, { DrawerProps as MuiDrawerProps } from '@mui/material/Drawer'
import clsx from 'clsx'
import { MdClose, MdMoreHoriz, MdMoreVert } from 'react-icons/md'
import { Button } from '../button'

type Props = MuiDrawerProps & {
  headerChildren?: React.ReactNode
  defaultWidth?: number
  defaultHeight?: number
  minWidth?: number
  minHeight?: number
  onClose?: () => void
}

const _minWidth = 240
const _minHeight = 300

export const DrawerAnchor = {
  left: 'left',
  right: 'right',
  top: 'top',
  bottom: 'bottom',
} as const
export type DrawerAnchor = typeof DrawerAnchor[keyof typeof DrawerAnchor]

export const Drawer: React.FC<Props> = ({
  open,
  anchor = DrawerAnchor.right,
  headerChildren,
  defaultWidth = _minWidth,
  defaultHeight = _minHeight,
  minWidth = _minWidth,
  minHeight = _minHeight,
  children,
  onClose,
  ...rest
}) => {
  const ref = useRef(null)
  const [width, setWidth] = useState(
    anchor === 'left' || anchor === 'right' ? defaultWidth : '100%'
  )

  const [height, setHeight] = useState(
    anchor === 'top' || anchor === 'bottom' ? defaultHeight : '100%'
  )

  const handleClose = useCallback(() => {
    if (onClose) onClose()
  }, [onClose])

  const handleMouseMove = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (e: any) => {
      switch (anchor) {
        case DrawerAnchor.left: {
          const newWidth = e.pageX
          if (newWidth > minWidth && newWidth < window.innerWidth) {
            setWidth(newWidth)
          }

          break
        }
        case DrawerAnchor.right: {
          const newWidth = window.innerWidth - e.pageX
          if (newWidth > minWidth && newWidth < window.innerWidth) {
            setWidth(newWidth)
          }

          break
        }
        case DrawerAnchor.top: {
          const newHeight = e.pageY
          if (newHeight > minHeight && newHeight < window.innerHeight) {
            setHeight(newHeight)
          }

          break
        }
        case DrawerAnchor.bottom: {
          const newHeight = window.innerHeight - e.pageY
          if (newHeight > minHeight && newHeight < window.innerHeight) {
            setHeight(newHeight)
          }

          break
        }
      }
    },
    [anchor]
  )

  const handleMouseUp = useCallback(() => {
    document.removeEventListener('mouseup', handleMouseUp, true)
    document.removeEventListener('mousemove', handleMouseMove, true)
  }, [])

  const handleMouseDown = useCallback(() => {
    document.addEventListener('mouseup', handleMouseUp, true)
    document.addEventListener('mousemove', handleMouseMove, true)
  }, [])

  return (
    <MuiDrawer
      open={open}
      anchor={anchor}
      classes={{
        root: clsx(['shadow-drawer z-modal']),
        paper: clsx(['p-6 [&.MuiBackdrop-root]:bg-transparent']),
      }}
      PaperProps={{
        sx: {
          width: width,
          height: height,
        },
      }}
      onClose={handleClose}
      {...rest}
    >
      <div className="flex items-center">
        <Button
          variant="text"
          size="small"
          startIcon={<MdClose />}
          onClick={handleClose}
        >
          閉じる
        </Button>

        {headerChildren && <div className="ml-auto">{headerChildren}</div>}
      </div>

      {anchor === 'left' || anchor === 'right' ? (
        <div
          onMouseDown={handleMouseDown}
          ref={ref}
          className={clsx([
            'user-select[none] absolute top-0 h-full w-9 cursor-[ew-resize] px-3',
            anchor === 'left' ? '-right-3' : '-left-3',
          ])}
        >
          <span
            className={clsx(['block h-full w-full hover:bg-shade-white-hover'])}
          >
            <MdMoreVert
              size="24"
              className={clsx([
                'relative h-full',
                anchor === 'left' ? 'right-[6px]' : '-left-[6px]',
              ])}
            />
          </span>
        </div>
      ) : (
        <div
          onMouseDown={handleMouseDown}
          ref={ref}
          className={clsx([
            'user-select[none] absolute left-0 h-9 w-full cursor-[ns-resize] py-3',
            anchor === 'top' ? '-bottom-3' : '-top-3',
          ])}
        >
          <span
            className={clsx(['!hover:bg-shade-dark-hover block h-full w-full'])}
          >
            <MdMoreHoriz
              size="24"
              className={clsx([
                'relative w-full',
                anchor === 'top' ? 'bottom-[6px]' : '-top-[6px]',
              ])}
            />
          </span>
        </div>
      )}
      <div className="overflow-wrap[break-word] mt-3">{children}</div>
    </MuiDrawer>
  )
}
