import { Box } from '@chakra-ui/layout'
import React from 'react'

export interface ChatMessageInterface {
  message: string
  isMine: boolean
}

function ChatMessage({ message, isMine }: ChatMessageInterface) {
  return (
    <Box
      textAlign={isMine ? 'right' : 'left'}
      mt="1rem"
      minW="50px"
      p="0.5rem 1rem 0.5rem 1rem"
      bg={isMine ? '#387aff' : '#27292e'}
      borderRadius={isMine ? '20px 0px 20px 20px' : '0px 20px 20px 20px'}
    >
      {message}
    </Box>
  )
}

export default ChatMessage
