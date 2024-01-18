import React, { useState } from 'react'
import { CButton } from '@coreui/react'
import ReportCard from 'src/components/sidebar/reportCard/reportCard'
import Google from './googleAnalytics/google'

export default function Reports() {
  const [showGoogle, setShowGoogle] = useState(false)

  function handleGoogleClick() {
    setShowGoogle(true)
  }
  function handleReportsClick() {
    setShowGoogle(false)
  }

  return (
    <>
      <div className="m-4">
        <CButton onClick={handleReportsClick} className="mx-2" color="secondary">
          Reports
        </CButton>
        <CButton onClick={handleGoogleClick} color="info">
          Google Analytics
        </CButton>
      </div>
      <div>
        {showGoogle ? (
          <Google path={'/reports/google'} />
        ) : (
          <div className="row d-flex justify-content-evenly">
            <ReportCard path="/reports/products_prices" title={'Products Prices'} />
            <ReportCard path="/reports/affiliateSystem" title={'Affiliate System'} />
            <ReportCard path="/reports/customers_balances" title={'Customers Balances'} />
            <ReportCard path="/reports/log" title={'Customers log'} />
            <ReportCard path="/reports/customers_orders" title={'Customers Orders'} />
            <ReportCard path="/reports/customers_search" title={'Customers Search'} />
            <ReportCard path="/reports/rewards_points" title={'Rewards Points'} />
            <ReportCard path="/reports/taxes" title={'Taxes'} />
            <ReportCard path="/reports/shipping" title={'Shipping'} />
            <ReportCard path="/reports/refund" title={'Refund'} />
            <ReportCard path="/reports/sales" title={'Sales'} />
            <ReportCard path="/reports/discount" title={'Discount Codes'} />
            <ReportCard path="/reports/products_visits" title={'Products Visits'} />
            <ReportCard path="/reports/products_purchased" title={'Products Purchased'} />
            <ReportCard path="/reports/abandoned_carts" title={'Abandoned Carts'} />
            <ReportCard path="/reports/inactive_customers" title={'Inactive Customers'} />
            <ReportCard path="/reports/stock" title={'Stock'} />
            <ReportCard path="/reports/new_products" title={'New Products'} />
            <ReportCard path="/reports/comments" title={'Comments'} />
            <ReportCard path="/reports/payments" title={'Payments'} />
            <ReportCard path="/reports/fav_products" title={'Fav Products'} />
            <ReportCard path="/reports/offers" title={'Offers'} />
          </div>
        )}
      </div>
    </>
  )
}
