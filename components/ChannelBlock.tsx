import { Box, Collapse, Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { useServer } from '../contexts/ServerContext'
import { useChannelsQuery } from '../generated/graphql'
import Channel from './Channel'

function ChannelBlock() {
  const [isOpen, setIsOpen] = React.useState(true)
  const { setChannelId, serverId } = useServer()
  const { data, loading, error } = useChannelsQuery({ variables: { serverReferenceId: serverId } })

  React.useEffect(() => {
    if (!loading && !error && data && data.channels && data.channels.length > 0) {
      setChannelId(data?.channels[0]?.channelId)
    }
  }, [setChannelId, data, loading, error])

  return (
    <Box w="100%">
      <Flex align="center">
        {isOpen && !!data?.channels?.length ? (
          <FaChevronDown onClick={() => setIsOpen(!isOpen)} />
        ) : (
          <FaChevronUp onClick={() => setIsOpen(!isOpen)} />
        )}
        <Text ml="1rem">CHANNEL</Text>
      </Flex>
      <Collapse startingHeight={0} in={isOpen && !!data?.channels?.length}>
        <VStack align="start" spacing={4} alignItems="stretch" mt="1rem">
          {data?.channels?.map(channel => (
            <Channel key={channel.channelId} channel={channel} />
          ))}
        </VStack>
      </Collapse>
    </Box>
  )
}

export default ChannelBlock
