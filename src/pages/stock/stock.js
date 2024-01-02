import React from 'react'
import ActionButton from 'src/components/actionButton/actionButton'
import Table from 'src/components/table'

export default function Stock() {
  return (
    <>
      <ActionButton name="Update Stock" path="/stocks/updateStock" />
      <Table
        path="/stocks"
        keys={['id', 'title', 'quantity', 'user_name', 'details', 'created_at']}
        showDate={false}
        showFilter={false}
        columns={[
          { name: 'ID', selector: (row) => row.id },
          { name: 'Product Name', selector: (row) => row.title },
          { name: 'Quantity', selector: (row) => row.quantity },
          { name: 'User', selector: (row) => row.user_name },
          { name: 'Details', selector: (row) => row.details },
          { name: 'Created At', selector: (row) => row.created_at },
        ]}
      />
    </>
  )
}
