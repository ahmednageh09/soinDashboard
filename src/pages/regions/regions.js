import React from 'react'
import Table from 'src/components/table'

export default function Regions() {
  return (
    <>
      <Table
        path="/regions"
        showDate={false}
        showFilter={false}
        columns={[
          { name: 'ID', selector: (row) => row.id },
          { name: 'Region Name', selector: (row) => row.region_name },
          { name: 'City Name', selector: (row) => row.city_name },
          { name: 'Created At', selector: (row) => row.created_at },
          //options
        ]}
        keys={['id', 'region_name', 'city_name', 'created_at']}
      />
    </>
  )
}
