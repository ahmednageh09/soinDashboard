import React, { useEffect, useState } from 'react'
import { axiosInstance } from 'src/axiosConfig'
import DataTable from 'react-data-table-component'
import './table.scss'
import PropTypes from 'prop-types'

Table.propTypes = {
  showSearch: PropTypes.bool,
  showFilter: PropTypes.bool,
  showDate: PropTypes.bool,
  path: PropTypes.string,
  columns: PropTypes.array,
  keys: PropTypes.array,
}

export default function Table({
  showSearch = true,
  showFilter = true,
  showDate = true,
  path = '',
  columns = [],
  keys = [],
}) {
  const [data, setData] = useState([])
  const [title, setTitle] = useState('')
  const [search, setSearch] = useState([])
  const [options, setOptions] = useState([])
  const [selectedOption, setSelectedOption] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(path)
        const newTitle = response.data.message
        setTitle(newTitle)
        const newData = response.data.data.map((responseData) => {
          const dataObj = keys.reduce((obj, key) => {
            obj[key] = responseData[key]
            // console.log(obj)
            return obj
          }, {})
          return dataObj
        })
        setData(newData)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()

    return
  }, [])

  const handleSearch = (evt) => {
    const searchTerm = evt.target.value.toLowerCase()
    const newData = data.filter((row) => row.name.toLowerCase().includes(searchTerm))
    setSearch(newData)
  }

  const handleFilter = (evt) => {
    const selectedValue = evt.target.value
    setSelectedOption(selectedValue)
    const newData = selectedValue
      ? data.filter((row) => row.name.toLowerCase() === selectedValue.toLowerCase())
      : data
    setSearch(newData)
  }

  return (
    <div className="p-3 tb" style={{ backgroundColor: '#fafafa', borderRadius: '1rem 1rem' }}>
      <div className="row d-flex flex-wrap justify-content-between">
        <div className="date d-flex flex-wrap justify-content-between">
          {showDate && (
            <div className="d-flex justify-content-between">
              <div>
                <label htmlFor="from">From</label>
                <input className="input" type="date" id="from" />
              </div>
              <div>
                <label htmlFor="to">To</label>
                <input className="input" type="date" id="to" />
              </div>
            </div>
          )}
          {showSearch && (
            <input
              className="input search"
              type="text"
              placeholder="Search"
              onChange={handleSearch}
            />
          )}
          {showFilter && (
            <select className="select mx-2" onChange={handleFilter}>
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
      <DataTable
        columns={columns}
        data={[...data]}
        title={title}
        pagination
        striped
        highlightOnHover
        responsive
        customStyles={{
          header: {
            style: {
              width: '60%',
              margin: 'auto',
              marginBottom: '1rem',
              marginTop: '1rem',
              textAlign: 'center',
              borderRadius: '10rem 10rem',
              boxShadow: '2px 2px 3px 3px #e7e9eb',
            },
          },
          headerCells: {
            style: {
              // backgroundColor: 'danger',
              color: 'red',
            },
          },
        }}
      />
    </div>
  )
}
