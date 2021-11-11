import { Grid } from '@chakra-ui/react'
import React from 'react'
import ChannelChatWindow from './ChannelChatWindow'
import ChannelDetails from './ChannelDetails'
import ChannelNavigation from './ChannelNavigation'
import ChannelServerList from './ChannelServerList'
import CreateServer from './CreateServer'

function Layout() {
  return (
    <Grid
      templateColumns="150px 2fr 4fr 1fr"
      gap={0}
      templateRows="1fr"
      h="100vh"
      w="100vw"
      overflow="hidden"
    >
      <ChannelServerList />
      <ChannelNavigation />
      <ChannelChatWindow />
      <ChannelDetails />
    </Grid>
  )
}

export default Layout
