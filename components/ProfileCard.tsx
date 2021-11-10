import { Avatar, Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

function ProfileCard() {
  return (
    <Flex w="100%" borderRadius="lg" minH="100px">
      <Avatar name="John Doe" />
      <Box>
        <Text fontSize="2xl">John Doe</Text>
        <Text>Active for chat</Text>
      </Box>
    </Flex>
  )
}

export default ProfileCard
