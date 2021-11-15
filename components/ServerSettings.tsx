import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu'
import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { BiExit } from 'react-icons/bi'
import { FaCog } from 'react-icons/fa'
import { useDeleteServerMutation, useLeaveServerMutation } from '../generated/graphql'

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
        cache.evict({ fieldName: 'channels' })
      },
    })
  }

  return (
    <Flex align="center">
      <FaCog />
      <Menu>
        <MenuButton ml="1rem">Settings</MenuButton>
        <MenuList>
          <MenuItem onClick={deleteServer}>
            <Flex align="center">
              <AiOutlineDelete />
              <Text ml="6px">Delete Server</Text>
            </Flex>
          </MenuItem>
          <MenuItem onClick={leaveServer}>
            <Flex align="center">
              <BiExit />
              <Text ml="6px">Leave Server</Text>
            </Flex>
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  )
}

export default ServerMenu
