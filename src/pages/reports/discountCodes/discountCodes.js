import React from 'react'
import Table from '../../../components/table'

export default function DiscountCodes() {
  return (
    <>
      <Table
        path="/reports/discount"
        showFilter={false}
        showDate={false}
        columns={[
          { name: 'ID', selector: (row) => row.id },
          { name: 'Title', selector: (row) => row.title },
          { name: 'Discount Code', selector: (row) => row.discount_code },
          { name: 'Type', selector: (row) => row.type },
          { name: 'Number Of Usage', selector: (row) => row.used_times },
        ]}
        keys={['id', 'title', 'discount_code', 'type', 'used_times']}
      />
    </>
  )
}
