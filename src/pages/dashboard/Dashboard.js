import React from 'react'
import { CCard, CCardBody, CCol, CRow } from '@coreui/react'
import { CChartBar, CChartLine, CChartPie } from '@coreui/react-chartjs'
import { getStyle } from '@coreui/utils'
import Table from 'src/components/table'

const Dashboard = () => {
  return (
    <>
      <div className="row d-flex justify-content-evenly mb-4">
        <CCard className="mb-3 col-md-5 mh-200">
          <CCardBody>
            <CRow>
              <CCol sm={5}>
                <h4 id="traffic" className="card-title mb-0">
                  Store Statistics
                </h4>
                <div className="small text-medium-emphasis">January - July 2024</div>
              </CCol>
            </CRow>
            <div className="d-flex justify-content-center">
              <CChartPie
                data={{
                  labels: ['Products', 'Categories', 'Users', 'Others'],
                  datasets: [
                    {
                      data: [11, 16, 12, 8],
                      backgroundColor: ['#FF6384', '#4CC0C0', '#FFCE56', '#0000ff'],
                    },
                  ],
                }}
              />
            </div>
          </CCardBody>
        </CCard>

        <CCard className="mb-3 col-md-5">
          <CCardBody>
            <CRow>
              <CCol sm={5}>
                <h4 id="traffic" className="card-title mb-0">
                  Orders
                </h4>
                <div className="small text-medium-emphasis">January - July 2024</div>
              </CCol>
            </CRow>
            <div className="d-flex justify-content-center">
              <CChartPie
                data={{
                  labels: ['Products', 'Categories', 'Users', 'Others'],
                  datasets: [
                    {
                      data: [11, 16, 12, 8],
                      backgroundColor: ['#FF6384', '#4CC0C0', '#FFCE56', '#0000ff'],
                    },
                  ],
                }}
              />
            </div>
          </CCardBody>
        </CCard>

        <CCard className="mb-3 col-md-5">
          <CCardBody>
            <CRow>
              <CCol sm={5}>
                <h4 id="traffic" className="card-title mb-0">
                  ABANDONED CARTS CHART
                </h4>
                <div className="small text-medium-emphasis">January - July 2024</div>
              </CCol>
            </CRow>
            <CChartBar
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                  {
                    label: 'GitHub Commits',
                    backgroundColor: '#f87979',
                    data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
                  },
                ],
              }}
              labels="months"
              options={{
                plugins: {
                  legend: {
                    labels: {
                      color: getStyle('--cui-body-color'),
                    },
                  },
                },
                scales: {
                  x: {
                    grid: {
                      color: getStyle('--cui-border-color-translucent'),
                    },
                    ticks: {
                      color: getStyle('--cui-body-color'),
                    },
                  },
                  y: {
                    grid: {
                      color: getStyle('--cui-border-color-translucent'),
                    },
                    ticks: {
                      color: getStyle('--cui-body-color'),
                    },
                  },
                },
              }}
            />
          </CCardBody>
        </CCard>

        <CCard className="mb-3 col-md-5">
          <CCardBody>
            <CRow>
              <CCol sm={5}>
                <h4 id="traffic" className="card-title mb-0">
                  Profits
                </h4>
                <div className="small text-medium-emphasis">January - July 2024</div>
              </CCol>
            </CRow>
            <CChartBar
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                  {
                    label: 'GitHub Commits',
                    backgroundColor: '#f87979',
                    data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
                  },
                ],
              }}
              labels="months"
              options={{
                plugins: {
                  legend: {
                    labels: {
                      color: getStyle('--cui-body-color'),
                    },
                  },
                },
                scales: {
                  x: {
                    grid: {
                      color: getStyle('--cui-border-color-translucent'),
                    },
                    ticks: {
                      color: getStyle('--cui-body-color'),
                    },
                  },
                  y: {
                    grid: {
                      color: getStyle('--cui-border-color-translucent'),
                    },
                    ticks: {
                      color: getStyle('--cui-body-color'),
                    },
                  },
                },
              }}
            />
          </CCardBody>
        </CCard>

        <CCard className="mb-3 col-md-5">
          <CCardBody>
            <CRow>
              <CCol sm={5}>
                <h4 id="traffic" className="card-title mb-0">
                  Visists
                </h4>
                <div className="small text-medium-emphasis">January - July 2024</div>
              </CCol>
            </CRow>
            <CChartLine
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                  {
                    label: 'My First dataset',
                    backgroundColor: 'rgba(220, 220, 220, 0.2)',
                    borderColor: 'rgba(220, 220, 220, 1)',
                    pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                    pointBorderColor: '#fff',
                    data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
                  },
                  {
                    label: 'My Second dataset',
                    backgroundColor: 'rgba(151, 187, 205, 0.2)',
                    borderColor: 'rgba(151, 187, 205, 1)',
                    pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                    pointBorderColor: '#fff',
                    data: [50, 12, 28, 29, 7, 25, 12, 70, 60],
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    labels: {
                      color: getStyle('--cui-body-color'),
                    },
                  },
                },
                scales: {
                  x: {
                    grid: {
                      color: getStyle('--cui-border-color-translucent'),
                    },
                    ticks: {
                      color: getStyle('--cui-body-color'),
                    },
                  },
                  y: {
                    grid: {
                      color: getStyle('--cui-border-color-translucent'),
                    },
                    ticks: {
                      color: getStyle('--cui-body-color'),
                    },
                  },
                },
              }}
            />
          </CCardBody>
        </CCard>

        <CCard className="mb-3 col-md-5">
          <CCardBody>
            <CRow>
              <CCol sm={5}>
                <h4 id="traffic" className="card-title mb-0">
                  Shipping Fee
                </h4>
                <div className="small text-medium-emphasis">January - July 2024</div>
              </CCol>
            </CRow>
            <CChartBar
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                  {
                    label: 'GitHub Commits',
                    backgroundColor: '#f87979',
                    data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
                  },
                ],
              }}
              labels="months"
              options={{
                plugins: {
                  legend: {
                    labels: {
                      color: getStyle('--cui-body-color'),
                    },
                  },
                },
                scales: {
                  x: {
                    grid: {
                      color: getStyle('--cui-border-color-translucent'),
                    },
                    ticks: {
                      color: getStyle('--cui-body-color'),
                    },
                  },
                  y: {
                    grid: {
                      color: getStyle('--cui-border-color-translucent'),
                    },
                    ticks: {
                      color: getStyle('--cui-body-color'),
                    },
                  },
                },
              }}
            />
          </CCardBody>
        </CCard>

        <CCard className="mb-3 col-md-5 h-25">
          <CCardBody>
            <CRow>
              <CCol sm={5}>
                <h4 id="traffic" className="card-title mb-0">
                  TAX AMOUNTS
                </h4>
                <div className="small text-medium-emphasis">January - July 2024</div>
              </CCol>
            </CRow>
            <CChartBar
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                  {
                    label: 'GitHub Commits',
                    backgroundColor: '#f87979',
                    data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
                  },
                ],
              }}
              labels="months"
              options={{
                plugins: {
                  legend: {
                    labels: {
                      color: getStyle('--cui-body-color'),
                    },
                  },
                },
                scales: {
                  x: {
                    grid: {
                      color: getStyle('--cui-border-color-translucent'),
                    },
                    ticks: {
                      color: getStyle('--cui-body-color'),
                    },
                  },
                  y: {
                    grid: {
                      color: getStyle('--cui-border-color-translucent'),
                    },
                    ticks: {
                      color: getStyle('--cui-body-color'),
                    },
                  },
                },
              }}
            />
          </CCardBody>
        </CCard>

        <CCard className="mb-3 col-md-5">
          <Table />
        </CCard>
        <CCard className="mb-3 col-md-5">
          <Table showFilter={false} />
        </CCard>
        <CCard className="mb-3 col-md-5">
          <Table showDate={false} />
        </CCard>
      </div>
    </>
  )
}

export default Dashboard
