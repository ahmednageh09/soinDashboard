import React from 'react'
import Table from '../../../components/table'

export default function CustomersLog() {
  return (
    <>
      <Table
        path="/reports/log"
        showFilter={false}
        showDate={false}
        columns={[
          { name: 'ID', selector: (row) => row.id },
          { name: 'Name', selector: (row) => row.name },
          { name: 'Page', selector: (row) => row.page },
          {
            name: 'Created At',
            selector: (row) => new Date(row.created_at).toLocaleDateString(),
          },
          { name: 'Ip', selector: (row) => row.ip },
        ]}
        keys={['id', 'name', 'page', 'created_at', 'ip']}
      />
    </>
  )
}
