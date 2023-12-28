import React from 'react'
import Table from 'src/components/table'

export default function CustomersOrders() {
  return (
    <>
      <Table
        path="/reports/customers_orders"
        showFilter={false}
        showDate={false}
        columns={[
          { name: 'ID', selector: (row) => row.id },
          { name: 'Name', selector: (row) => row.name },
          { name: 'Email', selector: (row) => row.email },
          { name: 'Title', selector: (row) => row.orders_count },
          { name: 'Balance', selector: (row) => row.invoices_numbers },
        ]}
        keys={['id', 'name', 'email', 'title', 'balance']}
      />
    </>
  )
}
