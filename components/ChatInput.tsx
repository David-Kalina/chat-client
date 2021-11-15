/* eslint-disable react/no-children-prop */
import { InputGroup, InputRightElement, Input } from '@chakra-ui/react'
import React from 'react'
import { RiSendPlaneFill } from 'react-icons/ri'
import { useCreateMessageMutation } from '../generated/graphql'

function ChatInput() {
  const [text, setText] = React.useState('')
  const [mutation] = useCreateMessageMutation()

  const createMessage = async () => {
    await mutation({
      variables: {
        text,
      },
    })
    setText('')
  }

  return (
    <InputGroup
      w="80%"
      mx="auto"
      bg="#27292e"
      onKeyDown={e => {
        if (e.key === 'Enter') {
          createMessage()
        }
      }}
    >
      <Input
        type="text"
        placeholder="Type a message"
        value={text}
        onChange={e => setText(e.target.value)}
        _placeholder={{
          color: '#8a8c90',
          fontSize: '1.2rem',
        }}
      />
      <InputRightElement width="2rem">
        <RiSendPlaneFill onClick={createMessage} />
      </InputRightElement>
    </InputGroup>
  )
}

export default ChatInput
