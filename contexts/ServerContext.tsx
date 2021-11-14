import React, { useContext } from 'react'
import { Channel, Server } from '../generated/graphql'
export const ServerContext = React.createContext<any>({})

interface Props {
  connectedServer: Server
  connectedChannel: Channel
  setConnectedChannel: (channel: Channel) => void
  setConnectedServer: (server: Server) => void
}

export function useServer(): Props {
  return useContext(ServerContext)
}

const ServerProvider = ({ children }: any) => {
  const [connectedServer, setConnectedServer] = React.useState('')
  const [connectedChannel, setConnectedChannel] = React.useState('')

  const value = {
    connectedServer,
    connectedChannel,
    setConnectedServer,
    setConnectedChannel,
  }

  return <ServerContext.Provider value={value}>{children}</ServerContext.Provider>
}

export default ServerProvider
