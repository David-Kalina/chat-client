import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react'
import React from 'react'
import { HiUserAdd } from 'react-icons/hi'

interface InviteUserProps {
  isOpen: boolean
  onClose: () => void
}

function InviteUser({ isOpen, onClose }: InviteUserProps) {
  return (
    <>
      <HiUserAdd />
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent bg="#181a1b">
          <ModalHeader>Add Channel</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default InviteUser
