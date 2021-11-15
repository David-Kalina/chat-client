import { IconButton } from '@chakra-ui/button'
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/menu'
import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { FaEllipsisH } from 'react-icons/fa'
import { useIdleTimer } from 'react-idle-timer'
import { useSetOnlineStatusMutation } from '../generated/graphql'
import useToggle from '../hooks/useHook'
import Logout from './Logout'

function UserMenu() {
  const [mutation, _] = useSetOnlineStatusMutation()
  const [disableIdle, toggleIdle] = useToggle(false)

  const handleOnIdle = async () => {
    if (disableIdle) return
    await mutation({
      variables: {
        onlineStatus: 'idle',
      },
      update: cache => {
        cache.evict({ fieldName: 'getOnlineStatus' })
      },
    })
  }

  const handleOnAction = async () => {
    if (disableIdle) return
    await mutation({
      variables: {
        onlineStatus: 'online',
      },
      update: cache => {
        cache.evict({ fieldName: 'getOnlineStatus' })
      },
    })
  }

  const updateOnlineStatus = async (onlineStatus: string) => {
    await mutation({
      variables: {
        onlineStatus,
      },
      update: cache => {
        cache.evict({ fieldName: 'getOnlineStatus' })
      },
    })
    if (onlineStatus !== 'online') {
      toggleIdle(true)
    } else {
      toggleIdle(false)
    }
  }

  useIdleTimer({
    timeout: 2 * 60 * 1000,
    onIdle: handleOnIdle,
    onAction: handleOnAction,
    debounce: 0,
  })

  return (
    <Menu direction="rtl">
      <MenuButton as={IconButton} aria-label="Options" icon={<FaEllipsisH />} variant="outline" />
      <MenuList>
        <MenuItem
          alignItems="center"
          onClick={() => {
            updateOnlineStatus('online')
          }}
        >
          <Box
            w="3"
            h="3"
            borderRadius="full"
            bg="green.500"
            fontSize="sm"
            fontWeight="semibold"
            textTransform="uppercase"
          />
          <Text ml="0.5rem">Online</Text>
        </MenuItem>
        <MenuItem
          alignItems="center"
          onClick={() => {
            updateOnlineStatus('idle')
          }}
        >
          <Box
            w="3"
            h="3"
            borderRadius="full"
            bg="yellow.500"
            fontSize="sm"
            fontWeight="semibold"
            textTransform="uppercase"
          />
          <Text ml="0.5rem">Idle</Text>
        </MenuItem>
        <MenuItem
          alignItems="center"
          onClick={() => {
            updateOnlineStatus('offline')
          }}
        >
          <Box
            w="3"
            h="3"
            borderRadius="full"
            bg="red.500"
            fontSize="sm"
            fontWeight="semibold"
            textTransform="uppercase"
          />
          <Text ml="0.5rem">Offline</Text>
        </MenuItem>

        <Logout />
      </MenuList>
    </Menu>
  )
}

export default UserMenu
