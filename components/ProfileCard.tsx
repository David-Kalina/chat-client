import { Avatar, Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { useMeQuery } from '../generated/graphql'
import OnlineStatus from './OnlineStatus'
import UserMenu from './UserMenu'

function ProfileCard() {
  const { data, loading } = useMeQuery()


  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <Flex w="100%" borderRadius="lg" minH="100px" bg="#27292d" p="1rem" align="center">
      <Avatar name={`${data?.me?.firstName} ${data?.me?.lastName}`} borderRadius="md" />
      <Box ml="1rem">
        <Text fontSize="2xl">
          {data?.me?.firstName} {data?.me?.lastName}
        </Text>
        <OnlineStatus />
      </Box>
      <Box ml="auto">
        <UserMenu />
      </Box>
    </Flex>
  )
}

export default ProfileCard
