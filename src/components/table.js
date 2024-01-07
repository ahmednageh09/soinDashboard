import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { axiosInstance } from 'src/axiosConfig'
import DataTable from 'react-data-table-component'
import { CButton } from '@coreui/react'
import './table.scss'
import PropTypes from 'prop-types'

Table.propTypes = {
  showSearch: PropTypes.bool,
  showFilter: PropTypes.bool,
  showDate: PropTypes.bool,
  showActions: PropTypes.bool,
  buttonNames: PropTypes.arrayOf(PropTypes.string),
  buttonPath: PropTypes.string,
  path: PropTypes.string,
  columns: PropTypes.array,
  keys: PropTypes.array,
  filter: PropTypes.string,
  setShowModal: PropTypes.bool,
}

export default function Table({
  showSearch = true,
  showFilter = true,
  showDate = true,
  path = '',
  columns = [],
  keys = [],
  showActions = false,
  buttonNames = [''],
  buttonPath = '',
  filter = '',
  setShowModal,
}) {
  const [data, setData] = useState([])
  const [title, setTitle] = useState('')
  const [search, setSearch] = useState([])
  const [options, setOptions] = useState([])
  const [selectedOption, setSelectedOption] = useState('')
  const [fromDate, setFromDate] = useState('')
  const [toDate, setToDate] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(path)
        const newTitle = response.data.message
        setTitle(newTitle)
        const newData = response.data.data.map((responseData) => {
          const dataObj = keys.reduce((obj, key) => {
            obj[key] = responseData[key]
            return obj
          }, {})
          return dataObj
        })
        setData(newData)
        const filterOptions = new Set(newData.map((row) => row[filter]))
        setOptions(Array.from(filterOptions))
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()

    return
  }, [])

  const handleSearch = (evt) => {
    const searchTerm = evt.target.value.toLowerCase()
    const newData = data.filter((row) => {
      return Object.values(row).some((field) => String(field).toLowerCase().includes(searchTerm))
    })
    setSearch(newData)
  }
  const handleFilter = (evt) => {
    const selectedValue = evt.target.value
    setSelectedOption(selectedValue)

    const newData = selectedValue
      ? data.filter((row) => row[filter] && row[filter].toLowerCase() === selectedValue)
      : data

    setSearch(newData)
  }
  const handleFromDateChange = (evt) => {
    setFromDate(evt.target.value)

    const newData = data.filter((row) => {
      const rowDate = new Date(row.day)
      const fromDateObj = new Date(fromDate)
      return rowDate >= fromDateObj
    })
    setSearch(newData)
  }

  const handleToDateChange = (evt) => {
    setToDate(evt.target.value)

    const newData = data.filter((row) => {
      const rowDate = new Date(row.day)
      const toDateObj = new Date(toDate)
      return rowDate <= toDateObj
    })
    setSearch(newData)
  }

  const handleAction = (id) => {
    if (buttonPath) {
      navigate(`${buttonPath}/${id}`)
    } else {
      console.log('hhh')
      setShowModal(true)
    }
  }

  // Define the action buttons column
  const actionButtons = {
    name: 'Actions',
    selector: (row) => row.id,
    cell: (row) => (
      <div className="d-flex justify-content-between">
        {buttonNames.map((buttonName, index) => (
          <CButton
            className="mx-2 border-0 p-2 rounded-2"
            style={{ whiteSpace: 'nowrap', backgroundColor: '#8296bb' }}
            key={index}
            onClick={() => handleAction(row.id)}
          >
            {buttonName}
          </CButton>
        ))}
      </div>
    ),
  }

  // Add the action buttons column if pass showActions Props
  const allColumns = showActions ? [...columns, actionButtons] : columns

  return (
    <div className="p-3 tb" style={{ backgroundColor: '#fafafa', borderRadius: '1rem 1rem' }}>
      <div className="row d-flex flex-wrap justify-content-between">
        <div className="date d-flex flex-wrap justify-content-between">
          {showDate && (
            <div className="d-flex justify-content-between">
              <div>
                <label htmlFor="from">From</label>
                <input
                  className="input"
                  type="date"
                  id="from"
                  value={fromDate}
                  onChange={handleFromDateChange}
                />
              </div>
              <div>
                <label htmlFor="to">To</label>
                <input
                  className="input"
                  type="date"
                  id="to"
                  value={toDate}
                  onChange={handleToDateChange}
                />
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
        columns={allColumns}
        data={search.length > 0 ? search : data}
        title={title}
        pagination
        striped
        highlightOnHover
        responsive
        selectableRows
        customStyles={{
          header: {
            style: {
              width: 'fit-content',
              margin: 'auto',
              marginBottom: '1rem',
              marginTop: '1rem',
              textAlign: 'center',
              borderRadius: '10rem 10rem',
              boxShadow: '2px 2px 3px 3px #e7e9eb',
            },
          },
          headerCells: {
            style: { textAlign: 'center', color: 'red' },
          },
        }}
      />
      {/* {showModal && (
        <Modal show={showModal} handleClose={() => setShowModal(false)}>
          <h2>greeg</h2>
        </Modal>
      )} */}
    </div>
  )
}
