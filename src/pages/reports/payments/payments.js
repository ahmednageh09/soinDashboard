import React, { useState } from 'react'
import { CButton } from '@coreui/react'
import Table from 'src/components/table'
import Chart from 'src/components/chart'

export default function Payments() {
  const [showChart, setShowChart] = useState(false)

  function handleChartClick() {
    setShowChart(true)
  }
  function handleReportsClick() {
    setShowChart(false)
  }
  return (
    <>
      <div className="m-4">
        <CButton
          onClick={handleReportsClick}
          className="mx-2"
          color={!showChart ? 'info' : 'secondary'}
        >
          Reports
        </CButton>
        <CButton onClick={handleChartClick} color={showChart ? 'info' : 'secondary'}>
          Chart
        </CButton>
      </div>

      {showChart ? (
        <div className="d-flex justify-content-center align-content-center w-100">
          <Chart
            showPie={false}
            path="/reports/payments?type=chart"
            chartName="payments_profit_chart"
          />
        </div>
      ) : (
        <Table
          path="/reports/payments"
          showFilter={false}
          showDate={false}
          columns={[
            { name: 'Order Number', selector: (row) => row.order_number },
            { name: 'Payment Gate', selector: (row) => row.payment_gate },
            { name: 'Amount', selector: (row) => row.amount },
          ]}
          keys={['order_number', 'payment_gate', 'amount']}
        />
      )}
    </>
  )
}
