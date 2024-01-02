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
      <Table path="/orders/all" showDate={false} showFilter={false} ref={tableRef} />
    </>
  )
}

// import React, { useRef } from 'react'
// import ActionButton from 'src/components/actionButton/actionButton'
// import Table from 'src/components/table'
// import ReactToPrint from 'react-to-print'

// export default function Orders() {
//   const tableRef = useRef()

//   return (
//     <>
//       <div>
//         <ActionButton name="All Orders" path="/all_orders" />
//         <ActionButton name="Shipping" />
//         <ActionButton name="Status" />
//         <ActionButton name="Cancel" />
//         <ReactToPrint
//           trigger={() => <ActionButton name="Print" action="print" />}
//           content={() => tableRef.current}
//         />
//         <ActionButton name="Add Order" />
//       </div>
//       <Table path="/orders/all" showDate={false} showFilter={false} ref={tableRef} />
//     </>
//   )
// }
