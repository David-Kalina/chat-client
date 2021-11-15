import { VStack } from '@chakra-ui/layout'
import React from 'react'
import { ChatBlock as ChatBlockType, useChatBlocksQuery } from '../generated/graphql'
import ChatBlock from './ChatBlock'

function ChatRoom() {
  const { data } = useChatBlocksQuery()

  return (
    <VStack w="90%" mx="auto" align="flex-end" px={32}>
      {data?.chatBlocks?.map((chatBlock: any) => (
        <ChatBlock
          key={chatBlock.id as any}
          messages={chatBlock.messages as any}
          isMine={chatBlock.isMine}
        />
      ))}
    </VStack>
  )
}

export default ChatRoom
