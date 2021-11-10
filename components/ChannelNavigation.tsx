import { GridItem, VStack } from '@chakra-ui/layout'
import React from 'react'
import ProfileCard from './ProfileCard'
import Search from './Search'
import ServerBlock from './ServerBlock'

function ChannelNavigation() {
  return (
    <GridItem py="2rem" px="3rem" bg="#181a1b">
      <VStack align="start" spacing="6">
        <Search />
        <ProfileCard />
        <ServerBlock />
        <ServerBlock />
      </VStack>
    </GridItem>
  )
}

export default ChannelNavigation
