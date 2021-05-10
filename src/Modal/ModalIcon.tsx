import React from 'react'
import CheckCicleOutline from '@material-ui/icons/CheckCircleOutline'
import ReportProblemOutlined from '@material-ui/icons/ReportProblemOutlined'
import tw, { TwStyle } from 'twin.macro'
import { EmotionJSX } from '@emotion/react/types/jsx-namespace'

export interface ModalIconProps {
  mode: 'success' | 'alert'
}

const ModalIcons: { [key in ModalIconProps['mode']]: EmotionJSX.Element } = {
  success: <CheckCicleOutline className="text-success-main w-6 h-6" />,
  alert: <ReportProblemOutlined className="text-caution-main w-6 h-6" />,
}

const modes: { [key in ModalIconProps['mode']]: TwStyle } = {
  success: tw`bg-success-bg`,
  alert: tw`bg-alert-bg`,
}

export type Mode = ModalIconProps['mode']

export const ModalIcon: React.FC<ModalIconProps> = ({ mode }) => (
  <div
    css={[
      tw`h-12 w-12
        mx-auto flex flex-shrink-0 items-center justify-center rounded-full`,
      modes[mode],
    ]}
  >
    {ModalIcons[mode]}
  </div>
)
