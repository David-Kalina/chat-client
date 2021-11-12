import { Flex } from '@chakra-ui/layout'
import React from 'react'
import { useServer } from '../contexts/ServerContext'
import { Server, useConnectToServerMutation } from '../generated/graphql'

interface ServerProps {
  server: Server
}

function Server({ server }: ServerProps) {
  const { setServerId, serverId } = useServer()

  const [mutation, _] = useConnectToServerMutation()

  const connectToServer = async () => {
    const response = await mutation({
      variables: {
        serverId: server.serverId,
      },
    })
    setServerId(response?.data?.connectToServer!)
  }

  return (
    <Flex
      align="center"
      justify="center"
      onClick={connectToServer}
      w="14"
      h="14"
      borderRadius="md"
      border={server.serverId === serverId ? '1px solid yellow' : '1px solid red'}
    >
      {server.name}
    </Flex>
  )
}

export default Server
