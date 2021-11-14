import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu'
import { Flex } from '@chakra-ui/react'
import React from 'react'
import { FaCog } from 'react-icons/fa'
import {
  useDeleteServerMutation,
  useLeaveServerMutation,
  useSetOnlineStatusMutation,
} from '../generated/graphql'

function ServerMenu() {
  const [leaveServerMutation] = useLeaveServerMutation()
  const [deleteServerMutation] = useDeleteServerMutation()

  const leaveServer = async () => {
    await leaveServerMutation({
      update(cache) {
        cache.evict({ fieldName: 'servers' })
      },
    })
  }

  const deleteServer = async () => {
    await deleteServerMutation({
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
          <MenuItem onClick={deleteServer}>Delete Server</MenuItem>
          <MenuItem onClick={leaveServer}>Leave Server</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  )
}

export default ServerMenu
