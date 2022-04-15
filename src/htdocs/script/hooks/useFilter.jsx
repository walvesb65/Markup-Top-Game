import { filterData } from '../../../services/reports'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../provider/context';

export default function useFilter() {

  const { setFilteredData } = useContext(AuthContext)

  console.log('test', typeof setFilteredData);
  const [filterOptions, setFilterOptions] = useState({
    platform: [],
    genre: [],
    publisher: []
  });

  useEffect(() => {
    setFilteredData(filterData(filterOptions))
  }, [filterOptions])

  const clearFilterOptions = () => {
    setFilterOptions({
      platform: [],
      genre: [],
      publisher: []
    })
  }

  const updateFilterOptions = (type, value) => {
    if (filterOptions[type].includes(value)) {
      
      const removedFilter = filterOptions[type]
        .filter((e) => e !== value);

      setFilterOptions({
        ...filterOptions,
        [type]:removedFilter,
      })
    } else {
      setFilterOptions({
        ...filterOptions, [type]: [...filterOptions[type], value] })
    }
  }

  return {
    clearFilterOptions,
    updateFilterOptions
  }
}