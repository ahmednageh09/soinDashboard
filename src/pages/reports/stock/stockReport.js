import React, { useState } from 'react'
import { CButton } from '@coreui/react'
import Table from 'src/components/table'
import Chart from 'src/components/chart'

export default function Stock() {
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
          <Chart showPie={false} path="/reports/stock?type=chart" chartName="stock_profit_chart" />
        </div>
      ) : (
        <Table
          path="/reports/stock"
          showFilter={false}
          showDate={false}
          columns={[
            { name: 'ID', selector: (row) => row.id },
            { name: 'Name', selector: (row) => row.title },
            { name: 'Category', selector: (row) => row.category },
            { name: 'Type', selector: (row) => row.type },
            { name: 'Stock', selector: (row) => row.stock },
            { name: 'Max. Count', selector: (row) => row.max_count },
          ]}
          keys={['id', 'title', 'category', 'type', 'stock', 'max_count']}
        />
      )}
    </>
  )
}
