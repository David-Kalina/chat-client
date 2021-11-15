import { GridItem } from '@chakra-ui/layout'
import React from 'react'
import ChatRoom from './ChatRoom'
import ChannelHeader from './ChannelHeader'
import ChatInput from './ChatInput'

function ChannelChatWindow() {
  return (
    <GridItem
      display="grid"
      gridTemplateColumns="1fr"
      gridTemplateRows="100px 1fr 80px"
      bg="#161819"
    >
      <GridItem gridRowStart={1} gridRowEnd={2} boxShadow="lg">
        <ChannelHeader />
      </GridItem>
      <GridItem
        overflowY="scroll"
        w="100%"
        height="calc(100vh - 160px)"
        gridRowStart={2}
        gridRowEnd={3}
      >
        <ChatRoom />
      </GridItem>
      <GridItem gridRowStart={3} gridRowEnd={4}>
        <ChatInput />
      </GridItem>
    </GridItem>
  )
}

export default ChannelChatWindow
