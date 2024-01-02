import React from 'react'
import { useLocation } from 'react-router-dom'
import FinancialCard from 'src/components/financialCard'

export default function FinancialDetails() {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const transactionId = searchParams.get('id')

  return (
    <>
      <FinancialCard
        path={`/orders/online/show/${transactionId}`}
        indices={['transaction', 'order', 'user', 'transaction_type']}
      />
    </>
  )
}
