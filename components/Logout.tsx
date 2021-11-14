import { MenuItem } from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router'
import React from 'react'
import { FiLogOut } from 'react-icons/fi'
import { useLogoutMutation } from '../generated/graphql'

function Logout() {
  const [mutation, _] = useLogoutMutation()
  const router = useRouter()

  const logout = async () => {
    await mutation({
      update: cache => {
        cache.evict({ fieldName: 'getOnlineStatus' })
      },
    })
    router.push('/')
  }

  return (
    <MenuItem onClick={logout} icon={<FiLogOut />}>
      Logout
    </MenuItem>
  )
}

export default Logout
