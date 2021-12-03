import { Button } from '@chakra-ui/button'
import { Box, Flex, Text } from '@chakra-ui/layout'
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
        w="450px"
        h="280px"
        flexDir="column"
        justify="center"
        align="center"
        bg="#161819"
        borderRadius="md"
      >
        <Text fontSize="x-large">You have been invited to the {data?.server?.name} server</Text>
        <Flex mt="1rem" w="200px">
          <JoinServer serverReferenceId={data?.server?.serverReferenceId!} />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Invited
