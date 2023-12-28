import React from 'react'
import Table from 'src/components/table'

export default function Affiliate() {
  return (
    <>
      <Table
        path="/reports/affiliateSystem"
        showFilter={false}
        showDate={false}
        columns={[
          { name: 'ID', selector: (row) => row.id },
          { name: 'Name', selector: (row) => row.name },
          { name: 'Balance', selector: (row) => row.balance },
          { name: 'Products Count', selector: (row) => row.products_count },
          { name: 'Sales', selector: (row) => row.sales },
        ]}
        keys={['id', 'name', 'balance', 'products_count', 'sales']}
      />
    </>
  )
}
