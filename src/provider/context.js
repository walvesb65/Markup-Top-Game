import React from 'react'
import useFilter from '../htdocs/script/hooks/useFilter'

export const AuthContext = React.createContext({})

export const AuthProvider = (props) => {

  const { updateFilterOptions, clearFilterOptions } = useFilter()

  const data = {
    updateFilterOptions,
    clearFilterOptions
  }

  return (
  <AuthContext.Provider value={data}>
    {props.children}
  </AuthContext.Provider>)
}
