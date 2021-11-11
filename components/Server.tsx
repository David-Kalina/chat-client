import { Image } from '@chakra-ui/image'
import { Flex } from '@chakra-ui/layout'
import React from 'react'
import { Server } from '../generated/graphql'

interface ServerProps {
  server: Server
}

function Server({ server }: ServerProps) {
  return (
    <Flex w="14" h="14" borderRadius="md" border="1px solid yellow">
      {server.name}
    </Flex>
  )
}

export default Server
