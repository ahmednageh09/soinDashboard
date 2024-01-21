import React, { useState } from 'react'
import { CButton } from '@coreui/react'
import Table from 'src/components/table'
import Chart from 'src/components/chart'

export default function ProductsVisits() {
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
            path="/reports/products_visits?type=chart"
            chartName="products_visits_profit_chart"
          />
        </div>
      ) : (
        <Table
          path="/reports/products_visits"
          showFilter={false}
          showDate={false}
          columns={[
            { name: 'ID', selector: (row) => row.id },
            { name: 'Product', selector: (row) => row.title },
            { name: 'Visits Count', selector: (row) => row.visits_count },
            { name: 'Percent', selector: (row) => row.percent },
          ]}
          keys={['id', 'title', 'visits_count', 'percent']}
        />
      )}
    </>
  )
}
