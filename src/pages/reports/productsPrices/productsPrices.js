import React, { useState } from 'react'
import { CButton } from '@coreui/react'
import Table from '../../../components/table'
import Chart from '../../../components/chart'

export default function ProductsPrices() {
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
            path="/reports/products_prices?type=chart"
            chartName="products_prices_chart"
          />
        </div>
      ) : (
        <Table
          path="/reports/products_prices"
          showFilter={false}
          showDate={false}
          columns={[
            { name: 'ID', selector: (row) => row.id },
            { name: 'Name', selector: (row) => row.title },
            { name: 'Price', selector: (row) => row.price },
            { name: 'Cost', selector: (row) => row.cost },
            { name: 'Profit', selector: (row) => row.profit },
          ]}
          keys={['id', 'title', 'price', 'cost', 'profit']}
        />
      )}
    </>
  )
}
