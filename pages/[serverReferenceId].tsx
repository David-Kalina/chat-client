import { Button } from '@chakra-ui/button'
import { Flex, Text } from '@chakra-ui/layout'
import { useRouter } from 'next/dist/client/router'
import React from 'react'
import JoinServer from '../components/JoinServer'
import { useServerQuery } from '../generated/graphql'

function Invited() {
  const router = useRouter()

  const { serverReferenceId } = router.query

  const { data, error } = useServerQuery({
    variables: {
      serverReferenceId: (serverReferenceId && serverReferenceId.toString()) || '',
    },
  })

  if (error) {
    router.push('/')
  }

  return (
    <Flex justify="center" align="center" h="100vh">
      <Flex
        w="350px"
        h="180px"
        flexDir="column"
        justify="center"
        align="center"
        bg="red"
        borderRadius="md"
      >
        <Text>You have been invited to the {data?.server?.name} server</Text>
        <JoinServer serverReferenceId={data?.server?.serverReferenceId!} />
      </Flex>
    </Flex>
  )
}

export default Invited
