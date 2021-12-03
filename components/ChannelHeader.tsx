import { Avatar } from '@chakra-ui/avatar'
import { Box, Flex, HStack, Text } from '@chakra-ui/layout'
import { useRouter } from 'next/router'
import React from 'react'
import { useServer } from '../contexts/ServerContext'
import { useSocket } from '../contexts/SocketContext'
import { useChannelQuery } from '../generated/graphql'

function ChannelHeader() {
  const { connectedChannel } = useServer()
  const router = useRouter()
  const { id } = router.query

  const [connectedUsers, setConnectedUsers] = React.useState([])

  const { socket } = useSocket()

  React.useEffect(() => {
    socket?.on('numberOfConnectedUsers', data => {
      setConnectedUsers(data.data)
    })
  }, [socket])

  const { data, loading, error } = useChannelQuery({
    variables: { channelReferenceId: (id as string) || '' },
  })

  const channel = data?.channel

  return (
    <Flex pos="sticky" align="center" w="100%" justify="space-between" px="4rem" h="100px">
      {!loading && !error ? (
        <>
          <Flex align="center" w="50%">
            <Box
              w="3"
              h="3"
              bg={
                channel?.channelReferenceId === connectedChannel?.channelReferenceId
                  ? 'green.200'
                  : undefined
              }
              borderRadius="full"
            />
            <Text ml="1rem" textTransform="capitalize" fontSize="2xl">
              {channel?.name}
            </Text>
            <Text ml="1rem" fontSize="sm">
              {channel?.description}
            </Text>
          </Flex>
          <HStack>
            {connectedUsers.map(user => (
              <Avatar key={user} borderRadius="sm" size="xs" />
            ))}

            <Box borderRadius="sm" w="23px" h="23px">
              {connectedUsers.length}
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
