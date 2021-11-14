import { Button } from '@chakra-ui/button'
import {
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  VStack,
} from '@chakra-ui/react'
import React from 'react'
import { useServer } from '../contexts/ServerContext'
import { Channel, CreateChannelInput, useCreateChannelMutation } from '../generated/graphql'
import ErrorMessage from './Error'

interface CreateChannelProps {
  isOpen: boolean
  onClose: () => void
}

function CreateChannel({ isOpen, onClose }: CreateChannelProps) {
  const { connectedServer } = useServer()

  const [channel, setConnectedChannel] = React.useState({
    name: '',
    description: '',
  })
  const [mutation, _] = useCreateChannelMutation()

  const submit = async () => {
    try {
      await mutation({
        variables: {
          options: { ...channel, serverReferenceId: connectedServer.serverReferenceId },
        },
        update(cache) {
          cache.evict({ fieldName: 'channels' })
        },
      })
    } catch (error) {
      return ErrorMessage
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent bg="#181a1b">
        <ModalHeader>Add Channel</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form>
            <VStack>
              <FormControl>
                <FormLabel htmlFor="channel-name">Name</FormLabel>
                <Input
                  onChange={e => setConnectedChannel({ ...channel, name: e.target.value })}
                  id="channel-name"
                  placeholder="onboarding"
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="channel-description">Description</FormLabel>
                <Input
                  onChange={e => setConnectedChannel({ ...channel, description: e.target.value })}
                  id="channel-description"
                  placeholder="Come here to get resources and help"
                />
              </FormControl>
            </VStack>
          </form>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="orange" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button colorScheme="orange" onClick={submit}>
            Submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default CreateChannel
