import { VStack } from '@chakra-ui/layout'
import React from 'react'
import ChatBlock from './ChatBlock'
import ChatMessage from './ChatMessage'

function ChannelChat() {
  return (
    <VStack border="4px solid blue" w="80%" mx="auto" align="flex-end" px={32}>
      <ChatBlock isMine={true} messages={[]} />
      <ChatBlock isMine={false} messages={[]} />
      <ChatBlock isMine={true} messages={[]} />
      <ChatBlock isMine={false} messages={[]} />
      <ChatBlock isMine={true} messages={[]} />
      <ChatBlock isMine={false} messages={[]} />
      <ChatBlock isMine={true} messages={[]} />
      <ChatBlock isMine={false} messages={[]} />
      <ChatBlock isMine={true} messages={[]} />
      <ChatBlock isMine={false} messages={[]} />
      <ChatBlock isMine={true} messages={[]} />
      <ChatBlock isMine={false} messages={[]} />
    </VStack>
  )
}

export default ChannelChat
