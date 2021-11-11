import { Server } from 'http'
import React, { useContext } from 'react'
export const ServerContext = React.createContext<any>({})

interface Props {
  serverId: string
  setServerId: (id: string) => void
}

export function useServer(): Props {
  return useContext(ServerContext)
}

const ServerProvider = ({ children }: any) => {
  const [serverId, setServerId] = React.useState('')

  React.useEffect(() => {
    console.log(serverId)
  }, [serverId])

  const value = {
    serverId,
    setServerId,
  }

  return <ServerContext.Provider value={value}>{children}</ServerContext.Provider>
}

export default ServerProvider
