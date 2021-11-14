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
import { useCreateServerMutation } from '../generated/graphql'

interface CreateServerProps {
  isOpen: boolean
  onClose: () => void
}

function CreateServer({ isOpen, onClose }: CreateServerProps) {
  const [name, setName] = React.useState('')
  const { setConnectedServer } = useServer()
  const [mutation, _] = useCreateServerMutation()

  const submit = async () => {
    if (name.length > 0) {
      const response = await mutation({
        variables: { options: { name } },
        update(cache, { data: mutation }) {
          cache.modify({
            fields: {
              servers(existingServers, { readField }) {
                const newServer = readField('createServer', mutation!)
                return [...existingServers, newServer]
              },
            },
          })
        },
      })
      if (response.data?.createServer.serverId!) {
        onClose()
        setConnectedServer(response?.data?.createServer!)
      }
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent bg="#181a1b">
        <ModalHeader>Create Server</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form>
            <VStack>
              <FormControl>
                <FormLabel htmlFor="server-image-url">Image</FormLabel>
                <Input id="server-image-url" type="file" placeholder="Server Name" />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="server-name">Name</FormLabel>
                <Input
                  onChange={e => setName(e.target.value)}
                  id="server-name"
                  placeholder="Server Name"
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

export default CreateServer
