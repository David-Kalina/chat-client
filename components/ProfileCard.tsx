import { Avatar, Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { useOnlineStatusQuery } from '../generated/graphql'
import OnlineStatus from './OnlineStatus'
import UserMenu from './UserMenu'

function ProfileCard() {
  const { data } = useOnlineStatusQuery()

  return (
    <Flex w="100%" borderRadius="lg" minH="100px" bg="#27292d" p="1rem" align="center">
      <Avatar name="John Doe" borderRadius="md" />
      <Box ml="1rem">
        <Text fontSize="2xl">John Doe</Text>
        <OnlineStatus status={data?.getOnlineStatus!} />
      </Box>
      <Box ml="auto">
        <UserMenu />
      </Box>
    </Flex>
  )
}

export default ProfileCard
