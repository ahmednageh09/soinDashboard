import React from 'react'
import Table from 'src/components/table'

export default function Extra() {
  return (
    <>
      <Table
        path="/offers?type=extra"
        showFilter={false}
        showDate={false}
        columns={[
          { name: 'Title', selector: (row) => row.title },
          { name: 'Used Times', selector: (row) => row.used_times },
          { name: 'Start Date', selector: (row) => row.start_date },
          { name: 'End Date', selector: (row) => row.end_date },
          { name: 'Status', selector: (row) => row.status },
        ]}
        keys={['title', 'used_times', 'start_date', 'end_date', 'status']}
        showActions={true}
        buttonNames={['Members', 'Edit', 'Delete']}
      />
    </>
  )
}
