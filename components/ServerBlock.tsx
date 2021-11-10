import { Box, Collapse, VStack, Text, Flex } from '@chakra-ui/react'
import React from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

function ServerBlock() {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <Box>
      <Flex align="center">
        {isOpen ? (
          <FaChevronDown onClick={() => setIsOpen(!isOpen)} />
        ) : (
          <FaChevronUp onClick={() => setIsOpen(!isOpen)} />
        )}
        <Text ml="1rem">CHANNEL</Text>
      </Flex>
      <Collapse startingHeight={0} in={isOpen}>
        <VStack align="start">
          <Box>1</Box>
          <Box>3</Box>
          <Box>3</Box>
          <Box>4</Box>
          <Box>5</Box>
        </VStack>
      </Collapse>
    </Box>
  )
}

export default ServerBlock
