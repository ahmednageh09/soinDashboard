import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import './table.scss'
import PropTypes from 'prop-types'
Table.propTypes = {
  showSearch: PropTypes.bool,
  showFilter: PropTypes.bool,
  showDate: PropTypes.bool,
}

export default function Table({ showSearch = true, showFilter = true, showDate = true }) {
  const columns = [
    { name: 'ID', selector: (row) => row.id },
    { name: 'Name', selector: (row) => row.name, sortable: true },
    { name: 'Email', selector: (row) => row.email },
    { name: 'City', selector: (row) => row.address.city },
  ]

  const [data, setData] = useState([])
  const [search, setSearch] = useState([])
  const [options, setOptions] = useState([])
  const [selectedOption, setSelectedOption] = useState('')

  useEffect(() => {
    let isMounted = true

    const fetchData = async () => {
      try {
        const response = await Axios.get('https://jsonplaceholder.typicode.com/users')

        if (isMounted) {
          const responseData = response.data
          const names = responseData.map((user) => user.name)
          setData(responseData)
          setSearch(responseData)
          setOptions(names)
        }
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()

    return () => {
      isMounted = false
    }
  }, [])

  const handleSearch = (evt) => {
    const searchTerm = evt.target.value.toLowerCase()
    const newData = data.filter((row) => row.name.toLowerCase().includes(searchTerm))
    setSearch(newData)
  }

  const handleNameChange = (evt) => {
    const selectedValue = evt.target.value
    setSelectedOption(selectedValue)

    const newData = selectedValue
      ? data.filter((row) => row.name.toLowerCase() === selectedValue.toLowerCase())
      : data

    setSearch(newData)
  }

  return (
    <div className="p-3 " style={{ backgroundColor: '#fafafa', borderRadius: '1rem 1rem' }}>
      <div className="row d-flex flex-wrap justify-content-between">
        <div className="date d-flex flex-wrap justify-content-between">
          {showDate && (
            <div className="d-flex justify-content-between">
              <div>
                <label htmlFor="from">From</label>
                <input type="date" id="from" />
              </div>
              <div>
                <label htmlFor="to">To</label>
                <input type="date" id="to" />
              </div>
            </div>
          )}
          {showSearch && (
            <input type="text" className="search" placeholder="Search" onChange={handleSearch} />
          )}
          {showFilter && (
            <select className="select mx-2" onChange={handleNameChange}>
              <option value="">All</option>
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>
      <DataTable columns={columns} data={search} pagination striped highlightOnHover responsive />
    </div>
  )
}
