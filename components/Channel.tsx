import { Flex, Badge, Text } from '@chakra-ui/react'
import React from 'react'
import { FaCircle } from 'react-icons/fa'
import { useServer } from '../contexts/ServerContext'
import { Channel, useConnectToChannelMutation } from '../generated/graphql'

interface Props {
  channel: Channel
}

function Channel({ channel }: Props) {
  const [mutation, _] = useConnectToChannelMutation()
  const { setChannelId } = useServer()

  const connectToChannel = async () => {
    const response = await mutation({
      variables: {
        channelId: channel.channelId,
      },
    })
    setChannelId(response?.data?.connectToChannel!)
  }

  return (
    <Flex
      onClick={connectToChannel}
      h="40px"
      p="8px"
      align="center"
      justify="space-between"
      key={channel.id}
      border="1px solid red"
    >
      <Flex align="center">
        <FaCircle />
        <Text ml="1rem" fontWeight="bold" fontSize="md">
          {channel.name}
        </Text>
      </Flex>
      <Badge>{10}</Badge>
    </Flex>
  )
}

export default Channel
