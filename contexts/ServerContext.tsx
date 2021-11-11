import React, { useContext } from 'react'
export const ServerContext = React.createContext<any>({})

interface Props {
  serverId: string
  setServerId: (id: string) => void
  channelId: string
  setChannelId: (id: string) => void
}

export function useServer(): Props {
  return useContext(ServerContext)
}

const ServerProvider = ({ children }: any) => {
  const [serverId, setServerId] = React.useState('')
  const [channelId, setChannelId] = React.useState('')

  React.useEffect(() => {
    console.log(serverId, channelId)
  }, [serverId, channelId])

  const value = {
    serverId,
    setServerId,
    channelId,
    setChannelId,
  }

  return <ServerContext.Provider value={value}>{children}</ServerContext.Provider>
}

export default ServerProvider
