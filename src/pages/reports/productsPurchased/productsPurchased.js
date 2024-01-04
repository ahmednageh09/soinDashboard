import React, { useState } from 'react'
import { CButton } from '@coreui/react'
import Table from 'src/components/table'
import Chart from 'src/components/chart'

export default function ProductsPurchased() {
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
            path="/reports/products_purchased?type=chart"
            chartName="products_profit_chart"
          />
        </div>
      ) : (
        <Table
          path="/reports/products_purchased"
          showFilter={false}
          showDate={false}
          columns={[
            { name: 'ID', selector: (row) => row.id },
            { name: 'Product', selector: (row) => row.title },
            { name: 'Type', selector: (row) => row.type },
            { name: 'Purchased Count', selector: (row) => row.purchased_count },
            { name: 'Total Sales', selector: (row) => row.sales_total },
          ]}
          keys={['id', 'title', 'type', 'purchased_count', 'sales_total']}
          showActions={true}
          buttonNames={['Details']}
          buttonPath="/reports/products_purchased"
        />
      )}
    </>
  )
}
