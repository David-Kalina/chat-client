import { Flex } from '@chakra-ui/layout'
import React from 'react'
import { useServer } from '../contexts/ServerContext'
import { Server, useConnectToServerMutation } from '../generated/graphql'

interface ServerProps {
  server: Server
}

function Server({ server }: ServerProps) {
  const { connectedServer, setConnectedServer } = useServer()

  const [mutation, _] = useConnectToServerMutation()

  const connectToServer = async () => {
    try {
      const response = await mutation({
        variables: {
          serverReferenceId: server.serverReferenceId,
        },
      })
      setConnectedServer(response?.data?.connectToServer!)
    } catch (error) {
      return error
    }
  }

  return (
    <Flex
      align="center"
      justify="center"
      onClick={connectToServer}
      w="14"
      h="14"
      borderRadius="md"
      border={
        server.serverReferenceId === connectedServer.serverReferenceId
          ? '1px solid yellow'
          : '1px solid red'
      }
    >
      {server.name}
    </Flex>
  )
}

export default Server
