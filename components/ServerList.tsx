import { GridItem, Skeleton, VStack } from '@chakra-ui/react'
import React from 'react'
import { useServer } from '../contexts/ServerContext'
import { useServersQuery } from '../generated/graphql'
import AddServer from './AddServer'
import Server from './Server'

function ServerList() {
  const { loading, error, data } = useServersQuery()
  const { setServerId } = useServer()

  React.useEffect(() => {
    if (data && !loading && data?.servers?.length > 0) {
      setServerId(data.servers[0].serverId)
    }
  }, [data, setServerId, loading])

  return (
    <GridItem bg="#1c1e1f">
      {!loading && !error && data ? (
        <VStack spacing="4" mt="2rem">
          {data?.servers.map(server => (
            <Server key={server.id} server={server} />
          ))}
          <AddServer />
        </VStack>
      ) : (
        <VStack spacing="4" mt="2rem">
          <Skeleton w="14" h="14" borderRadius="md" />
          <Skeleton w="14" h="14" borderRadius="md" />
          <Skeleton w="14" h="14" borderRadius="md" />
          <Skeleton w="14" h="14" borderRadius="md" />
          <Skeleton w="14" h="14" borderRadius="md" />
          <Skeleton w="14" h="14" borderRadius="md" />
          <AddServer />
        </VStack>
      )}
    </GridItem>
  )
}

export default ServerList
