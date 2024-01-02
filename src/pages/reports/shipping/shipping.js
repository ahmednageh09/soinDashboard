import React, { useState } from 'react'
import { CButton } from '@coreui/react'
import Table from 'src/components/table'
import Chart from 'src/components/chart'

export default function Shipping() {
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
        <CButton onClick={handleReportsClick} className="mx-2" color="secondary">
          Reports
        </CButton>
        <CButton onClick={handleChartClick} color="info">
          Chart
        </CButton>
      </div>

      {showChart ? (
        <div className="d-flex justify-content-center align-content-center w-100">
          <Chart showPie={false} path="/reports/shipping?type=chart" chartName="shipping_chart" />
        </div>
      ) : (
        <Table
          path="/reports/shipping"
          showFilter={false}
          showDate={false}
          columns={[
            { name: 'ID', selector: (row) => row.id },
            { name: 'Order.No', selector: (row) => row.order_number },
            { name: 'Shipping Cost', selector: (row) => row.shipping_cost },
            { name: 'Shipping Cost On', selector: (row) => row.shipping_cost_on },
            { name: 'Reason', selector: (row) => row.shipping_cost_on_reason },
            {
              name: 'Order Date',
              selector: (row) => new Date(row.order_date).toLocaleDateString(),
            },
            {
              name: 'Shipping Date',
              selector: (row) => new Date(row.shipping_date).toLocaleDateString(),
            },
          ]}
          keys={[
            'id',
            'order_number',
            'shipping_cost',
            'shipping_cost_on',
            'shipping_cost_on_reason',
            'order_date',
            'shipping_date',
          ]}
        />
      )}
    </>
  )
}
