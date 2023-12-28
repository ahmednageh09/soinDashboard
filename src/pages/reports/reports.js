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
            <ReportCard path="/reports/products_prices" title={'products_prices'} />
            <ReportCard path="/reports/affiliateSystem" title={'affiliateSystem'} />
            <ReportCard path="/reports/customers_balances" title={'customers_balances'} />
            <ReportCard path="/reports/log" title={'log'} />
            <ReportCard path="/reports/customers_orders" title={'customers_orders'} />
            <ReportCard path="/reports/" title={'sadsf'} />
            <ReportCard path="/reports/" title={'sadsf'} />
            <ReportCard path="/reports/" title={'sadsf'} />
            <ReportCard path="/reports/" title={'sadsf'} />
            <ReportCard path="/reports/" title={'sadsf'} />
            <ReportCard path="/reports/" title={'sadsf'} />
            <ReportCard path="/reports/" title={'sadsf'} />
            <ReportCard path="/reports/" title={'sadsf'} />
            <ReportCard path="/reports/" title={'sadsf'} />
            <ReportCard path="/reports/" title={'sadsf'} />
            <ReportCard path="/reports/" title={'sadsf'} />
            <ReportCard path="/reports/" title={'sadsf'} />
            <ReportCard path="/reports/" title={'sadsf'} />
            <ReportCard path="/reports/" title={'sadsf'} />
            <ReportCard path="/reports/" title={'sadsf'} />
            <ReportCard path="/reports/" title={'sadsf'} />
            <ReportCard path="/reports/" title={'sadsf'} />
            <ReportCard path="/reports/" title={'sadsf'} />
          </div>
        )}
      </div>
    </>
  )
}
