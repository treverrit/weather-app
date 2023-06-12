import React, { useState } from 'react'
import {AsyncPaginate} from 'react-select-async-paginate'
import {url, options} from '../../api'

function Search({onSearchChange}) {
  
  const [search, setSearch] = useState(null)

  const handleOnChange = (searchData) => {
    setSearch(searchData)
    onSearchChange(searchData)
  }

  const loadOptions = async (inputValue) => {
    return fetch(`${url}?&namePrefix=${inputValue}`, options)
      .then(response => response.json())
      .then(response => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name} ${city.countryCode}`
            }
          })
        }
      })
      .catch(err => {options: [err]})
  }

  return (
    <AsyncPaginate
      placeholder="Search for City"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  )
}

export default Search
