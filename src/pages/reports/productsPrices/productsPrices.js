import React from 'react'
import Table from 'src/components/table'

export default function ProductsPrices() {
  return (
    <>
      <Table
        path="/reports/products_prices"
        showFilter={false}
        showDate={false}
        columns={[
          { name: 'ID', selector: (row) => row.id },
          { name: 'Name', selector: (row) => row.title },
          { name: 'Price', selector: (row) => row.price },
          { name: 'Cost', selector: (row) => row.cost },
          { name: 'Profit', selector: (row) => row.profit },
        ]}
        keys={['id', 'title', 'price', 'cost', 'profit']}
      />
    </>
  )
}
