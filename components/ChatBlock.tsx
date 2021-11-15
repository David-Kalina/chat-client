import { Avatar } from '@chakra-ui/avatar'
import { VStack, Flex, Text, Box } from '@chakra-ui/layout'
import React from 'react'
import { Message } from '../generated/graphql'
import ChatMessage from './ChatMessage'

export interface ChatBlockInterface {
  messages: Message[]
  isMine: boolean
}

function ChatBlock({ messages, isMine }: ChatBlockInterface) {
  return (
    <>
      {!isMine ? (
        <Flex w="100%" py="6">
          <Avatar size="sm" borderRadius="sm" mr="1rem" />
          <Box>
            <Flex align="center" justify="flex-start">
              <Text textAlign="right">Name</Text>
              <Text ml="1rem" fontSize="xs" color="#343637" textAlign="right">
                date
              </Text>
            </Flex>
            <VStack align="start" mt="0.5rem" w="100%">
              {messages.map((message, index) => (
                <ChatMessage key={index} message={message.text} isMine={isMine} />
              ))}
            </VStack>
          </Box>
        </Flex>
      ) : (
        <Flex w="100%" p="6" flexDir="row-reverse">
          <Avatar size="sm" borderRadius="sm" ml="1rem" />
          <Box>
            <Flex align="center" justify="flex-end">
              <Text fontSize="xs" color="#343637" textAlign="right">
                date
              </Text>
              <Text ml="1rem" textAlign="right">
                Name
              </Text>
            </Flex>
            <VStack align="end" mt="0.5rem" w="100%">
              {messages.map((message, index) => (
                <ChatMessage key={index} message={message.text} isMine={isMine} />
              ))}
            </VStack>
          </Box>
        </Flex>
      )}
    </>
  )
}

export default ChatBlock
