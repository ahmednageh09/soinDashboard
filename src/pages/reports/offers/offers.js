import React, { useState } from 'react'
import { CButton } from '@coreui/react'
import Table from 'src/components/table'
import Chart from 'src/components/chart'

export default function Offers() {
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
          <Chart showPie={false} path="/reports/offers?type=chart" chartName="" />
        </div>
      ) : (
        <Table
          path="/reports/offers"
          showFilter={false}
          showDate={false}
          columns={[
            { name: 'ID', selector: (row) => row.id },
            { name: 'Name', selector: (row) => row.name },
            { name: 'Email', selector: (row) => row.email },
            { name: 'Orders Count', selector: (row) => row.orders_count },
          ]}
          keys={['id', 'name', 'email', 'orders_count', 'invoices_numbers']}
        />
      )}
    </>
  )
}
