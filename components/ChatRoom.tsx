import { VStack } from '@chakra-ui/layout'
import React from 'react'
import { useServer } from '../contexts/ServerContext'
import { useSocket } from '../contexts/SocketContext'
import { ChatBlock as ChatBlockType } from '../generated/graphql'
import ChatBlock from './ChatBlock'

function ChatRoom() {
  const [chatBlocks, setChatBlocks] = React.useState([])

  const { socket } = useSocket()
  const { localUserId } = useServer()

  React.useEffect(() => {
    socket?.on('chatBlocks', data => {
      console.log('insane')
      setChatBlocks(data)
    })
  }, [socket, chatBlocks])

  return (
    <VStack w="90%" mx="auto" align="flex-end" px={32}>
      {chatBlocks?.map((chatBlock: ChatBlockType) => (
        <ChatBlock
          key={chatBlock.id as any}
          messages={chatBlock.messages as any}
          isMine={localUserId === chatBlock.userReferenceId}
        />
      ))}
    </VStack>
  )
}

export default ChatRoom
