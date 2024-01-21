import React from 'react'
import Table from 'src/components/table'

export default function Customers() {
  return (
    <>
      <Table
        path="/customers"
        showDate={false}
        showFilter={false}
        columns={[
          { name: 'ID', selector: (row) => row.id },
          { name: 'User Image', selector: (row) => <img src={row.image} alt="User" /> },
          { name: 'Status', selector: (row) => row.status },
          { name: 'Phone Verified', selector: (row) => row.phone_verified_at },
          { name: 'is_blocked', selector: (row) => row.is_blocked },
        ]}
        keys={['id', 'image', 'status', 'phone_verified_at', 'is_blocked']}
        showActions={true}
        buttonNames={['Add User To Group']}
      />
    </>
  )
}
