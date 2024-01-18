import React, { useState } from 'react'
import { CButton } from '@coreui/react'
import Table from 'src/components/table'

export default function Comments() {
  const [showChart, setShowChart] = useState(false)

  function handleChartClick() {
    setShowChart(true)
  }
  function handleReportsClick() {
    setShowChart(false)
  }
  return (
    <>
      <Table
        path="/reports/comments"
        showFilter={false}
        showDate={false}
        columns={[
          { name: 'ID', selector: (row) => row.id },
          { name: 'User Name', selector: (row) => row.username },
          { name: 'Comment', selector: (row) => row.comment },
          { name: 'Status', selector: (row) => row.published },
        ]}
        keys={['id', 'username', 'comment', 'published']}
      />
    </>
  )
}
