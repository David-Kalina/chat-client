import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import { io, Socket } from 'socket.io-client'
import { useServer } from './ServerContext'
export const SocketContext = React.createContext<any>({})

interface Props {
  socket: Socket
  setSocket: (socket: Socket) => void
}

export function useSocket(): Props {
  return useContext(SocketContext)
}

const SocketProvider = ({ children }: any) => {
  const [socket, setSocket] = React.useState<Socket | null>(null)

  const { connectedServer } = useServer()

  React.useEffect(() => {
    const socket = io(`http://localhost:4000/${connectedServer.serverReferenceId}`, {
      withCredentials: false,
    })
    setSocket(socket)
    return () => {
      socket.disconnect()
    }
  }, [connectedServer])

  const value = {
    socket,
    setSocket,
  }

  return <SocketContext.Provider value={value}>{children}</SocketContext.Provider>
}

export default SocketProvider
