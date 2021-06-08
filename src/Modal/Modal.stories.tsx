import React, { useState } from 'react'
import { Meta } from '@storybook/react/types-6-0'

import { Button } from '../button'
import { ModalContent } from './ModalContent'
import { ModalFooter } from './ModalFooter'
import { ModalHeader } from './ModalHeader'
import { Modal } from '.'

export default {
  title: 'Example/Modal',
  component: Modal,
} as Meta

export const ModalDefault = (): JSX.Element => {
  const [showModal, setShowModal] = useState<boolean>(false)

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
            <p tw="text-sm leading-5 text-high">
              アカウントを無効にしてもよろしいですか？すべてのデータは完全に削除されます。このアクションは元に戻せません。
            </p>
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
          </ModalContent>
        </Modal>
      </div>
    </div>
  )
}

export const ModalSuccess = (): JSX.Element => {
  const [showModal, setShowModal] = useState(false)

  const onSubmit = () => {
    console.log('submit')
  }

  return (
    <div tw="flex flex-col">
      <h1>Success Modal</h1>
      <div tw="flex flex-col mt-4">
        <Button
          tw="w-48"
          color="default"
          variant="contained"
          onClick={() => setShowModal(true)}
        >
          確認
        </Button>
        <Modal
          open={showModal}
          onClose={() => setShowModal(false)}
          mode="success"
        >
          <ModalHeader>本当に削除してよろしいですか？</ModalHeader>
          <ModalContent>
            <p tw="text-sm leading-5 text-black">
              アカウントを無効にしてもよろしいですか？すべてのデータは完全に削除されます。このアクションは元に戻せません。
            </p>

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
          </ModalContent>
        </Modal>
      </div>
    </div>
  )
}

export const ModalAlert = (): JSX.Element => {
  const [showModal, setShowModal] = useState(false)

  const onSubmit = () => {
    console.log('submit')
  }

  return (
    <div tw="flex flex-col">
      <h1>Alert Modal</h1>
      <div tw="flex flex-col mt-4">
        <Button
          tw="w-48"
          color="default"
          variant="contained"
          onClick={() => setShowModal(true)}
        >
          確認
        </Button>
        <Modal
          open={showModal}
          onClose={() => setShowModal(false)}
          mode="alert"
        >
          <ModalHeader>本当に削除してよろしいですか？</ModalHeader>
          <ModalContent>
            <p tw="text-sm leading-5 text-black">
              アカウントを無効にしてもよろしいですか？すべてのデータは完全に削除されます。このアクションは元に戻せません。
            </p>

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
          </ModalContent>
        </Modal>
      </div>
    </div>
  )
}
