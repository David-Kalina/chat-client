import { MenuItem } from '@chakra-ui/react'
import React from 'react'
import { FiLogOut } from 'react-icons/fi'
import { useAuth } from '../contexts/AuthContext'

function Logout() {
  const { logout } = useAuth()

  return (
    <MenuItem onClick={logout} icon={<FiLogOut />}>
      Logout
    </MenuItem>
  )
}

export default Logout
