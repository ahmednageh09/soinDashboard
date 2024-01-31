import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Table from 'src/components/table'
import { CButton } from '@coreui/react'
// import { useReactToPrint } from 'react-to-print'

export default function Financial() {
  const navigate = useNavigate()
  // const tableRef = useRef()
  // const handlePrint = useReactToPrint({
  //   content: () => tableRef.current,
  // })

  return (
    <>
      {/* <CButton onClick={handlePrint}>Print this!</CButton> */}
      <Table
        // ref={tableRef}
        path="/orders/financial_transactions"
        keys={['id', 'user_name', 'payment_method_type', 'payment_paid_type', 'total', 'status']}
        showDate={false}
        showFilter={false}
        showActions={true}
        buttonNames={['Show']}
        actions={[(id) => navigate(`/orders/financial_transactions/details/${id}`)]}
        columns={[
          { name: 'Transaction ID', selector: (row) => row.id },
          { name: 'User', selector: (row) => row.user_name },
          { name: 'Payment Method', selector: (row) => row.payment_method_type },
          { name: 'Payment Type', selector: (row) => row.payment_paid_type },
          { name: 'Total', selector: (row) => row.total },
          { name: 'Status', selector: (row) => row.status },
        ]}
      />
    </>
  )
}
