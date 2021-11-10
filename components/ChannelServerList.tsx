import { GridItem, VStack } from '@chakra-ui/react'
import React from 'react'
import Server from './Server'

function ChannelServerList() {
  return (
    <GridItem bg="#1c1e1f">
      <VStack spacing="4" mt="2rem">
        <Server />
        <Server />
        <Server />
        <Server />
        <Server />
      </VStack>
    </GridItem>
  )
}

export default ChannelServerList
