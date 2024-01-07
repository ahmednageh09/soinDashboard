import React, { useState } from 'react'
import { CButton } from '@coreui/react'
import Table from 'src/components/table'
import Chart from 'src/components/chart'
import Modal from 'src/components/modal'

export default function InactiveCustomers() {
  const [showChart, setShowChart] = useState(false)
  const [showModal, setShowModal] = useState(false)

  function handleChartClick() {
    setShowChart(true)
  }
  function handleReportsClick() {
    setShowChart(false)
    setShowModal(false)
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
            path="/reports/inactive_customers?type=chart"
            chartName="inactive_users_profit_chart"
          />
        </div>
      ) : (
        <Table
          path="/reports/inactive_customers"
          showFilter={false}
          showDate={false}
          columns={[
            { name: 'ID', selector: (row) => row.id },
            { name: 'Name', selector: (row) => row.name },
            { name: 'Email', selector: (row) => row.email },
            { name: 'Phone', selector: (row) => row.phone },
            {
              name: 'Last Purchased Dated',
              selector: (row) => new Date(row.last_purchased_date).toLocaleDateString(),
            },
          ]}
          keys={['id', 'name', 'email', 'phone', 'last_purchased_date']}
          showActions={true}
          buttonNames={['Details']}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
      {showModal && (
        <Modal show={true} handleClose={() => setShowModal(false)}>
          {/* Put the content of the modal here */}
        </Modal>
      )}
    </>
  )
}
