import React, { useRef, useState } from 'react'
import tw from 'twin.macro'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Button } from '../button'
import { Modal } from '.'
import { ModalContent } from './ModalContent'
import { ModalFooter } from './ModalFooter'
import { ModalHeader } from './ModalHeader'

export default {
  title: 'Example/Modal',
  component: Modal,
} as Meta

export const modalDefault = () => {
  const [showModal, setShowModal] = useState(false)

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

export const modalSuccess = () => {
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

export const modalAlert = () => {
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
