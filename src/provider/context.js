import React, { useState } from 'react'
import { getPlatforms } from '../services/server';

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

  const data = {
    upDateFilter,
    filter
  }

  return (
  <AuthContext.Provider value={data}>
    {props.children}
  </AuthContext.Provider>)
}
