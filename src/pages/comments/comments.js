import React from 'react'
import Table from 'src/components/table'

export default function Comments() {
  return (
    <>
      <Table
        path="/comments"
        showDate={false}
        showFilter={false}
        columns={[
          { name: 'ID', selector: (row) => row.id },
          { name: 'User Name', selector: (row) => row.username },
          { name: 'Comment', selector: (row) => row.comment },
          { name: 'Approve', selector: (row) => row.published },
        ]}
        keys={['id', 'username', 'comment', 'published']}
        showActions={true}
        buttonNames={['Replay', 'Edit', 'Delete']}
      />
    </>
  )
}
