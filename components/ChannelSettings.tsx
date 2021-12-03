import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu'
import { Flex, IconButton } from '@chakra-ui/react'
import React from 'react'
import { FaCog } from 'react-icons/fa'
import { useDeleteChannelMutation } from '../generated/graphql'
import useToggle from '../hooks/useHook'
import EditChannel from './EditChannel'

function ChannelMenu() {
  const [isOpen, toggle] = useToggle(false)
  const [mutation] = useDeleteChannelMutation()

  const onClose = () => {
    toggle(false)
  }

  const deleteChannel = async () => {
    await mutation({
      update: cache => {
        cache.evict({ fieldName: 'channels' })
      },
    })
  }

  return (
    <>
      <Flex align="center">
        <Menu>
          <MenuButton
            onClick={e => e.stopPropagation()}
            bg="inherit"
            as={IconButton}
            ml="1rem"
            icon={<FaCog />}
          >
            Settings
          </MenuButton>
          <MenuList>
            <MenuItem onClick={deleteChannel}>Delete channel</MenuItem>
            <MenuItem onClick={() => toggle(true)}>Edit channel </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <EditChannel isOpen={isOpen} onClose={onClose} />
    </>
  )
}

export default ChannelMenu
