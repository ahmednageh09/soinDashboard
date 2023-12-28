import React from 'react'
import Table from 'src/components/table'

export default function CustomersBalances() {
  return (
    <>
      <Table
        path="/reports/customers_balances"
        showFilter={false}
        showDate={false}
        columns={[
          { name: 'ID', selector: (row) => row.id },
          { name: 'Name', selector: (row) => row.name },
          { name: 'Email', selector: (row) => row.email },
          { name: 'Title', selector: (row) => row.title },
          { name: 'Balance', selector: (row) => row.balance },
        ]}
        keys={['id', 'name', 'email', 'title', 'balance']}
      />
    </>
  )
}
