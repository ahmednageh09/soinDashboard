import React from 'react'
import { useParams } from 'react-router-dom'
import Table from 'src/components/table'

export default function Details() {
  const { id } = useParams()
  return (
    <>
      <Table
        path={`/reports/refund/${id}`}
        showFilter={false}
        showDate={false}
        showSearch={false}
        columns={[
          { name: 'ID', selector: (row) => row.id },
          { name: 'Name', selector: (row) => row.name },
          { name: 'Balance', selector: (row) => row.balance },
          { name: 'Points', selector: (row) => row.points },
        ]}
        keys={['id', 'name', 'balance', 'points']}
      />
    </>
  )
}
