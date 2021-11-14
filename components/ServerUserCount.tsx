import { Badge } from '@chakra-ui/layout'
import React from 'react'
import { useServerUsersQuery } from '../generated/graphql'

function ServerUserCount() {
  const { data } = useServerUsersQuery()

  return <Badge fontSize="xs">{data?.getServerUsers}</Badge>
}

export default ServerUserCount
