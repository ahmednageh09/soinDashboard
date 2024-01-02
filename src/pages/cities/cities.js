import React from 'react'
import ActionButton from 'src/components/actionButton/actionButton'
import Table from 'src/components/table'

export default function Cities() {
  return (
    <>
      <ActionButton name="Add New City" path="/newCity" />
      <Table
        path="/cities"
        showDate={false}
        showFilter={false}
        columns={[
          { name: 'ID', selector: (row) => row.id },
          { name: 'City', selector: (row) => row.title },
          { name: 'Country', selector: (row) => row.country },
          { name: 'Created At', selector: (row) => row.created_at },
        ]}
        keys={['id', 'title', 'country', 'created_at']}
        showActions={true}
        buttonNames={['Edit', 'Delete', 'Show Cities', 'Language']}
      />
    </>
  )
}
