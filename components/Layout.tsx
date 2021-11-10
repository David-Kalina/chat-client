import { Box, Grid, GridItem, VStack } from '@chakra-ui/react'
import React from 'react'
import ChannelChat from './ChannelChat'
import ChannelHeader from './ChannelHeader'
import ChatInput from './ChatInput'
import ProfileCard from './ProfileCard'
import Search from './Search'
import Server from './Server'
import ServerBlock from './ServerBlock'

function Layout() {
  return (
    <Grid
      templateColumns="150px 2fr 4fr 1fr"
      gap="4"
      templateRows="1fr"
      h="100vh"
      w="100vw"
      overflow="hidden"
    >
      <GridItem bg="tomato">
        <VStack spacing="4">
          <Server />
          <Server />
          <Server />
          <Server />
          <Server />
        </VStack>
      </GridItem>
      <GridItem bg="tomato" py="2rem" px="3rem">
        <VStack align="start" spacing="6">
          <Search />
          <ProfileCard />
          <ServerBlock />
          <ServerBlock />
        </VStack>
      </GridItem>
      <GridItem
        bg="tomato"
        display="grid"
        gridTemplateColumns="1fr"
        gridTemplateRows="100px 1fr 80px"
      >
        <GridItem gridRowStart={1} gridRowEnd={2}>
          <ChannelHeader />
        </GridItem>
        <GridItem
          overflowY="scroll"
          w="100%"
          height="calc(100vh - 160px)"
          gridRowStart={2}
          gridRowEnd={3}
        >
          <ChannelChat />
        </GridItem>
        <GridItem gridRowStart={3} gridRowEnd={4} border="1px solid red">
          <ChatInput />
        </GridItem>
      </GridItem>
      <GridItem bg="tomato" />
    </Grid>
  )
}

export default Layout
