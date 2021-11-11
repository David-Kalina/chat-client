import { Avatar } from '@chakra-ui/avatar'
import { Box, Flex, HStack, Text } from '@chakra-ui/layout'
import React from 'react'
import { useServer } from '../contexts/ServerContext'
import { useChannelQuery } from '../generated/graphql'

function ChannelHeader() {
  const { channelId } = useServer()
  const { data, loading, error } = useChannelQuery({ variables: { channelId } })

  const channel = data?.channel

  return (
    <Flex pos="sticky" align="center" w="100%" justify="space-around" h="100px">
      {!loading && !error ? (
        <>
          <Box>Logo</Box>
          <Text fontSize="2xl">{channel?.name}</Text>
          <Text fontSize="sm">{channel?.description}</Text>
          <HStack>
            <Avatar borderRadius="sm" size="xs" />
            <Avatar borderRadius="sm" size="xs" />
            <Avatar borderRadius="sm" size="xs" />
            <Avatar borderRadius="sm" size="xs" />
            <Box borderRadius="sm" w="23px" h="23px">
              {24}
            </Box>
          </HStack>
        </>
      ) : (
        <Box>Loading</Box>
      )}
    </Flex>
  )
}

export default ChannelHeader
