import React, { useState } from 'react'
import { CButton } from '@coreui/react'
import Table from 'src/components/table'
import Chart from 'src/components/chart'

export default function CustomersOrders() {
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
          <Chart
            showPie={false}
            path="/reports/customers_orders?type=chart"
            chartName="user_orders_chart"
          />
        </div>
      ) : (
        <Table
          path="/reports/customers_orders"
          showFilter={false}
          showDate={false}
          columns={[
            { name: 'ID', selector: (row) => row.id },
            { name: 'Name', selector: (row) => row.name },
            { name: 'Email', selector: (row) => row.email },
            { name: 'Orders Count', selector: (row) => row.orders_count },
            {
              name: 'Invoices Numbers',
              selector: (row) => row.invoices_numbers.join(' - '),
              style: { width: '200px' },
            },
          ]}
          keys={['id', 'name', 'email', 'orders_count', 'invoices_numbers']}
        />
      )}
    </>
  )
}
