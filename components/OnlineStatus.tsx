import { Box, Text } from '@chakra-ui/layout'
import { Flex } from '@chakra-ui/react'
import React from 'react'
import { useOnlineStatusQuery, useSetOnlineStatusMutation } from '../generated/graphql'
import { useIdleTimer } from 'react-idle-timer'

function OnlineStatus() {
  const { data } = useOnlineStatusQuery()

  const status = data?.getOnlineStatus

  switch (status) {
    case 'online':
      return (
        <Flex align="center">
          <Box
            w="3"
            h="3"
            borderRadius="full"
            bg="green.500"
            fontSize="sm"
            fontWeight="semibold"
            textTransform="uppercase"
          />
          <Text ml="4px">Active for chat</Text>
        </Flex>
      )
    case 'offline':
      return (
        <Flex align="center">
          <Box
            w="3"
            h="3"
            borderRadius="full"
            bg="red.500"
            fontSize="sm"
            fontWeight="semibold"
            textTransform="uppercase"
          />
          <Text ml="4px">Offline</Text>
        </Flex>
      )
    case 'idle':
      return (
        <Flex align="center">
          <Box
            w="3"
            h="3"
            borderRadius="full"
            bg="yellow.500"
            fontSize="sm"
            fontWeight="semibold"
            textTransform="uppercase"
          />
          <Text ml="4px">Idle</Text>
        </Flex>
      )
    default:
      return (
        <Flex align="center">
          <Box
            w="3"
            h="3"
            borderRadius="full"
            bg="gray.500"
            fontSize="sm"
            fontWeight="semibold"
            textTransform="uppercase"
          />
          <Text ml="4px">Active for chat</Text>
        </Flex>
      )
  }
}

export default OnlineStatus
