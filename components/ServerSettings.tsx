import { IconButton } from '@chakra-ui/button'
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/menu'
import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { FaCog, FaEllipsisH } from 'react-icons/fa'
import { useSetOnlineStatusMutation } from '../generated/graphql'
import Logout from './Logout'

function ServerMenu() {
  const [mutation, _] = useSetOnlineStatusMutation()

  const updateOnlineStatus = async (onlineStatus: string) => {
    await mutation({
      variables: {
        onlineStatus,
      },
      update: cache => {
        cache.evict({ fieldName: 'getOnlineStatus' })
      },
    })
  }

  return (
    <Flex align="center">
      <FaCog />
      <Menu>
        <MenuButton ml="1rem">Settings</MenuButton>
        <MenuList>
          <MenuItem>Delete Server</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  )
}

export default ServerMenu
