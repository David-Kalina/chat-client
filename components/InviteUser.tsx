import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react'
import React from 'react'
import { HiUserAdd } from 'react-icons/hi'
import { useServer } from '../contexts/ServerContext'
import useToggle from '../hooks/useHook'

interface InviteUserProps {
  isOpen: boolean
  onClose: () => void
}

function InviteUser({ isOpen, onClose }: InviteUserProps) {
  const { connectedChannel } = useServer()
  const [copied, setToggle] = useToggle(false)

  return (
    <>
      <HiUserAdd />
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
        <ModalOverlay />
        <ModalContent bg="#181a1b" h="200px">
          <ModalHeader>Invite User</ModalHeader>

          <ModalCloseButton />
          <ModalBody display="flex" alignItems="end">
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                defaultValue={`http://localhost:3000/${connectedChannel?.inviteUrl}`}
              />
              <InputRightElement width="4.5rem">
                <Button
                  colorScheme="orange"
                  h="1.75rem"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `http://localhost:3000/${connectedChannel?.inviteUrl}`
                    )
                    setToggle(true)
                  }}
                >
                  {copied ? 'Copied' : 'Copy'}
                </Button>
              </InputRightElement>
            </InputGroup>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default InviteUser
