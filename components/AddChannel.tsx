import { Flex, Text } from '@chakra-ui/layout'
import React from 'react'
import { FaPlus } from 'react-icons/fa'
import useToggle from '../hooks/useHook'
import CreateChannel from './CreateChannel'

function AddChannel() {
  const [isOpen, setToggle] = useToggle(false)

  const onClose = () => {
    setToggle(false)
  }
  return (
    <>
      <Flex align="center" onClick={() => setToggle(!isOpen)}>
        <Text mr="4px">Add Channel</Text>
        <FaPlus />
      </Flex>
      <CreateChannel isOpen={isOpen} onClose={onClose} />
    </>
  )
}

export default AddChannel
