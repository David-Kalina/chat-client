import React, { createContext, useEffect, useContext, useState } from 'react'
import {
  LoginInput,
  RegisterInput,
  GlobalUser,
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
} from '../generated/graphql'

import { useRouter } from 'next/router'

const AuthContext = createContext<{
  currentUser: GlobalUser | null | undefined
  register: (options: RegisterInput) => Promise<unknown>
  login: (options: LoginInput) => Promise<unknown>
  logout: () => Promise<unknown>
}>(null as any)

export function useAuth() {
  return useContext(AuthContext)
}

const AuthProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<GlobalUser | null>()
  const [loginMutation] = useLoginMutation()
  const [registerMutation] = useRegisterMutation()
  const [logoutMutation] = useLogoutMutation()

  const router = useRouter()

  const register = async (options: RegisterInput) => {
    try {
      const response = await registerMutation({ variables: { options } })

      window.localStorage.setItem('user', JSON.stringify(response.data?.register as GlobalUser))
      setCurrentUser(response.data?.register as GlobalUser)

      return router.push('/')
    } catch (error) {
      return error
    }
  }

  const login = async (options: LoginInput) => {
    console.log('Logging in')
    try {
      const response = await loginMutation({ variables: { options } })

      window.localStorage.setItem('user', JSON.stringify(response.data?.login as GlobalUser))
      setCurrentUser(response.data?.login as GlobalUser)

      console.log(response.data?.login as GlobalUser)

      return router.push('/')
    } catch (error) {
      console.log(error)
      return error
    }
  }

  const logout = async () => {
    try {
      await logoutMutation()
      localStorage.clear()
      setCurrentUser(null)
      window.location.href = '/login'
    } catch (error) {
      return error
    }
  }

  const value = {
    currentUser,
    register,
    login,
    logout,
  }

  useEffect(() => {
    if (window.localStorage.getItem('user') !== 'undefined')
      setCurrentUser(JSON.parse(window.localStorage.getItem('user') as string))
  }, [])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
