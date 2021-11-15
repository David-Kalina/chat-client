import { Avatar } from '@chakra-ui/avatar'
import { Box, Flex, HStack, Text } from '@chakra-ui/layout'
import React from 'react'
import { FaCircle } from 'react-icons/fa'
import { useServer } from '../contexts/ServerContext'
import { useChannelQuery } from '../generated/graphql'

function ChannelHeader() {
  const { connectedChannel } = useServer()
  const { data, loading, error } = useChannelQuery({
    variables: { channelReferenceId: connectedChannel?.channelReferenceId || '' },
  })

  const channel = data?.channel

  return (
    <Flex pos="sticky" align="center" w="100%" justify="space-between" px="4rem" h="100px">
      {!loading && !error ? (
        <>
          <Flex align="center" w="50%">
            <FaCircle />
            <Text ml="1rem" textTransform="capitalize" fontSize="2xl">
              {channel?.name}
            </Text>
            <Text ml="1rem" fontSize="sm">
              {channel?.description}
            </Text>
          </Flex>
          {/* <HStack>
            <Avatar borderRadius="sm" size="xs" />
            <Avatar borderRadius="sm" size="xs" />
            <Avatar borderRadius="sm" size="xs" />
            <Avatar borderRadius="sm" size="xs" />
            <Box borderRadius="sm" w="23px" h="23px">
              {24}
            </Box>
          </HStack> */}
        </>
      ) : (
        <Box>Loading</Box>
      )}
    </Flex>
  )
}

export default ChannelHeader
