import { Button } from '@chakra-ui/button'
import React from 'react'
import { useJoinServerMutation } from '../generated/graphql'

interface Props {
  serverReferenceId: string
}

function JoinServer({ serverReferenceId }: Props) {
  const [mutation, _] = useJoinServerMutation()

  const join = async () => {
    await mutation({ variables: { serverReferenceId } })
  }

  return <Button onClick={join}>Join</Button>
}

export default JoinServer
