import React from 'react'
import Table from 'src/components/table'

export default function Countries() {
  return (
    <>
      <Table
        path="/countries"
        showDate={false}
        showFilter={false}
        columns={[
          { name: 'ID', selector: (row) => row.id },
          { name: 'Title', selector: (row) => row.title },
          { name: 'Created At', selector: (row) => row.created_at },
        ]}
        keys={['id', 'title', 'created_at']}
      />
    </>
  )
}
