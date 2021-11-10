/* eslint-disable react/no-children-prop */
import { InputGroup, InputRightElement, Input } from '@chakra-ui/react'
import React from 'react'
import { RiSendPlaneFill } from 'react-icons/ri'

function ChatInput() {
  return (
    <InputGroup w="80%" mx="auto" bg="#27292e">
      <InputRightElement pointerEvents="none" children={<RiSendPlaneFill />} />
      <Input color="white" type="text" placeholder="Message" />
    </InputGroup>
  )
}

export default ChatInput
