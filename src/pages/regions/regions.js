import React from 'react'
import ActionButton from 'src/components/actionButton/actionButton'
import Table from 'src/components/table'

export default function Regions() {
  return (
    <>
      <ActionButton name="Add New Region" path="/newRegion" />
      <Table
        path="/regions"
        showDate={false}
        showFilter={false}
        columns={[
          { name: 'ID', selector: (row) => row.id },
          { name: 'Region Name', selector: (row) => row.region_name },
          { name: 'City Name', selector: (row) => row.city_name },
          { name: 'Created At', selector: (row) => new Date(row.created_at).toLocaleDateString() },
        ]}
        keys={['id', 'region_name', 'city_name', 'created_at']}
        showActions={true}
        buttonNames={['Edit', 'Delete', 'Show Cities', 'Language']}
      />
    </>
  )
}
