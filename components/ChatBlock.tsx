import { Avatar } from '@chakra-ui/avatar'
import { VStack, Flex } from '@chakra-ui/layout'
import React from 'react'
import ChatMessage from './ChatMessage'

export interface ChatBlockInterface {
  messages: string[]
  isMine: boolean
}

function ChatBlock({ messages, isMine }: ChatBlockInterface) {
  return (
    <Flex w="100%">
      {!isMine ? <Avatar size="sm" borderRadius="sm" mr="1rem" /> : null}
      <VStack align={isMine ? 'end' : 'start'} mt="0.5rem" w="100%">
        <ChatMessage isMine={isMine} message="Hello" />
        <ChatMessage isMine={isMine} message="How are you" />
        <ChatMessage isMine={isMine} message="I saw your latest project, super sick bro" />
      </VStack>
      {isMine ? <Avatar size="sm" borderRadius="sm" ml="1rem" /> : null}
    </Flex>
  )
}

export default ChatBlock
