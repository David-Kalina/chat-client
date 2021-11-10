import { GridItem, VStack, Flex, Skeleton, Text } from '@chakra-ui/react'
import React from 'react'

function ChannelDetails() {
  return (
    <GridItem bg="#181a1b">
      <VStack spacing={4} align="start">
        <Text fontSize="lg" mb="1rem">
          Channel Details
        </Text>
        <Flex flexDir="column" justifyContent="center">
          <Flex align="center" ml="1rem">
            <Text>Media</Text>
            <Text ml="4px" fontSize="xs">
              {148} pictures
            </Text>
          </Flex>
          <Flex flexWrap="wrap" justify="center" mt="1rem">
            <Skeleton m="4px" borderRadius="md" w="150px" h="150px" />
            <Skeleton m="4px" borderRadius="md" w="150px" h="150px" />
            <Skeleton m="4px" borderRadius="md" w="150px" h="150px" />
            <Skeleton m="4px" borderRadius="md" w="150px" h="150px" />
          </Flex>
        </Flex>

        <Flex flexDir="column" justifyContent="center" w="100%">
          <Flex align="center" ml="1rem">
            <Text>Files & Links</Text>
            <Text ml="4px" fontSize="xs">
              {42} files {12} links
            </Text>
          </Flex>
          <Flex flexDir="column" justify="stretch" mt="1rem" w="80%">
            <Skeleton m="6px" borderRadius="md" w="100%" h="50px" />
            <Skeleton m="6px" borderRadius="md" w="100%" h="50px" />
            <Skeleton m="6px" borderRadius="md" w="100%" h="50px" />
            <Skeleton m="6px" borderRadius="md" w="100%" h="50px" />
          </Flex>
        </Flex>
      </VStack>
    </GridItem>
  )
}

export default ChannelDetails
