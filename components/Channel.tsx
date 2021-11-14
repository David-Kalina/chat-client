import { Box, Flex, Text } from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router'
import React from 'react'
import { FaCircle } from 'react-icons/fa'
import { useServer } from '../contexts/ServerContext'
import { Channel, useConnectToChannelMutation } from '../generated/graphql'
import useToggle from '../hooks/useHook'
import ChannelSettings from './ChannelSettings'
import EditChannel from './EditChannel'
import InviteUser from './InviteUser'

interface Props {
  channel: Channel
}

function Channel({ channel }: Props) {
  const [isEditOpen, setEditToggle] = useToggle(false)
  const [isInviteOpen, setInviteToggle] = useToggle(false)
  const router = useRouter()

  const onCloseEdit = () => {
    setEditToggle(false)
  }

  const onCloseInvite = () => {
    setInviteToggle(false)
  }

  const [mutation, _] = useConnectToChannelMutation()
  const { setConnectedChannel, connectedChannel } = useServer()

  const connectToChannel = async () => {
    const response = await mutation({
      variables: {
        channelId: channel.channelId,
      },
    })
    setConnectedChannel(response?.data?.connectToChannel!)
    router.push(`/channel/${response?.data?.connectToChannel.channelId}`)
  }

  return (
    <Flex
      onClick={connectToChannel}
      h="40px"
      bg={channel.channelId === connectedChannel.channelId ? '#27292d' : undefined}
      p="12px"
      align="center"
      justify="space-between"
      borderRadius="md"
      key={channel.id}
    >
      <Flex align="center">
        <FaCircle />
        <Text ml="1rem" fontWeight="bold" fontSize="md">
          {channel.name}
        </Text>
      </Flex>
      <Flex align="center">
        <ChannelSettings />
        <Box ml="1rem" onClick={() => setInviteToggle(!isInviteOpen)}>
          <InviteUser isOpen={isInviteOpen} onClose={onCloseInvite} />
        </Box>
      </Flex>
    </Flex>
  )
}

export default Channel
