import React, { useState } from 'react'

export const AuthContext = React.createContext({})

export const AuthProvider = (props) => {

  const [filter, setFilter] = useState({
    Platform: [],
    Genre: [],
    Publisher: []
  });

  const upDateFilter = (type, value) => {
    if (filter[type].includes(value)) {
      const removedFilter = filter[type].filter((e) => e !== value);
      setFilter({
        ...filter,
        [type]:removedFilter,
      })
    } else {
      setFilter({
        ...filter,
        [type]:[...filter[type], value]
      })
    }
  }

  return (
  <AuthContext.Provider value={{upDateFilter}}>
    {props.children}
  </AuthContext.Provider>)
}
