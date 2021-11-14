import { Flex, GridItem, VStack, Text, Badge } from '@chakra-ui/layout'
import React from 'react'
import AddChannel from './AddChannel'
import AddServer from './AddServer'
import ProfileCard from './ProfileCard'
import Search from './Search'
import ChannelBlock from './ChannelBlock'
import { FiUser } from 'react-icons/fi'
import { FaCog } from 'react-icons/fa'

function ChannelNavigation() {
  return (
    <GridItem py="2rem" px="3rem" bg="#181a1b">
      <VStack align="start" spacing="6">
        <Search />
        <ProfileCard />
        <VStack spacing="6" w="100%" align="start">
          <Flex align="center">
            <FiUser />
            <Text ml="1rem">Members</Text>
          </Flex>
          <Flex align="center">
            <FaCog />
            <Text ml="1rem">Settings</Text>
          </Flex>
        </VStack>
        <AddChannel />
        <ChannelBlock />
      </VStack>
    </GridItem>
  )
}

export default ChannelNavigation
