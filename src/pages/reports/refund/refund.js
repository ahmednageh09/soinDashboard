import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CButton } from '@coreui/react'
import Table from 'src/components/table'
import Chart from 'src/components/chart'

export default function Refund() {
  const [showChart, setShowChart] = useState(false)
  const navigate = useNavigate()

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
          <Chart path="/reports/refund?type=chart" chartName="refund_chart" />
        </div>
      ) : (
        <Table
          path="/reports/refund"
          showFilter={false}
          showDate={false}
          columns={[
            { name: 'ID', selector: (row) => row.id },
            { name: 'Product', selector: (row) => row.product },
            { name: 'Refund Reason', selector: (row) => row.refund_reason },
            { name: 'Refund Amount', selector: (row) => row.refund_amount },
            { name: 'Cost On', selector: (row) => row.cost_on },
            {
              name: 'Refund Date',
              selector: (row) => new Date(row.refund_date).toLocaleDateString(),
            },
            {
              name: 'Order Date',
              selector: (row) => new Date(row.created_at).toLocaleDateString(),
            },
          ]}
          keys={[
            'id',
            'product',
            'refund_reason',
            'refund_amount',
            'cost_on',
            'refund_date',
            'created_at',
          ]}
          showActions={true}
          buttonNames={['Details']}
          actions={[(id) => navigate(`/reports/refund/${id}`)]}
        />
      )}
    </>
  )
}
