import React, { useRef, useState } from 'react'
import ActionButton from 'src/components/actionButton/actionButton'
import Table from 'src/components/table'

export default function Orders() {
  const tableRef = useRef()
  return (
    <>
      <div>
        <ActionButton name="All Orders" path="/all_orders" />
        <ActionButton name="Shipping" />
        <ActionButton name="Status" />
        <ActionButton name="Cancel" />
        <ActionButton name="Print" path="print" tableRef={tableRef} />
        <ActionButton name="Add Order" />
      </div>
      <Table
        path="/orders/all"
        showDate={false}
        showFilter={false}
        ref={tableRef}
        columns={[
          { name: 'ID', selector: (row) => row.id },
          { name: 'Type', selector: (row) => row.type },
          { name: 'User', selector: (row) => row.user_name },
          { name: 'Status', selector: (row) => row.status },
          { name: 'Order Number', selector: (row) => row.ordernumber },
        ]}
        keys={['id', 'type', 'user_name', 'status', 'ordernumber']}
      />
    </>
  )
}
