import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react'
import React from 'react'
import { FaCog } from 'react-icons/fa'

interface EditChannelProps {
  isOpen: boolean
  onClose: () => void
}

function EditChannel({ isOpen, onClose }: EditChannelProps) {
  return (
    <>
      <FaCog />
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="full">
        <ModalOverlay />
        <ModalContent bg="#181a1b">
          <ModalHeader>Edit Channel</ModalHeader>
          <ModalCloseButton />
          <ModalBody w="45%" mx="auto" border="1px solid red"></ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default EditChannel
