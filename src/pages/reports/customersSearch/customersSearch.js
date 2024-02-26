import React from 'react'
import Table from '../../../components/table'

export default function CustomersSearch() {
  return (
    <>
      <Table
        path="/reports/customers_search"
        showFilter={false}
        showDate={false}
        columns={[
          { name: 'ID', selector: (row) => row.id },
          { name: 'Name', selector: (row) => row.name },
          { name: 'Email', selector: (row) => row.email },
          { name: 'Words Searched', selector: (row) => row.word },
          { name: 'Title', selector: (row) => row.title },
          {
            name: 'Created At',
            selector: (row) => {
              const date = new Date(row.created_at)
              return `${date.toLocaleDateString()} at: ${date.toLocaleTimeString()}`
            },
          },
        ]}
        keys={['id', 'name', 'email', 'word', 'title', 'created_at']}
      />
    </>
  )
}
