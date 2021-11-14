import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu'
import { Flex } from '@chakra-ui/react'
import React from 'react'
import { FaCog } from 'react-icons/fa'
import { useLeaveServerMutation, useSetOnlineStatusMutation } from '../generated/graphql'

function ServerMenu() {
  const [mutation, _] = useLeaveServerMutation()

  const leaveServer = async () => {
    await mutation({
      update(cache) {
        cache.evict({ fieldName: 'servers' })
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
          <MenuItem onClick={leaveServer}>Leave Server</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  )
}

export default ServerMenu
