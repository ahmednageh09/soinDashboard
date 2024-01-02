import React from 'react'
import ActionButton from 'src/components/actionButton/actionButton'
import Table from 'src/components/table'

export default function Countries() {
  return (
    <>
      <ActionButton name="Add New Country" path="/newCountry" />
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
        showActions={true}
        buttonNames={['Edit', 'Delete', 'Show Cities', 'Language']}
      />
    </>
  )
}
