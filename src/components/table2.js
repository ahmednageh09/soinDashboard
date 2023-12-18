import React, { useEffect, useRef } from 'react'
import $ from 'jquery'
import DataTables from 'datatables.net'

// Import necessary styles
import 'datatables.net-dt/css/jquery.dataTables.min.css'
import 'datatables.net-dt/css/jquery.dataTables.min.css'
// Importing dataset

// Initialize jquery and Datatable

const Tableset = () => {
  const tableRef = useRef()
  const DataTable = DataTables(tableRef, $)

  useEffect(() => {
    // When component loads, fill table with data
    new DataTable(tableRef.current, {
      dom: 'Bfrtip',
      ajax: {
        url: 'https://jsonplaceholder.typicode.com/users',
        dataSrc: '',
      },
      columns: [
        { data: 'id', name: 'id' },
        { data: 'name', name: 'name' },
        { data: 'username', name: 'username' },
        { data: 'phone', name: 'phone' },
      ],
    })
  }, [])

  // Create a reference for the table
  return (
    <div>
      <table ref={tableRef}></table>
    </div>
  )
}

export default Tableset
