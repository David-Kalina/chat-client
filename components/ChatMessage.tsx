import { Box } from '@chakra-ui/layout'
import React from 'react'

export interface ChatMessageInterface {
  message: string
  isMine: boolean
}

function ChatMessage({ message, isMine }: ChatMessageInterface) {
  return (
    <Box
      mt="1rem"
      minW="150px"
      p="2"
      bg={isMine ? 'blue.300' : 'gray.300'}
      borderRadius={isMine ? '20px 0px 20px 20px' : '0px 20px 20px 20px'}
    >
      {message}
    </Box>
  )
}

export default ChatMessage
