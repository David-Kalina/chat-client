import { VStack } from '@chakra-ui/layout'
import React from 'react'
import ChatBlock from './ChatBlock'
import ChatMessage from './ChatMessage'

function ChannelChat() {
  return (
    <VStack w="90%" mx="auto" align="flex-end" px={32}>
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
