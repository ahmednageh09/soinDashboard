import React from 'react'
import Table from 'src/components/table'

export default function Cities() {
  return (
    <>
      <Table
        path="/cities"
        showDate={false}
        showFilter={false}
        columns={[
          { name: 'ID', selector: (row) => row.id },
          { name: 'City', selector: (row) => row.title },
          { name: 'Country', selector: (row) => row.country },
          { name: 'Created At', selector: (row) => row.created_at },
          // Options
        ]}
        keys={['id', 'title', 'country', 'created_at']}
      />
    </>
  )
}
