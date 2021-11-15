import { Flex, Text } from '@chakra-ui/layout'
import React from 'react'
import { FaPlus } from 'react-icons/fa'
import useToggle from '../hooks/useHook'
import CreateServer from './CreateServer'

function AddServer() {
  const [isOpen, setToggle] = useToggle(false)

  const onClose = () => {
    setToggle(false)
  }
  return (
    <>
      <Flex
        onClick={() => setToggle(!isOpen)}
        w="14"
        h="14"
        borderRadius="md"
        border="1px solid gray"
        justify="center"
        align="center"
      >
        <FaPlus />
      </Flex>
      <CreateServer isOpen={isOpen} onClose={onClose} />
    </>
  )
}

export default AddServer
