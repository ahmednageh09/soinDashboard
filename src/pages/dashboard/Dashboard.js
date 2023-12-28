import React from 'react'
import { CCol } from '@coreui/react'
import Table from 'src/components/table'
import Card from 'src/components/card'
import Chart from 'src/components/chart'

const Dashboard = () => {
  return (
    <>
      <div className="row d-flex justify-content-evenly h-50">
        <Card indices={['total', 'products']} path={'/charts'} />
      </div>

      {/* Charts */}
      <div className="row d-flex justify-content-evenly mb-4">
        <div className="row d-flex justify-content-evenly mb-4">
          <Chart chartName="store_statistics_chart" />
          <Chart chartName="orders_chart" />
          <Chart chartName="abandoned_carts_chart" showPie={false} />
          <Chart chartName="profit_chart" showPie={false} />
          <Chart chartName="shipping_fee_chart" showPie={false} />
          <Chart chartName="store_visits_chart" showPie={false} />
          <Chart chartName="tax_amount_chart" showPie={false} />
        </div>

        {/* <CCard className="mb-3 col-md-5 h-100">
          <CCardBody>
            <CRow>
              <CCol sm={5}>
                <h4 id="traffic" className="card-title mb-0">
                  ABANDON
                </h4>
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
        </CCard> */}

        {/* Tables */}
        <CCol md={5} style={{ height: '100%', overflow: 'auto', marginBottom: '2rem' }}>
          <Table
            style={{ width: '100%', height: '100%' }}
            path="/salesSearch"
            showFilter={false}
            columns={[
              { name: 'ID', selector: (row) => row.id },
              { name: 'Day', selector: (row) => row.day },
              { name: 'Products Count', selector: (row) => row.products_count },
              { name: 'Total', selector: (row) => row.total },
            ]}
            keys={['id', 'day', 'products_count', 'total']}
          />
        </CCol>
        <CCol md={5} style={{ height: '100%', overflow: 'auto', marginBottom: '2rem' }}>
          <Table
            style={{ width: '100%', height: '100%' }}
            path="/lastOrders"
            showFilter={false}
            columns={[
              { name: 'ID', selector: (row) => row.id },
              { name: 'Order.No', selector: (row) => row.ordernumber },
              { name: 'Products Count', selector: (row) => row.products_count },
              { name: 'Total', selector: (row) => row.total },
              { name: 'Status', selector: (row) => row.status },
            ]}
            keys={['id', 'ordernumber', 'products_count', 'total', 'status']}
          />
        </CCol>
        <CCol md={5} style={{ height: '100%', overflow: 'auto', marginBottom: '2rem' }}>
          <Table
            style={{ width: '100%', height: '100%' }}
            path="/wordsSearch"
            showDate={false}
            showFilter={false}
            columns={[
              { name: 'ID', selector: (row) => row.id },
              { name: 'Word Search', selector: (row) => row.word },
              { name: 'No.times Searched', selector: (row) => row.words_total },
              { name: 'Date', selector: (row) => row.day },
            ]}
            keys={['id', 'word', 'words_total', 'day']}
          />
        </CCol>
        <CCol md={5} style={{ height: '100%', overflow: 'auto', marginBottom: '2rem' }}>
          <Table
            style={{ width: '100%', height: '100%' }}
            path="/wordsSearch?type=last_words_search"
            showDate={false}
            showFilter={false}
            columns={[
              { name: 'ID', selector: (row) => row.id },
              { name: 'Word Search', selector: (row) => row.word },
              { name: 'No.times Searched', selector: (row) => row.words_total },
              { name: 'Date', selector: (row) => row.day },
            ]}
            keys={['id', 'word', 'words_total', 'day']}
          />
        </CCol>
        <CCol md={5} style={{ height: '100%', overflow: 'auto', marginBottom: '2rem' }}>
          <Table
            style={{ width: '100%', height: '100%' }}
            path="/soldProducts"
            showFilter={false}
            columns={[
              { name: 'ID', selector: (row) => row.id },
              { name: 'Product ID', selector: (row) => row.product_id },
              { name: 'No.Products', selector: (row) => row.count },
              { name: 'Price', selector: (row) => row.price },
              { name: 'Date', selector: (row) => row.day },
            ]}
            keys={['id', 'product_id', 'count', 'price', 'day']}
          />
        </CCol>
        <CCol md={5} style={{ height: '100%', overflow: 'auto', marginBottom: '2rem' }}>
          <Table
            style={{ width: '100%', height: '100%' }}
            path="/bestSellingProducts"
            //make two filters by country and by city
            showDate={false}
            columns={[
              { name: 'ID', selector: (row) => row.id },
              { name: 'Product Name', selector: (row) => row.product_name },
              { name: 'Product Count', selector: (row) => row.products_count },
              { name: 'Total Pieces', selector: (row) => row.total_pieces },
              { name: 'Date', selector: (row) => row.day },
            ]}
            keys={['id', 'product_name', 'products_count', 'total_pieces', 'day']}
          />
        </CCol>
        <CCol md={5} style={{ height: '100%', overflow: 'auto', marginBottom: '2rem' }}>
          <Table
            style={{ width: '100%', height: '100%' }}
            path="/ordersFilterByStatus"
            showDate={false}
            columns={[
              { name: 'ID', selector: (row) => row.id },
              { name: 'Order.No', selector: (row) => row.ordernumber },
              { name: 'Products Count', selector: (row) => row.products_count },
              { name: 'Total', selector: (row) => row.total },
              { name: 'Status', selector: (row) => row.status },
              { name: 'Date', selector: (row) => row.day },
            ]}
            keys={['id', 'ordernumber', 'products_count', 'total', 'status', 'day']}
          />
        </CCol>
        <CCol md={5} style={{ height: '100%', overflow: 'auto', marginBottom: '2rem' }}>
          <Table
            style={{ width: '100%', height: '100%' }}
            path="/mostViewedProducts"
            showFilter={false}
            columns={[
              { name: 'ID', selector: (row) => row.id },
              { name: 'Product Name', selector: (row) => row.product_name },
              { name: 'Views', selector: (row) => row.product_visits },
              { name: 'Date', selector: (row) => row.day },
            ]}
            keys={['id', 'product_name', 'product_visits', 'day']}
          />
        </CCol>
        <CCol md={5} style={{ height: '100%', overflow: 'auto', marginBottom: '2rem' }}>
          <Table
            style={{ width: '100%', height: '100%' }}
            path="/avg/sales"
            showDate={false}
            showFilter={false}
            columns={[
              { name: 'Name', selector: (row) => row.name },
              { name: 'Toatal Purchases Amount', selector: (row) => row.total },
              { name: 'Sales Count', selector: (row) => row.orders_count },
              { name: 'average Purchases Amount', selector: (row) => row.average },
            ]}
            keys={['name', 'total', 'orders_count', 'average']}
          />
        </CCol>
      </div>
    </>
  )
}

export default Dashboard
