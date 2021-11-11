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

interface CreateChannelProps {
  isOpen: boolean
  onClose: () => void
}

function CreateChannel({ isOpen, onClose }: CreateChannelProps) {
  const { serverId } = useServer()
  const [channel, setChannel] = React.useState<CreateChannelInput>({
    name: '',
    description: '',
    serverId,
  })
  const [mutation, _] = useCreateChannelMutation()

  const submit = async () => {
    const response = await mutation({
      variables: { options: channel },
      update(cache, { data: mutation }) {
        cache.modify({
          fields: {
            channels(existingChannels, { readField }) {
              const newChannel: Channel = readField('createChannel', mutation!)!
              const currentChannels = existingChannels.filter(
                (c: Channel) => c.serverReferenceId === newChannel.serverReferenceId
              )
              return [...currentChannels, newChannel]
            },
          },
        })
        if (response?.data?.createChannel?.channelId) {
          onClose()
        }
      },
    })
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
                  onChange={e => setChannel({ ...channel, name: e.target.value })}
                  id="channel-name"
                  placeholder="onboarding"
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="channel-description">Description</FormLabel>
                <Input
                  onChange={e => setChannel({ ...channel, description: e.target.value })}
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
