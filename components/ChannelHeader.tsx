import { Avatar } from '@chakra-ui/avatar'
import { Box, Flex, HStack, Text } from '@chakra-ui/layout'
import React from 'react'

function ChannelHeader() {
  return (
    <Flex pos="sticky" align="center" w="100%" justify="space-around" h="100px">
      <Box>Logo</Box>
      <Text fontSize="2xl">Name of Channel</Text>
      <Text fontSize="sm">Description</Text>
      <HStack>
        <Avatar borderRadius="sm" size="xs" />
        <Avatar borderRadius="sm" size="xs" />
        <Avatar borderRadius="sm" size="xs" />
        <Avatar borderRadius="sm" size="xs" />
        <Box borderRadius="sm" w="23px" h="23px">
          {24}
        </Box>
      </HStack>
    </Flex>
  )
}

export default ChannelHeader
