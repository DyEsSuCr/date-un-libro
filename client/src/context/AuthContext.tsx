'use client'

import { createContext, useContext, useState } from 'react'

export const AuthContext = createContext({
  isAuthenticated: false,
  signin: () => {},
  logout: () => {}
})

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

  const logout = () => {
    setIsAuthenticated(false)
  }

  const signin = () => {
    setIsAuthenticated(true)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, signin, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)
