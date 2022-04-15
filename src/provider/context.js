import React, { useState } from 'react'
import useFilter from '../htdocs/script/hooks/useFilter'

export const AuthContext = React.createContext({})

export const AuthProvider = (props) => {

  const [filteredData, setFilteredData ] = useState([]);
  const data = {
    setFilteredData,
    filteredData
  }
  
  return (
  <AuthContext.Provider value={data}>
    {props.children}
  </AuthContext.Provider>)
}
