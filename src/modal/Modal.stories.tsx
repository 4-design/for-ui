import React from 'react'
import { useState } from '@storybook/addons'
import { Meta } from '@storybook/react/types-6-0'

import { Button } from '../button'
import { ModalContent } from './ModalContent'
import { ModalFooter } from './ModalFooter'
import { ModalHeader } from './ModalHeader'
import { Modal } from '.'

export default {
  title: 'Atom/Modal',
  component: Modal,
} as Meta

export const ModalDefault = (): JSX.Element => {
  const [showModal, setShowModal] = useState<boolean>(true)

  const onSubmit = () => {
    console.log('submit')
  }

  return (
    <div tw="flex flex-col">
      <h1>Default Modal</h1>
      <div tw="flex flex-col mt-4">
        <Button
          tw="w-48"
          color="default"
          variant="contained"
          onClick={() => setShowModal(true)}
        >
          確認
        </Button>

        <Modal open={showModal} onClose={() => setShowModal(false)}>
          <ModalHeader>本当に削除してよろしいですか？</ModalHeader>
          <ModalContent>
            <p tw="text-sm leading-5 text-shade-dark-default">
              アカウントを無効にしてもよろしいですか？すべてのデータは完全に削除されます。このアクションは元に戻せません。
            </p>
          </ModalContent>
          <ModalFooter>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              tw="ml-8"
              onClick={onSubmit}
            >
              登録
            </Button>
            <Button
              variant="text"
              color="default"
              onClick={() => setShowModal(false)}
            >
              キャンセル
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  )
}
