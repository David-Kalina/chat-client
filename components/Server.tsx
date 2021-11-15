import { Box, Flex } from '@chakra-ui/layout'
import { useToast } from '@chakra-ui/toast'
import router, { useRouter } from 'next/router'
import React from 'react'
import { useServer } from '../contexts/ServerContext'
import { Server, useConnectToServerMutation } from '../generated/graphql'

interface ServerProps {
  server: Server
}

function Server({ server }: ServerProps) {
  const router = useRouter()
  const { connectedServer, setConnectedServer } = useServer()
  const toast = useToast()

  const [mutation, _] = useConnectToServerMutation()

  const connectToServer = async () => {
    try {
      const response = await mutation({
        variables: {
          serverReferenceId: server.serverReferenceId,
        },
      })
      setConnectedServer(response?.data?.connectToServer.server!)
      if (response?.data?.connectToServer?.channelReferenceId) {
        router.push(`/channel/${response?.data?.connectToServer?.channelReferenceId}`)
      } else {
        router.push(`/`)
      }
      toast({
        position: 'top',
        title: 'Connected to server',
        description: `${server.serverReferenceId}`,
        status: 'success',
        duration: 2000,
      })
    } catch (error) {
      console.log(error)
      return error
    }
  }

  return (
    <Flex
      align="center"
      justify="center"
      pos="relative"
      onClick={connectToServer}
      w="14"
      h="14"
      borderRadius="md"
      border="1px solid gray"
    >
      {server.name}
      <Box
        w="2"
        h="2"
        bg={
          server.serverReferenceId === connectedServer.serverReferenceId ? 'green.300' : 'gray.400'
        }
        pos="absolute"
        bottom="-3px"
        right="-2px"
        borderRadius="full"
      />
    </Flex>
  )
}

export default Server
